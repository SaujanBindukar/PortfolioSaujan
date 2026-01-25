import { GraduationCap, Calendar } from "lucide-react";
import { motion } from "motion/react";

const education = [
  {
    degree: "Master of Information and Communication Technology",
    institution: "Western Sydney University, Sydney, Australia",
    period: "Oct 2024 – Oct 2026",
  },
  {
    degree: "BSc (Hons) Computer Science & Software Engineering",
    institution: "University of Bedfordshire, Kathmandu, Nepal",
    period: "Sept 2017 – Sept 2020",
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-white/50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl mb-12 text-slate-800 text-center"
        >
          Education
        </motion.h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-slate-200"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center shrink-0 mt-1"
                  >
                    <GraduationCap className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl text-slate-800 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600">{edu.institution}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-600 whitespace-nowrap md:ml-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{edu.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
