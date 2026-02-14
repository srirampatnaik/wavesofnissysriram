import { useScrollReveal } from "@/hooks/useScrollReveal";

const reasons = [
  "You stood by me when I had no one",
  "You are my peace in every storm",
  "You are my happiness, even on the worst days",
  "You are my strength when I feel weak",
  "You believe in me more than I believe in myself",
  "You understand me without me saying a word",
  "You support my dreams like they're your own",
  "You make me smile even when I don't want to",
  "You make life beautiful just by being in it",
  "You will always be in my heart, no matter what",
  "You never judge me for who I am",
  "You hold my hand through every fear",
  "You laugh at my bad jokes and that means everything",
  "You make every meal feel like a celebration",
  "You are the first person I want to talk to every morning",
  "You make Vizag feel like the most magical place on earth",
  "You taught me what real love looks like",
  "You are the reason I want to be a better person",
  "You make ordinary days feel extraordinary",
  "You are home — no matter where we are",
  "You love me in a way I never knew I needed",
  "You make my heart feel full every single day",
  "You are my favorite person in this entire world",
  "You are everything I never knew I was looking for",
];

const ReasonsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-20 md:py-28 px-6 bg-secondary/50" id="reasons">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <h2 className={`font-cursive text-4xl sm:text-5xl md:text-6xl text-center text-primary mb-16 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          Endless Reasons I Love You ❤️
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 rounded-xl p-4 bg-card shadow-sm border border-border/50 ${visible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.05 + i * 0.04}s`, animationFillMode: "forwards", opacity: visible ? undefined : 0 }}
            >
              <span className="text-primary text-lg shrink-0 mt-0.5">♥</span>
              <p className="font-display text-foreground text-sm sm:text-base leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
