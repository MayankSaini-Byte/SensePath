import { motion } from "framer-motion";
import { Mic, Cpu, Volume2, Smartphone } from "lucide-react";

const steps = [
  {
    icon: Mic,
    title: "Detect",
    desc: "Sensors continuously ping the environment for obstacles within a 4-meter radius.",
  },
  {
    icon: Cpu,
    title: "Process",
    desc: "Raspberry Pi analyzes sensor data and camera feed in milliseconds.",
  },
  {
    icon: Volume2,
    title: "Alert",
    desc: "Clear voice commands indicate direction and distance ('Obstacle 2 meters left').",
  },
  {
    icon: Smartphone,
    title: "Connect",
    desc: "Syncs with mobile app for GPS routing and customizable settings.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A seamless pipeline from detection to notification, running entirely on the edge for zero latency.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2" />
          <motion.div 
            className="hidden md:block absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,212,255,0.2)]">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
