import React, { useState, lazy, Suspense } from "react";
import Spinner from "../components/spinner/Spinner";
import { OfferTable } from "../components";

const OfferPicture = lazy(() => import("../components/offerFlats/offerPicture/OfferPicture"));
const OfferDetails = lazy(() => import("../components/OfferDetails"));

const Offer = () => {
  const [view, setView] = useState<1 | 2 | 3>(1);



  const renderView = () => {
    switch (view) {
      case 1:
        return <OfferTable/>;
      case 2:
        return <OfferPicture />;
      case 3:
        return <OfferDetails />;
      default:
        return null;
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20" id="offer">
      <div className="mb-10">
        <h2 className="text-2xl md:text-4xl font-semibold text-[var(--color-text)] mb-3 text-center">
          Sprawdź naszą ofertę mieszkań
        </h2>

        <p className="text-[var(--color-text-muted)] text-center">
          Wybierz mieszkanie z listy lub skorzystaj z wizualizacji budynku.
        </p>
      </div>

      {/* BUTTONS */}
      <div className="w-full border-b border-[var(--color-border)] flex gap-6 mb-8 justify-center">

        <button
          onClick={() => setView(1)}
          className={`pb-3 text-sm md:text-base font-medium transition relative
            ${view === 1 
              ? "text-[var(--color-primary)]" 
              : "text-[var(--color-text-muted)] hover:text-black"
            }`}
        >
          Wybierz z listy
          {view === 1 && (
            <span className="absolute left-0 -bottom-[1px] w-full h-[2px] bg-[var(--color-primary)]" />
          )}
        </button>

        <button
          onClick={() => setView(2)}
          className={`pb-3 text-sm md:text-base font-medium transition relative
            ${view === 2 
              ? "text-[var(--color-primary)]" 
              : "text-[var(--color-text-muted)] hover:text-black"
            }`}
        >
          Wybierz z wizualizacji
          {view === 2 && (
            <span className="absolute left-0 -bottom-[1px] w-full h-[2px] bg-[var(--color-primary)]" />
          )}
        </button>

        <button
          onClick={() => setView(3)}
          className={`pb-3 text-sm md:text-base font-medium transition relative
            ${view === 3 
              ? "text-[var(--color-primary)]" 
              : "text-[var(--color-text-muted)] hover:text-black"
            }`}
        >
          Szczegóły
          {view === 3 && (
            <span className="absolute left-0 -bottom-[1px] w-full h-[2px] bg-[var(--color-primary)]" />
          )}
        </button>

      </div>

      {/* CONTENT */}
      <Suspense fallback={<Spinner />}>
        {renderView()}
      </Suspense>
    </section>
  );
};

export default Offer;