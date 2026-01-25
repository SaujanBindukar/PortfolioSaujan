import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-20 px-4 w-full bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold mb-10 text-slate-800 text-center"
          >
            About Me
          </motion.h2>
          <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Hi, I’m Saujan Bindukar, a Software Engineer with over 5 years of
              experience building high-quality mobile and web applications using
              Flutter and React. I specialize in taking projects from idea to
              launch, ensuring success on both iOS and Android platforms.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I have a strong background in start-ups, having successfully led
              the development of a mobile app launched on both the App Store and
              Play Store. I am also expanding my knowledge on web development
              using ReactJs, TailwindCSS and Tanstack Query.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="mb-3 font-semibold">
                My expertise spans the full app lifecycle, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600">
                <li>E-commerce platforms</li>
                <li>Event management systems</li>
                <li>Warehouse and inventory management software</li>
                <li>Social networking apps</li>
                <li>2D games (like Sudoku)</li>
                <li>Video streaming apps (similar to TikTok)</li>
                <li>Data collection apps</li>
              </ul>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I thrive in both independent and collaborative environments,
              whether on-site or remote. I’m always curious, constantly
              learning, and passionate about staying up-to-date with the latest
              technologies to deliver innovative solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="font-medium"
            >
              Let’s connect if you’re looking for a versatile developer who can
              turn your idea into a fully functional app!
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
