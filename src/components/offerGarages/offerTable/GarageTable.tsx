import { TiArrowUnsorted, TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { STATUS_CONFIG } from "../../../utils/statusOfFlat";
import type { garageType } from "../../../types/garages";
import { normalizeStatus } from "../../../utils/statusOfFlat";

type Sort = {
  key: keyof garageType;
  direction: "asc" | "desc";
};

type Props = {
  data: garageType[];
  toggleSort: (key: keyof garageType) => void;
  sort: Sort;
  selectedId?: string | null;
  onSelect?: (id: string) => void;
};

const getSortIcon = (key: keyof garageType, sort: Sort) => {
  if (sort.key !== key) return <TiArrowUnsorted />;
  return sort.direction === "asc" ? <TiArrowSortedUp /> : <TiArrowSortedDown />;
};

const GarageTable = ({ data, toggleSort, sort, selectedId, onSelect }: Props) => {
  return (
    <div className="w-full overflow-x-auto" id="garageTable">

      <table className="w-full text-sm border-separate border-spacing-y-2">
        <thead>
          <tr className="text-gray-500">

            {/* ID */}
            <th
              onClick={() => toggleSort("id")}
              className="cursor-pointer px-3 py-2 text-center hover:text-black"
            >
              <div className="flex items-center gap-1">
                Nr {getSortIcon("id", sort)}
              </div>
            </th>

            {/* TYPE */}
            <th
              onClick={() => toggleSort("type")}
              className="cursor-pointer px-3 py-2 text-center hover:text-black"
            >
              <div className="flex items-center gap-1 justify-center">
                Typ {getSortIcon("type", sort)}
              </div>
            </th>

            {/* PRICE */}
            <th
              onClick={() => toggleSort("price")}
              className="cursor-pointer px-3 py-2 text-center hover:text-black"
            >
              <div className="flex items-center gap-1 justify-center">
                Cena {getSortIcon("price", sort)}
              </div>
            </th>

            {/* STATUS */}
            <th
              onClick={() => toggleSort("status")}
              className="cursor-pointer px-3 py-2 text-center hover:text-black"
            >
              <div className="flex items-center gap-1 justify-center">
                Status {getSortIcon("status", sort)}
              </div>
            </th>

          </tr>
        </thead>

        <tbody>
          {data.map((g) => {
            const normalized = normalizeStatus(g.status);

            const config =
              STATUS_CONFIG[normalized as keyof typeof STATUS_CONFIG]

            return (
                <tr
                  key={g.id}
                  data-id={g.id}
                  onClick={() => onSelect?.(g.id)}
                  className={`bg-white shadow-sm cursor-pointer transition
                    ${selectedId === g.id ? "ring-2 ring-[var(--color-primary)]" : ""}
                  `}
                    style={{ WebkitTapHighlightColor: "transparent" }}
                    role="button"
                >

                <td className="px-3 py-3 font-semibold">
                  {g.id}
                </td>

                <td className="px-3 py-3 text-gray-600 text-center">
                  {g.type === "podziemne" ? "Podziemne" : "Zewnętrzne"}
                  {g.disabled && " ♿"}
                </td>

                <td className="px-3 py-3 font-semibold text-[var(--color-primary)] text-center">
                  {normalized === "sold" ? "—" : `${g.price} zł`}
                </td>

                <td className="px-3 py-3 text-center">
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
