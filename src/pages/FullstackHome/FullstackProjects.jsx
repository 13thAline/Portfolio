import GlassCard from "../../components/Cards/GlassCard";
import SectionHeader from "../../components/UI/SectionHeader";
import { projects } from "../../data/projects";
import { useScrollReveal } from "../../utils/useScrollReveal";

export default function FullstackProjects() {
  const headerRef = useScrollReveal();

  return (
    <section id="fs-projects" className="relative bg-fs-light py-32 px-8 lg:px-16 overflow-hidden border-t border-black/5">
      {/* Ethereal background gradient + 45deg light leak */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(45deg, rgba(0,219,233,0.02) 0%, rgba(250,250,250,1) 60%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-start w-full">
        {/* Left-focused Header */}
        <div
          ref={headerRef}
          className="opacity-0 [&.revealed]:opacity-100 transition-opacity duration-700 max-w-2xl text-left mb-16 pl-0 lg:pl-8"
        >
          <SectionHeader
            title="Selected Work"
            subtitle="Projects"
            territory="fullstack"
          />
        </div>

        {/* Project Stack - Strictly left aligned */}
        <div className="flex flex-col gap-12 w-full max-w-4xl mr-auto ml-0 pl-0 lg:pl-8">
          {projects.fullstack.map((project, i) => (
            <ProjectReveal key={project.id} index={i}>
              <GlassCard project={project} index={i} />
            </ProjectReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectReveal({ children, index }) {
  const ref = useScrollReveal({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-6 translate-x-6 [&.revealed]:opacity-100 [&.revealed]:translate-y-0 [&.revealed]:translate-x-0 w-full"
      style={{
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 150}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 150}ms`,
      }}
    >
      {children}
    </div>
  );
}
