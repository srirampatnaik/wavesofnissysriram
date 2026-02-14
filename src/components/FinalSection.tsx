import { useState, useCallback } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FinalSection = () => {
  const { ref, visible } = useScrollReveal();
  const [surprised, setSurprised] = useState(false);
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; size: number }[]>([]);

  const triggerSurprise = useCallback(() => {
    // Generate explosion hearts
    const newHearts = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 1.5,
      size: 14 + Math.random() * 30,
    }));
    setHearts(newHearts);
    setSurprised(true);
  }, []);

  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/50 text-center relative overflow-hidden" id="finale" ref={ref}>
      {/* Heart explosion */}
      {surprised && hearts.map((h) => (
        <span
          key={h.id}
          className="absolute pointer-events-none animate-heart-explode"
          style={{
            left: `${h.left}%`,
            bottom: "40%",
            fontSize: `${h.size}px`,
            animationDelay: `${h.delay}s`,
            color: `hsl(${340 + Math.random() * 20} ${50 + Math.random() * 30}% ${50 + Math.random() * 20}%)`,
          }}
        >
          ♥
        </span>
      ))}

      <div className="max-w-3xl mx-auto relative z-10">
        {!surprised ? (
          <>
            <div className={`text-5xl sm:text-6xl mb-8 animate-pulse-heart ${visible ? "animate-fade-up" : "opacity-0"}`}>
              💕
            </div>

            <p className={`font-display italic text-xl sm:text-2xl md:text-3xl text-foreground/85 leading-relaxed mb-10 ${visible ? "animate-fade-up-delay-1" : "opacity-0"}`}>
              No matter where life takes us,<br />
              my heart will always remember you, Nissy. 💕
            </p>

            <h2 className={`font-cursive text-4xl sm:text-5xl md:text-6xl text-primary mb-12 ${visible ? "animate-fade-up-delay-2" : "opacity-0"}`}>
              Will you be my Valentine, Nissy? 💕
            </h2>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${visible ? "animate-fade-up-delay-3" : "opacity-0"}`}>
              <button
                onClick={triggerSurprise}
                className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-display text-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                YES ❤️
              </button>
              <button
                onClick={triggerSurprise}
                className="px-10 py-4 rounded-full bg-card text-primary border-2 border-primary font-display text-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                ALWAYS YES 😘
              </button>
            </div>
          </>
        ) : (
          <div className="animate-fade-up">
            <div className="text-6xl sm:text-7xl mb-6 animate-pulse-heart">💖</div>
            <h2 className="font-cursive text-4xl sm:text-5xl md:text-7xl text-primary mb-6">
              You just made me the happiest person alive 💖
            </h2>
            <p className="font-display italic text-xl sm:text-2xl text-foreground/80 mb-8">
              I knew you'd say yes. Because that's who you are — the one who always chooses us. 💕
            </p>
            <h3 className="font-cursive text-3xl sm:text-4xl md:text-5xl text-primary animate-pulse-heart">
              Happy Valentine's Day,<br />My Love ❤️
            </h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default FinalSection;
