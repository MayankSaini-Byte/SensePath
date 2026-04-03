import { motion } from "framer-motion";
import { CheckCircle2, Rocket, Glasses, Brain, MessageSquare, Smartphone, TrendingUp } from "lucide-react";

const outcomes = [
  { text: "Enhanced independent mobility in unfamiliar environments", color: "text-indigo-600" },
  { text: "Reduced accident rates through early obstacle warning systems", color: "text-violet-600" },
  { text: "Affordable alternative to expensive guide dogs or premium assistive tech", color: "text-orange-600" },
  { text: "Scalable, modular design ready for mass manufacturing", color: "text-teal-600" },
  { text: "Real-time feedback enabling confident, unsupported navigation", color: "text-rose-600" },
];

const futureItems = [
  {
    icon: Glasses,
    title: "Smart Glasses",
    desc: "Miniaturize sensors into a discreet wearable glasses frame for hands-free, always-on awareness.",
    color: "bg-indigo-600",
    bg: "bg-indigo-50 border-indigo-200",
  },
  {
    icon: Brain,
    title: "Advanced AI — YOLOv8",
    desc: "Faster, more accurate multi-object, face, and sign recognition using state-of-the-art ML models.",
    color: "bg-violet-600",
    bg: "bg-violet-50 border-violet-200",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    desc: "Natural voice queries: 'What's in front of me?' 'Read this menu.' Full conversational device interaction.",
    color: "bg-orange-500",
    bg: "bg-orange-50 border-orange-200",
  },
  {
    icon: Smartphone,
    title: "Full Mobile App",
    desc: "Emergency SOS, health monitoring, route history, family alerts, and accessibility settings in one app.",
    color: "bg-teal-600",
    bg: "bg-teal-50 border-teal-200",
  },
];

export function FutureScope() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-orange-50 to-transparent blur-3xl" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-indigo-50 to-transparent blur-3xl" />

      <div className="container px-6 mx-auto max-w-6xl relative z-10">

        {/* Expected outcomes */}
        <div className="mb-24">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-bold mb-6">
              <TrendingUp size={14} />
              Expected Outcomes
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              What SensePath <span className="text-green-600">delivers.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {outcomes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-3 p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <CheckCircle2 size={20} className={`${item.color} flex-shrink-0 mt-0.5`} />
                <p className="text-slate-700 font-medium leading-relaxed text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future scope */}
        <div>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold mb-6">
              <Rocket size={14} />
              Future Scope
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Where we're <span className="text-indigo-600">headed.</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              SensePath is a prototype today. A comprehensive assistive ecosystem tomorrow.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {futureItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`p-7 rounded-3xl border-2 ${item.bg} group hover:scale-[1.03] transition-transform duration-300`}
              >
                <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-5 shadow-lg`}>
                  <item.icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
