import { useState, useRef, useEffect } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import OurStorySection from "@/components/OurStorySection";
import MemoriesGallery from "@/components/MemoriesGallery";
import ReasonsSection from "@/components/ReasonsSection";
import LoveLetterSection from "@/components/LoveLetterSection";
import FinalSection from "@/components/FinalSection";

const Index = () => {
  const [entered, setEntered] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const bgMusicRef = useRef<HTMLAudioElement | null>(null);

  const handleEnter = () => {
    setFadeOut(true);

    setTimeout(() => {
      setEntered(true);

      if (bgMusicRef.current) {
        bgMusicRef.current.volume = 0;
        bgMusicRef.current.play().catch(() => {});

        // Smooth fade-in
        let vol = 0;
        const fade = setInterval(() => {
          if (bgMusicRef.current && vol < 1) {
            vol += 0.05;
            bgMusicRef.current.volume = vol;
          } else {
            clearInterval(fade);
          }
        }, 120);
      }
    }, 800);
  };

  return (
    <>
      {/* Entry Screen */}
      {!entered && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 
          bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300 
          backdrop-blur-xl transition-all duration-1000 
          ${fadeOut ? "opacity-0 scale-110" : "opacity-100 scale-100"}`}
        >
          <FloatingHearts />

          <div className="text-center px-6 relative z-10">
            <h1 className="font-cursive text-4xl sm:text-5xl md:text-6xl text-primary mb-8 animate-pulse drop-shadow-lg">
              Tap to Enter Our Love Story ❤️
            </h1>

            <button
              onClick={handleEnter}
              className="bg-primary text-white px-10 py-4 rounded-full shadow-2xl 
              hover:scale-110 transition-all duration-500 
              text-lg font-semibold tracking-wide"
            >
              Enter
            </button>

            <p className="mt-6 text-sm text-muted-foreground italic opacity-80">
              Made with love, just for you 💌
            </p>
          </div>
        </div>
      )}

      {/* Background Music */}
      <audio ref={bgMusicRef} loop>
        <source src="/lovesong.mp3" type="audio/mpeg" />
      </audio>

      {/* Main Website */}
      <main
        className={`overflow-x-hidden transition-opacity duration-1000 ${
          entered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <FloatingHearts />
        <HeroSection />
        <OurStorySection />
        <MemoriesGallery bgMusicRef={bgMusicRef} />
        <ReasonsSection />
        <LoveLetterSection />
        <FinalSection />
      </main>
    </>
  );
};

export default Index;
