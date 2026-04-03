import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";

const team = [
  { name: "Raja", role: "Mechanical Engineering", initials: "Ra", grad: "from-indigo-500 to-indigo-700", ring: "ring-indigo-300" },
  { name: "Devansh", role: "Mechanical Engineering", initials: "De", grad: "from-violet-500 to-violet-700", ring: "ring-violet-300" },
  { name: "Mayank", role: "Metallurgical Engineering", initials: "Ma", grad: "from-orange-500 to-orange-700", ring: "ring-orange-300" },
  { name: "Kamlesh", role: "Electrical Engineering", initials: "Ka", grad: "from-teal-500 to-teal-700", ring: "ring-teal-300" },
];

export function Team() {
  return (
    <section id="team" className="py-24 md:py-32 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 relative overflow-hidden">
      {/* Mesh overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `radial-gradient(circle at 20% 80%, #f97316 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, #0ea5e9 0%, transparent 50%)`
      }} />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container px-6 mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white text-sm font-bold mb-6">
            <Users size={14} />
            The Team
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-5">
            Built by engineers,
            <br />
            <span className="text-amber-300">driven by empathy.</span>
          </h2>
          <p className="text-lg text-indigo-200">
            First-year students from MANIT Bhopal, united by a single mission.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group text-center"
            >
              <div className={`w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-br ${member.grad} flex items-center justify-center mb-4 ring-4 ring-offset-4 ring-offset-transparent ${member.ring} shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl md:text-3xl font-black text-white">{member.initials}</span>
              </div>
              <h3 className="text-lg font-extrabold text-white mb-1">{member.name}</h3>
              <p className="text-sm text-indigo-200 font-medium">{member.role}</p>
              <p className="text-xs text-indigo-300 mt-1">1st Year</p>
            </motion.div>
          ))}
        </div>

        {/* Guide card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/15 backdrop-blur-md border border-white/25 rounded-3xl p-8 text-center max-w-2xl mx-auto"
        >
          <div className="w-16 h-16 mx-auto rounded-full bg-amber-400 flex items-center justify-center mb-5 shadow-lg ring-4 ring-amber-300/40">
            <GraduationCap size={28} className="text-amber-900" />
          </div>
          <div className="text-xs font-bold text-amber-300 uppercase tracking-widest mb-2">Project Guide</div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">Dr. Suresh Kumar Gawre</h3>
          <p className="text-indigo-200 font-medium mb-1">Electrical Department, MANIT Bhopal</p>
          <p className="text-sm text-indigo-300">Guiding the next generation of engineers to build solutions that matter.</p>
        </motion.div>
      </div>
    </section>
  );
}
