import { motion } from "framer-motion";

export function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32 bg-white">
      <div className="container px-6 mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold mb-8">
            The Problem
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Millions navigate a world<br />
            <span className="text-indigo-600">not designed for them.</span>
          </h2>

          <p className="text-xl text-slate-500 leading-relaxed mb-14 max-w-2xl">
            Over 39 million people are blind worldwide. White canes miss overhanging obstacles. Existing apps are expensive or partial. There is no affordable, real-time, intelligent solution — yet.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { num: "01", title: "Can't detect overhanging obstacles", color: "border-l-indigo-500" },
              { num: "02", title: "High dependency on other people daily", color: "border-l-orange-500" },
              { num: "03", title: "Smart solutions are too expensive to scale", color: "border-l-violet-500" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className={`p-6 rounded-2xl bg-slate-50 border-l-4 ${item.color}`}>
                <div className="text-xs font-black text-slate-300 tracking-widest mb-3">{item.num}</div>
                <p className="font-bold text-slate-800 leading-snug">{item.title}</p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
