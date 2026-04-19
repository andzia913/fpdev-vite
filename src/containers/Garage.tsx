import { useEffect, useRef, useState } from "react";
import GarageTable from "../components/offerGarages/offerTable/GarageTable";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import GarageMap from "../components/offerGarages/GarageMap";
import type { garageType } from "../types/garages";

export const fetchGarages = async () => {
  const snapshot = await getDocs(collection(db, "garages"));

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

type Sort = {
  key: keyof garageType;
  direction: "asc" | "desc";
};

const Garage = () => {
  const [selectedGarageId, setSelectedGarageId] = useState<string | null>(null);
  const [selectionSource, setSelectionSource] = useState<"map" | "table" | null>(null);

  const [garages, setGarages] = useState<garageType[]>([]);
  const [filter, setFilter] = useState<"podziemne" | "zewnetrzne">("podziemne");

  const [sort, setSort] = useState<Sort>({
    key: "id",
    direction: "asc",
  });

  const [page, setPage] = useState(0);
  const perPage = 10;

  // 🔥 DETEKCJA SCROLLA USERA
  const isUserScrolling = useRef(false);

  useEffect(() => {
    let timeout: any;

    const onScroll = () => {
      isUserScrolling.current = true;

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        isUserScrolling.current = false;
      }, 150);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // 🔥 LOAD
  useEffect(() => {
    const load = async () => {
      const data = await fetchGarages();
      setGarages(data as garageType[]);
    };
    load();
  }, []);

  // 🔥 FILTER
  const filtered = garages.filter((g) => g.type === filter);

  const total = filtered.length;
  const availableCount = filtered.filter(
    (g) => g.status === "dostepne"
  ).length;

  // 🔥 SORT
  const sorted = [...filtered].sort((a, b) => {
    const valA = a[sort.key];
    const valB = b[sort.key];

    if (typeof valA === "number" && typeof valB === "number") {
      return sort.direction === "asc" ? valA - valB : valB - valA;
    }

    return sort.direction === "asc"
      ? String(valA).localeCompare(String(valB))
      : String(valB).localeCompare(String(valA));
  });

  // 🔥 AUTO PAGE SWITCH (mapa)
  useEffect(() => {
    if (!selectedGarageId) return;
    if (selectionSource !== "map") return;

    const index = sorted.findIndex((g) => g.id === selectedGarageId);
    if (index === -1) return;

    const newPage = Math.floor(index / perPage);

    if (newPage !== page) {
      setPage(newPage);
    }
  }, [selectedGarageId, sorted, selectionSource]);

  // 🔥 SCROLL FIX (najważniejsze)
  useEffect(() => {
    if (!selectedGarageId) return;

    const index = sorted.findIndex((g) => g.id === selectedGarageId);
    if (index === -1) return;

    const newPage = Math.floor(index / perPage);
    const isMobile = window.innerWidth < 1024;

    // 🔥 MAP CLICK
    if (selectionSource === "map" && newPage !== page) {
      setPage(newPage);

      if (isMobile) {
        setTimeout(() => {
          if (isUserScrolling.current) return;

          const row = document.querySelector(
            `[data-id="${selectedGarageId}"]`
          ) as HTMLElement | null;

          if (!row) return;

          row.scrollIntoView({
            behavior: "auto", // 🔥 KLUCZ
            block: "nearest",
          });
        }, 60);
      }
    }

    // 🔥 TABLE CLICK
    if (selectionSource === "table" && isMobile) {
      setTimeout(() => {
        if (isUserScrolling.current) return;

        const row = document.querySelector(
          `[data-id="${selectedGarageId}"]`
        ) as HTMLElement | null;

        if (!row) return;

        const rect = row.getBoundingClientRect();
        const isVisible =
          rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (!isVisible) {
          row.scrollIntoView({
            behavior: "auto", // 🔥 bez smooth
            block: "nearest",
          });
        }
      }, 30);
    }
  }, [selectedGarageId, selectionSource, sorted]);

  // 🔥 reset source
  useEffect(() => {
    if (!selectionSource) return;

    const t = setTimeout(() => setSelectionSource(null), 200);
    return () => clearTimeout(t);
  }, [selectionSource]);

  // 🔥 PAGINATION
  const totalPages = Math.ceil(sorted.length / perPage);

  const paginated = sorted.slice(
    page * perPage,
    page * perPage + perPage
  );

  // 🔥 SORT
  const toggleSort = (key: keyof garageType) => {
    setPage(0);

    setSort((prev) => ({
      key,
      direction:
        prev.key === key && prev.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  return (
    <section id="garaze" className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Miejsca parkingowe
        </h2>
        <p className="text-gray-600 mt-4">
          Sprawdź dostępność miejsc parkingowych podziemnych i zewnętrznych
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => {
            setFilter("podziemne");
            setPage(0);
          }}
          className={`px-5 py-2 rounded-lg ${
            filter === "podziemne"
              ? "bg-[var(--color-primary)] text-white"
              : "border"
          }`}
        >
          Podziemne
        </button>

        <button
          onClick={() => {
            setFilter("zewnetrzne");
            setPage(0);
          }}
          className={`px-5 py-2 rounded-lg ${
            filter === "zewnetrzne"
              ? "bg-[var(--color-primary)] text-white"
              : "border"
          }`}
        >
          Zewnętrzne
        </button>
      </div>

      <div className="text-center mb-6 text-sm text-gray-600">
        Dostępnych:{" "}
        <span className="font-semibold text-green-600">
          {availableCount}
        </span>{" "}
        / {total}
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <GarageMap
          garages={filtered}
          type={filter}
          selectedId={selectedGarageId}
          onSelect={(id) => {
            setSelectionSource("map");
            setSelectedGarageId(id);
          }}
        />

        <div>
          <GarageTable
            data={paginated}
            toggleSort={toggleSort}
            sort={sort}
            selectedId={selectedGarageId}
            onSelect={(id) => {
              setSelectionSource("table");
              setSelectedGarageId(id);
            }}
          />

          <div className="flex items-center justify-between mt-6 gap-4">
            <button
              onClick={() => setPage(Math.max(page - 1, 0))}
              disabled={page === 0}
              className="flex-1 py-3 rounded-xl border text-sm font-medium disabled:opacity-30"
            >
              ← Poprzednie
            </button>

            <div className="text-sm text-gray-600">
              {page + 1} / {totalPages}
            </div>

            <button
              onClick={() =>
                setPage(Math.min(page + 1, totalPages - 1))
              }
              disabled={page === totalPages - 1}
              className="flex-1 py-3 rounded-xl bg-[var(--color-primary)] text-white text-sm font-medium disabled:opacity-30"
            >
              Następne →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Garage;