import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/attached_assets/So-Ock_Kim_Concert_Photographs_reduced_selection_30th_Oct_2005_1768577122599.jpg')",
          backgroundPosition: "center 20%" // Adjusted to focus on her face/upper body
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/50 via-transparent to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white p-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-8xl font-serif font-light tracking-wide mb-4"
        >
          SO-OCK KIM
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-2xl font-light tracking-[0.2em] uppercase opacity-90"
        >
          Violinist
        </motion.p>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-white/50"></div>
      </motion.div>
    </section>
  );
}
