import { motion } from "framer-motion";
import { Waves, Camera, Volume2, Smartphone } from "lucide-react";

const pillars = [
  {
    icon: Waves,
    title: "Goggles — Sense",
    desc: "HC-SR04 ultrasonic sensor mounted at the center of the goggles detects obstacles up to 4 meters ahead.",
    color: "bg-indigo-600",
    bg: "bg-indigo-50 border-indigo-100",
  },
  {
    icon: Camera,
    title: "Goggles — See",
    desc: "Camera module on the goggles runs TensorFlow Lite to recognize objects, people, and text in real time.",
    color: "bg-violet-600",
    bg: "bg-violet-50 border-violet-100",
  },
  {
    icon: Volume2,
    title: "Processing Unit — Speak",
    desc: "Raspberry Pi 4 processes all sensor data and delivers instant voice alerts — 'Obstacle 2m on the left.'",
    color: "bg-orange-500",
    bg: "bg-orange-50 border-orange-100",
  },
  {
    icon: Smartphone,
    title: "Processing Unit — Connect",
    desc: "Bluetooth and WiFi sync with a companion mobile app for GPS navigation and emergency SOS.",
    color: "bg-teal-500",
    bg: "bg-teal-50 border-teal-100",
  },
];

const quarters = [
  { q: "Q1", label: "Design & Procurement", desc: "Finalize system design, order hardware components.", done: false },
  { q: "Q2", label: "Hardware Integration", desc: "Connect sensors, camera, and Raspberry Pi. Basic software.", done: false },
  { q: "Q3", label: "AI + Audio System", desc: "Build computer vision pipeline and voice feedback engine.", done: false },
  { q: "Q4", label: "Testing & Demo", desc: "Validate prototype, document results, present final product.", done: false },
];

export function Plan() {
  return (
    <section id="plan" className="py-24 md:py-32 bg-slate-50">
      <div className="container px-6 mx-auto max-w-5xl">

        {/* How it will work */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold mb-8">
            Our Approach
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            How <span className="text-indigo-600">SensePath</span> will work.
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mb-12">
            The goggles handle sensing and seeing. The processing unit handles thinking and speaking. Four functions, two devices, one seamless experience.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`flex items-start gap-4 p-6 rounded-2xl border ${p.bg}`}>
                <div className={`w-10 h-10 rounded-xl ${p.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <p.icon size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{p.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Roadmap */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 text-violet-700 text-xs font-bold mb-8">
            Roadmap
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            Our plan for <span className="text-violet-600">the year ahead.</span>
          </h2>
          <p className="text-lg text-slate-500 mb-12">Four quarters. One prototype. Real impact.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quarters.map((q, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white border-2 border-slate-100 relative overflow-hidden group hover:border-indigo-200 transition-colors">
                <div className="text-xs font-black text-indigo-500 tracking-widest mb-3">{q.q}</div>
                <h3 className="font-extrabold text-slate-900 mb-2 leading-snug">{q.label}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{q.desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
