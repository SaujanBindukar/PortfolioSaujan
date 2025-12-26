import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl mb-8 text-slate-800 text-center"
          >
            About Me
          </motion.h2>
          <div className="space-y-4 text-slate-700">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I am a dedicated Flutter Developer with over 5 years of experience
              in building versatile applications across mobile, web, and desktop
              platforms. I have successfully led startup projects from inception
              to launch, deployed apps on both iOS and Android, and mentored
              teams to deliver high-quality products.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I am passionate about exploring new technologies, solving
              challenging problems, and creating user-friendly solutions that
              scale.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
