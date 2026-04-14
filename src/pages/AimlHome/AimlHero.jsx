import GlitchText from "../../components/Effects/GlitchText";
import DataTicker from "../../components/Effects/DataTicker";
import Button from "../../components/UI/Button";
import { profile } from "../../data/profile";

export default function AimlHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center py-20 pr-8 lg:pr-16">
      <div className="absolute top-1/4 right-[10%] w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-aiml-glow/5 rounded-full blur-[80px] lg:blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl px-4 lg:px-0">
        <span className="font-display text-[8px] lg:text-[10px] text-aiml-alert tracking-[0.3em] font-bold uppercase mb-6 block border-l-2 border-aiml-alert pl-4">
          {profile.aiml.subtitle}
        </span>

        <h1 className="font-display text-5xl sm:text-7xl md:text-[5rem] lg:text-[7rem] text-m-on-surface tracking-tighter leading-[0.9] mb-4 uppercase mix-blend-screen">
          <GlitchText text="SYSTEM_" intensity="high" as="span" />
          <br />
          <GlitchText text="ARCHITECT" intensity="medium" as="span" className="text-m-outline-variant" />
        </h1>

        <p className="font-display text-label-sm lg:text-label-md text-m-outline tracking-wider max-w-xl leading-relaxed mb-6 lg:mb-12 border-l border-m-outline-variant/30 pl-6">
          {">"} [INIT] Deploying structural framework... <br />
          {">"} [WARN] Optimization prioritized over aesthetics. <br />
          {">"} [LOAD] Establishing neural links...
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-6">
          <Button
            territory="aiml"
            onClick={() => {
              const el = document.getElementById("aiml-projects");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            [ EXECUTE_PROJECTS ]
          </Button>
          
          <Button
            territory="aiml"
            variant="ghost"
            onClick={() => {
              const el = document.getElementById("aiml-profile");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            READ_BIOGRAPHY
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-20">
        <DataTicker speed={60} className="py-2 border-y border-m-outline-variant/20 bg-aiml-void/80 backdrop-blur-sm" />
      </div>
    </section>
  );
}
