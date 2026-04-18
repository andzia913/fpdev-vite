import { STATUS_CONFIG } from "../../../utils/statusOfFlat";
import type { Flat } from "../../../types/flat";
import { normalizeStatus } from "../../../utils/statusOfFlat";
import { formatPrice } from "../../../utils/utils";

const scrollToOffer = () => {
  const el = document.getElementById("offer");
  if (el) {
    el.scrollIntoView({ block: "start" });
  }
};
type Props = {
  data: Flat[];
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
};

const OfferTableMobile = ({ data, page, setPage, totalPages }: Props) => (
  <div className="flex flex-col gap-4">
    {data.map((flat, i) => {
      const normalized = normalizeStatus(flat.statute);
      const config =
        STATUS_CONFIG[normalized as keyof typeof STATUS_CONFIG] ||
        STATUS_CONFIG.available;

      return (
        <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">

          {/* HEADER */}
          <div className="flex justify-between px-4 py-3 border-b">
            <span className="font-bold text-lg">
              {flat.numberOfFlat}
            </span>

            <span className={`text-xs px-2 py-1 rounded ${config.badge}`}>
              {config.label}
            </span>
          </div>

          {/* IMAGE */}
          <img
            src={`/flats/${flat.numberOfFlat}_min.png`}
            alt={`Mieszkanie ${flat.numberOfFlat}`}
            className="h-full object-cover my-2 mx-auto"
          />

          {/* DATA */}
          <div className="p-4 grid grid-cols-2 gap-y-2 text-sm">
            <span>Piętro</span><span>{flat.level}</span>
            <span>Pokoje</span><span>{flat.numberOfRooms}</span>
            <span>Pow.</span><span>{flat.surface} m²</span>

            <span>Cena</span>
            <span className="font-semibold text-[var(--color-primary)]">
              {normalized === "sold"
                ? "—"
                : `${formatPrice(flat.priceOfFlat)} zł`}
            </span>
          </div>

          {/* CTA */}
          <a
            href={flat.cardOfFlat}
            target="_blank"
            className="block text-center bg-[var(--color-primary)] text-white py-3"
          >
            Zobacz kartę
          </a>
        </div>
      );
    })}
    <div className="flex items-center justify-between mt-6 gap-4">

      {/* PREV */}
      <button
        onClick={() => {
          setPage(Math.max(page - 1, 0));
          scrollToOffer();
        }}
        disabled={page === 0}
        className="flex-1 py-3 rounded-xl border text-sm font-medium
          disabled:opacity-30 disabled:cursor-not-allowed
          active:scale-95 transition"
      >
        ← Poprzednie
      </button>

      {/* INFO */}
      <div className="text-sm text-gray-600 whitespace-nowrap">
        {page + 1} / {totalPages}
      </div>

      {/* NEXT */}
      <button
        onClick={() => {
          setPage(Math.min(page + 1, totalPages - 1));
          scrollToOffer();
        }}
        disabled={page === totalPages - 1}
        className="flex-1 py-3 rounded-xl bg-[var(--color-primary)] text-white text-sm font-medium
          disabled:opacity-30 disabled:cursor-not-allowed
          active:scale-95 transition"
      >
        Następne →
      </button>

    </div>
  </div>
);

export default OfferTableMobile;