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
            <p>Nissy,</p>

            <p>
              I don't really know how to write letters. I'm not good with words, you know that.
              But today I wanted to try. Because you deserve to hear these things. Not from some
              poem I found online. From me. Just me.
            </p>

            <p>
              I think about the day we met and I still can't believe you're real sometimes.
              Like, how did I get so lucky? A boy from Vizag who didn't have much going for him,
              and then you showed up and everything changed.
            </p>

            <p>
              You didn't just come into my life, Nissy. You saved parts of me I thought were gone forever.
              When I was at my lowest, when I felt like nobody cared — you cared. You showed up.
              You held my hand and told me it's going to be okay. And somehow, when you said it, I believed it.
            </p>

            <p>
              I’m not perfect, Bujji.
I get irritated. I overthink. I react before I think sometimes.
But you stay. You always stay. And I don't think you know how much that means to me.
              It means everything.
            </p>

            <p>
              Every ride along the coast, every meal we shared, every time you laughed at something dumb I said —
              those are the best moments of my life. Not some big achievement or milestone. Just you. Sitting next to me.
              That's enough. That's always been enough.
            </p>

            <p>
              I know our situation is complicated. I know we come from different worlds.
              I don't know what the future looks like. But I know this —
              no matter what happens, no matter where life takes us,
              you will always have a place in my heart that nobody else can ever fill.
            </p>

            <p>
              Thank you for loving me the way you do. Thank you for being patient with me.
              Thank you for making my life so much better just by being in it.
            </p>

            <p>
              I love you, Nissy. Not because I have to. Because I can't imagine not loving you.
            </p>

            <p className="mt-8 font-cursive text-2xl sm:text-3xl text-primary">
              Forever yours,<br />Sriram ❤️
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
