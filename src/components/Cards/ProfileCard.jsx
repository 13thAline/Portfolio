import { motion } from "framer-motion";
import ScanlineOverlay from "../Effects/ScanlineOverlay";

export default function ProfileCard({ territory, profile }) {
  const isAiml = territory === "aiml";

  if (isAiml) {
    return (
      <div className="bg-m-surface-lowest ghost-border p-6 lg:p-8 relative group max-w-sm">
        <ScanlineOverlay opacity={0.06} />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-aiml-glow/50 to-transparent" />
        
        {/* Top Info */}
        <div className="flex items-center gap-3 mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
          <span className="w-2 h-2 bg-aiml-alert animate-ping" />
          <span className="font-display text-[10px] text-aiml-matrix tracking-[0.3em] font-bold uppercase">
            TARGET_ACQUIRED
          </span>
        </div>

        {/* Image Container with CSS Mix Blend Modes / Grayscale */}
        <div className="relative aspect-square overflow-hidden mb-6 ghost-border grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700">
          <div className="absolute inset-0 bg-aiml-glow/10 mix-blend-overlay z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
          <img 
            src={profile.image} 
            alt={profile.name} 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Name and Title */}
        <h3 className="font-display text-headline-sm text-m-on-surface uppercase tracking-tight mb-1 group-hover:text-aiml-glow transition-colors">
          {profile.name}
        </h3>
        <span className="font-display text-[10px] text-m-outline-variant tracking-widest uppercase block mb-4">
          ID: {profile.title}
        </span>

        <p className="font-display text-body-sm text-m-on-surface-variant leading-relaxed opacity-80">
          [STATUS]: Engineering deploying scale systems.
        </p>
      </div>
    );
  }

  // Fullstack Mode: Vibrant colors, glass layers
  return (
    <div className="relative group max-w-sm">
      {/* Ambient background glow - vibrant colors introduced */}
      <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 via-yellow-300 to-fs-cyan rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
      
      <div className="relative bg-white/60 backdrop-blur-xl border border-white/40 p-8 rounded-2xl shadow-[0_20px_40px_rgba(255,100,100,0.05)] overflow-hidden">
        {/* Image */}
        <div className="relative w-32 h-32 mb-8 mx-auto rounded-full overflow-hidden border-2 border-white/60 shadow-lg group-hover:scale-105 transition-transform duration-500 ease-out">
          <img 
            src={profile.image} 
            alt={profile.name} 
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Text Details */}
        <div className="text-center">
          <h3 className="font-body text-title-lg text-neutral-900 font-semibold mb-1">
            {profile.name}
          </h3>
          <span className="font-body text-label-sm font-medium text-fs-cyan tracking-widest uppercase block mb-6">
            {profile.subtitle}
          </span>
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-black/10 to-transparent mb-6" />
          <p className="font-body text-body-sm text-neutral-500 leading-relaxed max-w-[250px] mx-auto">
            Architecting high-performance web applications using modern stacks.
          </p>
        </div>
      </div>
    </div>
  );
}
