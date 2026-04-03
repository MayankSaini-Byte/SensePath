import { motion } from "framer-motion";
import { Camera, Cpu, Waves, Battery, Wifi } from "lucide-react";

const annotations = [
  { icon: Camera, label: "Camera Module V2", desc: "Raspberry Pi Camera V2 for object & face recognition", bg: "bg-violet-50 border-violet-200", iconBg: "bg-violet-600", text: "text-violet-700" },
  { icon: Waves, label: "Ultrasonic Sensor HC-SR04", desc: "Dual-eye sonar detecting obstacles up to 4 meters", bg: "bg-indigo-50 border-indigo-200", iconBg: "bg-indigo-600", text: "text-indigo-700" },
  { icon: Cpu, label: "Raspberry Pi 4 (inside)", desc: "Runs AI inference, sensor fusion & voice synthesis", bg: "bg-teal-50 border-teal-200", iconBg: "bg-teal-600", text: "text-teal-700" },
  { icon: Battery, label: "Power Bank Body 5V 2.5A", desc: "The device casing doubles as portable power supply", bg: "bg-orange-50 border-orange-200", iconBg: "bg-orange-500", text: "text-orange-700" },
  { icon: Wifi, label: "Bluetooth + WiFi Module", desc: "Syncs with mobile app for GPS & emergency SOS", bg: "bg-rose-50 border-rose-200", iconBg: "bg-rose-500", text: "text-rose-700" },
];

export function Device() {
  return (
    <section id="device" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-indigo-100 via-violet-50 to-purple-100 blur-3xl opacity-70" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold mb-6">
            <Cpu size={14} />
            The Device
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Meet <span className="text-indigo-600">SensePath</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Shaped like a power bank — familiar, portable, discreet. The ultrasonic sensor sits front-and-center, always scanning.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">

          {/* Device illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-[200px] h-[420px] flex-shrink-0"
          >
            {/* Glow */}
            <div className="absolute inset-6 bg-indigo-400/20 blur-2xl rounded-[3rem]" />

            {/* Body */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-600 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

              {/* Strap hole top */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-3 bg-slate-950 rounded-full border border-slate-600" />

              {/* Camera — top section */}
              <div className="absolute top-[16%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
                <div className="w-14 h-14 rounded-full bg-slate-950 border-2 border-slate-600 flex items-center justify-center relative">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-800 to-violet-900/60 border border-violet-400/30 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-slate-950" />
                  </div>
                  <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-white/25 blur-[1px]" />
                </div>
                <span className="text-[8px] font-bold text-violet-400 tracking-widest uppercase">CAM</span>
              </div>

              {/* MIDDLE SECTION: Ultrasonic — the hero feature */}
              <div className="absolute top-[42%] -translate-y-1/2 left-1/2 -translate-x-1/2 w-[168px]">
                <div className="bg-slate-800/80 rounded-xl border border-indigo-500/50 p-3 shadow-inner">
                  <div className="text-[7px] font-black text-indigo-400 tracking-[0.2em] text-center mb-2.5 uppercase">HC-SR04 Ultrasonic</div>
                  <div className="flex items-center justify-around gap-2">
                    {/* TX */}
                    <div className="relative flex flex-col items-center gap-1">
                      <div className="w-12 h-12 rounded-full bg-slate-950 border-2 border-indigo-500/70 flex items-center justify-center relative">
                        <div className="w-7 h-7 rounded-full bg-slate-800 border border-indigo-400/30" />
                        <motion.div className="absolute inset-0 rounded-full border-2 border-indigo-400"
                          animate={{ scale: [1, 2.3], opacity: [0.9, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                        />
                        <motion.div className="absolute inset-0 rounded-full border border-indigo-300"
                          animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
                        />
                      </div>
                      <span className="text-[7px] font-black text-indigo-400">TX</span>
                    </div>
                    {/* RX */}
                    <div className="relative flex flex-col items-center gap-1">
                      <div className="w-12 h-12 rounded-full bg-slate-950 border-2 border-cyan-500/70 flex items-center justify-center relative">
                        <div className="w-7 h-7 rounded-full bg-slate-800 border border-cyan-400/30" />
                        <motion.div className="absolute inset-0 rounded-full border-2 border-cyan-400"
                          animate={{ scale: [1, 2.3], opacity: [0.9, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.75 }}
                        />
                      </div>
                      <span className="text-[7px] font-black text-cyan-400">RX</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status LEDs + battery bar */}
              <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 w-full px-5">
                <div className="w-full h-px bg-slate-600/40" />
                <div className="flex gap-2.5">
                  <motion.div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.9)]"
                    animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.8, repeat: Infinity }} />
                  <motion.div className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.9)]"
                    animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.8, repeat: Infinity, delay: 0.6 }} />
                  <motion.div className="w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.9)]"
                    animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.8, repeat: Infinity, delay: 1.2 }} />
                </div>
                <div className="w-14 h-5 rounded-md bg-slate-700 border border-slate-600 flex items-center px-1">
                  <div className="w-9 h-2 rounded-full bg-gradient-to-r from-green-400 to-teal-400" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Annotation cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl w-full">
            {annotations.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`p-5 rounded-2xl border-2 ${item.bg} flex items-start gap-4 hover:scale-[1.02] transition-transform duration-300`}
              >
                <div className={`w-10 h-10 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0 shadow-md`}>
                  <item.icon size={18} className="text-white" />
                </div>
                <div>
                  <p className={`font-bold text-sm mb-0.5 ${item.text}`}>{item.label}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
