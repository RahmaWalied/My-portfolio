import { motion } from "framer-motion";

export default function SectionTitle({ children }) {
  return (
    <motion.h2
      className="text-3xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
      <span className="block w-20 h-1 bg-pink-500 mx-auto mt-4 rounded"></span>
    </motion.h2>
  );
}
