import { useScrollReveal } from "@/hooks/useScrollReveal";

const FinalSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/50 text-center" id="finale" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <div className={`text-5xl sm:text-6xl mb-8 animate-pulse-heart ${visible ? "animate-fade-up" : "opacity-0"}`}>
          💕
        </div>

        <p className={`font-display italic text-xl sm:text-2xl md:text-3xl text-foreground/85 leading-relaxed mb-10 ${visible ? "animate-fade-up-delay-1" : "opacity-0"}`}>
          No matter where life takes us,<br />
          my heart will always remember you, Nissy. 💕
        </p>

        <h2 className={`font-cursive text-4xl sm:text-5xl md:text-7xl text-primary ${visible ? "animate-fade-up-delay-2" : "opacity-0"}`}>
          Happy Valentine's Day,<br />My Love ❤️
        </h2>
      </div>
    </section>
  );
};

export default FinalSection;
