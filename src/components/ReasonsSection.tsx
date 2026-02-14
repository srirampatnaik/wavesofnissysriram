import { useScrollReveal } from "@/hooks/useScrollReveal";

const reasons = [
  "You stood by me when I had no one",
  "You are my peace",
  "You are my happiness",
  "You are my strength",
  "You believe in me",
  "You understand me",
  "You support my dreams",
  "You make me smile",
  "You make life beautiful",
  "You will always be in my heart",
];

const ReasonsSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-20 md:py-28 px-6 bg-secondary/50" id="reasons">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <h2 className={`font-cursive text-4xl sm:text-5xl md:text-6xl text-center text-primary mb-16 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          10 Reasons I Love You
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 rounded-xl p-5 bg-card shadow-sm border border-border/50 ${visible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.1 + i * 0.08}s`, animationFillMode: "forwards", opacity: visible ? undefined : 0 }}
            >
              <span className="text-primary text-xl shrink-0">♥</span>
              <p className="font-display text-foreground">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
