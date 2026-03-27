/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './offerPicture.css';
import ImageMapper from 'react-img-mapper';
import buildingMap from './buildigMap';
import Spinner from '../spinner/Spinner';

const OfferPicture = () => {
  const [map, setMap] = useState(buildingMap);
  const [loading, setLoading] = useState(true);

  const calcParentWidth = () => {
    if (window.outerWidth < 420) {
      return 420;
    } if (window.outerWidth < 950) {
      return 850;
    }
    return 1400;
  };
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? <Spinner /> : ''}
      <div className="offer-picture__container">
        { map.name !== 'buildingMap' ? <button type="button" onClick={() => setMap(buildingMap)}><i className="fa-solid fa-arrow-left" />Cofnij</button> : ''}
        <ImageMapper
          onClick={(area) => {
            map.name === 'buildingMap' ? setMap(area.id) : window.open(area.href, '_blank');
          }}
          className="img-map"
          src={map.src}
          map={map}
          key={map.name}
          responsive
          parentWidth={calcParentWidth()}
        />
      </div>
    </>
  );
};

export default OfferPicture;
