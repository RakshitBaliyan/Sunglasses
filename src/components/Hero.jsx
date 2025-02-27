import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('https://img.mensxp.com/media/content/2018/Jul/reasons-why-its-extremely-important-for-every-man-to-start-wearing-sunglasses-1400x653-1531995877.jpg')",
      }}
    >
      {/* Animated Text Box */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start from below with 0 opacity
        animate={{ opacity: 1, y: 0 }} // Slide up to original position
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        className="bg-black bg-opacity-50 p-6 rounded-lg text-center max-w-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Style Meets Protection</h1>
        <p className="text-lg md:text-xl mb-6">
          Discover the latest collection of sunglasses that keep you stylish while protecting your eyes.
        </p>
        <button className="bg-blue-600 px-6 py-3 text-lg rounded-lg hover:bg-blue-500 transition">
          Shop Now
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
