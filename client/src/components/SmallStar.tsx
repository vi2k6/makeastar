import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface SmallStarProps {
  x: number;
  y: number;
  size: number;
  delay: number;
}

export function SmallStar({ x, y, size, delay }: SmallStarProps) {
  const controls = useAnimation();

  // Initial random twinkle animation
  useEffect(() => {
    controls.start({
      opacity: [0.3, 1, 0.3],
      scale: [1, 1.2, 1],
      transition: {
        duration: 2 + Math.random() * 2,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      },
    });
  }, [controls, delay]);

  const handleInteraction = async () => {
    // Stop twinkle temporarily
    controls.stop();

    // Calculate shoot direction (away from center roughly, or just random)
    const angle = Math.random() * Math.PI * 2;
    const distance = 100 + Math.random() * 150;
    const shootX = Math.cos(angle) * distance;
    const shootY = Math.sin(angle) * distance;

    // Shoot away
    await controls.start({
      x: shootX,
      y: shootY,
      scale: 2,
      opacity: 1,
      color: "#ffffff",
      filter: "blur(0px) brightness(2)",
      transition: { duration: 0.4, ease: "easeOut" },
    });

    // Return home (spring)
    await controls.start({
      x: 0,
      y: 0,
      scale: 1,
      opacity: 0.3,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    });

    // Resume twinkling
    controls.start({
      opacity: [0.3, 1, 0.3],
      scale: [1, 1.2, 1],
      transition: {
        duration: 2 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    });
  };

  return (
    <motion.div
      className="absolute rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] cursor-pointer"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
      }}
      animate={controls}
      onHoverStart={handleInteraction}
      onTap={handleInteraction}
      whileHover={{ zIndex: 50 }}
    />
  );
}
