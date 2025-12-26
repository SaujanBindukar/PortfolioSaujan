import {
  Code,
  Smartphone,
  Globe,
  Package,
  Gamepad2,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    title: "Cango App",
    description: "Mobile app for startup (Android & iOS)",
    icon: Smartphone,
    gradient: "from-purple-500 to-purple-600",
  },
  {
    title: "Video Streaming App",
    description: "TikTok-like app with Flutter",
    icon: Sparkles,
    gradient: "from-pink-500 to-pink-600",
  },
  {
    title: "E-commerce Platforms",
    description: "Web & mobile applications with payment integration",
    icon: Globe,
    gradient: "from-blue-500 to-blue-600",
  },
  {
    title: "Warehouse & Inventory Management",
    description: "Full lifecycle project",
    icon: Package,
    gradient: "from-green-500 to-green-600",
  },
  {
    title: "2D Game (Sudoku)",
    description: "Flutter-based game",
    icon: Gamepad2,
    gradient: "from-orange-500 to-orange-600",
  },
  {
    title: "AR Filters",
    description: "Implemented using Swift & Flutter",
    icon: Code,
    gradient: "from-indigo-500 to-indigo-600",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl mb-12 text-slate-800 text-center"
        >
          Portfolio Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 cursor-pointer"
              >
                <motion.div
                  className={`h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-16 h-16 text-white opacity-90" />
                  </motion.div>
                </motion.div>
                <div className="p-6">
                  <h3 className="text-xl text-slate-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600">{project.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
