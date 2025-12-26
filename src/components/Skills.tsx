import { Code, Database, Server, Smartphone } from "lucide-react";
import { motion } from "motion/react";

const skills = [
  { name: "Flutter & Dart", icon: Code },
  { name: "Node.js", icon: Server },
  { name: "PostgreSQL", icon: Database },
  { name: "JSON", icon: Code },
  { name: "RESTful APIs", icon: Server },
  { name: "Firebase", icon: Database },
  { name: "Riverpod & BLoC", icon: Code },
  { name: "CI/CD (Codemagic)", icon: Server },
  { name: "Payment Integrations", icon: Smartphone },
  { name: "AR & NFC Integrations", icon: Smartphone },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl mb-12 text-slate-800 text-center"
        >
          Top Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <span className="text-slate-800">{skill.name}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
