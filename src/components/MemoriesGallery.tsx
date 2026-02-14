import photo1 from "@/assets/photo1.jpeg";
import photo2 from "@/assets/photo2.jpeg";
import photo3 from "@/assets/photo3.jpeg";
import photo4 from "@/assets/photo4.jpeg";
import photo5 from "@/assets/photo5.jpeg";
import photo6 from "@/assets/photo6.jpeg";
import photo7 from "@/assets/photo7.jpeg";
import photo8 from "@/assets/photo8.jpeg";
import photo9 from "@/assets/photo9.jpeg";
import photo10 from "@/assets/photo10.jpeg";
import photo11 from "@/assets/photo11.jpeg";
import photo12 from "@/assets/photo12.jpeg";
import photo13 from "@/assets/photo13.jpeg";
import video1 from "@/assets/video1.mp4";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const photos = [
  { src: photo1, caption: "Where it all began — Vizag 🌊" },
  { src: photo10, caption: "Our beach, our world 🏖️" },
  { src: photo5, caption: "You and me, always 💛" },
  { src: photo7, caption: "By the rocks, by your side 🌅" },
  { src: photo6, caption: "Mirror selfie love 💕" },
  { src: photo9, caption: "Dressed up for you 💙" },
  { src: photo3, caption: "Adventures together 🏍️" },
  { src: photo13, caption: "Under the palms 🌴" },
  { src: photo11, caption: "That look you give me 🌹" },
  { src: photo12, caption: "Together is my favorite place 🤍" },
  { src: photo8, caption: "Looking at forever 🌊" },
  { src: photo4, caption: "Forever smiling with you ☀️" },
  { src: photo2, caption: "Us, always 💕" },
];

const MemoriesGallery = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-20 md:py-28 px-6" id="memories">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <h2 className={`font-cursive text-4xl sm:text-5xl md:text-6xl text-center text-primary mb-16 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          Our Memories
        </h2>

        {/* Scrapbook masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`break-inside-avoid group ${visible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.08 + i * 0.07}s`, animationFillMode: "forwards", opacity: visible ? undefined : 0 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg photo-hover bg-card">
                <img
                  src={p.src}
                  alt={p.caption}
                  className="w-full object-cover"
                  loading="lazy"
                />
                <p className="font-display italic text-center py-3 px-3 text-muted-foreground text-sm">
                  {p.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div
          className={`mt-12 ${visible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "1.2s", animationFillMode: "forwards", opacity: visible ? undefined : 0 }}
        >
          <h3 className="font-cursive text-3xl sm:text-4xl text-center text-primary mb-6">
            A Little Clip of Us 🎬
          </h3>
          <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl">
            <video
              src={video1}
              autoPlay
              muted
              loop
              playsInline
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemoriesGallery;
