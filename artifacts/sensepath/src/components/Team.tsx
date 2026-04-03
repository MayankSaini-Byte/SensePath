import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { TiltCard } from "./TiltCard";

const team = [
  { name: "Raja", role: "Mechanical Eng.", initials: "Ra", grad: "from-indigo-500 to-indigo-700" },
  { name: "Devansh", role: "Mechanical Eng.", initials: "De", grad: "from-violet-500 to-violet-700" },
  { name: "Mayank", role: "Metallurgical Eng.", initials: "Ma", grad: "from-orange-500 to-orange-600" },
  { name: "Kamlesh", role: "Electrical Eng.", initials: "Ka", grad: "from-teal-500 to-teal-700" },
];

export function Team() {
  return (
    <section id="team" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-b from-indigo-50 to-transparent blur-3xl opacity-70 pointer-events-none" />

      <div className="container px-6 mx-auto max-w-4xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-100 to-indigo-100 text-violet-700 text-xs font-black mb-6 border border-violet-200/60 shadow-sm">
            The Team
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            Built by{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              1st-year students
            </span>
            <br />who care.
          </h2>
          <p className="text-lg text-slate-500">B.Tech students at MANIT Bhopal — united by a shared mission.</p>
        </motion.div>

        {/* Team cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          {team.map((m, i) => (
            <TiltCard key={i} intensity={14}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center group cursor-default p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className={`w-20 h-20 md:w-24 md:h-24 mx-auto rounded-2xl bg-gradient-to-br ${m.grad} flex items-center justify-center mb-3 shadow-lg`}>
                  <span className="text-xl font-black text-white">{m.initials}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm">{m.name}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{m.role}</p>
              </motion.div>
            </TiltCard>
          ))}
        </div>

        {/* Guide */}
        <TiltCard intensity={5}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/70 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0 shadow-lg">
              <GraduationCap size={24} className="text-white" />
            </div>
            <div>
              <div className="text-xs font-black text-amber-600 uppercase tracking-wider mb-1">Faculty Guide</div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-0.5">Dr. Suresh Kumar Gawre</h3>
              <p className="text-slate-500 text-sm">Electrical Department, MANIT Bhopal</p>
            </div>
          </motion.div>
        </TiltCard>
      </div>
    </section>
  );
}
