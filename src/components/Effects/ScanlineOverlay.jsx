export default function ScanlineOverlay({ opacity = 0.05, className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-10 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Horizontal scanlines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 255, ${opacity}) 2px,
            rgba(0, 255, 255, ${opacity}) 4px
          )`,
          backgroundSize: "100% 4px",
        }}
      />

      {/* Moving scan line */}
      <div
        className="absolute left-0 w-full h-[2px] bg-aiml-glow"
        style={{
          opacity: opacity * 3,
          animation: "scanline-sweep 4s linear infinite",
        }}
      />
    </div>
  );
}
