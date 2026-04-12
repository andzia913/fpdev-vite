import getstatusstyle from "../../../helpers/getstatusstyle";
import type { Garage } from "../../../types/garages";

const GarageTable = ({ data }: { data: Garage[] }) => {
  return (
    <table className="w-full text-sm border-separate border-spacing-y-2">
      <thead>
        <tr className="text-[var(--color-text-muted)]">
          <th className="px-4 py-3 text-center">Nr</th>
          <th className="px-4 py-3 text-center">Typ</th>
          <th className="px-4 py-3 text-center">Cena</th>
          <th className="px-4 py-3 text-center">Status</th>
        </tr>
      </thead>

      <tbody>
        {data.map((g, i) => (
          <tr key={i} className="bg-white shadow-sm">
            <td className="px-4 py-4 text-center font-semibold">
              {g.id}
            </td>

            <td className="px-4 py-4 text-center">
              {g.type === "podziemne" ? "Podziemny" : "Zewnetrzny"}
            </td>

            <td className="px-4 py-4 text-center">
              {g.price} zł
            </td>

            <td className="px-4 py-4 text-center">
              <span className={`px-2 py-1 rounded text-xs ${getstatusstyle(g.status)}`}>
                {g.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GarageTable;