import ScanlineOverlay from "../Effects/ScanlineOverlay";
import Chip from "../UI/Chip";

export default function TerminalCard({ project, index = 0, className = "" }) {
  return (
    <div
      className={`group relative bg-m-surface-lowest ghost-border overflow-hidden hover:bg-m-surface-container/50 transition-colors duration-300 ${className}`}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <ScanlineOverlay opacity={0.03} />

      {/* Terminal chrome bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-m-primary-container ghost-border border-x-0 border-t-0">
        <span className="w-1.5 h-1.5 bg-aiml-alert/80" />
        <span className="w-1.5 h-1.5 bg-aiml-matrix/60" />
        <span className="w-1.5 h-1.5 bg-aiml-glow/40" />
        <span className="ml-3 font-display text-[10px] text-m-outline tracking-wider font-bold">
          PRJ_{project.id.replace("-", "_").toUpperCase()}.SYS
        </span>
        {project.status && (
          <span
            className={`ml-auto font-display text-[10px] tracking-widest uppercase font-bold ${
              project.statusColor === "matrix"
                ? "text-aiml-matrix"
                : "text-aiml-glow"
            }`}
          >
            [{project.status}]
          </span>
        )}
      </div>

      {/* Content Layer (Negative Depth via Lowest Surface) */}
      <div className="relative z-20 p-6 opacity-90 group-hover:opacity-100 transition-opacity">
        <h3 className="font-display text-display-sm text-m-on-surface tracking-[-0.05em] uppercase mb-2 group-hover:animate-[glitch-stutter_0.3s_ease-in-out_infinite]">
          {project.title}
        </h3>
        
        <p className="font-display text-label-sm text-aiml-glow/80 tracking-[0.2em] uppercase mb-5 border-b border-m-outline-variant/10 pb-2 inline-block">
          {project.tagline}
        </p>
        
        <p className="font-body text-body-sm text-m-on-surface-variant leading-relaxed mb-6 w-11/12">
          {project.description}
        </p>

        {/* Technical Arrays */}
        <div className="mb-6">
          <span className="font-display text-label-sm text-m-outline tracking-wider uppercase mb-3 block">
             dependencies //
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Chip key={t} label={t} territory="aiml" />
            ))}
          </div>
        </div>

        {/* Execution Links */}
        <div className="flex items-center gap-4 mt-8 pt-4 border-t border-m-outline-variant/10">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-2"
            >
              <span className="font-display text-label-sm text-aiml-glow/40 group-hover/link:text-aiml-glow transition-colors">
                $
              </span>
              <span className="font-display text-label-sm text-m-on-surface group-hover/link:text-aiml-glow tracking-widest uppercase transition-colors">
                EXECUTE_SOURCE
              </span>
            </a>
          )}
        </div>
      </div>
      
      {/* Abstract Grid Background Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] mix-blend-overlay" />
    </div>
  );
}
