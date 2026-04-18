
type Props = {
  number: string;
  currPriceOfMeter: string;
  newPriceOfMeter?: string;
  currPriceOfFlat: string;
  newPriceOfFlat?: string;
  currStatute: string;
  newStatute?: string;
  onClose: () => void;
  onConfirm: () => void;
};

const Row = ({
  label,
  before,
  after,
}: {
  label: string;
  before: string;
  after: string;
}) => (
  <div className="flex justify-between items-center py-3 border-b last:border-none">
    <span className="text-sm text-gray-500">{label}</span>

    <div className="flex items-center gap-4 text-sm">
      <span className="text-gray-400 line-through">{before}</span>
      <span className="font-semibold text-[var(--color-primary)]">
        {after}
      </span>
    </div>
  </div>
);

const AdminConfirmation = ({
  number,
  currPriceOfMeter,
  newPriceOfMeter,
  currPriceOfFlat,
  newPriceOfFlat,
  currStatute,
  newStatute,
  onClose,
  onConfirm,
}: Props) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">

      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 space-y-5">

        {/* HEADER */}
        <div>
          <h3 className="text-lg font-semibold">
            Potwierdź zmiany
          </h3>
          <p className="text-sm text-gray-500">
            Mieszkanie {number}
          </p>
        </div>

        {/* CHANGES */}
        <div className="divide-y">

          <Row
            label="Cena za m²"
            before={currPriceOfMeter}
            after={newPriceOfMeter || currPriceOfMeter}
          />

          <Row
            label="Cena mieszkania"
            before={currPriceOfFlat}
            after={newPriceOfFlat || currPriceOfFlat}
          />

          <Row
            label="Status"
            before={currStatute}
            after={newStatute || currStatute}
          />

        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-3 pt-4">

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-100 transition"
          >
            Anuluj
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-[var(--color-primary)] text-white hover:opacity-90 transition"
          >
            Zatwierdź
          </button>

        </div>

      </div>
    </div>
  );
};

export default AdminConfirmation;