import { motion } from "framer-motion";
import { TiltCard } from "./TiltCard";

const issues = [
  { num: "01", title: "Can't detect overhanging obstacles", accent: "border-l-indigo-500", num_color: "text-indigo-300" },
  { num: "02", title: "High dependency on other people daily", accent: "border-l-orange-500", num_color: "text-orange-300" },
  { num: "03", title: "Smart solutions are too expensive to scale", accent: "border-l-violet-500", num_color: "text-violet-300" },
];

export function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-orange-50 to-indigo-50 blur-3xl opacity-60 translate-x-1/2 -translate-y-1/3 pointer-events-none" />

      <div className="container px-6 mx-auto max-w-4xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 text-xs font-black mb-8 border border-orange-200/60 shadow-sm">
            The Problem
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Millions navigate a world<br />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              not designed for them.
            </span>
          </h2>

          <p className="text-xl text-slate-500 leading-relaxed mb-14 max-w-2xl">
            Over 39 million people are blind worldwide. White canes miss overhanging obstacles. Existing apps are expensive or partial. There is no affordable, real-time, intelligent solution — yet.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {issues.map((item, i) => (
              <TiltCard key={i} intensity={8}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className={`p-6 rounded-2xl bg-white border border-slate-100 border-l-4 ${item.accent} shadow-sm hover:shadow-lg transition-shadow duration-300 h-full`}
                >
                  <div className={`text-xs font-black tracking-widest mb-3 ${item.num_color}`}>{item.num}</div>
                  <p className="font-bold text-slate-800 leading-snug">{item.title}</p>
                </motion.div>
              </TiltCard>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
