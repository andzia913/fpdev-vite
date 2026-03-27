import React, { useState, lazy, Suspense } from 'react';
import './offer.css';
import Spinner from '../../components/spinner/Spinner';
import { OfferTable } from '../../components';
const OfferPicture = lazy(() => import('../../components/offerPicture/OfferPicture'));
const OfferDetails = lazy(() => import('../../components/offerDetalils/OfferDetails'));



const Offer = () => {
  const changeOnOfferDetails = () => {
    setView(<OfferDetails />);
    setViewNum(3);
  };
  const [view, setView] = useState(<OfferTable changeOnOfferDetails={changeOnOfferDetails} />);
  const [viewNum, setViewNum] = useState(1);

  return (
    <div className="offer-container section__margin" id="offer">
      <h2 className="section-heading offer-container__h1">
        Sprawdź naszą ofertę mieszkań!
      </h2>
      <div className="offer-container__buttons">
        <button
          type="button"
          onClick={() => {
            setView(<OfferTable changeOnOfferDetails={changeOnOfferDetails} />);
            setViewNum(1);
          }}
          className={`${viewNum === 1 ? 'offer-button__active' : ''}`}
        >Wybierz z Listy
        </button>
        <button
          type="button"
          onClick={() => {
            setView(<OfferPicture />);
            setViewNum(2);
          }}
          className={`${viewNum === 2 ? 'offer-button__active' : ''}`}
        >Wybierz z wizualizacji
        </button>
        <button
          type="button"
          onClick={() => {
            setView(<OfferDetails />);
            setViewNum(3);
          }}
          className={`${viewNum === 3 ? 'offer-button__active' : ''}`}
        >Szczegóły
        </button>
        <div className="offer-container__border-line" />
      </div>
      <Suspense fallback={<Spinner/>}>{view}</Suspense>
    </div>
  );
};

export default Offer;
