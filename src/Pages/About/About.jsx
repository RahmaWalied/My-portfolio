import React from "react";
import { Code2, Paintbrush2, Smartphone, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from './../../Components/Navbar/SectionTitle/SectionTitle';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 md:px-20 py-16 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl flex flex-col md:flex-row items-center gap-12"
      >
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="/your-image.jpg"
            alt="Rahma Walied"
            className="rounded-xl w-100 h-100 object-cover shadow-lg"
          />
        </motion.div>

        {/* Right: Text and Icons */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full md:w-1/2 space-y-10 text-center md:text-left"
        >
<SectionTitle>About Me</SectionTitle>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            I’m <span className="text-pink-600 font-semibold">Rahma Walied</span>, a Front-End Developer with a passion for clean design and smooth user experiences.
            <br />
            I specialize in building responsive websites using modern technologies like <span className="font-medium text-purple-500">React</span>, <span className="font-medium text-blue-500">Tailwind CSS</span>, and <span className="font-medium text-yellow-500">JavaScript</span>.
          </p>

          <p className="text-base text-gray-500 dark:text-gray-400">
            I'm always eager to learn new skills and contribute to exciting projects. Whether it’s building landing pages, dynamic dashboards, or full websites — I love bringing ideas to life in the browser.
          </p>

          {/* Icons Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center"
            >
              <Code2 size={40} className="text-pink-600" />
              <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">Clean Code</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-center"
            >
              <Paintbrush2 size={40} className="text-purple-500" />
              <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">Modern UI</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col items-center"
            >
              <Smartphone size={40} className="text-blue-500" />
              <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">Responsive</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col items-center"
            >
              <Rocket size={40} className="text-yellow-500" />
              <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">Fast Delivery</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
