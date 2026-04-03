import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

export function FutureScope() {
  return (
    <section className="py-24 md:py-32 bg-secondary/30 border-y border-border/50">
      <div className="container px-6 mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Expected Outcomes */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
              <CheckCircle2 className="text-primary" size={32} />
              Expected Outcomes
            </h2>
            <div className="space-y-6">
              {[
                "Enhanced independent mobility in unfamiliar environments",
                "Reduced accident rates through early obstacle warning",
                "Affordable alternative to expensive guide dogs or premium devices",
                "Scalable design suitable for mass manufacturing",
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
                  <p className="text-lg text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Future Scope */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
              <Sparkles className="text-primary" size={32} />
              Future Scope
            </h2>
            <div className="relative border-l border-border ml-4 pl-8 space-y-10">
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-2 border-primary" />
                <h3 className="text-xl font-bold text-white mb-2">Smart Glasses Integration</h3>
                <p className="text-muted-foreground">Miniaturizing the camera and sensors into a wearable, discreet glasses frame.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-2 border-border" />
                <h3 className="text-xl font-bold text-white mb-2">Advanced AI Models</h3>
                <p className="text-muted-foreground">Implementing YOLOv8 for faster, more accurate multi-object and text recognition.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-2 border-border" />
                <h3 className="text-xl font-bold text-white mb-2">Conversational AI</h3>
                <p className="text-muted-foreground">Allowing users to ask "What's in front of me?" or "Read this sign" via the microphone.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
