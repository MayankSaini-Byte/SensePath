import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const scrollDown = () => {
    const el = document.querySelector("#problem");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
        backgroundSize: "64px 64px",
      }} />

      {/* Soft color blobs */}
      <div className="absolute inset-0 opacity-25" style={{
        backgroundImage: `radial-gradient(circle at 15% 85%, #f97316 0%, transparent 45%), radial-gradient(circle at 85% 15%, #0ea5e9 0%, transparent 45%)`,
      }} />

      {/* Sonar ring animation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[0, 1, 2, 3].map(i => (
          <motion.div key={i} className="absolute rounded-full border border-white/20"
            initial={{ width: 60, height: 60, opacity: 0.6 }}
            animate={{ width: 800, height: 800, opacity: 0 }}
            transition={{ duration: 5, repeat: Infinity, delay: i * 1.25, ease: "linear" }}
          />
        ))}
      </div>

      <div className="container px-6 mx-auto text-center relative z-10 pt-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>

          {/* Prototype badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-sm font-bold text-white/90">Prototype Concept — MANIT Bhopal 2025-26</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight leading-none">
            Sense<span className="text-amber-300">Path</span>
          </h1>

          <p className="text-xl md:text-2xl text-indigo-200 font-medium mb-6 max-w-xl mx-auto">
            Real-Time Navigation Assistance<br />for the Visually Impaired
          </p>

          <p className="text-base text-white/60 max-w-lg mx-auto mb-12 leading-relaxed">
            A planned smart device that uses ultrasonic sensors and computer vision to guide visually impaired individuals through real-time voice alerts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button onClick={scrollDown}
              className="px-7 py-3.5 rounded-full bg-white text-indigo-700 font-bold text-base hover:bg-amber-50 transition-all shadow-xl hover:scale-105">
              See the Plan
            </button>
            <a href="#device" onClick={e => { e.preventDefault(); document.querySelector("#device")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-7 py-3.5 rounded-full bg-white/10 border border-white/25 text-white font-bold text-base hover:bg-white/20 transition-all backdrop-blur-sm">
              View Concept
            </a>
          </div>
        </motion.div>
      </div>

      <motion.button onClick={scrollDown} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/50 hover:text-white/80 transition-colors z-10">
        <span className="text-[10px] font-bold uppercase tracking-widest">scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
