import storyImg from "@/assets/photo2.jpeg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const milestones = [
  { emoji: "🌊", title: "Where It All Began", text: "We met in Vizag — where the ocean breeze carried the beginning of something beautiful." },
  { emoji: "🏍️", title: "Endless Beach Rides", text: "Kilometers of coast, wind in our hair, laughter louder than the waves. Those rides were pure freedom." },
  { emoji: "🍜", title: "Meals & Dreams", text: "From sharing our favorite foods to dreaming of places we'd explore — every moment felt like home." },
  { emoji: "💪", title: "You Stood By Me", text: "When the world felt empty and everyone walked away, you stayed. You believed in me when I couldn't believe in myself." },
  { emoji: "💕", title: "Growing Stronger Together", text: "Every challenge made us closer. Every day, my love for you grows deeper." },
];

const OurStorySection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-20 md:py-28 px-6 bg-secondary/50" id="our-story">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <h2 className={`font-cursive text-4xl sm:text-5xl md:text-6xl text-center text-primary mb-16 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          Our Story
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className={`${visible ? "animate-fade-up-delay-1" : "opacity-0"}`}>
            <img
              src={storyImg}
              alt="Sriram and Nissy together"
              className="rounded-2xl shadow-xl w-full object-cover max-h-[500px] photo-hover"
            />
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div
                key={i}
                className={`flex gap-4 ${visible ? `animate-fade-up` : "opacity-0"}`}
                style={{ animationDelay: `${0.2 + i * 0.15}s`, animationFillMode: "forwards", opacity: visible ? undefined : 0 }}
              >
                <span className="text-2xl mt-1 shrink-0">{m.emoji}</span>
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground">{m.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
