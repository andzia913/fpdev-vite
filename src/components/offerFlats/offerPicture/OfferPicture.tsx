import { useState, useRef, useEffect } from "react";
import buildingMap from "./buildigMap";
import { STATUS_CONFIG } from "../../../utils/statusOfFlat";

const coordsToPoints = (coords: number[]) => {
  const pts = [];
  for (let i = 0; i < coords.length; i += 2) {
    pts.push(`${coords[i]},${coords[i + 1]}`);
  }
  return pts.join(" ");
};

const getFloorLabel = (name: string) => {
  switch (name) {
    case "groundFloor":
      return "Parter";
    case "firstFloor":
      return "1 piętro";
    case "secondFloor":
      return "2 piętro";
    case "thirdFloor":
      return "3 piętro";
    default:
      return "Budynek";
  }
};

const clamp = (val: number, min: number, max: number) =>
  Math.min(Math.max(val, min), max);

const OfferPicture = () => {
  const [map, setMap] = useState<any>(buildingMap);
  const [hovered, setHovered] = useState<any>(null);
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const isTouchDragging = useRef(false);
  const lastTouch = useRef({ x: 0, y: 0 });
  const lastTouchDistance = useRef<number | null>(null);

  // 🔥 reset hover + loader przy zmianie mapy
  useEffect(() => {
    setHovered(null);
    setImageLoaded(false);
  }, [map]);

  // ===== CLICK =====
  const handleClick = (area: any) => {
    setHovered(null);

    if (map.name === "buildingMap") {
      const next = buildingMap.areas.find((a: any) => a.id === area.id);
      if (next?.map) {
        setMap(next.map);
        resetView();
      }
    } else {
      window.open(area.href, "_blank");
    }
  };

  const resetView = () => {
    setScale(1);
    setPos({ x: 0, y: 0 });
    setHovered(null);
  };

  // ===== TOUCH =====
  const getTouchDistance = (touches: any) => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const onTouchStart = (e: any) => {
    if (e.touches.length === 1) {
      isTouchDragging.current = true;
      lastTouch.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    }
  };

  const onTouchMove = (e: any) => {
    // pinch zoom
    if (e.touches.length === 2) {
      const dist = getTouchDistance(e.touches);

      if (lastTouchDistance.current) {
        const delta = dist - lastTouchDistance.current;
        setScale((s) => clamp(s + delta * 0.005, 1, 4));
      }

      lastTouchDistance.current = dist;
      return;
    }

    // drag
    if (e.touches.length === 1 && isTouchDragging.current) {
      const touch = e.touches[0];

      const dx = touch.clientX - lastTouch.current.x;
      const dy = touch.clientY - lastTouch.current.y;

      setPos((p) => ({
        x: p.x + dx,
        y: p.y + dy,
      }));

      lastTouch.current = {
        x: touch.clientX,
        y: touch.clientY,
      };
    }
  };

  const onTouchEnd = () => {
    isTouchDragging.current = false;
    lastTouchDistance.current = null;
  };

  // ===== MOUSE =====
  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });

  const onMouseDown = (e: any) => {
    dragging.current = true;
    last.current = { x: e.clientX, y: e.clientY };
  };

  const onMouseMove = (e: any) => {
    if (!dragging.current) return;

    const dx = e.clientX - last.current.x;
    const dy = e.clientY - last.current.y;

    setPos((p) => ({
      x: p.x + dx,
      y: p.y + dy,
    }));

    last.current = { x: e.clientX, y: e.clientY };
  };

  const onMouseUp = () => {
    dragging.current = false;
  };

  const onWheel = (e: any) => {
    e.preventDefault();
    setScale((s) => clamp(s + -e.deltaY * 0.001, 1, 4));
  };

  return (
    <div className="w-full">

      {/* HEADER */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
        <div className="max-w-[1400px] mx-auto px-4 py-3 flex justify-between items-center">

          <div className="flex items-center gap-3">
            {map.name !== "buildingMap" && (
              <button
                onClick={() => {
                  setMap(buildingMap);
                  resetView();
                }}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white"
              >
                ←
              </button>
            )}

            <div>
              <div className="text-xs text-gray-500">
                Wybór mieszkań
              </div>
              <div className="font-semibold text-lg">
                {getFloorLabel(map.name)}
              </div>
            </div>
          </div>

          <button
            onClick={resetView}
            className="text-sm px-3 py-1 rounded border hover:bg-gray-100"
          >
            Reset widoku
          </button>
        </div>
      </div>

      {/* MAP */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden bg-gray-100 touch-none"
        style={{ touchAction: "none" }}
        onWheel={onWheel}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <img
            src={map.src}
            onLoad={() => setImageLoaded(true)}
            className={`w-full block pointer-events-none transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />

          {imageLoaded && (
            <svg
              className="absolute top-0 left-0 w-full h-full"
              viewBox={`0 0 ${map.width} ${map.height}`}
            >
              {map.areas.map((area: any) => {
                const config =
                  STATUS_CONFIG[area.status as keyof typeof STATUS_CONFIG] ||
                  STATUS_CONFIG.available;

                const common = {
                  key: area.id,
                  onClick: () => handleClick(area),
                  onMouseEnter: () => setHovered(area),
                  onMouseLeave: () => setHovered(null),
                  className: "cursor-pointer transition-all duration-200",
                  style: {
                    fill: config?.mapColor || "rgba(255,255,255,0.2)",
                    opacity: hovered?.id === area.id ? 0.7 : 1,
                  },
                };

                if (area.shape === "poly") {
                  return (
                    <polygon {...common} points={coordsToPoints(area.coords)} />
                  );
                }

                if (area.shape === "rect") {
                  const [x1, y1, x2, y2] = area.coords;

                  return (
                    <rect
                      {...common}
                      x={Math.min(x1, x2)}
                      y={Math.min(y1, y2)}
                      width={Math.abs(x2 - x1)}
                      height={Math.abs(y2 - y1)}
                    />
                  );
                }

                return null;
              })}
            </svg>
          )}
        </div>

        {/* TOOLTIP */}
        {hovered && imageLoaded && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 
            bg-black text-white px-3 py-2 text-sm rounded shadow flex gap-2 items-center">

            <span>{hovered.title}</span>

            {!!hovered.status && (
              <span className={`text-xs px-2 py-0.5 rounded ${
                STATUS_CONFIG[hovered.status as keyof typeof STATUS_CONFIG]?.badge
              }`}>
                {STATUS_CONFIG[hovered.status as keyof typeof STATUS_CONFIG]?.label}
              </span>
            )}
          </div>
        )}
      </div>

      {/* LEGENDA */}
      <div className="max-w-[1400px] mx-auto px-4 py-4 flex gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500"></div> Dostępne
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-400"></div> Rezerwacja
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-500"></div> Sprzedane
        </div>
      </div>
    </div>
  );
};

export default OfferPicture;