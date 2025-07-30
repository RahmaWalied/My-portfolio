import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss, SiBootstrap, SiSass, SiTypescript, SiNextdotjs,
} from "react-icons/si";
import SectionTitle from "../../../Components/Navbar/SectionTitle/SectionTitle";

// مهاراتك
const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
  { name: "Sass", icon: <SiSass className="text-pink-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-white" /> },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="w-full py-30 bg-gray-50 dark:bg-gray-900 overflow-x-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="w-full max-w-6xl mx-auto px-4">
        <SectionTitle>My Skills</SectionTitle>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {skills.map(({ name, icon }, index) => (
            <motion.div
              key={index}
              className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl group-hover:rotate-[15deg] transition-transform duration-300 mb-2">
                {icon}
              </div>
              <p className="text-gray-800 dark:text-white font-medium">{name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
