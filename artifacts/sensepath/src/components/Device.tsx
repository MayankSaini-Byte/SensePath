import { motion } from "framer-motion";
import { Camera, Waves, Cpu, Battery } from "lucide-react";

export function Device() {
  return (
    <section id="device" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-indigo-50 blur-3xl opacity-60 -translate-y-1/2" />

      <div className="container px-6 mx-auto max-w-5xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text side */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold mb-8">
              Concept Design
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 leading-tight">
              Shaped like a<br />
              <span className="text-indigo-600">power bank.</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-10">
              Familiar, portable, discreet. The planned device fits in a pocket or hangs around the neck. The ultrasonic sensor sits front-and-center — always scanning, always alert.
            </p>

            <div className="space-y-4">
              {[
                { icon: Camera, label: "Camera Module V2", desc: "Object & face recognition", color: "text-violet-600 bg-violet-100" },
                { icon: Waves, label: "Ultrasonic HC-SR04", desc: "Obstacle detection up to 4m", color: "text-indigo-600 bg-indigo-100" },
                { icon: Cpu, label: "Raspberry Pi 4", desc: "On-device AI processing", color: "text-teal-600 bg-teal-100" },
                { icon: Battery, label: "5V 2.5A Power Bank", desc: "The device body itself", color: "text-orange-600 bg-orange-100" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                    <item.icon size={16} />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 text-sm">{item.label}</span>
                    <span className="text-slate-400 text-sm"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Device concept illustration */}
          <motion.div initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="flex justify-center">
            <div className="relative w-[190px] h-[380px]">
              {/* Glow */}
              <div className="absolute inset-4 bg-indigo-300/30 blur-2xl rounded-[3rem]" />

              {/* Body */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-700 to-slate-900 rounded-[2.5rem] border border-slate-600 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

                {/* Strap slot */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-9 h-3 bg-slate-950 rounded-full border border-slate-600" />

                {/* Camera */}
                <div className="absolute top-[17%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
                  <div className="w-12 h-12 rounded-full bg-slate-950 border-2 border-slate-600 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-violet-900/60 border border-violet-400/40 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-slate-950" />
                    </div>
                  </div>
                  <span className="text-[7px] font-bold text-violet-400 tracking-widest uppercase">cam</span>
                </div>

                {/* Ultrasonic — center section */}
                <div className="absolute top-[40%] -translate-y-1/2 left-1/2 -translate-x-1/2 w-[155px]">
                  <div className="bg-slate-800/70 rounded-xl border border-indigo-500/40 p-3">
                    <div className="text-[7px] font-black text-indigo-400 tracking-widest text-center mb-2.5 uppercase">HC-SR04</div>
                    <div className="flex justify-around">
                      {/* TX */}
                      <div className="relative flex flex-col items-center gap-1">
                        <div className="w-11 h-11 rounded-full bg-slate-950 border-2 border-indigo-500/60 flex items-center justify-center relative">
                          <div className="w-6 h-6 rounded-full bg-slate-800" />
                          <motion.div className="absolute inset-0 rounded-full border-2 border-indigo-400"
                            animate={{ scale: [1, 2.2], opacity: [0.8, 0] }}
                            transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }} />
                        </div>
                        <span className="text-[6px] font-black text-indigo-400">TX</span>
                      </div>
                      {/* RX */}
                      <div className="relative flex flex-col items-center gap-1">
                        <div className="w-11 h-11 rounded-full bg-slate-950 border-2 border-cyan-500/60 flex items-center justify-center relative">
                          <div className="w-6 h-6 rounded-full bg-slate-800" />
                          <motion.div className="absolute inset-0 rounded-full border-2 border-cyan-400"
                            animate={{ scale: [1, 2.2], opacity: [0.8, 0] }}
                            transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut", delay: 0.7 }} />
                        </div>
                        <span className="text-[6px] font-black text-cyan-400">RX</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* LEDs */}
                <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 flex gap-2.5">
                  <motion.div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.9)]"
                    animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                  <motion.div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]"
                    animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.7 }} />
                  <motion.div className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.9)]"
                    animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1.4 }} />
                </div>
              </div>

              {/* "CONCEPT" label */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200">
                <span className="text-xs font-black text-amber-700 uppercase tracking-wider">Concept</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
