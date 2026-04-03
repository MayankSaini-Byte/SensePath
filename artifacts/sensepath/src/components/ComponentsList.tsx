import { motion } from "framer-motion";
import { Cpu, Camera, Waves, MapPin, Headphones, Battery, Vibrate, Pointer, Mic } from "lucide-react";

const components = [
  { name: "Raspberry Pi 4", icon: Cpu, desc: "Central processing unit. Runs AI models and coordinates all sensors in real time.", color: "from-indigo-500 to-indigo-700", bg: "bg-indigo-50 border-indigo-200 hover:border-indigo-400", tag: "text-indigo-600 bg-indigo-100" },
  { name: "Camera Module V2", icon: Camera, desc: "Captures environment for object, face, and text recognition using OpenCV.", color: "from-violet-500 to-violet-700", bg: "bg-violet-50 border-violet-200 hover:border-violet-400", tag: "text-violet-600 bg-violet-100" },
  { name: "Ultrasonic HC-SR04", icon: Waves, desc: "Precision distance sensing via ultrasonic waves — detects obstacles up to 4 meters.", color: "from-cyan-500 to-cyan-700", bg: "bg-cyan-50 border-cyan-200 hover:border-cyan-400", tag: "text-cyan-600 bg-cyan-100" },
  { name: "GPS NEO-6M", icon: MapPin, desc: "Real-time geographic location for outdoor route guidance and SOS sharing.", color: "from-teal-500 to-teal-700", bg: "bg-teal-50 border-teal-200 hover:border-teal-400", tag: "text-teal-600 bg-teal-100" },
  { name: "Headphones / Earphone", icon: Headphones, desc: "Delivers private, clear voice alerts and navigation instructions in real time.", color: "from-orange-500 to-orange-700", bg: "bg-orange-50 border-orange-200 hover:border-orange-400", tag: "text-orange-600 bg-orange-100" },
  { name: "Power Bank 5V 2.5A", icon: Battery, desc: "Portable power supply for extended outdoor operation — the device's body itself.", color: "from-amber-500 to-amber-700", bg: "bg-amber-50 border-amber-200 hover:border-amber-400", tag: "text-amber-600 bg-amber-100" },
  { name: "Vibration Motor", icon: Vibrate, desc: "Haptic feedback for urgent close-proximity obstacle warnings — silent alerts.", color: "from-rose-500 to-rose-700", bg: "bg-rose-50 border-rose-200 hover:border-rose-400", tag: "text-rose-600 bg-rose-100" },
  { name: "Push Button", icon: Pointer, desc: "Tactile control to repeat alerts, switch modes, or trigger on-demand scans.", color: "from-slate-500 to-slate-700", bg: "bg-slate-50 border-slate-200 hover:border-slate-400", tag: "text-slate-600 bg-slate-100" },
  { name: "Microphone Module", icon: Mic, desc: "Future-ready for voice commands — 'What's in front of me?' or 'Read this sign'.", color: "from-purple-500 to-purple-700", bg: "bg-purple-50 border-purple-200 hover:border-purple-400", tag: "text-purple-600 bg-purple-100" },
];

export function ComponentsList() {
  return (
    <section id="components" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-indigo-100 to-transparent blur-3xl opacity-60" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-bold mb-6">
            <Cpu size={14} />
            Hardware Stack
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Every part, <span className="text-teal-600">purposeful.</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            Off-the-shelf components, custom software. Affordable by design — because accessibility shouldn't be a luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {components.map((comp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`p-6 rounded-2xl border-2 ${comp.bg} group hover:scale-[1.02] transition-all duration-300 cursor-default`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${comp.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <comp.icon size={22} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-slate-900 mb-1 leading-tight">{comp.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{comp.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Software stack strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-6xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white"
        >
          <p className="text-sm font-bold text-indigo-200 uppercase tracking-widest mb-4">Software Stack</p>
          <div className="flex flex-wrap gap-3">
            {["Python 3", "OpenCV", "TensorFlow Lite", "eSpeak TTS", "Raspberry Pi OS", "NumPy"].map((sw, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-white/15 text-white text-sm font-semibold border border-white/20">
                {sw}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
