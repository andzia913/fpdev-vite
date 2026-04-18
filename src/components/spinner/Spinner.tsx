const Spinner = ({ fullScreen = true }: { fullScreen?: boolean }) => {
  return (
    <div
      className={`${
        fullScreen
          ? "fixed inset-0 z-50 bg-white/70"
          : "w-full py-10"
      } flex items-center justify-center`}
    >
      <div className="flex flex-col items-center gap-3">

        {/* SPINNER */}
        <div className="w-10 h-10 border-4 border-gray-200 border-t-[var(--color-primary)] rounded-full animate-spin" />

        {/* TEXT (opcjonalny vibe UX) */}
        <span className="text-sm text-gray-500">
          Ładowanie...
        </span>

      </div>
    </div>
  );
};

export default Spinner;