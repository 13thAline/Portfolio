import { useNavigate } from "react-router-dom";
import { usePersona } from "../../context/PersonaContext";

export default function PersonaSwitcher() {
  const { persona, getOppositeRoute } = usePersona();
  const navigate = useNavigate();

  // Don't show on Gateway
  if (persona === "neutral") return null;

  const oppositeRoute = getOppositeRoute();
  const isAiml = persona === "aiml";

  return (
    <button
      onClick={() => navigate(oppositeRoute)}
      className={`fixed bottom-8 right-8 z-50 flex items-center gap-3 px-5 py-3 cursor-pointer transition-all duration-300 ${
        isAiml
          ? "bg-m-surface-highest border border-m-outline-variant/15 text-m-on-surface hover:border-fs-cyan/30 hover:shadow-[0_0_20px_rgba(0,219,233,0.1)]"
          : "bg-white/10 backdrop-blur-[20px] border border-white/10 text-m-surface hover:border-aiml-glow/30 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)]"
      }`}
      aria-label={`Switch to ${isAiml ? "Fullstack" : "AIML"} territory`}
    >
      <span className="material-symbols-outlined text-[18px]">
        {isAiml ? "auto_awesome" : "swords"}
      </span>
      <span className="font-display text-label-sm tracking-wider uppercase">
        {isAiml ? "→ Fullstack" : "→ AIML"}
      </span>
      <span
        className={`w-2 h-2 ${
          isAiml ? "bg-fs-cyan animate-pulse" : "bg-aiml-glow animate-pulse"
        }`}
      />
    </button>
  );
}
