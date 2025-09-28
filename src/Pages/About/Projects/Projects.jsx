import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./../../../Components/Navbar/SectionTitle/SectionTitle";

const projects = [
    {
    title: "Movies App",
    image: "/Movies.png",
    link: "https://new-movies-cyan.vercel.app/",
    tools: ["Next.JS", "Tailwind", "App Router", "Lucide Icons"],
  },
  {
    title: "Quiz App",
    image: "/quiz.png",
    link: "https://quiz-projec.netlify.app/",
    tools: ["React", "Tailwind"],
  },
    {
    title: "frech Cart Project",
    image: "/frechcart.png",
    link: "https://freshcart-89924.web.app/home",
    tools: ["React", "Tailwind", "React Router", "Context API"],
  },
  {
    title: "ProductGallery",
    image: "/productgallery.png",
    link: "https://products-proj.netlify.app/products",
    tools: ["React", "Tailwind", "React Router", "Lucide Icons", "Axios"],
  },
  {
    title: "Mealify",
    image: "/Mealify.png",
    link: "https://rahmawalied.github.io/Mealfi-Project/",
    tools: ["HTML", "CSS"],
  },
  {
    title: "Devfolio",
    image: "/devfolio.png",
    link: "https://devolio-project.netlify.app/",
    tools: ["HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Bookmark",
    image: "/bookmark.png",
    link: "https://rahmawalied.github.io/BookMark-Project/",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Yummy",
    image: "/yummy.png",
    link: "https://iridescent-raindrop-7b83f3.netlify.app/",
    tools: ["HTML", "CSS", "JavaScript"],
  },

  {
    title: "FrameWork",
    image: "/framework.png",
    link: "https://framework-project.netlify.app/",
    tools: ["React", "Tailwind", "React Router"],
  },
  {
    title: "Weather",
    image: "/weather.png",
    link: "https://rahmawalied.github.io/Weather-Project/",
    tools: ["HTML", "CSS", "JavaScript", "BootStrap"],
  },

  {
    title: "Quote",
    image: "/quote.png",
    link: "https://quote-proj.netlify.app/",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Daniels",
    image: "/daniels.png",
    link: "https://rahmawalied.github.io/daniels-project/",
    tools: ["HTML", "CSS", "BootStrap"],
  },
  {
    title: "Login",
    image: "/login.png",
    link: "https://rahmawalied.github.io/Login-Project",
    tools: ["HTML", "CSS", "BootStrap", "JavaScript"],
  },
  {
    title: "Fokir",
    image: "/fokir.png",
    link: "https://rahmawalied.github.io/Fokir-Project/",
    tools: ["HTML", "CSS", "BootStrap"],
  },
];

export default function Projects() {
  return (
<motion.div
  className="container mx-auto px-4"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
    <section id="projects" className="py-30 w-full bg-white dark:bg-gray-900">
      <SectionTitle>My Projects</SectionTitle>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
    {projects.map((project, index) => (
<motion.a
  key={index}
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className={`group relative block bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden border border-transparent 
    dark:border-gray-700 transition-all duration-300 hover:scale-105 
    shadow-md hover:shadow-[0_0_30px_rgba(236,72,153,0.6)]`}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.2 }}
  viewport={{ once: true }}
>
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-48 object-cover"
/>

  <div className="p-4">
    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
      {project.title}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
      {project.tools.join(" • ")}
    </p>
  </div>
</motion.a>

    ))}
  </div>
    </section>
</motion.div>


  );
}
