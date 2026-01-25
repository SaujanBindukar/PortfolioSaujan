import { motion } from "motion/react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Cinefly",
    location: "Queensland, Australia · Remote",
    period: "Aug 2025 – Present",
    description: [
      "Developed new features in both React and Flutter.",
      "Participated in discussions for new feature implementations.",
      "Coordinated with backend and UI/UX developers for feature development.",
      "Automated deployment of apps to the App Store and Play Store using GitHub Actions.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "TDMN Pty Ltd · Part-time",
    location: "Sydney, New South Wales, Australia · On-site",
    period: "Feb 2025 – Aug 2025",
    description: [
      "Resolved bugs for iOS applications and published updates on the App Store.",
      "Integrated payment solutions like Stripe and Apple Pay into iOS apps.",
      "Developed an Admin Dashboard using Flutter to enhance user management.",
      "Created API endpoints for the dashboard utilizing Node.js and PostgreSQL.",
    ],
  },
  {
    title: "Senior Flutter Developer",
    company: "Cango · Freelance",
    location: "Canada · Remote",
    period: "Jan 2024 – Jan 2025",
    description: [
      "Led the mobile app development of a startup company and launched the 'Cango' app in both Android and iOS.",
      "Architected, designed, and implemented scalable Flutter applications using Riverpod as state management.",
      "Worked closely with the CEO, product owners, and developers to brainstorm and implement new features.",
      "Created responsive UI and seamless integration of new features.",
      "Tested, troubleshot, and debugged apps to resolve issues and enhance stability.",
    ],
  },
  {
    title: "Senior Flutter Developer",
    company: "Yellow Nepal (Fawesome Apps) · Full-time",
    location: "Nepal · Remote",
    period: "Sep 2020 – Sep 2024",
    description: [
      "Built mobile and web apps using Flutter.",
      "Led the full lifecycle of app development from scratch to deployment.",
      "Took responsibility for ongoing app maintenance, design, and development.",
      "Worked with NFC integrations, QR scan features, Google Maps, Google Ads, and in-app purchases.",
      "Implemented RESTful APIs and Firebase for seamless backend communication.",
      "Created responsive and visually appealing UI/UX designs.",
      "Demonstrated expertise in BLoC and Riverpod following clean architecture.",
      "Implemented AR filters using native Swift via Method Channels.",
      "Set up and maintained CI/CD using Codemagic to streamline development processes.",
      "Integrated payment gateways like Apple Pay and Google Pay for in-app purchases.",
      "Migrated projects to the latest version of Flutter.",
      "Deployed apps to both Play Store and App Store.",
    ],
  },
  {
    title: "Flutter Developer",
    company: "Gradoid DOO · Freelance",
    location: "Serbia · Remote",
    period: "Jan 2023 – Apr 2023",
    description: [
      "Joined the organization for short-term web and app projects.",
      "Created responsive web and mobile applications.",
      "Worked on possible UI/UX designs for projects.",
      "Collaborated with the team and took responsibility for project delivery.",
      "Integrated Firebase and Cloud Functions for backend, using BLoC for state management.",
    ],
  },
  {
    title: "Flutter Developer",
    company: "Chaitanya Design Pvt. Ltd",
    location: "Nepal",
    period: "Apr 2019 – Oct 2019",
    description: [
      "Created responsive UI/UX for e-commerce applications.",
      "Implemented Firebase and REST APIs for backend communication.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-slate-800 text-center"
        >
          Work Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                <h3 className="text-xl font-semibold text-slate-800">
                  {exp.title}
                </h3>
                <span className="text-slate-500 sm:mt-0 mt-1">
                  {exp.period}
                </span>
              </div>
              <p className="text-slate-600 mb-2 font-medium">{exp.company}</p>
              <p className="text-slate-400 mb-4">{exp.location}</p>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
