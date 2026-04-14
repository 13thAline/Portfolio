import { motion } from "framer-motion";

export default function ArchitectureGraph() {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center -translate-y-12">
      {/* Soft Ambient Radiance */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,100,100,0.05)_0%,transparent_60%)]" />

      <svg width="100%" height="100%" viewBox="0 0 500 500" className="relative z-10 overflow-visible">
        
        {/* DATABASE LAYER (Bottom) */}
        <motion.g
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          {/* Base Plate Isometric */}
          <polygon
            points="250,380 400,310 250,240 100,310"
            fill="rgba(125, 244, 255, 0.05)"
            stroke="rgba(125, 244, 255, 0.4)"
            strokeWidth="1.5"
            className="hover:fill-[rgba(125,244,255,0.1)] transition-colors duration-500 cursor-pointer"
          />
          {/* Databases */}
          <circle cx="210" cy="305" r="14" fill="#00DBE9" opacity="0.2" />
          <circle cx="210" cy="305" r="6" fill="#00DBE9" />
          <circle cx="290" cy="305" r="14" fill="#00DBE9" opacity="0.2" />
          <circle cx="290" cy="305" r="6" fill="#00DBE9" />
          <circle cx="250" cy="335" r="14" fill="#00DBE9" opacity="0.2" />
          <circle cx="250" cy="335" r="6" fill="#00DBE9" />
          
          <text x="360" y="340" fill="#00DBE9" className="font-display font-medium text-[8px] tracking-[0.2em] uppercase">
            DATA_LAYER
          </text>
        </motion.g>

        {/* API / BACKEND LAYER (Middle) */}
        <motion.g
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <polygon
            points="250,290 380,230 250,170 120,230"
            fill="rgba(250, 200, 100, 0.05)"
            stroke="rgba(250, 200, 100, 0.4)"
            strokeWidth="1.5"
            className="hover:fill-[rgba(250,200,100,0.1)] transition-colors duration-500 cursor-pointer"
          />
          {/* Network Nodes */}
          <circle cx="250" cy="230" r="8" fill="#FBBF24" />
          <circle cx="180" cy="210" r="6" fill="#FBBF24" opacity="0.6" />
          <circle cx="320" cy="210" r="6" fill="#FBBF24" opacity="0.6" />
          
          <text x="340" y="260" fill="#FBBF24" className="font-display font-medium text-[8px] tracking-[0.2em] uppercase">
            LOGIC_NODE
          </text>
        </motion.g>

        {/* CLIENT / FRONTEND LAYER (Top) */}
        <motion.g
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <polygon
            points="250,200 360,150 250,100 140,150"
            fill="rgba(251, 113, 133, 0.05)"
            stroke="rgba(251, 113, 133, 0.4)"
            strokeWidth="1.5"
            className="hover:fill-[rgba(251,113,133,0.1)] transition-colors duration-500 cursor-pointer"
          />
          {/* UI Screen representation */}
          <polygon points="250,165 295,145 250,125 205,145" fill="rgba(251, 113, 133, 0.3)" />
          <circle cx="250" cy="145" r="4" fill="#FB7185" />
          
          <text x="320" y="180" fill="#FB7185" className="font-display font-medium text-[8px] tracking-[0.2em] uppercase">
            CLIENT_UI
          </text>
        </motion.g>

        {/* DATA CONNECTION LINES */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {/* Backend to DB */}
          <line x1="250" y1="230" x2="250" y2="335" stroke="rgba(125,244,255,0.4)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="180" y1="210" x2="210" y2="305" stroke="rgba(125,244,255,0.3)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="320" y1="210" x2="290" y2="305" stroke="rgba(125,244,255,0.3)" strokeWidth="1" strokeDasharray="4 4" />

          {/* Frontend to Backend */}
          <line x1="250" y1="145" x2="250" y2="230" stroke="rgba(250,200,100,0.4)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="250" y1="145" x2="180" y2="210" stroke="rgba(250,200,100,0.3)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="250" y1="145" x2="320" y2="210" stroke="rgba(250,200,100,0.3)" strokeWidth="1" strokeDasharray="4 4" />
        </motion.g>

        {/* ANIMATED PACKETS */}
        <motion.circle
          r="3"
          fill="#00DBE9"
          className="shadow-[0_0_10px_#00DBE9]"
          animate={{ 
            cy: [335, 230], // from DB to Backend
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          cx="250"
        />
        <motion.circle
          r="3"
          fill="#FBBF24"
          className="shadow-[0_0_10px_#FBBF24]"
          animate={{ 
            cy: [230, 145], // from Backend to Frontend
          }}
          transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, ease: "linear" }}
          cx="250"
        />
        <motion.circle
          r="2"
          fill="#00DBE9"
          animate={{ 
            cy: [305, 210],
            cx: [210, 180]
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}
