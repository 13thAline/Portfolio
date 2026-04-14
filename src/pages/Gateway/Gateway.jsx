import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import EarthquakeSplit from "../../components/EarthquakeSplit/EarthquakeSplit";
import GlitchText from "../../components/Effects/GlitchText";
import DataTicker from "../../components/Effects/DataTicker";

export default function Gateway() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-aiml-void"
    >
      {/* Hero section with Earthquake Split */}
      <section className="relative h-[90vh]">
        {/* Earthquake Split SVG background */}
        <EarthquakeSplit height="100%" />

        {/* Left territory content overlay (AIML) */}
        <div className="group absolute top-0 left-0 w-1/2 h-full z-10 pointer-events-none">
          <div className="absolute inset-0 bg-aiml-glow/0 group-hover:bg-aiml-glow/[0.02] transition-colors duration-500 pointer-events-auto" />
          <div className="flex flex-col justify-center h-full pl-[10%] pr-[15%]">
            <div className="mb-4">
              <span className="font-display text-[10px] text-aiml-matrix/80 tracking-[0.4em] font-bold uppercase block transition-all duration-300 group-hover:translate-x-2">
                TERRITORY_ALPHA // AIML_SYSTEMS
              </span>
            </div>

            <GlitchText
              text="SYSTEM_"
              as="h1"
              className="font-display text-[5rem] lg:text-[7rem] xl:text-[9rem] text-m-on-surface uppercase tracking-tighter leading-none mb-1 mix-blend-screen"
              intensity="medium"
            />
            <GlitchText
              text="ERR"
              as="span"
              className="font-display text-[5rem] lg:text-[7rem] xl:text-[9rem] text-aiml-glow uppercase tracking-tighter leading-none block mb-8"
              intensity="high"
            />

            <div className="space-y-1 mb-12 opacity-80 group-hover:opacity-100 transition-opacity">
              <p className="font-display text-label-sm text-m-outline tracking-wider">
                {">"} [LOG_01]: Neural pathway degradation detected.
              </p>
              <p className="font-display text-label-sm text-m-outline tracking-wider">
                {">"} [LOG_02]: Brutalist logic overwriting sensory input.
              </p>
              <p className="font-display text-[10px] text-aiml-alert/80 font-bold tracking-widest mt-2 animate-pulse">
                {">"} [CRITICAL]: The synthesis is fracturing.
              </p>
            </div>

            <Link to="/aiml" className="pointer-events-auto inline-flex items-center gap-4 group/link">
              <span className="font-display text-[12px] text-aiml-glow tracking-[0.2em] font-bold uppercase cursor-pointer hover:text-aiml-matrix transition-colors">
                [ INIT_TERRITORY ]
              </span>
              <span className="w-8 h-[1px] bg-aiml-glow group-hover/link:w-16 transition-all duration-300 group-hover/link:bg-aiml-matrix" />
              <span className="w-2 h-3 bg-aiml-glow animate-[terminal-blink_1s_infinite]" />
            </Link>
          </div>
        </div>

        {/* Right territory content overlay (Fullstack) */}
        <div className="group absolute top-0 right-0 w-1/2 h-full z-10 pointer-events-none">
          {/* Ethereal hover glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-fs-cyan/0 group-hover:to-fs-cyan/5 pointer-events-auto transition-colors duration-1000" />
          
          <div className="flex flex-col justify-center items-end text-right h-full pr-[10%] pl-[15%]">
            <span className="font-display text-[10px] text-neutral-400 tracking-[0.4em] font-bold uppercase mb-6 block transition-all duration-500 group-hover:-translate-x-2">
              Selected Works & Profile
            </span>

            <h2 className="font-body text-[5rem] lg:text-[7rem] xl:text-[9rem] text-neutral-900 tracking-tighter leading-[0.8] mb-2 font-light">
              Sailen
            </h2>
            <h2 className="font-body text-[5rem] lg:text-[7rem] xl:text-[9rem] text-neutral-900 tracking-tighter leading-[0.8] mb-10 font-semibold drop-shadow-[0_20px_40px_rgba(125,244,255,0.15)]">
              Sahoo<span className="text-fs-cyan">.</span>
            </h2>

            <p className="font-body text-body-lg text-neutral-500 max-w-sm leading-relaxed mb-12 font-light">
              Full-stack developer architecting high-performance web applications.
              Building the bridge between heavy backend logic and seamless user experience.
            </p>

            <Link to="/fullstack" className="pointer-events-auto group/link inline-flex items-center gap-4 hover:-translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
              <span className="w-12 h-[1px] bg-fs-cyan/40 group-hover/link:w-24 group-hover/link:bg-fs-cyan transition-all duration-500" />
              <span className="font-body text-headline-sm font-light text-fs-cyan">
                Explore Stack
              </span>
              <span className="material-symbols-outlined text-[20px] text-fs-cyan/60 group-hover/link:text-fs-cyan group-hover/link:translate-x-2 transition-all duration-300">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Data ticker at bottom */}
        <div className="absolute bottom-0 left-0 w-full z-30">
          <DataTicker speed={50} className="py-2 bg-m-primary-container/80 backdrop-blur-md border-y border-m-outline-variant/20" />
        </div>
      </section>

      {/* Philosophy cards section */}
      <section className="relative bg-m-surface-lowest px-8 lg:px-24 py-32 border-t border-m-outline-variant/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-7xl mx-auto border border-m-outline-variant/10">
          {/* AutomatedAggression */}
          <div className="p-12 bg-m-surface-container ghost-border border-b-0 md:border-b md:border-r-0 group hover:bg-m-primary-container transition-colors duration-500">
            <span className="font-display text-[10px] text-aiml-glow tracking-[0.3em] font-bold uppercase block mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
              01 // CORE_LOGIC
            </span>
            <h3 className="font-display text-title-lg text-m-on-surface uppercase tracking-tight mb-4 group-hover:text-aiml-glow transition-colors">
              AutomatedAggression
            </h3>
            <p className="font-body text-body-md text-m-on-surface-variant leading-relaxed opacity-80">
              System-wide enforcement of brutalist paradigms. Elimination of unnecessary curves and padding in favor of terminal efficiency.
            </p>
          </div>

          {/* SublimeInteractivity */}
          <div className="p-12 bg-m-surface-lowest ghost-border border-b-0 md:border-b md:border-r-0 group hover:bg-m-surface-high transition-colors duration-500">
            <span className="font-display text-[10px] text-fs-cyan tracking-[0.3em] font-bold uppercase block mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
              02 // FRONT_END
            </span>
            <h3 className="font-display text-title-lg text-m-on-surface uppercase tracking-tight mb-4 group-hover:text-fs-cyan transition-colors">
              SublimeInteractivity
            </h3>
            <p className="font-body text-body-md text-m-on-surface-variant leading-relaxed opacity-80">
              Where the soul of the machine meets the fluidity of the ocean. Refined, polished, glassmorphic and weightless UI states.
            </p>
          </div>

          {/* FracturedRealities */}
          <div className="p-12 bg-m-surface-low ghost-border group hover:bg-m-surface-highest transition-colors duration-500">
            <span className="font-display text-[10px] text-aiml-alert tracking-[0.3em] font-bold uppercase block mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
              03 // SYNTHESIS
            </span>
            <h3 className="font-display text-title-lg text-m-on-surface uppercase tracking-tight mb-4 group-hover:text-aiml-alert transition-colors">
              FracturedRealities
            </h3>
            <p className="font-body text-body-md text-m-on-surface-variant leading-relaxed opacity-80">
              A collision course between two extremes. The beauty of the glitch meets the logic of the light in a non-linear split.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
