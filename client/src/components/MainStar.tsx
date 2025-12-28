import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function MainStar() {
  // Mouse parallax effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const xPct = (e.clientX / innerWidth - 0.5) * 40; // Max tilt 20px
      const yPct = (e.clientY / innerHeight - 0.5) * 40;
      x.set(xPct);
      y.set(yPct);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center z-20">
      {/* Container for parallax */}
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        className="relative w-full h-full flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Glow Halo - Back Layer */}
        <motion.div
          className="absolute inset-0 rounded-full bg-primary/20 blur-[60px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Outer Rays (Large 5-Pointed Star) */}
        <motion.svg
          viewBox="0 0 100 100"
          className="absolute w-full h-full text-primary/40 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <path
            d="M50 0 L61 35 L100 35 L68 57 L79 92 L50 70 L21 92 L32 57 L0 35 L39 35 Z"
            fill="currentColor"
          />
        </motion.svg>

        {/* Middle Star (Brighter 5-Pointed) */}
        <motion.svg
          viewBox="0 0 100 100"
          className="absolute w-[70%] h-[70%] text-primary drop-shadow-[0_0_25px_rgba(255,215,0,0.8)]"
          animate={{
            rotate: -360,
            scale: [1, 1.05, 1],
          }}
          whileHover={{ scale: 1.15, filter: "brightness(1.2)" }}
          whileTap={{ scale: 0.95 }}
          transition={{
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <path
            d="M50 0 L61 35 L100 35 L68 57 L79 92 L50 70 L21 92 L32 57 L0 35 L39 35 Z"
            fill="currentColor"
          />
        </motion.svg>

        {/* Core (White Hot) */}
        <motion.div
          className="absolute w-12 h-12 bg-white rounded-full blur-md shadow-[0_0_40px_rgba(255,255,255,1)]"
          animate={{
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Core Star Shape Solid 5-Pointed */}
        <svg viewBox="0 0 100 100" className="absolute w-[20%] h-[20%] text-white">
           <path
            d="M50 0 L61 35 L100 35 L68 57 L79 92 L50 70 L21 92 L32 57 L0 35 L39 35 Z"
            fill="currentColor"
          />
        </svg>

      </motion.div>
    </div>
  );
}
