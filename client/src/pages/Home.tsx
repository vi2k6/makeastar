import { MainStar } from "@/components/MainStar";
import { StarField } from "@/components/StarField";
import { SantaSleigh } from "@/components/SantaSleigh";
import { WishSection } from "@/components/WishSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-[#050a14] to-black">
      
      {/* Background Elements */}
      <StarField />
      <SantaSleigh />

      {/* Decorative Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-20" />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full max-w-4xl px-4 py-12">
        
        {/* Header Text */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-script text-transparent bg-clip-text bg-gradient-to-b from-primary via-yellow-200 to-primary/60 drop-shadow-[0_0_15px_rgba(252,211,77,0.5)] pb-4">
            Merry Christmas
          </h1>
          <p className="text-lg md:text-xl font-display text-blue-100/80 tracking-widest uppercase">
            Believe in the Magic
          </p>
        </motion.div>

        {/* The Star */}
        <div className="my-4 md:my-8">
          <MainStar />
        </div>

        {/* Wish Interaction */}
        <WishSection />
        
      </div>

      {/* Footer / Music Credit (Visual only) */}
      <motion.div 
        className="absolute bottom-4 text-center text-white/20 text-xs font-mono z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <p>Look up at the stars and make a wish</p>
      </motion.div>
    </div>
  );
}
