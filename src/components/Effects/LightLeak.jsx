export default function LightLeak({ className = "" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Primary diagonal light leak */}
      <div
        className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4"
        style={{
          background:
            "linear-gradient(135deg, rgba(0, 219, 233, 0.08) 0%, transparent 60%)",
        }}
      />

      {/* Secondary bottom-left glow */}
      <div
        className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(125, 244, 255, 0.05) 0%, transparent 70%)",
        }}
      />

      {/* Subtle top shimmer */}
      <div
        className="absolute top-0 left-0 w-full h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0, 219, 233, 0.2), transparent)",
        }}
      />
    </div>
  );
}
