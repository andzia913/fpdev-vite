import { useEffect, useState } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { calculatePrice, formatPrice } from "../utils/utils";

const FlatEditor = () => {
  const [flats, setFlats] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [mode, setMode] = useState<"single" | "bulk">("single");

  // SINGLE
  const [selectedId, setSelectedId] = useState("");

  // BULK
  const [levelFilter, setLevelFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // COMMON
  const [priceMeter, setPriceMeter] = useState("");
  const [priceFlat, setPriceFlat] = useState("");
  const [status, setStatus] = useState("");
  const [roundMode, setRoundMode] = useState<"none" | "100" | "1000" | "10000">("none"); 
  const [search, setSearch] = useState("");
  const [isOpenSuggestion, setIsOpenSuggestion] = useState(false); 
  // 🔥 LOAD
  const load = async () => {
    const snapshot = await getDocs(collection(db, "mieszkania"));
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setFlats(data);
  };

  useEffect(() => {
    load();
  }, []);

  // 🔥 TARGETY
  const getTargets = () => {
    if (mode === "single") {
      return flats.filter((f) => f.numberOfFlat === selectedId);
    }

    return flats.filter((f) => {
      if (levelFilter && String(f.level) !== levelFilter) return false;
      if (statusFilter && f.statute !== statusFilter) return false;
      return true;
    });
  };

  // 🔥 PREVIEW
  const targets = getTargets();

  const preview = targets.map((f) => {
  const surface = Number(f.surface) || 0;

  const meter = priceMeter
    ? Number(priceMeter)
    : Number(f.priceOfMeter);

  const total = calculatePrice(surface, meter, roundMode);

  return {
    id: f.numberOfFlat,
    priceMeter: meter,
    priceFlat: total,
    status: status || f.statute,
    surface,
  };
});

  // 🔥 APPLY
  const apply = async () => {
    if (targets.length === 0) {
      setError("Brak mieszkań do zmiany");
      return;
    }

    if (!priceMeter && !priceFlat && !status) {
      setError("Podaj zmianę ceny lub statusu");
      return;
    }

    try {
      setLoading(true);

      await Promise.all(
        targets.map((f) => {
          const surface = Number(f.surface) || 0;

          const meter = priceMeter
            ? Number(priceMeter)
            : Number(f.priceOfMeter);

          const total = calculatePrice(surface, meter, roundMode);

          return updateDoc(doc(db, "mieszkania", f.numberOfFlat), {
            ...(priceMeter && { priceOfMeter: meter }),
            ...(priceMeter && { priceOfFlat: total }), // 🔥 KLUCZOWE
            ...(status && { statute: status }),
          });
        })
      );

      await load();

      // RESET
      setSelectedId("");
      setLevelFilter("");
      setStatusFilter("");
      setPriceMeter("");
      setPriceFlat("");
      setStatus("");
      setError("");

      setSuccess(true);

    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(false), 2500);
    }
  };
const parseFlatNumber = (val: string) => {
  const match = val.match(/M(\d+)([A-Z]?)/i);

  if (!match) return { num: 0, letter: "" };

  return {
    num: Number(match[1]),
    letter: match[2] || "",
  };
};

const sortedPreview = [...preview].sort((a, b) => {
  const aParsed = parseFlatNumber(a.id);
  const bParsed = parseFlatNumber(b.id);

  if (aParsed.num !== bParsed.num) {
    return aParsed.num - bParsed.num;
  }

  return aParsed.letter.localeCompare(bParsed.letter);
});
  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-6 relative">

      {/* LOADER */}
      {loading && (
        <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-10">
          <div className="w-6 h-6 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
        </div>
      )}

      <h3 className="text-lg font-semibold">Mieszkania — edycja</h3>

      {/* TRYB */}
      <div className="flex gap-2">
        {["single", "bulk"].map((m) => (
          <button
            key={m}
            onClick={() => setMode(m as any)}
            className={`px-4 py-2 rounded-lg border
              ${
                mode === m
                  ? "bg-[var(--color-primary)] text-white"
                  : ""
              }`}
          >
            {m === "single" ? "Pojedyncze" : "Hurtowa zmiana"}
          </button>
        ))}
      </div>

      {/* SINGLE */}
{mode === "single" && (
  <div className="relative w-[220px]">

    <input
      placeholder="M1A"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        setIsOpenSuggestion(true);
      }}
      className="border w-full px-3 py-2 rounded"
    />

    {search && isOpenSuggestion && (
      <div className="absolute top-full left-0 w-full bg-white border rounded shadow mt-1 z-10 max-h-48 overflow-auto">

        {flats
          .filter((f) =>
            f.numberOfFlat.toLowerCase().includes(search.toLowerCase())
          )
          .slice(0, 6)
          .map((f) => (
            <div
              key={f.numberOfFlat}
              onClick={() => {
                setSelectedId(f.numberOfFlat);
                setSearch(f.numberOfFlat);
                setIsOpenSuggestion(false);
              }}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
            >
              {f.numberOfFlat}
            </div>
          ))}

        {/* brak wyników */}
        {flats.filter((f) =>
          f.numberOfFlat.toLowerCase().includes(search.toLowerCase())
        ).length === 0 && (
          <div className="px-3 py-2 text-xs text-gray-400">
            Brak wyników
          </div>
        )}

      </div>
    )}

  </div>
)}
      {mode === "single" && selectedId && (
        (() => {
          const flat = flats.find(f => f.numberOfFlat === selectedId);
          if (!flat) return null;

          const meter = priceMeter ? Number(priceMeter) : flat.priceOfMeter;
          const total = Math.round(meter * flat.surface);

          return (
            <div className="text-sm text-gray-600 mt-2">
              {flat.surface} m² × {meter} zł ={" "}
              <span className="font-semibold text-[var(--color-primary)]">
                {total} zł
              </span>
            </div>
          );
        })()
      )}

      {/* BULK */}
      {mode === "bulk" && (
        <div className="flex gap-3 flex-wrap">

          <div className="flex flex-col">
            <label className="text-xs mb-1 text-gray-500">
              Piętro
            </label>
            <select
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
              className="border px-3 py-2 rounded"
            >
              <option value="">Wszystkie piętra</option>
              <option value="0">Parter</option>
              <option value="1">1 piętro</option>
              <option value="2">2 piętro</option>
              <option value="3">3 piętro</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-xs mb-1 text-gray-500">
              Status
            </label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border px-3 py-2 rounded"
            >
              <option value="">Wszystkie statusy</option>
              <option value="dostępne">Dostępne</option>
              <option value="rezerwacja">Rezerwacja</option>
              <option value="sprzedane">Sprzedane</option>
            </select>
          </div>

        </div>
      )}

      {/* OPERACJE */}
      <div className="flex gap-3 flex-wrap">

        {/* CENA */}
        <div className="flex flex-col">
          <label className="text-xs mb-1 text-gray-500">
            Cena za m²
          </label>
          <input
            type="number"
            placeholder="np. 12000"
            value={priceMeter}
            onChange={(e) => setPriceMeter(e.target.value)}
            className="border px-3 py-2 rounded"
          />
        </div>

        {/* ZAOKRĄGLANIE */}
        <div className="flex flex-col">
          <label className="text-xs mb-1 text-gray-500">
            Zaokrąglenie
          </label>
          <select
            value={roundMode}
            onChange={(e) => setRoundMode(e.target.value as any)}
            className="border px-3 py-2 rounded"
          >
            <option value="none">Bez zaokrąglenia</option>
            <option value="100">Do 100 zł</option>
            <option value="1000">Do 1000 zł</option>
            <option value="10000">Do 10 000 zł</option>
          </select>
        </div>

        {/* STATUS */}
        <div className="flex flex-col">
          <label className="text-xs mb-1 text-gray-500">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border px-3 py-2 rounded"
          >
            <option value="">Bez zmiany statusu</option>
            <option value="dostępne">Dostępne</option>
            <option value="rezerwacja">Rezerwacja</option>
            <option value="sprzedane">Sprzedane</option>
          </select>
        </div>

      </div>
      {/* PREVIEW */}
      {preview.length > 0 && (
        <div className="border p-3 rounded max-h-[200px] overflow-auto text-sm">
          <div className="font-medium mb-2">
            Zmiany ({preview.length})
          </div>

      {sortedPreview.map((f) => (
        <div
          key={f.id}
          className="grid grid-cols-3 items-center text-sm py-1 border-b last:border-none"
        >
          {/* LEWA */}
          <div className="font-medium">
            {f.id} • {f.surface} m²
          </div>

          {/* ŚRODEK */}
          <div className="text-center">
            {formatPrice(f.priceMeter)} zł/m² →{" "}
            <span className="font-semibold">
              {formatPrice(f.priceFlat)} zł
            </span>
          </div>

          {/* PRAWA */}
          <div className="text-right">
            {f.status}
          </div>
        </div>
      ))}
        </div>
      )}

      {/* ERROR */}
      {error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}

      {/* BUTTON */}
      <button
        onClick={apply}
        disabled={loading}
        className="bg-[var(--color-primary)] text-white px-4 py-2 rounded
          disabled:opacity-40"
      >
        Zastosuj zmiany
      </button>

      {/* TOAST */}
      {success && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 
          bg-green-600 text-white px-6 py-3 rounded-full shadow-lg text-sm">
          Zapisano zmiany ✅
        </div>
      )}
    </div>
  );
};

export default FlatEditor;