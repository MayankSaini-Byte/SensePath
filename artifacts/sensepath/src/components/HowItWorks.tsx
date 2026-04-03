import { motion } from "framer-motion";
import { Waves, Cpu, Volume2, Smartphone, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Waves,
    step: "01",
    title: "Input",
    desc: "Ultrasonic sensors ping at 40kHz, mapping obstacles within a 4-meter radius. Camera streams environment for AI recognition.",
    bg: "bg-indigo-600",
    light: "bg-indigo-50 border-indigo-200",
    text: "text-indigo-600",
  },
  {
    icon: Cpu,
    step: "02",
    title: "Processing",
    desc: "Raspberry Pi 4 runs TensorFlow Lite models in real time, calculating obstacle type, distance, and direction in milliseconds.",
    bg: "bg-violet-600",
    light: "bg-violet-50 border-violet-200",
    text: "text-violet-600",
  },
  {
    icon: Volume2,
    step: "03",
    title: "Output",
    desc: "eSpeak converts analysis to instant voice alerts via headphones: 'Obstacle ahead, two meters on the left.' Vibration for urgent warnings.",
    bg: "bg-orange-500",
    light: "bg-orange-50 border-orange-200",
    text: "text-orange-600",
  },
  {
    icon: Smartphone,
    step: "04",
    title: "Mobile Integration",
    desc: "Bluetooth/WiFi syncs with mobile app for GPS-based outdoor routing, SOS emergency calling, and settings customization.",
    bg: "bg-teal-500",
    light: "bg-teal-50 border-teal-200",
    text: "text-teal-600",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30"
        style={{ backgroundImage: `radial-gradient(circle at 0% 50%, #eef2ff 0%, transparent 60%), radial-gradient(circle at 100% 50%, #fff7ed 0%, transparent 60%)` }}
      />

      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-bold mb-6">
            <Cpu size={14} />
            How It Works
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
            From sensor to <span className="text-violet-600">voice</span>,
            <br />in milliseconds.
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            A seamless four-stage pipeline running entirely on the edge. No cloud. No latency. Just instant awareness.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4 relative">
            {steps.map((step, i) => (
              <div key={i} className="flex md:flex-col items-start md:items-center gap-4 md:gap-0">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className={`relative w-full rounded-3xl border-2 p-7 ${step.light} group hover:scale-[1.03] transition-transform duration-300`}
                >
                  {/* Step number */}
                  <div className="text-xs font-black tracking-[0.3em] text-slate-400 mb-4 uppercase">{step.step}</div>

                  {/* Icon circle */}
                  <div className={`w-14 h-14 rounded-2xl ${step.bg} flex items-center justify-center mb-5 shadow-lg`}>
                    <step.icon size={26} className="text-white" />
                  </div>

                  <h3 className={`text-xl font-extrabold mb-3 ${step.text}`}>{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>

                  {/* Arrow connector (desktop) */}
                  {i < steps.length - 1 && (
                    <div className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10">
                      <div className={`w-8 h-8 rounded-full ${step.bg} flex items-center justify-center shadow-md`}>
                        <ArrowRight size={14} className="text-white" />
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Animated progress bar */}
          <div className="hidden md:block mt-8 h-2 bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 via-orange-400 to-teal-400 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
