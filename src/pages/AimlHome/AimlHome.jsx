import { motion } from "framer-motion";
import AimlHero from "./AimlHero";
import AimlProjects from "./AimlProjects";
import ProfileCard from "../../components/Cards/ProfileCard";
import NeuralGraph from "../../components/Effects/NeuralGraph";
import ContactForm from "../../components/Effects/ContactForm";
import { profile } from "../../data/profile";

export default function AimlHome() {
  const { aiml } = profile;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-aiml-void pl-0 lg:pl-16 pb-24 lg:pb-32 overflow-hidden"
    >
      <AimlHero />

      {/* Unified Profile & Technical Section */}
      <section id="aiml-profile" className="py-24 pr-8 lg:pr-24 max-w-7xl border-t border-m-outline-variant/10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Column: Profile Card */}
          <div className="w-full lg:w-1/3">
            <ProfileCard territory="aiml" profile={aiml} />
          </div>

          {/* Right Column: Graphs & Concepts */}
          <div className="w-full lg:w-2/3">
            <div className="bg-m-surface-lowest ghost-border p-8 lg:p-12 relative group mb-12">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-aiml-glow/50 to-transparent" />
              <div className="flex items-center gap-2 mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                <span className="font-display text-[10px] text-aiml-matrix tracking-widest font-bold uppercase">
                  root@core:~# cat bio.sys
                </span>
                <span className="w-2 h-3 bg-aiml-glow animate-[terminal-blink_1s_infinite]" />
              </div>
              <p className="font-body text-body-lg text-m-on-surface-variant leading-relaxed mb-12">
                {aiml.bio}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-display text-label-sm text-aiml-alert tracking-[0.3em] font-bold uppercase mb-8 border-b border-m-outline-variant/10 pb-2">
                    NODE_GRAPH //
                  </h4>
                  <NeuralGraph nodes={aiml.graphNodes} links={aiml.graphLinks} />
                </div>

                <div>
                  <h4 className="font-display text-label-sm text-aiml-glow tracking-[0.3em] font-bold uppercase mb-8 border-b border-m-outline-variant/10 pb-2">
                    TECH_STACK //
                  </h4>
                  <div className="space-y-8">
                    {Object.entries(aiml.skills).map(([category, skills]) => (
                      <div key={category}>
                        <span className="font-display text-[9px] text-m-outline-variant tracking-widest uppercase block mb-3">
                          [{category}]
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {skills.map((skill) => (
                            <div key={skill.name} className="font-display text-[11px] text-m-on-surface tracking-wider bg-m-surface-container px-3 py-1 ghost-border hover:bg-aiml-glow/10 hover:text-aiml-glow transition-colors cursor-default">
                              {skill.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AimlProjects />

      {/* Contact Section */}
      <section className="py-32 pr-8 lg:pr-24 max-w-7xl border-t border-m-outline-variant/10">
        <h2 className="font-display text-headline-md text-m-on-surface uppercase tracking-tight mb-12 border-l-4 border-aiml-alert pl-8">
          INITIATE_CONTACT //
        </h2>
        <ContactForm territory="aiml" />
      </section>
    </motion.div>
  );
}
