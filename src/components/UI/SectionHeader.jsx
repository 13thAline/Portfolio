import GlitchText from "../Effects/GlitchText";

export default function SectionHeader({
  title,
  subtitle,
  territory = "aiml",
  className = "",
}) {
  if (territory === "aiml") {
    return (
      <div className={`mb-12 ${className}`}>
        <div className="flex items-center gap-3 mb-3">
          <span className="w-2 h-2 bg-aiml-matrix animate-pulse" />
          <span className="font-display text-label-sm text-aiml-matrix/60 tracking-widest uppercase">
            {subtitle}
          </span>
        </div>
        <GlitchText
          text={title}
          as="h2"
          className="font-display text-display-sm text-m-on-surface tracking-tight uppercase"
          intensity="low"
        />
        <div className="mt-4 h-[1px] bg-gradient-to-r from-aiml-glow/30 to-transparent w-48" />
      </div>
    );
  }

  return (
    <div className={`mb-16 ${className}`}>
      {subtitle && (
        <span className="font-body text-label-md text-fs-cyan tracking-widest uppercase mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="font-display text-display-sm text-neutral-900 tracking-tight">
        {title}
      </h2>
      <div className="mt-6 h-[1px] bg-gradient-to-r from-fs-cyan/30 to-transparent w-32" />
    </div>
  );
}
