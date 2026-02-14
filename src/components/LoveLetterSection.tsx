import { useScrollReveal } from "@/hooks/useScrollReveal";

const LoveLetterSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-20 md:py-28 px-6" id="letter">
      <div className="max-w-2xl mx-auto" ref={ref}>
        <h2 className={`font-cursive text-4xl sm:text-5xl md:text-6xl text-center text-primary mb-12 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          A Letter for You
        </h2>

        <div
          className={`rounded-2xl p-8 sm:p-12 shadow-xl ${visible ? "animate-fade-up-delay-1" : "opacity-0"}`}
          style={{ background: "hsl(40 40% 92%)", border: "1px solid hsl(40 30% 85%)" }}
        >
          <div className="font-display italic text-foreground/90 leading-relaxed space-y-5 text-base sm:text-lg">
            <p>My Dearest Nissy,</p>

            <p>
              There are not enough words in any language to express what you mean to me.
              You came into my life like the gentle waves of Vizag — softly, beautifully, and before I knew it,
              you had filled every corner of my heart.
            </p>

            <p>
              When the world felt heavy and loneliness was all I knew, you stood beside me with a strength
              I didn't deserve but desperately needed. You believed in me when I had lost all belief in myself.
              You stayed when everyone else walked away.
            </p>

            <p>
              I am grateful for every ride along the coast, every meal we shared, every laugh that echoed louder
              than the ocean. You are my peace when the world is chaos. You are my happiness in the mundane.
              You are my strength when I feel like giving up.
            </p>

            <p>
              I know our paths carry the weight of different worlds, and the future may not always be clear.
              But this I promise you — my love, my gratitude, and my respect for you will never waver.
              No matter where life takes us, you will always have a permanent place in my heart.
            </p>

            <p>
              Thank you for being you. Thank you for choosing to love me. Thank you for making my life
              infinitely more beautiful.
            </p>

            <p className="mt-8 font-cursive text-2xl sm:text-3xl text-primary">
              Forever yours,<br />Sriram 💕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
