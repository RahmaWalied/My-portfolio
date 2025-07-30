// src/Components/Footer/Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Rahma Walied. All rights reserved.
        </p>

        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/RahmaWalied"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/rahma-walied"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:rwalied235@gmail.com"
            className="hover:text-pink-600 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
