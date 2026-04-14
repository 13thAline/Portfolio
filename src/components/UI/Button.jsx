import { usePersona } from "../../context/PersonaContext";

export default function Button({
  children,
  variant = "primary",
  territory,
  onClick,
  href,
  className = "",
  ...props
}) {
  const { persona } = usePersona();
  const activeTerritory = territory || persona;

  const Tag = href ? "a" : "button";
  const linkProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

  const baseClasses =
    "inline-flex items-center gap-2 px-6 py-3 font-display text-body-md font-medium tracking-wide transition-none cursor-pointer select-none";

  const variants = {
    aiml: {
      primary:
        "bg-aiml-glow text-aiml-void hover:bg-aiml-matrix hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]",
      secondary:
        "bg-transparent text-aiml-glow border border-aiml-glow/20 hover:bg-aiml-glow/10",
      ghost:
        "bg-transparent text-aiml-glow hover:text-aiml-matrix",
    },
    fullstack: {
      primary:
        "bg-white/10 backdrop-blur-[32px] text-m-on-bg border border-white/10 hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(125,244,255,0.06)] transition-all duration-300 ease-out",
      secondary:
        "bg-transparent text-fs-cyan border border-fs-cyan/20 hover:bg-fs-cyan/5 transition-all duration-300",
      ghost:
        "bg-transparent text-fs-cyan hover:text-fs-cyan-fixed transition-colors duration-300",
    },
    neutral: {
      primary: "bg-m-on-surface text-m-bg hover:opacity-90",
      secondary: "bg-transparent text-m-on-surface border border-m-outline-variant/20",
      ghost: "bg-transparent text-m-on-surface hover:text-aiml-glow",
    },
  };

  const territoryClasses = variants[activeTerritory]?.[variant] || variants.neutral[variant];

  return (
    <Tag
      className={`${baseClasses} ${territoryClasses} ${className}`}
      onClick={onClick}
      {...linkProps}
      {...props}
    >
      {children}
    </Tag>
  );
}
