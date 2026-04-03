import { motion } from "framer-motion";
import { ChevronDown, Zap, Shield, Mic } from "lucide-react";

const stats = [
  { value: "4m", label: "Detection Range" },
  { value: "<50ms", label: "Response Time" },
  { value: "360°", label: "Awareness" },
  { value: "8hr+", label: "Battery Life" },
];

export function Hero() {
  const scrollToNext = () => {
    const element = document.querySelector("#problem");
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Vivid gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700" />

      {/* Geometric mesh overlays */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 20% 80%, #f97316 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, #0ea5e9 0%, transparent 50%),
                          radial-gradient(circle at 50% 50%, #818cf8 0%, transparent 70%)`
      }} />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated sonar rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-white/20"
            initial={{ width: 80, height: 80, opacity: 0.8 }}
            animate={{ width: 900, height: 900, opacity: 0 }}
            transition={{ duration: 5, repeat: Infinity, delay: i * 1, ease: "linear" }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-6 mx-auto text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold mb-8"
          >
            <Zap size={14} className="text-amber-300" />
            MANIT Bhopal — Academic Year 2025-26
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-6 leading-[1.05]">
            Sense<span className="text-amber-300">Path</span>
          </h1>

          <p className="text-xl md:text-2xl text-indigo-100 font-medium mb-4 max-w-3xl mx-auto">
            Real-Time Navigation Assistance
          </p>
          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            An intelligent compact device using ultrasonic sensors, computer vision, and AI to guide visually impaired individuals through voice alerts — safely, independently, affordably.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button
              onClick={scrollToNext}
              className="px-8 py-4 rounded-full bg-white text-indigo-700 font-bold text-lg hover:bg-amber-50 transition-all shadow-2xl shadow-indigo-900/30 hover:shadow-3xl hover:scale-105"
            >
              Learn More
            </button>
            <a
              href="#device"
              onClick={(e) => { e.preventDefault(); document.querySelector("#device")?.scrollIntoView({ behavior: "smooth" }); }}
              className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-bold text-lg border border-white/30 hover:bg-white/20 transition-all"
            >
              See the Device
            </a>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <div className="text-3xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-xs font-semibold text-indigo-200 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20 text-white/60 hover:text-white transition-colors"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
