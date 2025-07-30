import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function Hero({ heroRef }) {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/WEB_DEVELOPER.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-2 px-4 md:px-20 py-10 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black"
    >
      {/* Left Text */}
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
            Rahma
          </span>{" "}
          👋
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-md md:max-w-full mx-auto md:mx-0 mt-2">
          A passionate{" "}
          <span className="font-medium text-pink-500">Front-End Developer</span>{" "}
          crafting modern, responsive and visually stunning web experiences
          using the latest technologies.
        </p>

        <div className="mt-4">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-pink-600 text-white font-medium text-base rounded-xl shadow-md hover:bg-pink-700 transition duration-300"
          >
            Let’s Connect
          </a>
        </div>
      </div>

      {/* Animation */}
      <div className="md:w-1/2 w-full flex justify-center items-center mt-4 md:mt-0">
        {animationData && (
          <Lottie
            animationData={animationData}
            loop
            className="w-full max-w-[300px] sm:max-w-[340px] md:max-w-[400px] h-auto mx-auto"
          />
        )}
      </div>
    </section>
  );
}
