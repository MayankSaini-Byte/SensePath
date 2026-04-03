import { motion } from "framer-motion";
import { Waves, Camera, Volume2, Smartphone } from "lucide-react";
import { TiltCard } from "./TiltCard";

const pillars = [
  {
    icon: Waves,
    title: "Goggles — Sense",
    desc: "HC-SR04 ultrasonic sensor mounted at the center of the goggles detects obstacles up to 4 meters ahead.",
    iconBg: "bg-gradient-to-br from-indigo-500 to-indigo-700",
    border: "border-indigo-100",
    bg: "bg-gradient-to-br from-indigo-50/80 to-white",
    titleColor: "text-indigo-700",
  },
  {
    icon: Camera,
    title: "Goggles — See",
    desc: "Camera module on the goggles runs TensorFlow Lite to recognize objects, people, and text in real time.",
    iconBg: "bg-gradient-to-br from-violet-500 to-violet-700",
    border: "border-violet-100",
    bg: "bg-gradient-to-br from-violet-50/80 to-white",
    titleColor: "text-violet-700",
  },
  {
    icon: Volume2,
    title: "Processing Unit — Speak",
    desc: "Raspberry Pi 4 processes all sensor data and delivers instant voice alerts — 'Obstacle 2m on the left.'",
    iconBg: "bg-gradient-to-br from-orange-400 to-orange-600",
    border: "border-orange-100",
    bg: "bg-gradient-to-br from-orange-50/80 to-white",
    titleColor: "text-orange-700",
  },
  {
    icon: Smartphone,
    title: "Processing Unit — Connect",
    desc: "Bluetooth and WiFi sync with a companion mobile app for GPS navigation and emergency SOS.",
    iconBg: "bg-gradient-to-br from-teal-500 to-teal-700",
    border: "border-teal-100",
    bg: "bg-gradient-to-br from-teal-50/80 to-white",
    titleColor: "text-teal-700",
  },
];

const quarters = [
  { q: "Q1", label: "Design & Procurement", desc: "Finalize system design, order hardware components." },
  { q: "Q2", label: "Hardware Integration", desc: "Connect sensors, camera, and Raspberry Pi. Basic software." },
  { q: "Q3", label: "AI + Audio System", desc: "Build computer vision pipeline and voice feedback engine." },
  { q: "Q4", label: "Testing & Demo", desc: "Validate prototype, document results, present final product." },
];

const quarterColors = [
  "from-indigo-500 to-violet-600",
  "from-violet-500 to-purple-600",
  "from-orange-400 to-orange-600",
  "from-teal-500 to-cyan-600",
];

export function Plan() {
  return (
    <section id="plan" className="py-24 md:py-32 relative overflow-hidden" style={{
      background: "linear-gradient(160deg, #f8f9ff 0%, #f0f4ff 40%, #faf8ff 100%)"
    }}>
      {/* Decorative blob */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-indigo-100 to-violet-100 blur-3xl opacity-50 translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container px-6 mx-auto max-w-5xl relative z-10">

        {/* ── How it will work ── */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-100 to-violet-100 text-indigo-700 text-xs font-black mb-8 border border-indigo-200/60 shadow-sm">
            Our Approach
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            How <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">SensePath</span> will work.
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mb-12">
            The goggles handle sensing and seeing. The processing unit handles thinking and speaking. Four functions, two devices, one seamless experience.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <TiltCard key={i} intensity={7}>
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`flex items-start gap-4 p-6 rounded-2xl border ${p.border} ${p.bg} shadow-sm hover:shadow-md transition-shadow duration-300 h-full`}>
                  <div className={`w-11 h-11 rounded-xl ${p.iconBg} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <p.icon size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className={`font-extrabold text-sm mb-1 ${p.titleColor}`}>{p.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </motion.div>

        {/* ── Roadmap ── */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 text-xs font-black mb-8 border border-violet-200/60 shadow-sm">
            Roadmap
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            Our plan for{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              the year ahead.
            </span>
          </h2>
          <p className="text-lg text-slate-500 mb-12">Four quarters. One prototype. Real impact.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quarters.map((q, i) => (
              <TiltCard key={i} intensity={10}>
                <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden group h-full">
                  {/* Gradient bar top */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${quarterColors[i]}`} />
                  <div className={`text-xs font-black bg-gradient-to-r ${quarterColors[i]} bg-clip-text text-transparent tracking-widest mb-3`}>{q.q}</div>
                  <h3 className="font-extrabold text-slate-900 mb-2 leading-snug text-sm">{q.label}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{q.desc}</p>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
