import photo1 from "@/assets/photo1.jpeg";
import photo2 from "@/assets/photo2.jpeg";
import photo3 from "@/assets/photo3.jpeg";
import photo4 from "@/assets/photo4.jpeg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const photos = [
  { src: photo1, caption: "Where it all began 🌊" },
  { src: photo2, caption: "Us, always 💕" },
  { src: photo3, caption: "Adventures together 🏍️" },
  { src: photo4, caption: "Forever smiling with you ☀️" },
];

const MemoriesGallery = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-20 md:py-28 px-6" id="memories">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <h2 className={`font-cursive text-4xl sm:text-5xl md:text-6xl text-center text-primary mb-16 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          Our Memories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`group ${visible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.1 + i * 0.15}s`, animationFillMode: "forwards", opacity: visible ? undefined : 0 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg photo-hover bg-card">
                <img
                  src={p.src}
                  alt={p.caption}
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
                <p className="font-display italic text-center py-4 px-3 text-muted-foreground text-sm sm:text-base">
                  {p.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemoriesGallery;
