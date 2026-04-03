import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToNext = () => {
    const element = document.querySelector("#problem");
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] opacity-50" />
        
        {/* Sonar Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center opacity-30">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-primary/30"
              initial={{ width: 0, height: 0, opacity: 1 }}
              animate={{
                width: ["0%", "100%"],
                height: ["0%", "100%"],
                opacity: [1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1,
                ease: "linear",
              }}
              style={{
                maxWidth: "1000px",
                maxHeight: "1000px",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative z-10 px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            MANIT Bhopal Project 2025
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6">
            Navigate with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Confidence
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Real-Time Navigation Assistance for the Visually Impaired. 
            An intelligent, compact device that uses ultrasonic sensors and AI to translate the physical world into clear voice alerts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={scrollToNext}
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] flex items-center gap-2"
            >
              Discover SensePath
            </button>
            <a 
              href="#device"
              className="px-8 py-4 rounded-full bg-secondary text-white font-semibold text-lg border border-border hover:bg-secondary/80 transition-all flex items-center gap-2"
            >
              See the Device
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
        onClick={scrollToNext}
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
