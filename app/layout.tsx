"use client"
import { Playwrite_IN } from "next/font/google";
import { useState, useRef } from "react";
import "./globals.css";

const playwrite = Playwrite_IN({
  variable: "--font-playwrite",
  weight: "400",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <html lang="en">
      <body className={`${playwrite.variable} antialiased`}>
        {children}

        {/* Audio Player */}
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 p-4 bg-gray-800 rounded-full shadow-lg">
          <audio ref={audioRef} src="/background-music.mp3" />
          <button
            onClick={togglePlayPause}
            className="bg-blue-500 text-white py-2 px-4 rounded-full"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </body>
    </html>
  );
}
