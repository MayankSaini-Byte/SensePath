import { motion } from "framer-motion";

export function Story() {
  return (
    <section id="story" className="py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-6 mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built for <span className="text-primary italic">Life.</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SensePath isn't just theory. It's designed for the messy, unpredictable reality of daily movement.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Scene 1: Street */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-3xl bg-card border border-border overflow-hidden flex flex-col"
          >
            <div className="h-64 bg-[#0c1428] relative p-6 flex items-end justify-center overflow-hidden">
               {/* Decorative background elements */}
               <div className="absolute inset-0 opacity-20">
                 <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent" />
                 {/* Buildings silhouette */}
                 <div className="absolute bottom-10 left-4 w-12 h-32 bg-blue-900/30 rounded-sm" />
                 <div className="absolute bottom-10 left-20 w-16 h-40 bg-blue-800/30 rounded-sm" />
                 <div className="absolute bottom-10 right-10 w-20 h-24 bg-blue-900/30 rounded-sm" />
               </div>
               
               {/* SVG Character */}
               <svg viewBox="0 0 200 200" className="w-48 h-48 relative z-10 drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Cane */}
                  <line x1="80" y1="120" x2="30" y2="190" stroke="#f87171" strokeWidth="4" strokeLinecap="round" />
                  <line x1="30" y1="190" x2="10" y2="195" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Body */}
                  <rect x="85" y="70" width="30" height="60" rx="15" fill="#1e3a8a" />
                  {/* Head */}
                  <circle cx="100" cy="45" r="18" fill="#fcd34d" />
                  {/* Glasses */}
                  <rect x="90" y="40" width="24" height="8" rx="2" fill="#111827" />
                  {/* Legs */}
                  <rect x="88" y="125" width="10" height="50" rx="5" fill="#0f172a" />
                  <rect x="102" y="125" width="10" height="50" rx="5" fill="#0f172a" />
                  {/* Arms */}
                  <rect x="75" y="75" width="10" height="45" rx="5" transform="rotate(30 80 80)" fill="#1e3a8a" />
                  <rect x="115" y="75" width="10" height="40" rx="5" fill="#1e3a8a" />

                  {/* SensePath Device */}
                  <rect x="92" y="80" width="16" height="24" rx="4" fill="#00d4ff" />
                  {/* Sonar waves from device */}
                  <path d="M 120 85 Q 130 75 140 85" stroke="#00d4ff" strokeWidth="2" fill="none" className="animate-pulse" />
                  <path d="M 125 92 Q 140 80 155 92" stroke="#00d4ff" strokeWidth="2" fill="none" className="animate-pulse" style={{animationDelay: '0.2s'}} />
               </svg>
            </div>
            <div className="p-6 md:p-8 flex-1 bg-card">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">City Navigation</h3>
              <p className="text-muted-foreground">Detects overhanging branches and parked vehicles before the cane reaches them.</p>
            </div>
          </motion.div>

          {/* Scene 2: Market */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative rounded-3xl bg-card border border-border overflow-hidden flex flex-col"
          >
            <div className="h-64 bg-[#0a1122] relative p-6 flex items-end justify-center overflow-hidden">
               <div className="absolute inset-0 opacity-20">
                 {/* Market stalls shapes */}
                 <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
                   <path d="M20 150 L80 150 L60 100 L40 100 Z" fill="#3b82f6" />
                   <path d="M120 160 L180 160 L170 110 L130 110 Z" fill="#3b82f6" />
                 </svg>
               </div>

               <svg viewBox="0 0 200 200" className="w-48 h-48 relative z-10 drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Body */}
                  <rect x="85" y="70" width="30" height="60" rx="10" fill="#047857" />
                  {/* Head */}
                  <circle cx="100" cy="45" r="18" fill="#d4a373" />
                  {/* Hair */}
                  <path d="M 85 45 Q 100 20 115 45" fill="#27272a" />
                  {/* Glasses */}
                  <rect x="88" y="40" width="22" height="6" rx="2" fill="#111827" />
                  {/* Legs */}
                  <rect x="88" y="125" width="10" height="50" rx="5" fill="#1e293b" />
                  <rect x="102" y="125" width="10" height="50" rx="5" fill="#1e293b" />
                  {/* Arms holding device */}
                  <rect x="70" y="75" width="10" height="35" rx="5" transform="rotate(20 75 80)" fill="#047857" />
                  <rect x="120" y="75" width="10" height="35" rx="5" transform="rotate(-20 125 80)" fill="#047857" />

                  {/* SensePath Device held up */}
                  <rect x="85" y="100" width="30" height="14" rx="4" fill="#00d4ff" />
                  {/* Sonar scanning objects */}
                  <path d="M 60 107 L 80 107" stroke="#00d4ff" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
                  <path d="M 120 107 L 140 107" stroke="#00d4ff" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
               </svg>
            </div>
            <div className="p-6 md:p-8 flex-1 bg-card">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">Crowded Spaces</h3>
              <p className="text-muted-foreground">Identifies people and dynamic obstacles, allowing smooth movement through busy markets.</p>
            </div>
          </motion.div>

          {/* Scene 3: Transport */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative rounded-3xl bg-card border border-border overflow-hidden flex flex-col"
          >
            <div className="h-64 bg-[#080d1a] relative p-6 flex items-end justify-center overflow-hidden">
               <div className="absolute inset-0 opacity-20 flex items-center justify-center">
                 {/* Bus/Train seat shapes */}
                 <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
                   <rect x="40" y="100" width="40" height="80" rx="5" fill="#64748b" />
                   <rect x="120" y="100" width="40" height="80" rx="5" fill="#64748b" />
                 </svg>
               </div>

               <svg viewBox="0 0 200 200" className="w-48 h-48 relative z-10 drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Seat */}
                  <rect x="70" y="130" width="60" height="20" rx="5" fill="#334155" />
                  <rect x="70" y="80" width="15" height="50" rx="5" fill="#334155" />
                  
                  {/* Person Sitting */}
                  <rect x="85" y="70" width="30" height="55" rx="10" fill="#9f1239" />
                  <circle cx="100" cy="45" r="18" fill="#fbcfe8" />
                  <rect x="90" y="40" width="24" height="8" rx="2" fill="#111827" />
                  
                  {/* Legs bent */}
                  <rect x="85" y="120" width="40" height="12" rx="6" fill="#0f172a" />
                  <rect x="115" y="120" width="12" height="50" rx="6" fill="#0f172a" />
                  
                  {/* Cane folded/resting */}
                  <line x1="80" y1="170" x2="60" y2="90" stroke="#f87171" strokeWidth="4" strokeLinecap="round" />
                  
                  {/* Device around neck */}
                  <rect x="92" y="85" width="16" height="24" rx="4" fill="#00d4ff" />
                  <path d="M 95 65 Q 100 80 105 65" stroke="#475569" strokeWidth="2" fill="none" />
               </svg>
            </div>
            <div className="p-6 md:p-8 flex-1 bg-card">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">Public Transit</h3>
              <p className="text-muted-foreground">Discreet and wearable. Identifies empty seats and reads transit signs automatically.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
