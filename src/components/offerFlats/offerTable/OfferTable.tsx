import React, { useEffect, useState } from "react";
import useFlatsData from "../../../utils/dataService";
import { Spinner } from "../../index";
import OfferTableDesktop from "./OfferTableDesktop";
import OfferTableMobile from "./OfferTableMobile";
import type { Flat } from "../../../types/flat";
const ITEMS_PER_PAGE = 6;



const parseFlatNumber = (val: string) => {
  const match = val.match(/M(\d+)([A-Z]?)/i);

  if (!match) return { num: 0, letter: "" };

  return {
    num: Number(match[1]),
    letter: match[2] || "",
  };
};

const OfferTable = ({ changeOnOfferDetails }: any) => {
  const { flatsData } = useFlatsData() as { flatsData: Flat[] };
  const [filtered, setFiltered] = useState<Flat[]>([]);
  const [page, setPage] = useState(0);

  const [filters, setFilters] = useState({
    status: "",
    surfaceMin: "",
    surfaceMax: "",
    priceMin: "",
    priceMax: "",
  });

  const [sort, setSort] = useState<{
    key: keyof Flat;
    direction: "asc" | "desc";
  }>({
    key: "numberOfFlat",
    direction: "asc",
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (flatsData.length > 0) {
      setFiltered(flatsData);
      setIsLoading(false);
    }
  }, [flatsData]);

  // FILTER + SORT
  useEffect(() => {
    let data = [...flatsData];

    data = data.filter((flat) => {
      const price = Number(flat.priceOfFlat.replace(".", ""));
      const surface = Number(flat.surface);

      return (
        (!filters.status || flat.statute === filters.status) &&
        (!filters.surfaceMin || surface >= Number(filters.surfaceMin)) &&
        (!filters.surfaceMax || surface <= Number(filters.surfaceMax)) &&
        (!filters.priceMin || price >= Number(filters.priceMin)) &&
        (!filters.priceMax || price <= Number(filters.priceMax))
      );
    });

    data.sort((a, b) => {
      const dir = sort.direction === "asc" ? 1 : -1;

      if (!a || !b) return 0;

      // PRICE
      if (sort.key === "priceOfFlat") {
        const priceA = Number(a.priceOfFlat?.replace(".", "") || 0);
        const priceB = Number(b.priceOfFlat?.replace(".", "") || 0);
        return (priceA - priceB) * dir;
      }

      // SURFACE
      if (sort.key === "surface") {
        const surfaceA = Number(a.surface || 0);
        const surfaceB = Number(b.surface || 0);
        return (surfaceA - surfaceB) * dir;
      }

      // 🔥 FLAT NUMBER (M7A)
      if (sort.key === "numberOfFlat") {
        const aParsed = parseFlatNumber(a.numberOfFlat);
        const bParsed = parseFlatNumber(b.numberOfFlat);

        if (aParsed.num !== bParsed.num) {
          return (aParsed.num - bParsed.num) * dir;
        }

        return aParsed.letter.localeCompare(bParsed.letter) * dir;
      }

      // DEFAULT SAFE
      const valA = String(a[sort.key] || "");
      const valB = String(b[sort.key] || "");

      return valA.localeCompare(valB) * dir;
    });

    setFiltered(data);
    setPage(0);

  }, [filters, sort, flatsData]);

  const paginated = filtered.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const clearFilters = () => {
    setFilters({
      status: "",
      surfaceMin: "",
      surfaceMax: "",
      priceMin: "",
      priceMax: "",
    });
  };

  const toggleSort = (key: keyof Flat) => {
    setSort((prev) => ({
      key,
      direction:
        prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10">

      {/* FILTERS */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8 flex flex-wrap gap-4 items-end">
        <select
          value={filters.status}
          onChange={(e) =>
            setFilters({ ...filters, status: e.target.value })
          }
          className="border rounded px-3 py-2"
        >
          <option value="">Wszystkie</option>
          <option value="dostępne">Dostępne</option>
          <option value="rezerwacja">Rezerwacja</option>
          <option value="sprzedane">Sprzedane</option>
        </select>

        <input
          type="number"
          placeholder="Pow. od"
          className="border rounded px-3 py-2 w-24"
          onChange={(e) =>
            setFilters({ ...filters, surfaceMin: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Pow. do"
          className="border rounded px-3 py-2 w-24"
          onChange={(e) =>
            setFilters({ ...filters, surfaceMax: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Cena od"
          className="border rounded px-3 py-2 w-28"
          onChange={(e) =>
            setFilters({ ...filters, priceMin: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Cena do"
          className="border rounded px-3 py-2 w-28"
          onChange={(e) =>
            setFilters({ ...filters, priceMax: e.target.value })
          }
        />

        <button
          onClick={clearFilters}
          className="ml-auto bg-[var(--color-primary)] text-white px-5 py-2 rounded"
        >
          Wyczyść
        </button>
      </div>

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="hidden md:block">
            <OfferTableDesktop
              data={paginated}
              toggleSort={toggleSort}
              sort={sort}
              page={page}
              setPage={setPage}
              totalPages={totalPages}
            />
          </div>

          <div className="md:hidden">
            <OfferTableMobile 
              data={paginated}
              page={page}
              setPage={setPage}
              totalPages={totalPages}
               />
          </div>
        </>
      )}
    </div>
  );
};

export default OfferTable;
