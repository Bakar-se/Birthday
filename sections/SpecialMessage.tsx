"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = "Happy Birthday to the most amazing person in my life! You light up my world with your smile, fill my days with laughter, and inspire me with your kindness and strength. Today, I celebrate you—your dreams, your beauty, and all the little things that make you extraordinary. May your day be filled with love, joy, and surprises as wonderful as you are. Here’s to making this year even more magical together! I’m so lucky to have you by my side—today and always. 🎉❤️"

const SpecialMessage = () => {
    return (
        <div className="h-screen rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full">
          <h2 className="relative flex-col md:flex-row z-10 text-base text-center md:text-4xl lg:text-7xl md:leading-tight max-w-5xl mx-auto tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white flex items-center gap-2 md:gap-8">
            <TextGenerateEffect words={words} />
          </h2>
          <ShootingStars trailColor="#2575fc" minDelay={1000} starColor="#6a11cb" maxSpeed={10} minSpeed={1} />
          <StarsBackground minTwinkleSpeed={0.1} />
        </div>
        )
}

export default SpecialMessage