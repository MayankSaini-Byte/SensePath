import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const team = [
  { name: "Raja", role: "Mechanical Eng" },
  { name: "Devansh", role: "Mechanical Eng" },
  { name: "Mayank", role: "Metallurgical Eng" },
  { name: "Kamlesh", role: "Electrical Eng" },
];

export function Team() {
  return (
    <section id="team" className="py-24 md:py-32">
      <div className="container px-6 mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The <span className="text-primary">Team</span></h2>
          <p className="text-lg text-muted-foreground">Engineering students from MANIT Bhopal, united by a purpose.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group text-center"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-secondary border border-border flex items-center justify-center mb-4 overflow-hidden group-hover:border-primary transition-all">
                <span className="text-3xl font-bold text-muted-foreground group-hover:text-primary transition-colors">{member.name[0]}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
              <p className="text-sm text-primary">{member.role}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-2xl p-8 text-center max-w-2xl mx-auto"
        >
          <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4">
            <span className="text-xl font-serif italic font-bold">Guide</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Dr. Suresh Kumar Gawre</h3>
          <p className="text-muted-foreground mb-6">Faculty Guide, Electrical Department</p>
          <p className="italic text-sm text-muted-foreground">"Guiding the next generation of engineers to build solutions that matter."</p>
        </motion.div>
      </div>
    </section>
  );
}
