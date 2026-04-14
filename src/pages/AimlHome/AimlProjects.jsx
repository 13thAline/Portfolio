import TerminalCard from "../../components/Cards/TerminalCard";
import SectionHeader from "../../components/UI/SectionHeader";
import { projects } from "../../data/projects";
import { useScrollReveal } from "../../utils/useScrollReveal";

export default function AimlProjects() {
  const headerRef = useScrollReveal();

  return (
    <section id="aiml-projects" className="relative bg-aiml-void py-32 px-8 lg:px-16 border-t border-m-outline-variant/10">
      {/* Absolute void background */}
      
      {/* Asymmetrical Left-focused Header */}
      <div ref={headerRef} className="opacity-0 [&.revealed]:opacity-100 transition-opacity duration-500 max-w-2xl mb-16">
        <SectionHeader
          title="DEPLOYED_SYSTEMS"
          subtitle="Project Archive //"
          territory="aiml"
        />
      </div>

      {/* Project Stack - Strictly asymmetrical */}
      <div className="flex flex-col gap-12 max-w-4xl mr-auto ml-0">
        {projects.aiml.map((project, i) => (
          <ProjectReveal key={project.id} index={i}>
            {/* Shift every alternating element slightly to create jaggedness */}
            <div className={`${i % 2 !== 0 ? 'lg:ml-12 lg:-mr-12' : ''}`}>
              <TerminalCard project={project} index={i} />
            </div>
          </ProjectReveal>
        ))}
      </div>

      {/* Terminal footer */}
      <div className="mt-24 max-w-4xl mr-auto ml-0 flex items-center gap-4">
        <span className="font-display text-label-sm text-aiml-alert tracking-wider border border-aiml-alert/30 px-2 py-1">
          TOTAL_SYSTEMS: 0{projects.aiml.length}
        </span>
        <span className="h-[1px] flex-1 bg-gradient-to-r from-aiml-matrix/40 to-transparent" />
        <span className="font-display text-label-sm text-aiml-glow/30 tracking-widest uppercase">
          [ EOF ]
        </span>
      </div>
    </section>
  );
}

function ProjectReveal({ children, index }) {
  const ref = useScrollReveal({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className="opacity-0 -translate-x-8 [&.revealed]:opacity-100 [&.revealed]:translate-x-0"
      style={{
        transition: `opacity 0.4s steps(4) ${index * 120}ms, transform 0.4s steps(4) ${index * 120}ms`,
      }}
    >
      {children}
    </div>
  );
}
