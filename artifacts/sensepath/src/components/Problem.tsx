import { motion } from "framer-motion";

export function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32 relative">
      <div className="container px-6 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The world isn't built for <span className="text-primary italic">everyone.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            For millions of visually impaired individuals, stepping outside means navigating a world of unseen obstacles, unexpected hazards, and constant reliance on others or traditional tools that offer limited awareness.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/50 backdrop-blur-sm border border-border p-8 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-all" />
            <h3 className="text-2xl font-bold text-white mb-4">The Gap in Independence</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              White canes detect what's on the ground, but miss overhanging branches, signboards, or approaching vehicles. The physical toll of constant vigilance is exhausting.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card/50 backdrop-blur-sm border border-border p-8 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To bridge this gap with accessible, affordable technology. SensePath acts as a "digital eye," analyzing the environment and whispering crucial information directly to the user.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
