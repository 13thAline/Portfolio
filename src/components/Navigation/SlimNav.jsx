import { NavLink, useLocation } from "react-router-dom";
import { usePersona } from "../../context/PersonaContext";

const NAV_ITEMS = {
  neutral: [
    { to: "/", icon: "home", label: "Gateway" },
  ],
  aiml: [
    { to: "/aiml", icon: "swords", label: "Frontier" },
    { scrollTo: "aiml-profile", icon: "terminal", label: "Profile" },
  ],
  fullstack: [
    { to: "/fullstack", icon: "auto_awesome", label: "Projects" },
    { scrollTo: "fs-profile", icon: "person", label: "About" },
  ],
};

export default function SlimNav() {
  const { persona } = usePersona();
  const location = useLocation();
  const items = [
    ...(persona !== "neutral" ? [{ to: "/", icon: "blur_on", label: "Gateway" }] : []),
    ...(NAV_ITEMS[persona] || NAV_ITEMS.neutral),
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed left-0 top-0 h-full w-16 z-50 flex flex-col items-center py-8 gap-6 bg-m-primary-container/80 backdrop-blur-sm border-r border-m-outline-variant/10">
      {/* Logo mark */}
      <div className="mb-4 w-8 h-8 flex items-center justify-center">
        <span
          className={`font-display text-title-lg font-bold ${
            persona === "aiml"
              ? "text-aiml-glow"
              : persona === "fullstack"
              ? "text-fs-cyan"
              : "text-m-on-surface"
          }`}
        >
          S
        </span>
      </div>

      {/* Nav items */}
      <div className="flex flex-col gap-2 flex-1">
        {items.map((item) => {
          const isActive = item.to ? location.pathname === item.to : false;
          
          const sharedClasses = `group relative w-10 h-10 flex items-center justify-center transition-all duration-200 cursor-pointer ${
            isActive
              ? persona === "aiml"
                ? "text-aiml-glow bg-aiml-glow/10"
                : persona === "fullstack"
                ? "text-fs-cyan bg-fs-cyan/10"
                : "text-m-on-surface bg-m-surface-high"
              : "text-m-outline hover:text-m-on-surface"
          }`;

          const ItemWrapper = item.to ? NavLink : "button";
          const props = item.to 
            ? { to: item.to, title: item.label } 
            : { onClick: () => handleScroll(item.scrollTo), title: item.label };

          return (
            <ItemWrapper
              key={item.to || item.scrollTo}
              className={sharedClasses}
              {...props}
            >
              <span className="material-symbols-outlined text-[20px]">
                {item.icon}
              </span>

              {/* Tooltip */}
              <span className="absolute left-full ml-3 px-2 py-1 bg-m-surface-highest text-m-on-surface text-label-sm font-display tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {item.label}
              </span>

              {/* Active indicator */}
              {isActive && (
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-5 ${
                    persona === "aiml"
                      ? "bg-aiml-glow shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                      : persona === "fullstack"
                      ? "bg-fs-cyan"
                      : "bg-m-on-surface"
                  }`}
                />
              )}
            </ItemWrapper>
          );
        })}
      </div>

      {/* Bottom indicator */}
      <div className="mt-auto">
        <div
          className={`w-1 h-8 ${
            persona === "aiml"
              ? "bg-aiml-glow/30"
              : persona === "fullstack"
              ? "bg-fs-cyan/30"
              : "bg-m-outline-variant/30"
          }`}
        />
      </div>
    </nav>
  );
}
