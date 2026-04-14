import LightLeak from "../../components/Effects/LightLeak";
import Button from "../../components/UI/Button";
import { profile } from "../../data/profile";
import TechOrbit from "../../components/Effects/TechOrbit";

export default function FullstackHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-fs-light overflow-hidden">
      <LightLeak />

      <div className="relative z-10 w-full px-8 lg:px-16 py-24 max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2">
          {/* Subtitle */}
          <span className="font-body text-label-md text-fs-cyan tracking-[0.2em] uppercase mb-6 block">
            {profile.fullstack.subtitle}
          </span>

          {/* Name */}
          <h1 className="font-display text-[4.5rem] lg:text-[6rem] text-neutral-900 tracking-tight leading-[1.05] mb-2 font-light">
            Sailen
          </h1>
          <h1 className="font-display text-[4.5rem] lg:text-[6rem] text-neutral-900 tracking-tight leading-[1.05] mb-8 font-light">
            Sahoo<span className="text-fs-cyan">.</span>
          </h1>

          {/* Bio */}
          <p className="font-body text-body-lg text-neutral-500 leading-relaxed max-w-xl mb-12">
            {profile.fullstack.bio}
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-6">
            <Button
              territory="fullstack"
              variant="primary"
              onClick={() => {
                const el = document.getElementById("fs-projects");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
              <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
            </Button>
            <Button
              territory="fullstack"
              variant="ghost"
              onClick={() => {
                const el = document.getElementById("fs-profile");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About Me
              <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
            </Button>
          </div>
        </div>

        {/* Right: Architecture Graph */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
            <TechOrbit />
        </div>
      </div>

      {/* Decorative bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-fs-cyan/20 to-transparent" />
    </section>
  );
}
