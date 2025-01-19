"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import { IconBalloon, IconGift, IconMusic } from "@tabler/icons-react";
import { ColourfulText } from "./colourful-text";

export function BirthdayModalDemo() {
  const images = [
    "/image1.jpg",
    "/image2.png",
    "/image3.avif",
  ];
  return (
    <div className="py-40 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-pink-500 text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            🎉 Click me
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            🎂 Ready!
          </div>
        </ModalTrigger>
        <ModalBody>
  <ModalContent className="max-h-[80vh] overflow-y-auto">
    <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
      Happy Birthday to{" "}
      <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
        <ColourfulText text="Someone Special!"/> 🎈
      </span>
    </h4>
    <div className="flex justify-center items-center">
      {images.map((image, idx) => (
        <motion.div
          key={"images" + idx}
          style={{
            rotate: Math.random() * 20 - 10,
          }}
          whileHover={{
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
          }}
          whileTap={{
            scale: 1.1,
            rotate: 0,
            zIndex: 100,
          }}
          className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
        >
          <Image
            src={image}
            alt="birthday images"
            width="500"
            height="500"
            className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
          />
        </motion.div>
      ))}
    </div>
    <div className="py-10 flex flex-col items-center max-w-md mx-auto space-y-6">
      <div className="flex items-center space-x-2">
        <CakeIcon className="animate-bounce text-pink-600 dark:text-pink-300 h-5 w-5" />
        <p className="text-neutral-700 dark:text-neutral-300 text-base">
          Indulge in the sweetness of a <span className="font-semibold">delicious cake</span>, crafted with love and care.
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <IconBalloon className="animate-float text-blue-500 dark:text-blue-300 h-5 w-5" />
        <p className="text-neutral-700 dark:text-neutral-300 text-base">
          Watch the joy soar high with <span className="font-semibold">colorful balloons</span>, bringing smiles to every face.
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <IconMusic className="animate-pulse text-yellow-500 dark:text-yellow-300 h-5 w-5" />
        <p className="text-neutral-700 dark:text-neutral-300 text-base">
          Feel the rhythm of the moment with <span className="font-semibold">groovy music</span>, setting the perfect vibe.
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <IconGift className="animate-spin text-green-500 dark:text-green-300 h-5 w-5" />
        <p className="text-neutral-700 dark:text-neutral-300 text-base">
          Cherish the memories with <span className="font-semibold">special gifts</span> that speak from the heart.
        </p>
      </div>
    </div>
  </ModalContent>
</ModalBody>

      </Modal>
    </div>
  );
}

const CakeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 12v7" />
    <path d="M9 12v7" />
    <path d="M15 12v7" />
    <path d="M4 12h16" />
    <path d="M4 15h16" />
    <path d="M4 18h16" />
  </svg>
);

// Additional icons (Balloons, Music, and Gifts) would follow a similar structure.
