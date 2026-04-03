import { motion } from "framer-motion";
import { Camera, Waves, Cpu, Battery, Wifi, Volume2 } from "lucide-react";
import { TiltCard } from "./TiltCard";

export function Device() {
  return (
    <section id="device" className="py-24 md:py-32 relative overflow-hidden" style={{
      background: "linear-gradient(150deg, #fdfbff 0%, #f5f3ff 35%, #fff8f5 100%)"
    }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gradient-to-br from-indigo-100/60 via-violet-100/40 to-orange-100/30 blur-3xl pointer-events-none" />

      <div className="container px-6 mx-auto max-w-6xl relative z-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-100 to-violet-100 text-indigo-700 text-xs font-black mb-6 border border-indigo-200/60 shadow-sm">
            Concept Design
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            A{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              two-part
            </span>{" "}
            system
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            The goggles sense the environment. The processing unit thinks and speaks. Together, they guide the user in real time.
          </p>
        </motion.div>

        {/* Two parts */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* ─── Part 1: Goggles ─── */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}
            className="flex flex-col items-center">

            {/* Goggles illustration */}
            <TiltCard intensity={10} className="mb-8">
              <div className="relative w-[280px] h-[110px]">
                <div className="absolute inset-4 bg-indigo-300/20 blur-2xl rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-4 bg-slate-700 rounded-full z-10 border border-slate-500" />
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-2.5 bg-slate-600 rounded-l-full" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-2.5 bg-slate-600 rounded-r-full" />
                  {/* Left lens — ultrasonic */}
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 w-[100px] h-[90px] rounded-[1.5rem] bg-gradient-to-b from-slate-700 to-slate-900 border border-slate-600 shadow-xl flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                    <div className="relative flex flex-col items-center gap-1 z-10">
                      <div className="w-10 h-10 rounded-full bg-slate-950 border-2 border-indigo-500/60 flex items-center justify-center relative">
                        <div className="w-5 h-5 rounded-full bg-slate-800" />
                        <motion.div className="absolute inset-0 rounded-full border-2 border-indigo-400"
                          animate={{ scale: [1, 2], opacity: [0.9, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }} />
                        <motion.div className="absolute inset-0 rounded-full border border-indigo-300"
                          animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.4 }} />
                      </div>
                      <span className="text-[6px] font-black text-indigo-400 tracking-widest">HC-SR04</span>
                    </div>
                  </div>
                  {/* Right lens — camera */}
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 w-[100px] h-[90px] rounded-[1.5rem] bg-gradient-to-b from-slate-700 to-slate-900 border border-slate-600 shadow-xl flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                    <div className="relative flex flex-col items-center gap-1 z-10">
                      <div className="w-10 h-10 rounded-full bg-slate-950 border-2 border-violet-500/60 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-violet-900/50 border border-violet-400/30 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-slate-950" />
                        </div>
                      </div>
                      <span className="text-[6px] font-black text-violet-400 tracking-widest">CAMERA</span>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>

            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs font-black mb-3 shadow-md">
                Part 1
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">The Goggles</h3>
              <p className="text-slate-500 text-sm max-w-xs mx-auto">Worn on the face. The ultrasonic sensor sits in the center — continuously pinging the environment ahead.</p>
            </div>

            <div className="w-full max-w-xs space-y-2.5">
              {[
                { icon: Waves, label: "Ultrasonic Sensor HC-SR04", note: "Center-mounted, detects up to 4m", color: "text-indigo-600 bg-gradient-to-br from-indigo-100 to-indigo-50" },
                { icon: Camera, label: "Camera Module V2", note: "Object & text recognition", color: "text-violet-600 bg-gradient-to-br from-violet-100 to-violet-50" },
              ].map((s, i) => (
                <TiltCard key={i} intensity={5}>
                  <div className="flex items-center gap-3 bg-white rounded-xl p-3.5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${s.color} shadow-sm`}>
                      <s.icon size={15} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">{s.label}</p>
                      <p className="text-[11px] text-slate-400">{s.note}</p>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </motion.div>

          {/* ─── Part 2: Processing Unit ─── */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}
            className="flex flex-col items-center">

            {/* Processing unit illustration */}
            <TiltCard intensity={10} className="mb-8">
              <div className="relative w-[140px] h-[280px]">
                <div className="absolute inset-4 bg-violet-300/20 blur-2xl rounded-[2rem]" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-700 to-slate-900 rounded-[2rem] border border-slate-600 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-slate-950 rounded-full border border-slate-600" />
                  <div className="absolute top-[22%] left-1/2 -translate-x-1/2 w-[110px]">
                    <div className="bg-slate-800/70 rounded-xl border border-violet-500/30 p-2.5 text-center">
                      <Cpu size={18} className="text-violet-400 mx-auto mb-1" />
                      <div className="text-[7px] font-black text-violet-400 tracking-widest uppercase">Raspberry Pi 4</div>
                      <div className="text-[6px] text-slate-500 mt-0.5">Processing Core</div>
                    </div>
                  </div>
                  <div className="absolute top-[52%] -translate-y-1/2 left-1/2 -translate-x-1/2 w-[110px]">
                    <div className="bg-slate-800/50 rounded-xl border border-orange-500/30 p-2.5 text-center">
                      <Volume2 size={16} className="text-orange-400 mx-auto mb-1" />
                      <div className="text-[7px] font-black text-orange-400 tracking-widest uppercase">Audio Output</div>
                      <div className="text-[6px] text-slate-500 mt-0.5">Voice Alerts</div>
                    </div>
                  </div>
                  <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
                    <Wifi size={14} className="text-teal-400" />
                    <span className="text-[6px] font-bold text-teal-400 tracking-widest">BT + WiFi</span>
                  </div>
                  <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 flex gap-2">
                    <motion.div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.9)]"
                      animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                    <motion.div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]"
                      animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.7 }} />
                  </div>
                </div>
              </div>
            </TiltCard>

            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-700 text-white text-xs font-black mb-3 shadow-md">
                Part 2
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">The Processing Unit</h3>
              <p className="text-slate-500 text-sm max-w-xs mx-auto">A compact, handheld module. Runs the AI, processes sensor data, and delivers voice alerts through a speaker or earphone.</p>
            </div>

            <div className="w-full max-w-xs space-y-2.5">
              {[
                { icon: Cpu, label: "Raspberry Pi 4", note: "AI inference & sensor fusion", color: "text-violet-600 bg-gradient-to-br from-violet-100 to-violet-50" },
                { icon: Volume2, label: "Audio Output", note: "Real-time spoken voice alerts", color: "text-orange-600 bg-gradient-to-br from-orange-100 to-orange-50" },
                { icon: Battery, label: "Onboard Power Cell", note: "Rechargeable, up to 8hr runtime", color: "text-teal-600 bg-gradient-to-br from-teal-100 to-teal-50" },
                { icon: Wifi, label: "Bluetooth + WiFi", note: "Mobile app sync & GPS routing", color: "text-sky-600 bg-gradient-to-br from-sky-100 to-sky-50" },
              ].map((s, i) => (
                <TiltCard key={i} intensity={5}>
                  <div className="flex items-center gap-3 bg-white rounded-xl p-3.5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${s.color} shadow-sm`}>
                      <s.icon size={15} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">{s.label}</p>
                      <p className="text-[11px] text-slate-400">{s.note}</p>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Connection line */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 flex items-center justify-center gap-4">
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-indigo-300" />
          <div className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-sm font-bold text-slate-500 flex items-center gap-2 shadow-sm">
            <Wifi size={14} className="text-indigo-500" />
            Goggles → Processing Unit via wired connection
          </div>
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-violet-300" />
        </motion.div>

      </div>
    </section>
  );
}
