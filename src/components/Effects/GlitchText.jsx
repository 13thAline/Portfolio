import { useEffect, useRef, useState } from "react";

export default function GlitchText({
  text,
  as: Tag = "span",
  className = "",
  intensity = "medium",
  active = true,
}) {
  const elRef = useRef(null);
  const [glitchOffset, setGlitchOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!active) return;

    const intensityMap = { low: 3000, medium: 1500, high: 500 };
    const interval = intensityMap[intensity] || 1500;

    const timer = setInterval(() => {
      setGlitchOffset({
        x: (Math.random() - 0.5) * 4,
        y: (Math.random() - 0.5) * 2,
      });

      setTimeout(() => setGlitchOffset({ x: 0, y: 0 }), 150);
    }, interval);

    return () => clearInterval(timer);
  }, [active, intensity]);

  return (
    <Tag
      ref={elRef}
      className={`relative inline-block ${className}`}
      style={{
        transform: active
          ? `translate(${glitchOffset.x}px, ${glitchOffset.y}px)`
          : undefined,
      }}
    >
      {/* Cyan ghost layer */}
      {active && (
        <span
          aria-hidden="true"
          className="absolute inset-0 text-aiml-glow opacity-70"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
            transform: `translate(${-glitchOffset.x * 0.8}px, ${glitchOffset.y * 0.5}px)`,
          }}
        >
          {text}
        </span>
      )}

      {/* Red ghost layer */}
      {active && (
        <span
          aria-hidden="true"
          className="absolute inset-0 text-aiml-alert opacity-70"
          style={{
            clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
            transform: `translate(${glitchOffset.x * 0.6}px, ${-glitchOffset.y * 0.8}px)`,
          }}
        >
          {text}
        </span>
      )}

      {/* Main text */}
      <span className="relative z-10">{text}</span>
    </Tag>
  );
}
