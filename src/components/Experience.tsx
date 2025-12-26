import { Briefcase, Calendar } from "lucide-react";
import { motion } from "motion/react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Cinefly",
    location: "Queensland, Australia",
    period: "August 2025 – Present",
    description: [
      "Leading development of cross-platform applications for Cinefly.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "TDMN Pty Ltd",
    location: "Sydney, Australia",
    period: "Feb 2025 – Aug 2025",
    description: [
      "Resolved iOS app bugs and deployed updates on the App Store.",
      "Integrated Stripe and Apple Pay for in-app payments.",
      "Developed Admin Dashboard using Flutter, with Node.js & PostgreSQL backend.",
    ],
  },
  {
    title: "Senior Flutter Developer",
    company: "Cango",
    location: "Canada",
    period: "Jan 2024 – Jan 2025",
    description: [
      "Led the development and launch of the Cango mobile app on Android & iOS.",
      "Architected scalable Flutter applications using Riverpod.",
      "Collaborated with product owners and CEO to design and implement new features.",
    ],
  },
  {
    title: "Senior Flutter Developer",
    company: "Yellow Nepal (Fawesome Apps)",
    location: "Nepal",
    period: "Sep 2020 – Sep 2024",
    description: [
      "Built mobile and web apps using Flutter; managed full app lifecycle.",
      "Integrated NFC, QR scan features, Google Maps, Ads, and in-app purchases.",
      "Implemented AR filters using Swift via Method Channels.",
      "Managed CI/CD pipelines using Codemagic and deployed apps to both stores.",
    ],
  },
  {
    title: "Flutter Developer",
    company: "Gradoid DOO",
    location: "Serbia",
    period: "Jan 2023 – Apr 2023",
    description: [
      "Developed responsive web & mobile applications.",
      "Implemented Firebase & Cloud Functions for backend and BLOC for state management.",
    ],
  },
  {
    title: "Flutter Developer",
    company: "Chaitanya Design Pvt. Ltd",
    location: "Nepal",
    period: "Apr 2019 – Oct 2019",
    description: [
      "Created responsive UI/UX for e-commerce apps.",
      "Implemented Firebase and REST APIs.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl mb-12 text-slate-800 text-center"
        >
          Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-all duration-300 border border-slate-200"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 mt-1"
                    >
                      <Briefcase className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl text-slate-800">{exp.title}</h3>
                      <p className="text-blue-600">{exp.company}</p>
                      <p className="text-slate-600">{exp.location}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-600 whitespace-nowrap">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-2 ml-13">
                {exp.description.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="text-slate-700 flex items-start gap-2"
                  >
                    <span className="text-blue-500 mt-1.5">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
