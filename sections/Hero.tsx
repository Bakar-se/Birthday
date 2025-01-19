"use client";

import { motion } from "framer-motion";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import React from "react";
import { ColourfulText } from './../components/ui/colourful-text';

// Typewriter effect component
const TypewriterText = ({ text }: { text: string }) => {
  return (
    <motion.p
      className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {/* Add stagger effect here */}
      <motion.span
        className="inline-block"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }, // Stagger the children animations
        }}
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.2,
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </motion.p>
  );
};

const Hero = () => {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <ColourfulText text="Happy Birthday!" />
      </div>
    </BackgroundGradientAnimation>
  );
};

export default Hero;
