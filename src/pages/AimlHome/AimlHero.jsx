import GlitchText from "../../components/Effects/GlitchText";
import DataTicker from "../../components/Effects/DataTicker";
import ScanlineOverlay from "../../components/Effects/ScanlineOverlay";
import Button from "../../components/UI/Button";
import { profile } from "../../data/profile";
import { useNavigate } from "react-router-dom";

export default function AimlHero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-aiml-void overflow-hidden">
      <ScanlineOverlay opacity={0.02} />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 px-12 py-24 max-w-5xl">
        {/* System status line */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2 h-2 bg-aiml-matrix animate-pulse" />
          <span className="font-display text-label-sm text-aiml-matrix/60 tracking-[0.3em] uppercase">
            SYSTEM_STATUS: OPERATIONAL
          </span>
          <span className="h-[1px] flex-1 bg-gradient-to-r from-aiml-matrix/20 to-transparent" />
        </div>

        {/* Main title */}
        <GlitchText
          text={profile.aiml.title}
          as="h1"
          className="font-display text-display-lg text-m-on-surface uppercase tracking-tighter leading-none mb-2"
          intensity="medium"
        />

        <div className="flex items-center gap-4 mb-8">
          <span className="font-display text-headline-sm text-aiml-glow/40 tracking-wider uppercase">
            {profile.aiml.subtitle}
          </span>
        </div>

        {/* Bio as terminal output */}
        <div className="bg-m-surface-lowest border border-m-outline-variant/10 p-6 max-w-2xl mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-display text-label-sm text-m-outline tracking-wider">
              $ cat bio.md
            </span>
            <span className="text-aiml-glow animate-[terminal-blink_1s_steps(1)_infinite]">▌</span>
          </div>
          <p className="font-body text-body-md text-m-on-surface-variant leading-relaxed">
            {profile.aiml.bio}
          </p>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-4">
          <Button
            territory="aiml"
            variant="primary"
            onClick={() => {
              const el = document.getElementById("aiml-projects");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="material-symbols-outlined text-[18px]">deployed_code</span>
            VIEW_PROJECTS
          </Button>
          <Button
            territory="aiml"
            variant="secondary"
            onClick={() => navigate("/aiml/profile")}
          >
            <span className="material-symbols-outlined text-[18px]">terminal</span>
            LOAD_PROFILE
          </Button>
        </div>
      </div>

      {/* Data ticker */}
      <div className="absolute bottom-0 left-0 w-full">
        <DataTicker speed={35} className="py-2 border-t border-m-outline-variant/10 bg-m-primary-container/40" />
      </div>
    </section>
  );
}
