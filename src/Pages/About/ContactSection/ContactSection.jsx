import { motion } from "framer-motion";
import githubAnimation from "../../../assets/github-icon-black.json";
import gmailAnimation from "../../../assets/Gmail.json";
import linkedinAnimation from "../../../assets/Linkedin-Icon.json";
import SectionTitle from "../../../Components/Navbar/SectionTitle/SectionTitle";
import Lottie from "lottie-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-30 bg-gray-50 dark:bg-gray-950 text-center"
    >
      <SectionTitle>
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block"
        >
          Get In Touch
        </motion.span>
      </SectionTitle>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto grid gap-6 px-4 mt-10"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="border p-3 rounded-md dark:bg-gray-900 dark:text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-3 rounded-md dark:bg-gray-900 dark:text-white"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="border p-3 rounded-md dark:bg-gray-900 dark:text-white"
        />
        <button
          type="submit"
          className="bg-pink-600 text-white py-2 px-6 rounded-md hover:bg-pink-700 transition"
        >
          Send Message
        </button>
      </motion.form>

      {/* Social Animated Icons */}
      <div className="mt-12 flex justify-center items-center gap-6 text-pink-600 dark:text-pink-400">
        <a
          href="mailto:rwalied235@gmail.com"
          title="Send Email"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform glow-icon"
        >
          <Lottie
            animationData={gmailAnimation}
            loop={true}
            className="w-14 h-14 animate-bounce-slow"
          />
        </a>
        <a
          href="https://github.com/RahmaWalied"
          title="GitHub Profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform glow-icon"
        >
          <Lottie
            animationData={githubAnimation}
            loop={true}
            className="w-10 h-10 animate-bounce-slow"
          />
        </a>
        <a
          href="https://linkedin.com/in/rahma-walied"
          title="LinkedIn Profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform glow-icon"
        >
          <Lottie
            animationData={linkedinAnimation}
            loop={true}
            className="w-14 h-14 animate-bounce-slow"
          />
        </a>
      </div>
    </section>
  );
}
