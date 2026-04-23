import { useEffect, useState } from "react";
import { fetchGarages } from "../../containers/Garage";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import type { garageType } from "../../types/garages";
import { formatPrice } from "../../utils/utils";

const GarageEditor = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
  const [garages, setGarages] = useState<garageType[]>([]);

  const [mode, setMode] = useState<"single" | "bulk">("single");

  const [selectedId, setSelectedId] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const [priceMode, setPriceMode] = useState<"set" | "add">("set");
  const [priceValue, setPriceValue] = useState("");
  const [statusValue, setStatusValue] = useState("");

  const [preview, setPreview] = useState<garageType[]>([]);

  const [search, setSearch] = useState("");
  const [isOpenSuggestion, setIsOpenSuggestion] = useState<boolean>(false);
    const [error, setError] = useState("");

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await fetchGarages();
    setGarages(data as garageType[]);
  };
    let suggestions = garages
    .filter((g) =>
        g.id.toLowerCase().includes(search.toLowerCase())
    ).slice(0, 6);
  // 🔥 WYBÓR REKORDÓW
  const getTargets = () => {
    if (mode === "single") {
      return garages.filter((g) => g.id === selectedId);
    }

    return garages.filter((g) => {
      if (typeFilter && g.type !== typeFilter) return false;
      if (statusFilter && g.status !== statusFilter) return false;
      return true;
    });
  };
    useEffect(() => {
    if (priceValue || statusValue || selectedId || typeFilter) {
        setError("");
    }
    }, [priceValue, statusValue, selectedId, typeFilter]);
  // 🔥 PREVIEW
  useEffect(() => {
    const targets = getTargets();

    const updated: any = targets.map((g) => {
      let newPrice = g.price;

      if (priceValue) {
        if (priceMode === "set") {
          newPrice = Number(priceValue);
        } else {
          newPrice = g.price + Number(priceValue);
        }
      }

      return {
        ...g,
        price: newPrice,
        status: statusValue || g.status,
      };
    });

    setPreview(updated);
  }, [selectedId, typeFilter, statusFilter, priceValue, statusValue, priceMode, mode, garages]);

  // 🔥 APPLY
  const apply = async () => {
    const targets = getTargets();

        if (targets.length === 0) {
        setError("Wybierz miejsce/miejsca");
        return;
        }

        if (!priceValue && !statusValue) {
        setError("Podaj zmianę ceny lub statusu");
        return;
        }
  try {
    setLoading(true);

    await Promise.all(
      targets.map((g) => {
        let newPrice = g.price;

        if (priceValue) {
          newPrice =
            priceMode === "set"
              ? Number(priceValue)
              : g.price + Number(priceValue);
        }

        return updateDoc(doc(db, "garages", g.id), {
          ...(priceValue && { price: newPrice }),
          ...(statusValue && { status: statusValue }),
        });
      })
    );

    await load();
    setSuccess(true);
    setSelectedId("");
    setSearch("");
    setTypeFilter("");
    setStatusFilter("");
    setPriceValue("");
    setStatusValue("");
    setPreview([]);
    setIsOpenSuggestion(false);
    setMode("single");
  } catch (e) {
    console.error(e);
  } finally {
    setLoading(false);

    // toast znika po chwili
    setTimeout(() => setSuccess(false), 2500);
  }
};
  return (
    <div className="bg-white p-6 rounded-xl shadow space-y-6">
        {loading && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
            <div className="bg-white px-6 py-4 rounded-xl shadow flex items-center gap-3">
            
            <div className="w-5 h-5 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>

            <span className="text-sm">Zapisywanie zmian...</span>
            </div>
        </div>
        )}
      <h3 className="text-lg font-semibold">Miejsca prakingowe — edycja</h3>

      {/* TRYB */}
        <div className="flex gap-2">
        {["single", "bulk"].map((m) => (
            <button
            key={m}
            onClick={() => setMode(m as any)}
            className={`px-4 py-2 rounded-lg text-sm border transition
                ${
                mode === m
                    ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                    : "bg-white hover:bg-gray-100"
                }
            `}
            >
            {m === "single" ? "Pojedyncze" : "Hurtowa zmiana"}
            </button>
        ))}
        </div>

      {/* SINGLE */}
{mode === "single" && (
  <div className="relative w-[200px]">

    <input
      placeholder="MP-01"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        setIsOpenSuggestion(true)
      }}
      className="border w-full px-3 py-2 rounded"
    />

    {search && isOpenSuggestion && (
      <div className="absolute top-full left-0 w-full bg-white border rounded shadow mt-1 z-10">

            {suggestions.map((g) => (
            <div
                key={g.id}
                onClick={() => {
                    suggestions = [];
                    setIsOpenSuggestion(false);
                    setSelectedId(g.id);
                    setSearch(g.id);
                }}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
            >
                {g.id}
            </div>
            ))}

        </div>
        )}
    </div>
    )}

      {/* BULK */}
      {mode === "bulk" && (
        <div className="flex gap-3 flex-wrap">

          {/* TYP */}
          <div className="flex flex-col">
            <label className="text-xs mb-1 text-gray-500">
              Typ miejsca
            </label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="border px-3 py-2 rounded"
            >
              <option value="">Wszystkie</option>
              <option value="podziemne">Podziemne</option>
              <option value="zewnetrzne">Zewnętrzne</option>
            </select>
          </div>

          {/* STATUS */}
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
              <option value="dostepne">Dostępne</option>
              <option value="niedostepne">Niedostępne</option>
              <option value="rezerwacja">Rezerwacja</option>
              <option value="sprzedane">Sprzedane</option>
            </select>
          </div>

        </div>
      )}

      {/* OPERACJE */}
      <div className="flex gap-3 flex-wrap">

        {/* TRYB CENY */}
        <div className="flex flex-col">
          <label className="text-xs mb-1 text-gray-500">
            Operacja na cenie
          </label>
          <select
            value={priceMode}
            onChange={(e) => setPriceMode(e.target.value as any)}
            className="border px-3 py-2 rounded"
          >
            <option value="set">Ustaw cenę</option>
            <option value="add">Dodaj do ceny</option>
          </select>
        </div>

        {/* KWOTA */}
        <div className="flex flex-col">
          <label className="text-xs mb-1 text-gray-500">
            Kwota
          </label>
          <input
            type="number"
            inputMode="numeric"
            placeholder="np. 5000"
            value={priceValue}
            onChange={(e) => setPriceValue(e.target.value)}
            className="border px-3 py-2 rounded"
          />
        </div>

        {/* STATUS */}
        <div className="flex flex-col">
          <label className="text-xs mb-1 text-gray-500">
            Nowy status
          </label>
          <select
            value={statusValue}
            onChange={(e) => setStatusValue(e.target.value)}
            className="border px-3 py-2 rounded"
          >
            <option value="">Bez zmiany statusu</option>
            <option value="dostepne">Dostępne</option>
            <option value="niedostepne">Niedostępne</option>
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

    {preview.map((g) => (
      <div
        key={g.id}
        className="grid grid-cols-3 items-center py-1 border-b last:border-none"
      >
        {/* ID */}
        <div className="font-medium">
          {g.id}
        </div>

        {/* CENA */}
        <div className="text-center">
          <span className="font-semibold">
            {formatPrice(g.price)} zł
          </span>
        </div>

        {/* STATUS */}
        <div className="text-right text-gray-600">
          {g.status}
        </div>
      </div>
    ))}

  </div>
)}
    {error && (
    <div className="text-red-500 text-sm">
        {error}
    </div>
    )}
      {/* APPLY */}
      <button
        onClick={apply}
        disabled={loading}
        className="bg-[var(--color-primary)] text-white px-4 py-2 rounded cursor-pointer"
      >
        Zastosuj zmiany
      </button>
        {success && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 
            bg-green-600 text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium
            animate-[fadeIn_0.3s_ease]">
            Zapisano zmiany ✅
        </div>
        )}
    </div>
    
  );
};

export default GarageEditor;