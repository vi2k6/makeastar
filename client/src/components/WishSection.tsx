import { useState } from "react";
import { useCreateWish } from "@/hooks/use-wishes";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertWishSchema } from "@shared/schema";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Sparkles, Send } from "lucide-react";

type WishForm = z.infer<typeof insertWishSchema>;

export function WishSection() {
  const [isSuccess, setIsSuccess] = useState(false);
  const mutation = useCreateWish();
  
  const form = useForm<WishForm>({
    resolver: zodResolver(insertWishSchema),
    defaultValues: { content: "" },
  });

  const onSubmit = (data: WishForm) => {
    mutation.mutate(data, {
      onSuccess: () => {
        setIsSuccess(true);
        form.reset();
        // Reset success state after animation allows (optional, keeping it permanent for this session feels nice)
        setTimeout(() => setIsSuccess(false), 5000); 
      },
    });
  };

  return (
    <div className="relative z-30 w-full max-w-md mx-auto mt-12 px-4">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div className="relative group">
              <input
                {...form.register("content")}
                placeholder="Write your Christmas wish..."
                className="w-full px-6 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 font-body text-lg shadow-lg"
                autoComplete="off"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 blur-md" />
            </div>

            <motion.button
              whileHover={{ scale: 1.02, textShadow: "0 0 8px rgb(255,255,255)" }}
              whileTap={{ scale: 0.98 }}
              disabled={mutation.isPending}
              className="relative overflow-hidden w-full py-3 rounded-full bg-gradient-to-r from-primary/80 to-primary text-background font-bold text-lg uppercase tracking-widest shadow-[0_0_20px_rgba(252,211,77,0.3)] hover:shadow-[0_0_30px_rgba(252,211,77,0.5)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {mutation.isPending ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <span>Make a Wish</span>
                  <Sparkles className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            className="flex flex-col items-center justify-center text-center space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* The Wish Star flying up */}
            <motion.div
              initial={{ y: 0, scale: 1, opacity: 1 }}
              animate={{ y: -300, scale: 0.5, opacity: 0 }}
              transition={{ duration: 2.5, ease: "easeIn" }}
              className="text-primary"
            >
              <Sparkles className="w-12 h-12 fill-primary animate-spin-slow" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-2xl font-script text-primary text-shadow-glow">
                May your wish shine bright ✨
              </h3>
              <p className="text-muted-foreground mt-2 font-body text-sm">
                Your wish has joined the stars.
              </p>
            </motion.div>

             <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              onClick={() => setIsSuccess(false)}
              className="text-sm text-white/50 hover:text-white mt-8 underline decoration-dotted underline-offset-4"
            >
              Make another wish
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
