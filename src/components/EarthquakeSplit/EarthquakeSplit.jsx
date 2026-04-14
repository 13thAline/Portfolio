import { useMemo, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateEarthquakePath, CODE_SHARDS } from "../../utils/earthquakePath";

function CodeShards({ points, width }) {
  const shards = useMemo(() => {
    const selected = [];
    for (let i = 0; i < 12; i++) {
      const pointIdx = Math.floor(Math.random() * points.length);
      const point = points[pointIdx];
      const shard = CODE_SHARDS[Math.floor(Math.random() * CODE_SHARDS.length)];
      const side = Math.random() > 0.5 ? 1 : -1;
      selected.push({
        text: shard,
        x: point.x + side * (30 + Math.random() * 60),
        y: point.y + (Math.random() - 0.5) * 20,
        opacity: 0.15 + Math.random() * 0.25,
        rotation: (Math.random() - 0.5) * 8,
      });
    }
    return selected;
  }, [points]);

  return (
    <>
      {shards.map((s, i) => (
        <text
          key={i}
          x={s.x}
          y={s.y}
          fill="#00FFFF"
          opacity={s.opacity}
          fontFamily="'Space Grotesk', sans-serif"
          fontSize="10"
          transform={`rotate(${s.rotation} ${s.x} ${s.y})`}
          style={{ animation: `pixel-flicker ${2 + Math.random() * 3}s infinite` }}
        >
          {s.text}
        </text>
      ))}
    </>
  );
}

function PixelBleed({ points }) {
  const pixels = useMemo(() => {
    const result = [];
    for (let i = 0; i < 30; i++) {
      const pointIdx = Math.floor(Math.random() * points.length);
      const point = points[pointIdx];
      const size = 1 + Math.floor(Math.random() * 4);
      result.push({
        x: point.x + (Math.random() - 0.5) * 80,
        y: point.y + (Math.random() - 0.5) * 30,
        size,
        color: Math.random() > 0.6 ? "#00FFFF" : Math.random() > 0.3 ? "#39FF14" : "#FF3B30",
        opacity: 0.2 + Math.random() * 0.5,
      });
    }
    return result;
  }, [points]);

  return (
    <>
      {pixels.map((p, i) => (
        <rect
          key={i}
          x={p.x}
          y={p.y}
          width={p.size}
          height={p.size}
          fill={p.color}
          opacity={p.opacity}
          style={{ animation: `pixel-flicker ${1 + Math.random() * 4}s infinite` }}
        />
      ))}
    </>
  );
}

export default function EarthquakeSplit({ height = "100vh" }) {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 1280, height: 900 });
  const navigate = useNavigate();

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const { points, leftPath, rightPath } = useMemo(
    () =>
      generateEarthquakePath(
        dimensions.height,
        dimensions.width / 2,
        60,
        50,
        dimensions.width
      ),
    [dimensions]
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height }}
    >
      {/* SVG Definitions */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="clip-left">
            <path d={leftPath} />
          </clipPath>
          <clipPath id="clip-right">
            <path d={rightPath} />
          </clipPath>
        </defs>

        {/* Left territory background (AIML) */}
        <rect
          x="0"
          y="0"
          width={dimensions.width}
          height={dimensions.height}
          fill="#050505"
          clipPath="url(#clip-left)"
        />

        {/* Right territory background (Fullstack) */}
        <rect
          x="0"
          y="0"
          width={dimensions.width}
          height={dimensions.height}
          fill="#FAFAFA"
          clipPath="url(#clip-right)"
        />

        {/* Fracture line glow */}
        <polyline
          points={points.map((p) => `${p.x},${p.y}`).join(" ")}
          fill="none"
          stroke="#00FFFF"
          strokeWidth="2"
          opacity="0.4"
          style={{ filter: "drop-shadow(0 0 8px rgba(0, 255, 255, 0.6))" }}
        />
        <polyline
          points={points.map((p) => `${p.x},${p.y}`).join(" ")}
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.5"
          opacity="0.8"
        />

        {/* Code shards along fracture */}
        <CodeShards points={points} width={dimensions.width} />

        {/* Pixel bleed along fracture */}
        <PixelBleed points={points} />
      </svg>

      {/* Left clickable zone (AIML) */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full z-20 cursor-pointer group"
        onClick={() => navigate("/aiml")}
        role="button"
        aria-label="Enter AIML Territory"
      >
        <div className="absolute inset-0 bg-transparent group-hover:bg-aiml-glow/[0.02] transition-colors duration-300" />
      </div>

      {/* Right clickable zone (Fullstack) */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full z-20 cursor-pointer group"
        onClick={() => navigate("/fullstack")}
        role="button"
        aria-label="Enter Fullstack Territory"
      >
        <div className="absolute inset-0 bg-transparent group-hover:bg-fs-cyan/[0.02] transition-colors duration-300" />
      </div>
    </div>
  );
}
