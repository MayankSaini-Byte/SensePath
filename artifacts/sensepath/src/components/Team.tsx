import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const team = [
  { name: "Raja", role: "Mechanical Eng.", initials: "Ra", grad: "from-indigo-500 to-indigo-700" },
  { name: "Devansh", role: "Mechanical Eng.", initials: "De", grad: "from-violet-500 to-violet-700" },
  { name: "Mayank", role: "Metallurgical Eng.", initials: "Ma", grad: "from-orange-500 to-orange-600" },
  { name: "Kamlesh", role: "Electrical Eng.", initials: "Ka", grad: "from-teal-500 to-teal-700" },
];

export function Team() {
  return (
    <section id="team" className="py-24 md:py-32 bg-slate-50">
      <div className="container px-6 mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 text-violet-700 text-xs font-bold mb-6">
            The Team
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Built by <span className="text-indigo-600">1st-year students</span>
            <br />who care.
          </h2>
          <p className="text-lg text-slate-500">B.Tech students at MANIT Bhopal — united by a shared mission.</p>
        </motion.div>

        {/* Team members */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
          {team.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }} className="text-center group">
              <div className={`w-20 h-20 md:w-24 md:h-24 mx-auto rounded-2xl bg-gradient-to-br ${m.grad} flex items-center justify-center mb-3 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                <span className="text-xl font-black text-white">{m.initials}</span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm">{m.name}</h3>
              <p className="text-xs text-slate-400 mt-0.5">{m.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Guide */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
            <GraduationCap size={24} className="text-amber-600" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Faculty Guide</div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-0.5">Dr. Suresh Kumar Gawre</h3>
            <p className="text-slate-500 text-sm">Electrical Department, MANIT Bhopal</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
