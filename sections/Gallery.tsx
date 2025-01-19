import { BirthdayModalDemo } from "@/components/ui/Modal";
import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";

const Gallery = () => {
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.5}
          maxSize={1.5}
          particleDensity={300}
          className="w-full h-full"
          particleColor="#6a11cb"
        />
      </div>
      <BirthdayModalDemo/>
    </div>
  )
}

export default Gallery