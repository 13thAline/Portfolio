import { motion } from "framer-motion";
import FullstackHero from "./FullstackHero";
import FullstackProjects from "./FullstackProjects";
import ProfileCard from "../../components/Cards/ProfileCard";
import ContactForm from "../../components/Effects/ContactForm";
import { profile } from "../../data/profile";

export default function FullstackHome() {
  const { fullstack } = profile;

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-fs-light pl-0 lg:pl-16 pb-24 lg:pb-32 overflow-hidden"
    >
      <FullstackHero />

      {/* Unified Profile & Technical Section */}
      <section id="fs-profile" className="relative py-32 pr-8 lg:pr-24 max-w-7xl mx-auto border-t border-black/5 z-20">
        
        {/* Vibrant Ambient Glow Layers */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-rose-400/10 rounded-full blur-[100px] mix-blend-multiply pointer-events-none -z-10 animate-[pulse_8s_infinite]" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-yellow-300/15 rounded-full blur-[120px] mix-blend-multiply pointer-events-none -z-10 animate-[pulse_12s_infinite]" />
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column: Profile Card */}
          <div className="w-full lg:w-1/3 pt-12">
            <ProfileCard territory="fullstack" profile={fullstack} />
          </div>

          {/* Right Column: Bio & Categorized Tech Stack */}
          <div className="w-full lg:w-2/3">
            <div className="relative bg-white/60 backdrop-blur-[40px] shadow-[0_40px_100px_rgba(255,100,100,0.03)] p-12 lg:p-16 border border-white rounded-[2rem] overflow-hidden mb-12">
              <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-white to-transparent" />
              
              <p className="font-body text-body-lg text-neutral-600 leading-relaxed mb-16 font-light">
                {fullstack.bio}
              </p>

              <h2 className="font-body text-headline-sm text-neutral-800 tracking-tight font-light border-b border-black/5 pb-4 mb-12">
                Stack Architecture
              </h2>

              <div className="space-y-16">
                {Object.entries(fullstack.skills).map(([category, skills]) => (
                  <div key={category} className="group">
                    <span className="font-display text-[10px] text-fs-cyan tracking-[0.2em] font-bold uppercase block mb-6 px-4 border-l-2 border-fs-cyan/30">
                      {category}
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 px-4">
                      {skills.map((skill) => (
                        <div key={skill.name} className="relative">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-body text-body-md font-medium text-neutral-800 group-hover:text-fs-cyan transition-colors">
                              {skill.name}
                            </h3>
                            <span className="font-display text-[9px] text-neutral-400 font-bold">
                              .{skill.level}
                            </span>
                          </div>
                          <div className="h-[3px] w-full bg-black/[0.03] overflow-hidden rounded-full">
                            <div
                              className="h-full bg-gradient-to-r from-yellow-400 via-rose-400 to-fs-cyan w-0 group-hover:w-full transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FullstackProjects />

      {/* Contact Section */}
      <section className="relative py-32 px-8 lg:px-24 mx-auto border-t border-black/5 z-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,219,233,0.05)_0%,transparent_70%)] pointer-events-none" />
        <ContactForm territory="fullstack" />
      </section>
    </motion.div>
  );
}
