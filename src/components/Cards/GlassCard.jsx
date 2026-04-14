import Chip from "../UI/Chip";

export default function GlassCard({ project, index = 0, className = "" }) {
  // Generate a distinct accent color based on index
  const accents = [
    "from-rose-400 to-orange-300",
    "from-fs-cyan to-blue-400",
    "from-yellow-300 to-lime-300",
    "from-purple-400 to-rose-400",
  ];
  const accent = accents[index % accents.length];

  return (
    <div
      className={`group relative overflow-hidden bg-white/60 backdrop-blur-[32px] border border-white/40 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,0,0,0.05)] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] rounded-3xl ${className}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Light Leaks Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Abstract Creative Visual Area (Top Half) */}
      <div className="relative h-48 w-full overflow-hidden bg-neutral-50 mb-6">
        <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />
        
        {/* Floating Architect Shapes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none">
          <div className="w-24 h-24 bg-white/40 backdrop-blur-md border border-white/60 rounded-full absolute -ml-16 -mt-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-1000 ease-out shadow-sm" />
          <div className="w-32 h-32 bg-white/30 backdrop-blur-sm border border-white/50 rounded-2xl absolute ml-12 mt-4 group-hover:-translate-y-4 group-hover:-rotate-6 transition-all duration-1000 ease-out shadow-lg" />
          <div className="w-16 h-16 bg-white/60 backdrop-blur-lg border border-white/80 rounded-lg absolute ml-24 -mt-12 group-hover:translate-x-4 group-hover:rotate-45 transition-all duration-1000 ease-out shadow-md" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-10 pb-10">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-body text-[2rem] text-neutral-900 tracking-tight font-light group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neutral-900 group-hover:to-neutral-500 transition-all duration-500">
            {project.title}
          </h3>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-fs-cyan transition-colors duration-300 transform hover:rotate-12"
            >
              <span className="material-symbols-outlined text-[28px]">code</span>
            </a>
          )}
        </div>

        <p className="font-display text-label-sm text-fs-cyan tracking-[0.1em] uppercase mb-6 font-semibold">
          {project.tagline}
        </p>

        <p className="font-body text-body-md text-neutral-500 leading-relaxed mb-10 line-clamp-3">
          {project.description}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Chip key={t} label={t} territory="fullstack" />
          ))}
        </div>
      </div>

      {/* Ethereal Glow Base */}
      <div className={`absolute -bottom-12 -right-12 w-48 h-48 bg-gradient-to-tl ${accent} opacity-5 group-hover:opacity-20 blur-[50px] transition-all duration-1000 pointer-events-none`} />
    </div>
  );
}
