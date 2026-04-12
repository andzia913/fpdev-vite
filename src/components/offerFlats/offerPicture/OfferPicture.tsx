import React, { useState } from "react";
import ImageMapper from "react-img-mapper";
import buildingMap from "./buildigMap";

const OfferPicture = () => {
  const [map, setMap] = useState(buildingMap);

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 py-10 relative">

      {/* BACK BUTTON */}
      {map.name !== "buildingMap" && (
        <button
          onClick={() => setMap(buildingMap)}
          className="absolute top-4 left-4 z-10 flex items-center gap-2 
          bg-white/90 backdrop-blur px-4 py-2 rounded-md shadow-sm 
          border border-[var(--color-border)] 
          hover:bg-white transition"
        >
          ← Cofnij
        </button>
      )}

      {/* IMAGE */}
      <div className="w-full">
        <ImageMapper
          name={map.name}
          src={map.src}
          areas={map.areas as any}
          key={map.name}
          responsive
          parentWidth={Math.min(window.innerWidth - 32, 1400)}
          onClick={(area) => {
            if (map.name === "buildingMap") {
              const next = buildingMap.areas.find(a => a.id === area.id);
              if (next && "map" in next && next.map) setMap(next.map as any);
            } else {
              window.open(area.href, "_blank");
            }
          }}
        />
      </div>

    </div>
  );
};

export default OfferPicture;