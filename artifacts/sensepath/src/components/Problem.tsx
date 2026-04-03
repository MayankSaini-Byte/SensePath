import { motion } from "framer-motion";
import { AlertTriangle, Eye, Users, Navigation } from "lucide-react";

const challenges = [
  {
    icon: Navigation,
    title: "Navigating the Unknown",
    desc: "Unfamiliar environments, crowded markets, and changing layouts are nearly impossible to navigate without real-time intelligence. A cane can't tell you about the overhanging branch or the parked scooter.",
    color: "bg-indigo-50 border-indigo-200",
    iconBg: "bg-indigo-600",
    accent: "text-indigo-600",
  },
  {
    icon: Eye,
    title: "Object & Text Recognition",
    desc: "Reading signs, identifying faces, recognizing everyday objects — tasks we do in milliseconds require complete dependence on another person for the visually impaired.",
    color: "bg-orange-50 border-orange-200",
    iconBg: "bg-orange-500",
    accent: "text-orange-600",
  },
  {
    icon: Users,
    title: "Dependence on Others",
    desc: "Constant reliance on family, friends, or strangers strips away dignity and confidence. Existing tools like Braille or voice-apps are partial solutions — expensive, limited, or not context-aware.",
    color: "bg-teal-50 border-teal-200",
    iconBg: "bg-teal-600",
    accent: "text-teal-600",
  },
  {
    icon: AlertTriangle,
    title: "Real-World Conditions",
    desc: "Moving vehicles, changing lighting, crowded areas, and dynamic environments defeat static solutions. Most products fail exactly where they're needed most.",
    color: "bg-violet-50 border-violet-200",
    iconBg: "bg-violet-600",
    accent: "text-violet-600",
  },
];

export function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-indigo-50 blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-orange-50 blur-3xl opacity-60 translate-y-1/2 -translate-x-1/3" />

      <div className="container px-6 mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-bold mb-6">
            <AlertTriangle size={14} />
            Problem Statement
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            The world wasn't built<br />
            <span className="text-indigo-600">for everyone.</span>
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
            Over 39 million people are blind worldwide. For them, every journey outside is a calculated risk. Existing tools only scratch the surface of what's needed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {challenges.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`p-8 rounded-2xl border-2 ${item.color} group hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-5 shadow-lg`}>
                <item.icon size={22} className="text-white" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${item.accent}`}>{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
