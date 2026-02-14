import { useScrollReveal } from "@/hooks/useScrollReveal";

const reasons = [
  "Because you started as a random text and became my whole world",
  "Because that night at Vizag beach changed my life forever",
  "Because you make life beautiful just by being in it",
  "Because your emotional eyes that night are still in my heart",
  "Because you stayed even when life made it difficult for us",
  "Because you chose me when things weren’t simple",
  "Because you never gave up on us during the hurdles at home",
  "Because you understand my silence better than my words",
  "Because when I get irritated, you still stay patient with me",
  "Because you believed in me when I didn’t believe in myself",
  "Because every beach ride with you felt like freedom",
  "Because every random food stop became a memory with you",
  "Because you made Vizag more than a city — you made it ours",
  "Because the way you say 'Bujji' feels like home",
  "Because you hold my hand when everything feels heavy",
  "Because you love deeply and honestly",
  "Because you fight for us quietly",
  "Because you made me grow without forcing me",
  "Because you made me want to become a better man",
  "Because even when the future feels uncertain, you still choose us",
  "Because you are my peace after every storm",
  "Because loving you feels real, not dramatic",
  "Because you are part of my strength now",
  "Because no matter what happens, you will always have a place in my heart",
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
