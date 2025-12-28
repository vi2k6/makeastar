import { SmallStar } from "./SmallStar";
import { useEffect, useState } from "react";

// Generate static star data to prevent re-renders shuffling them
const STAR_COUNT = 60;
const stars = Array.from({ length: STAR_COUNT }).map((_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 2 + Math.random() * 3, // 2px to 5px
  delay: Math.random() * 5,
}));

export function StarField() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 z-10" />
      
      {/* Interactive Container - needs pointer-events-auto for children */}
      <div className="absolute inset-0 w-full h-full pointer-events-auto">
        {stars.map((star) => (
          <SmallStar
            key={star.id}
            x={star.x}
            y={star.y}
            size={star.size}
            delay={star.delay}
          />
        ))}
      </div>
    </div>
  );
}
