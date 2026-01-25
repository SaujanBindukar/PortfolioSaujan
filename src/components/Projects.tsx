import { Code, Smartphone, Globe, Package, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    title: "Flutter App Starter Template",
    description:
      "This is the flutter starter template app with clean architecture using flutter_riverpod and go_router.",
    gradient: "from-orange-500 to-purple-600",
    icon: Globe,
    link: "https://github.com/SaujanBindukar/flutter_starter_template",
    screenshot:
      "https://iad.microlink.io/GfkoexPSye5LP3ksK7k-zwkLXzfVq7HNJGL6h5hkEUnQ7YqAoHQL2Q1g2C5ej1_B_m9u8ee611uek-0DdLX_Mw.png",
  },
  {
    title: "Cinefly",
    description:
      "A mobile and web app that helps to co-create video content with anyone, anytime and anywhere around the world.",
    gradient: "from-orange-500 to-purple-600",
    icon: Globe,
    link: "https://play.google.com/store/apps/details?id=com.com.cinefly&hl=en",
    screenshot:
      "https://iad.microlink.io/GNNCvOU9XF8fHvLFDLxqhhJrzMuJnTf4ClbaNa28IR8lZDyIxRKV-3QF-oKBnkLKoFNjtc7WS07MZO2GfCo67w.png",
  },
  {
    title: "Fonepay Business App",
    description:
      "The Fonepay Business App is a mobile application tailored for merchants and businesses to seamlessly manage all their digital payment transactions on a single platform",
    icon: Code,
    gradient: "from-indigo-500 to-indigo-600",
    link: "https://play.google.com/store/apps/details?id=com.f1soft.fonepay.merchant",
    screenshot:
      "https://iad.microlink.io/WzV9EEACzazlXdu6Vq40dTo0Ii2sV88uq5xzWm2rCZ1Dqsisb4VBXs4VocVN3Wqkl2lezCECUS9R9oPoekdCUA.png",
  },
  {
    title: "EventsMo",
    description:
      "EvenstsMo offers the all in one, easy to deploy, missing piece of the successful event puzzle. Our objective is to create a complete app that enhances your event experience, boost engagement, connect attendees and delegate networking.",
    icon: Smartphone,
    gradient: "from-purple-500 to-purple-600",
    link: "https://play.google.com/store/apps/details?id=com.eventsmo&hl=en",
    screenshot:
      "https://iad.microlink.io/1fprd8wr7Fxpzl5ITIziPm-CB2QtHe1j_pvzVKDVSh5NtmnqfPbSvz7S90YXfXNH_YF7rscSAMoei_bj54Tz0Q.png",
  },
  {
    title: "EventsMo Host App",
    description:
      "EventsMo Host app is an organizers app for registration/checking in attendees in the event.",
    icon: Smartphone,
    gradient: "from-purple-500 to-purple-600",
    link: "https://play.google.com/store/apps/details?id=com.eventsmo&hl=en",
    screenshot:
      "https://iad.microlink.io/tUNoh4lvowioVS1Rk3CFqwpkjzADwK4kjVnBgS7ff1Ues4j6kZ02qgHs58itelDbQmpwLZSArSur-KUC08YT_A.png",
  },
  {
    title: "Cango",
    description:
      "It is a canvassing app for campaigns that helps to know people's opinions. The opinions of people are analyzed and results are produced.",
    icon: Globe,
    gradient: "from-blue-500 to-blue-600",
    screenshot:
      "https://iad.microlink.io/jdnE-oC8PWRZiFS-XJ2A2ava47l6T6UBo8EGRIKt7bkykbfiUfqvRqADrTB_-94UWkRxTXFEwkizwnsx1_TkMg.png",
    link: "https://play.google.com/store/apps/details?id=com.cangoapp.cangoapp&hl=en",
  },
  {
    title: "Mind",
    description:
      "Mind is the ultimate spiritual awakening app for learning telepathy, lucid dreaming, out-of-body experiences, remote viewing, and more.",
    icon: Package,
    gradient: "from-green-500 to-green-600",
    link: "https://play.google.com/store/apps/details?id=com.gradoid.mind.android&hl=en",
    screenshot:
      "https://iad.microlink.io/McFW_ffAVEoxH2gWyepHmt4YNiluAFsir44CHTcQi1NXIdyVl9PA1ktxm_DAw4AU4_RkPeqskinpyeoPyet1cg.png",
  },
  {
    title: "Nouri",
    description:
      "the next-generation mobile app designed to streamline how you network, manage contacts, and grow thriving communities—online or at in-person events.",
    icon: Sparkles,
    gradient: "from-orange-500 to-orange-600",
    link: "https://play.google.com/store/apps/details?id=ai.nouri&hl=en",
    screenshot:
      "https://iad.microlink.io/lv72aPl9iXxrF8VuUVzHe8q2gioHTQXFr4IUXrjft0fp38R8va8THptWn8qUHM_en78csQ9QKxhvbkGKOmpZfQ.png",
  },
  {
    title: "Caliber Shoes",
    description: "Ecommerce app for shoes",
    icon: Code,
    gradient: "from-indigo-500 to-indigo-600",
    link: "https://calibershoes.com/",
    screenshot:
      "https://iad.microlink.io/6sZyHCvr0Zk1ezplUGT1BsStFhGxMo81KQho2gpX_BwW1e2iUaCnsvdqyZda69-ToHckWC0ca1Zlgfiww-aDyw.png",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl mb-16 text-slate-800 text-center font-bold"
        >
          Portfolio Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-slate-200 overflow-hidden cursor-pointer transition-all duration-300"
              >
                {/* Screenshot preview with gradient icon overlay */}
                <div className=" w-full overflow-hidden rounded-t-3xl">
                  <img
                    src={project.screenshot}
                    alt={project.title + " preview"}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div
                    className={`absolute top-4 right-4 bg-linear-to-br ${project.gradient} p-3 rounded-full shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title, description, and link */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-700 mb-5">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white px-5 py-2 rounded-xl font-medium shadow hover:bg-blue-600 transition-colors"
                  >
                    Visit
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
