import { useState, useEffect } from "react";
import { STATUS_CONFIG, normalizeStatus } from "../../utils/statusOfFlat";
import cords from "./garageCords.json";

type Props = {
  garages: any[];
  type: "zewnetrzne" | "podziemne";
  onSelect?: (id: string) => void;
  selectedId?: string | null;
};

const CONFIG = {
  zewnetrzne: {
    image: "/parking_zewnetrzny.webp",
    alt: "Parking zewnętrzny",
    coords: cords.outdoorCoords,
    viewBox: "0 0 708 1054",
  },
  podziemne: {
    image: "/parking_wewnetrzny.webp",
    alt: "Parking podziemny",
    coords: cords.undergroundCoords,
    viewBox: "0 0 820 1141",
  },
};

const GarageMap = ({ garages, type, onSelect, selectedId }: Props) => {
  const [hovered, setHovered] = useState<any>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const { image, coords, viewBox, alt } = CONFIG[type];

  // 🔥 reset przy zmianie typu (żeby nie było ghostów)
  useEffect(() => {
    setHovered(null);
    setImageLoaded(false);
  }, [type]);

  const garageMap = Object.fromEntries(
    garages.map((g) => [g.id, g])
  );

  const handleClick = (id: string) => {
    setHovered(null);
    onSelect?.(id);

    const table = document.getElementById("garageTable");
    if (!table) return;

    const rect = table.getBoundingClientRect();
    const isVisible =
      rect.top >= 0 && rect.bottom <= window.innerHeight;

    if (!isVisible) {
      table.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative w-full max-w-[800px] mx-auto" id="garageMap">

      {/* IMAGE */}
      <img
        src={image}
        alt={alt}
        onLoad={() => setImageLoaded(true)}
        className={`w-full transition-opacity duration-300 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* SVG dopiero po załadowaniu */}
      {imageLoaded && (
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox={viewBox}
        >
          {coords.map((area: any) => {
            const data = garageMap[area.id];

            const normalized = normalizeStatus(data?.status);
            const config = STATUS_CONFIG[normalized];

            const [x1, y1, x2, y2] = area.coords;
            const isSelected = selectedId === area.id;

            return (
              <rect
                key={area.id}
                x={Math.min(x1, x2)}
                y={Math.min(y1, y2)}
                width={Math.abs(x2 - x1)}
                height={Math.abs(y2 - y1)}
                onClick={() => handleClick(area.id)}
                onMouseEnter={() =>
                  setHovered({ ...area, status: normalized })
                }
                onMouseLeave={() => setHovered(null)}
                className="cursor-pointer transition-all duration-200"
                style={{
                  fill: config?.mapColor || "rgba(255,255,255,0.2)",
                  opacity: hovered?.id === area.id ? 0.7 : 1,
                  stroke: isSelected ? "#ff0000" : "none",
                  strokeWidth: isSelected ? 4 : 0,
                }}
              />
            );
          })}
        </svg>
      )}

      {/* TOOLTIP */}
      {hovered && imageLoaded && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 
          bg-black text-white px-3 py-2 text-sm rounded shadow flex gap-2">

          <span>{hovered.id}</span>

          <span className={`px-2 py-0.5 rounded text-xs 
            ${STATUS_CONFIG[hovered.status as keyof typeof STATUS_CONFIG]?.badge}`}>
            {STATUS_CONFIG[hovered.status as keyof typeof STATUS_CONFIG]?.label}
          </span>

        </div>
      )}
    </div>
  );
};

export default GarageMap;