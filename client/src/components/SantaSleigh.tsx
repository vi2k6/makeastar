import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function SantaSleigh() {
  const [flightCycle, setFlightCycle] = useState(0);

  useEffect(() => {
    // Start first flight immediately, then loop every 30 seconds
    const flightInterval = setInterval(() => {
      setFlightCycle((prev) => prev + 1);
    }, 30000); // Complete cycle every 30 seconds

    return () => clearInterval(flightInterval);
  }, []);

  // Complex path: left -> approaches star center -> circles around -> exits right -> repeats
  const flightPath = {
    initial: { 
      x: "-20vw", 
      y: "20vh", 
      opacity: 0, 
      scale: 0.8,
      rotate: 0 
    },
    animate: {
      x: [
        "-20vw",    // Start from left
        "10vw",     // Approach center
        "15vw",     // Circle around (top-right)
        "5vw",      // Circle around (top-left)
        "-5vw",     // Circle around (bottom-left)
        "10vw",     // Circle around (bottom-right)
        "15vw",     // Back to center area
        "120vw",    // Exit to right
      ],
      y: [
        "20vh",     // Start
        "15vh",     // Approach
        "5vh",      // Circle top-right
        "5vh",      // Circle top-left
        "25vh",     // Circle bottom-left
        "25vh",     // Circle bottom-right
        "15vh",     // Back to center
        "15vh",     // Exit right
      ],
      opacity: [
        0,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
      ],
      scale: 1,
      rotate: [0, 0, 15, -15, 0, 15, 0, 0],
    },
    transition: {
      duration: 28,
      ease: "easeInOut",
      times: [0, 0.15, 0.35, 0.50, 0.65, 0.80, 0.90, 1],
    },
  };

  return (
    <motion.div
      key={flightCycle}
      className="fixed z-30 pointer-events-none"
      initial={flightPath.initial}
      animate={flightPath.animate}
      transition={flightPath.transition}
    >
      {/* Bobbing Motion Container */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Santa Sleigh SVG - More Detailed */}
        <svg
          width="280"
          height="100"
          viewBox="0 0 280 100"
          fill="none"
          className="drop-shadow-2xl"
        >
          {/* Reindeer Team */}
          {/* Reindeer 1 */}
          <g>
            <ellipse cx="20" cy="55" rx="8" ry="10" fill="#8B4513" />
            <circle cx="18" cy="42" r="6" fill="#8B4513" />
            <path d="M 15 38 L 10 32 M 21 38 L 26 32" stroke="#8B4513" strokeWidth="1" />
          </g>

          {/* Reindeer 2 */}
          <g>
            <ellipse cx="45" cy="55" rx="8" ry="10" fill="#8B4513" />
            <circle cx="43" cy="42" r="6" fill="#8B4513" />
            <path d="M 40 38 L 35 32 M 46 38 L 51 32" stroke="#8B4513" strokeWidth="1" />
          </g>

          {/* Rudolph (glowing nose) */}
          <g>
            <ellipse cx="70" cy="55" rx="8" ry="10" fill="#A0522D" />
            <circle cx="68" cy="42" r="6" fill="#A0522D" />
            <circle cx="65" cy="42" r="5" fill="#FF4444" opacity="0.9" />
            <circle cx="65" cy="42" r="3" fill="#FF0000" className="animate-pulse" />
            <path d="M 65 38 L 60 32 M 71 38 L 76 32" stroke="#A0522D" strokeWidth="1" />
          </g>

          {/* Sleigh - Golden body */}
          <g>
            {/* Sleigh box */}
            <rect x="90" y="50" width="60" height="25" rx="3" fill="#FFD700" stroke="#DAA520" strokeWidth="2" />
            {/* Sleigh runners */}
            <path d="M 85 75 Q 100 78 150 78 Q 165 78 180 75" stroke="#DAA520" strokeWidth="3" fill="none" />
            {/* Decorative bands */}
            <rect x="92" y="52" width="56" height="3" fill="#FF2222" />
            <rect x="92" y="70" width="56" height="3" fill="#FF2222" />
          </g>

          {/* Santa Figure */}
          <g>
            {/* Santa's head */}
            <circle cx="220" cy="45" r="8" fill="#FDBCB4" />
            {/* Santa's hat - red */}
            <path d="M 215 37 L 225 37 L 228 30 Q 220 25 212 30 Z" fill="#FF2222" />
            {/* White trim on hat */}
            <ellipse cx="220" cy="37" rx="10" ry="2" fill="white" />
            {/* Santa's body - red suit */}
            <ellipse cx="220" cy="60" rx="10" ry="15" fill="#FF2222" />
            {/* Belt */}
            <rect x="210" y="58" width="20" height="4" fill="#FFD700" />
            {/* Belt buckle */}
            <circle cx="220" cy="60" r="2" fill="#FFD700" />
          </g>

          {/* Rope/Reins connecting reindeer to sleigh */}
          <line x1="78" y1="55" x2="90" y2="60" stroke="white" strokeWidth="1.5" opacity="0.6" />
        </svg>

        {/* Sparkle Trail */}
        <motion.div
          className="absolute top-1/3 -left-16 w-32 h-2 bg-gradient-to-l from-transparent via-yellow-300 to-transparent blur-sm"
          animate={{ opacity: [0.4, 0.8, 0.4], scaleX: [0.8, 1.2, 0.8] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        />

        {/* Additional glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-200/0 via-yellow-200/20 to-yellow-200/0 blur-xl"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
}
