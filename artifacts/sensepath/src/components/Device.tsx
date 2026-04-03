import { motion } from "framer-motion";

export function Device() {
  return (
    <section id="device" className="py-24 md:py-32 bg-secondary/30 relative border-y border-border/50">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Meet <span className="text-primary">SensePath</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A compact powerhouse. Worn around the neck or clipped to a strap, it scans the environment continuously without restricting movement.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24">
          
          {/* Device Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[300px] aspect-[1/2] lg:aspect-auto lg:h-[500px] lg:w-[250px] mx-auto"
          >
            {/* Outer Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-[3rem]" />
            
            {/* The Device Body */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-950 rounded-[2.5rem] border border-gray-700 shadow-2xl shadow-black/50 overflow-hidden flex flex-col items-center py-10 relative z-10">
              
              {/* Top - Camera */}
              <div className="relative group cursor-pointer mb-12">
                <div className="w-12 h-12 rounded-full bg-black border-2 border-gray-700 flex items-center justify-center shadow-inner">
                  <div className="w-6 h-6 rounded-full bg-blue-900/40 border border-blue-500/30 flex items-center justify-center overflow-hidden">
                    <div className="w-3 h-3 rounded-full bg-black" />
                    {/* Lens reflection */}
                    <div className="absolute top-1 right-1 w-2 h-2 bg-white/20 rounded-full blur-[1px]" />
                  </div>
                </div>
                {/* Annotation Line */}
                <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-full w-24 h-px bg-primary/50" />
                <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-[calc(100%+6rem)] whitespace-nowrap text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded border border-primary/20">
                  Camera Module
                </div>
              </div>

              {/* Middle - Ultrasonic Sensor */}
              <div className="relative group cursor-pointer">
                <div className="w-32 h-16 bg-blue-950/30 rounded-lg border border-blue-900/50 flex items-center justify-between px-3 relative">
                  {/* Left Eye */}
                  <div className="w-10 h-10 rounded-full bg-black border-2 border-gray-600 flex items-center justify-center relative">
                    <div className="w-6 h-6 rounded-full bg-gray-800 border border-gray-700" />
                    {/* Sonar Ping Animation */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-primary/60"
                      animate={{ scale: [1, 2.5], opacity: [1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                    />
                  </div>
                  {/* Right Eye */}
                  <div className="w-10 h-10 rounded-full bg-black border-2 border-gray-600 flex items-center justify-center relative">
                    <div className="w-6 h-6 rounded-full bg-gray-800 border border-gray-700" />
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-primary/60"
                      animate={{ scale: [1, 2.5], opacity: [1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
                    />
                  </div>
                </div>
                {/* Annotation Line */}
                <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-full w-24 h-px bg-primary/50" />
                <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-[calc(100%+6rem)] whitespace-nowrap text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded border border-primary/20">
                  Ultrasonic Sensor (HC-SR04)
                </div>
              </div>

              {/* Bottom Details */}
              <div className="mt-auto flex flex-col items-center gap-4">
                <div className="w-16 h-1 rounded-full bg-gray-700" />
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                  <div className="w-2 h-2 rounded-full bg-gray-600" />
                  <div className="w-2 h-2 rounded-full bg-gray-600" />
                </div>
              </div>

            </div>
            
            {/* Lanyard/Strap attachments */}
            <div className="absolute -top-4 left-6 w-3 h-8 border-2 border-gray-600 rounded-t-full z-0" />
            <div className="absolute -top-4 right-6 w-3 h-8 border-2 border-gray-600 rounded-t-full z-0" />
          </motion.div>

          {/* Features List for Mobile (since annotations are hidden) */}
          <div className="lg:hidden flex flex-col gap-6 w-full max-w-md">
            <div className="bg-card p-6 rounded-xl border border-border">
              <h4 className="text-primary font-mono text-sm mb-2">01</h4>
              <h3 className="text-white font-bold text-xl mb-2">Camera Module</h3>
              <p className="text-muted-foreground text-sm">Captures high-res images for object and face recognition.</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h4 className="text-primary font-mono text-sm mb-2">02</h4>
              <h3 className="text-white font-bold text-xl mb-2">Ultrasonic Sensor</h3>
              <p className="text-muted-foreground text-sm">Measures precise distance to obstacles using sound waves.</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <h4 className="text-primary font-mono text-sm mb-2">03</h4>
              <h3 className="text-white font-bold text-xl mb-2">Processing Core</h3>
              <p className="text-muted-foreground text-sm">Raspberry Pi 4 housed inside for real-time edge computing.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
