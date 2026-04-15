import { TiArrowUnsorted, TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { STATUS_CONFIG } from "../../../utils/statusOfFlat";
import type { Garage } from "../../../types/garages";
import { normalizeStatus } from "../../../utils/statusOfFlat";

type Sort = {
  key: keyof Garage;
  direction: "asc" | "desc";
};

type Props = {
  data: Garage[];
  toggleSort: (key: keyof Garage) => void;
  sort: Sort;
  selectedId?: string | null;
  onSelect?: (id: string) => void;
};

const getSortIcon = (key: keyof Garage, sort: Sort) => {
  if (sort.key !== key) return <TiArrowUnsorted />;
  return sort.direction === "asc" ? <TiArrowSortedUp /> : <TiArrowSortedDown />;
};

const GarageTable = ({ data, toggleSort, sort, selectedId, onSelect }: Props) => {
  return (
    <div className="w-full overflow-x-auto">

      <table className="w-full text-sm border-separate border-spacing-y-2">
        <thead>
          <tr className="text-gray-500">

            {/* ID */}
            <th
              onClick={() => toggleSort("id")}
              className="cursor-pointer px-3 py-2 text-left hover:text-black"
            >
              <div className="flex items-center gap-1">
                Nr {getSortIcon("id", sort)}
              </div>
            </th>

            {/* TYPE */}
            <th
              onClick={() => toggleSort("type")}
              className="cursor-pointer px-3 py-2 text-left hover:text-black"
            >
              <div className="flex items-center gap-1">
                Typ {getSortIcon("type", sort)}
              </div>
            </th>

            {/* PRICE */}
            <th
              onClick={() => toggleSort("price")}
              className="cursor-pointer px-3 py-2 text-left hover:text-black"
            >
              <div className="flex items-center gap-1">
                Cena {getSortIcon("price", sort)}
              </div>
            </th>

            {/* STATUS */}
            <th
              onClick={() => toggleSort("status")}
              className="cursor-pointer px-3 py-2 text-left hover:text-black"
            >
              <div className="flex items-center gap-1">
                Status {getSortIcon("status", sort)}
              </div>
            </th>

          </tr>
        </thead>

        <tbody>
          {data.map((g) => {
            const normalized = normalizeStatus(g.status);

            const config =
              STATUS_CONFIG[normalized as keyof typeof STATUS_CONFIG] ||
              STATUS_CONFIG.available;

            return (
              <tr
                  key={g.id}
                  onClick={() => onSelect?.(g.id)}
                  ref={(el) => {
                    if (selectedId === g.id && el) {
                      el.scrollIntoView({ behavior: "smooth", block: "center" });
                    }
                  }}
                  className={`bg-white shadow-sm cursor-pointer transition
                    ${selectedId === g.id ? "ring-2 ring-[var(--color-primary)]" : ""}
                  `}
                >

                <td className="px-3 py-3 font-semibold">
                  {g.id}
                </td>

                <td className="px-3 py-3 text-gray-600">
                  {g.type === "podziemne" ? "Podziemne" : "Zewnętrzne"}
                  {g.disabled && " ♿"}
                </td>

                <td className="px-3 py-3 font-semibold text-[var(--color-primary)]">
                  {normalized === "sold" ? "—" : `${g.price} zł`}
                </td>

                <td className="px-3 py-3">
                  <span className={`px-2 py-1 rounded text-xs ${config.badge}`}>
                    {config.label}
                  </span>
                </td>

              </tr>
            );
          })}
        </tbody>
      </table>

    </div>
  );
};

export default GarageTable;
