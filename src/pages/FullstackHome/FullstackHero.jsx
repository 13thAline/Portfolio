import { motion } from "framer-motion";
import Button from "../../components/UI/Button";
import { profile } from "../../data/profile";
import TechOrbit from "../../components/Effects/TechOrbit";

export default function FullstackHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pr-8 lg:pr-16 overflow-hidden">
      {/* Dynamic 3D/Orbit effect replacing static graph */}
      <div className="absolute right-[-20%] lg:right-[-10%] top-1/2 -translate-y-1/2 w-[600px] lg:w-[1200px] h-[600px] lg:h-[1200px] opacity-60 lg:opacity-100 pointer-events-none">
        <TechOrbit />
      </div>

      <div className="relative z-10 max-w-2xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-display text-[10px] lg:text-label-sm font-semibold text-fs-cyan tracking-[0.2em] uppercase block mb-4 lg:mb-8">
            {profile.fullstack.subtitle}
          </span>
          <h1 className="font-body text-5xl sm:text-7xl lg:text-[6rem] font-light text-neutral-900 tracking-tighter leading-none mb-4 lg:mb-6">
            Robust
            <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-fs-cyan to-blue-500 drop-shadow-sm">
              Web
            </span>
            <br />
            Architecture.
          </h1>
          <p className="font-body text-[14px] lg:text-body-lg text-neutral-600 leading-relaxed mb-8 lg:mb-12 font-light max-w-lg border-l-2 border-fs-cyan/30 pl-4 py-2">
            {profile.fullstack.bio}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6">
            <Button
              territory="fullstack"
              variant="primary"
              onClick={() => {
                const el = document.getElementById("fs-projects");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Work
            </Button>
            <Button
              territory="fullstack"
              variant="outline"
              onClick={() => {
                const el = document.getElementById("fs-profile");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Stack Details
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-fs-cyan/20 to-transparent" />
    </section>
  );
}
