export default function Chip({ label, territory = "aiml", className = "" }) {
  const styles = {
    aiml: "bg-m-surface-highest text-aiml-glow/80 font-display text-label-sm tracking-wider uppercase",
    fullstack: "bg-white/5 backdrop-blur-sm text-m-on-surface-variant font-body text-body-sm",
  };

  return (
    <span
      className={`inline-block px-3 py-1 ${styles[territory] || styles.aiml} ${className}`}
    >
      {label}
    </span>
  );
}
