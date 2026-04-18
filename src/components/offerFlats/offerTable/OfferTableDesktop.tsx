import type { Flat } from "../../../types/flat";
import { TiArrowUnsorted ,  TiArrowSortedDown ,  TiArrowSortedUp } from "react-icons/ti";
import { STATUS_CONFIG } from "../../../utils/statusOfFlat";
import { normalizeStatus } from "../../../utils/statusOfFlat";
import { formatPrice } from "../../../utils/utils";

type Sort = {
  key: keyof Flat;
  direction: "asc" | "desc";
};

type Props = {
  data: Flat[];
  toggleSort: (key: keyof Flat) => void;
  sort: Sort;
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
};


const getSortIcon = (key: keyof Flat, sort: Sort) => {
  if (sort.key !== key) return <TiArrowUnsorted />;
  return sort.direction === "asc" ? <TiArrowSortedUp /> : <TiArrowSortedDown />;
};

const OfferTableDesktop = ({
  data,
  toggleSort,
  sort,
  page,
  setPage,
  totalPages,
}: Props) => {

  return (
    <div className="hidden md:block">

      <table className="w-full text-sm border-separate border-spacing-y-2">
        <thead>
          <tr className="text-[var(--color-text-muted)]">

            <th
                onClick={() => toggleSort("numberOfFlat")}
                className="cursor-pointer px-4 py-3 text-center align-middle hover:text-black transition"
            >
                <div className="flex items-center justify-center gap-1">
                Nr
                <span className="text-xs">{getSortIcon("numberOfFlat", sort)}</span>
                </div>
            </th>

            <th
                onClick={() => toggleSort("level")}
                className="cursor-pointer px-4 py-3 text-center align-middle hover:text-black transition"
            >
                <div className="flex items-center justify-center gap-1">
                Piętro
                <span className="text-xs">{getSortIcon("level", sort)}</span>
                </div>
            </th>

            <th
                onClick={() => toggleSort("numberOfRooms")}
                className="cursor-pointer px-4 py-3 text-center align-middle hover:text-black transition"
            >
                <div className="flex items-center justify-center gap-1">
                Pokoje
                <span className="text-xs">{getSortIcon("numberOfRooms", sort)}</span>
                </div>
            </th>

            <th
                onClick={() => toggleSort("surface")}
                className="cursor-pointer px-4 py-3 text-center align-middle hover:text-black transition"
            >
                <div className="flex items-center justify-center gap-1">
                Pow.
                <span className="text-xs">{getSortIcon("surface", sort)}</span>
                </div>
            </th>

            <th
                onClick={() => toggleSort("priceOfFlat")}
                className="cursor-pointer px-4 py-3 text-center align-middle hover:text-black transition"
            >
                <div className="flex items-center justify-center gap-1">
                Cena
                <span className="text-xs">{getSortIcon("priceOfFlat", sort)}</span>
                </div>
            </th>

            <th className="px-4 py-3 text-center align-middle">
                Status
            </th>

            <th className="px-4 py-3"></th>

            </tr>
        </thead>

        <tbody>
          {data.map((flat, i) => {
            const normalized = normalizeStatus(flat.statute);
            const config = STATUS_CONFIG[normalized] || STATUS_CONFIG.available;
          return (
            <tr key={i} className="bg-white shadow-sm hover:shadow-md">

              <td className="px-4 py-4 font-semibold text-center ">
                {flat.numberOfFlat}
              </td>

              <td className="px-4 py-4 text-center">{flat.level}</td>
              <td className="px-4 py-4 text-center">{flat.numberOfRooms}</td>
              <td className="px-4 py-4 text-center">{flat.surface} m²</td>
              <td className="px-4 py-4 text-center">              
                {normalized === "sold"
                ? "—"
                : `${formatPrice(flat.priceOfFlat)} zł`}</td>

              <td className="text-center">
              <span className={`px-2 py-1 rounded text-xs  ${config.badge}`}>
                {config.label}
              </span>
              </td>

              <td className="text-center">
                <a
                  href={flat.cardOfFlat}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--color-primary)]"
                >
                  Szczegóły
                </a>
              </td>

            </tr>
          )})}
        </tbody>
      </table>

      {/* PAGINACJA */}
      <div className="flex justify-center mt-8 gap-2 items-center">

        {/* PREV */}
        <button
          onClick={() => setPage(Math.max(page - 1, 0))}
          className="px-3 py-1 border rounded"
        >
          ←
        </button>

        {/* NUMERY */}
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`px-3 py-1 rounded ${
              page === i
                ? "bg-[var(--color-primary)] text-white"
                : "border"
            }`}
          >
            {i + 1}
          </button>
        ))}

        {/* NEXT */}
        <button
          onClick={() => setPage(Math.min(page + 1, totalPages - 1))}
          className="px-3 py-1 border rounded"
        >
          →
        </button>

      </div>

    </div>
  );
};

export default OfferTableDesktop;