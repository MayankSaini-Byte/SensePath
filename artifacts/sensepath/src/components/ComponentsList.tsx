import { motion } from "framer-motion";
import { Cpu, Camera, Waves, MapPin, Headphones, Battery, Vibrate, Pointer, Mic } from "lucide-react";

const components = [
  { name: "Raspberry Pi 4", icon: Cpu, desc: "The brain. Handles image processing and AI models." },
  { name: "Camera Module V2", icon: Camera, desc: "Captures environment for object/face recognition." },
  { name: "Ultrasonic (HC-SR04)", icon: Waves, desc: "Precision distance measurement via sound waves." },
  { name: "GPS NEO-6M", icon: MapPin, desc: "Real-time location tracking for outdoor routing." },
  { name: "Headphones", icon: Headphones, desc: "Private, clear audio alerts for the user." },
  { name: "Power Bank", icon: Battery, desc: "5V 2.5A supply for extended operational life." },
  { name: "Vibration Motor", icon: Vibrate, desc: "Haptic feedback for urgent close-proximity alerts." },
  { name: "Push Button", icon: Pointer, desc: "Tactile control to repeat alerts or trigger scans." },
  { name: "Microphone", icon: Mic, desc: "Future-ready for voice commands and queries." },
];

export function ComponentsList() {
  return (
    <section id="components" className="py-24 md:py-32 relative">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Hardware <span className="text-primary">Stack</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Off-the-shelf components combined with custom software to create an affordable, accessible solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {components.map((comp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-2xl hover:border-primary/50 hover:bg-card transition-all group flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-primary">
                <comp.icon size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{comp.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{comp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
