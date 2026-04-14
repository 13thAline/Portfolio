import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function NeuralGraph({ nodes, links }) {
  const [placedNodes, setPlacedNodes] = useState([]);

  useEffect(() => {
    // Generate static circular layout positions
    const width = 400;
    const height = 400;
    const centerX = width / 2;
    const centerY = height / 2;
    const radiusScale = 140;

    const positioned = nodes.map((n, i) => {
      const angle = (i / nodes.length) * 2 * Math.PI;
      // Add slight randomness for "organic" feel
      const r = radiusScale + (Math.random() * 40 - 20);
      return {
        ...n,
        x: centerX + r * Math.cos(angle),
        y: centerY + r * Math.sin(angle),
      };
    });

    setPlacedNodes(positioned);
  }, [nodes]);

  if (placedNodes.length === 0) return null;

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto group">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,163,0.03)_0%,transparent_70%)]" />

      <svg width="100%" height="100%" viewBox="0 0 400 400" className="relative z-10 overflow-visible">
        {/* Draw Links */}
        {links.map((link, i) => {
          const sourceNode = placedNodes.find((n) => n.id === link.source);
          const targetNode = placedNodes.find((n) => n.id === link.target);
          if (!sourceNode || !targetNode) return null;

          return (
            <motion.line
              key={`link-${i}`}
              x1={sourceNode.x}
              y1={sourceNode.y}
              x2={targetNode.x}
              y2={targetNode.y}
              stroke="rgba(0,255,163,0.15)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: i * 0.1, ease: "circOut" }}
              className="group-hover:stroke-aiml-matrix transition-colors duration-1000"
            />
          );
        })}

        {/* Draw Nodes */}
        {placedNodes.map((n, i) => (
          <motion.g 
            key={`node-${i}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
          >
            {/* Outer pulse */}
            <circle
              cx={n.x}
              cy={n.y}
              r={n.radius * 2}
              fill="rgba(0,255,163,0.05)"
              className="animate-[pulse_3s_infinite]"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
            {/* Core */}
            <circle
              cx={n.x}
              cy={n.y}
              r={n.radius}
              fill="#00FFA3"
              className="group-hover:fill-aiml-glow transition-colors duration-500"
            />
            <text
              x={n.x}
              y={n.y - n.radius - 8}
              textAnchor="middle"
              className="font-display text-[9px] fill-m-outline-variant uppercase tracking-widest pointer-events-none group-hover:fill-m-on-surface transition-colors"
            >
              {n.id}
            </text>
          </motion.g>
        ))}
      </svg>

      {/* Target Crosshairs for brutalist effect */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-aiml-matrix opacity-50" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-aiml-matrix opacity-50" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-aiml-matrix opacity-50" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-aiml-matrix opacity-50" />
    </div>
  );
}
