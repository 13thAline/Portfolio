import { motion } from "framer-motion";

export default function TechOrbit() {
  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
      {/* Central Core Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,219,233,0.1)_0%,transparent_60%)] pointer-events-none" />

      {/* Central Core */}
      <motion.div 
        className="absolute z-30 w-24 h-24 bg-white/80 backdrop-blur-xl rounded-full border-2 border-white flex items-center justify-center shadow-[0_0_60px_rgba(0,219,233,0.4)]"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-fs-cyan to-blue-400 opacity-20 blur-sm absolute" />
        <span className="font-display font-medium text-fs-cyan tracking-[0.2em] text-[10px] uppercase relative z-10">
          CORE
        </span>
      </motion.div>

      {/* Orbit Ring 1 - Fast, inner. Node: Backend */}
      <motion.div 
        className="absolute w-56 h-56 rounded-full border border-white/40 border-dashed"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white/90 backdrop-blur-md rounded-full shadow-[0_0_15px_rgba(251,191,36,0.6)] border border-yellow-200 flex items-center justify-center">
            <div className="w-2 h-2 bg-yellow-400 rounded-full" />
        </div>
      </motion.div>

      {/* Orbit Ring 2 - Medium, mid. Node: DB */}
      <motion.div 
        className="absolute w-80 h-80 rounded-full border border-fs-cyan/20 border-solid"
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
         <div className="absolute top-1/4 -right-3 w-8 h-8 bg-white/90 backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(251,113,133,0.6)] border border-rose-200 flex items-center justify-center">
            <div className="w-3 h-3 bg-rose-400 rounded-full" />
        </div>
      </motion.div>

      {/* Orbit Ring 3 - Slow, outer. Nodes: Multi */}
      <motion.div 
        className="absolute w-[26rem] h-[26rem] rounded-full border border-white/30 border-dashed"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute bottom-12 right-12 w-10 h-10 bg-white/80 backdrop-blur-xl rounded-2xl shadow-[0_0_30px_rgba(167,139,250,0.5)] border border-purple-200 flex items-center justify-center rotate-45">
           <div className="w-4 h-4 bg-purple-400 rounded-md shadow-inner" />
        </div>
        <div className="absolute top-12 left-12 w-7 h-7 bg-white/80 backdrop-blur-xl rounded-full shadow-[0_0_20px_rgba(74,222,128,0.5)] border border-green-200 flex items-center justify-center">
           <div className="w-3 h-3 bg-green-400 rounded-full shadow-inner" />
        </div>
      </motion.div>
      
      {/* Static abstract decorative rings */}
      <div className="absolute w-[32rem] h-[32rem] rounded-full border-[0.5px] border-fs-cyan/10 scale-y-50 rotate-45 pointer-events-none" />
      <div className="absolute w-[32rem] h-[32rem] rounded-full border-[0.5px] border-rose-400/10 scale-y-50 -rotate-45 pointer-events-none" />

    </div>
  );
}
