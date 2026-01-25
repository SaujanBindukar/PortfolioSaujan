import { Code, Database, Server } from "lucide-react";
import { motion } from "motion/react";

const skills = [
  { name: "Flutter & Dart", icon: Code },
  { name: "JavaScript", icon: Server },
  { name: "ReactJS", icon: Server },
  { name: "Typescript", icon: Server },
  { name: "Tailwind CSS", icon: Server },
  { name: "PostgreSQL", icon: Database },
  { name: "JSON", icon: Code },
  { name: "RESTful APIs", icon: Server },
  { name: "Firebase", icon: Database },
  { name: "Riverpod & BLoC", icon: Code },
  { name: "CI/CD (Codemagic)", icon: Server },
  { name: "Firebase", icon: Code },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-slate-800 text-center"
        >
          Top Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ type: "spring", stiffness: 150, damping: 10 }}
                    className="w-12 h-12 rounded-lg bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <span className="text-slate-800 font-semibold text-lg lg:text-xl">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
