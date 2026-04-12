import getStatusStyle from "../../helpers/getstatusstyle";
import type { Flat } from "../../types/flat";

const OfferTableMobile = ({ data }: { data: Flat[] }) => (
  <div className="flex flex-col gap-4">
    {data.map((flat, i) => (
      <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">

        <div className="flex justify-between px-4 py-3 border-b">
          <span className="font-bold text-lg">
            {flat.numberOfFlat}
          </span>

          <span className={`text-xs px-2 py-1 rounded ${getStatusStyle(flat.statute)}`}>
            {flat.statute}
          </span>
        </div>

        <img
          src={`/flats/${flat.numberOfFlat}_min.png`}
          alt={`Mieszkanie ${flat.numberOfFlat} - Apartamenty Kaktusowa`}
          className="h-full object-cover my-2 mx-auto"
        />

        <div className="p-4 grid grid-cols-2 gap-y-2 text-sm">
          <span>Piętro</span><span>{flat.level}</span>
          <span>Pokoje</span><span>{flat.numberOfRooms}</span>
          <span>Pow.</span><span>{flat.surface} m²</span>
          <span>Cena</span>
          <span className="font-semibold text-[var(--color-primary)]">
            {flat.priceOfFlat} zł
          </span>
        </div>

        <a
          href={flat.cardOfFlat}
          target="_blank"
          className="block text-center bg-[var(--color-primary)] text-white py-3"
        >
          Zobacz kartę
        </a>
      </div>
    ))}
  </div>
);

export default OfferTableMobile;