import storyImg from "@/assets/photo10.jpeg";
import storyImg2 from "@/assets/photo7.jpeg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const OurStorySection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-20 md:py-28 px-6 bg-secondary/50" id="our-story">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <h2
          className={`font-cursive text-4xl sm:text-5xl md:text-6xl text-center text-primary mb-16 ${
            visible ? "animate-fade-up" : "opacity-0"
          }`}
        >
          Our Story
        </h2>

        <div className="space-y-12">
          {/* Beginning */}
          <div
            className={`grid md:grid-cols-2 gap-10 items-center ${
              visible ? "animate-fade-up-delay-1" : "opacity-0"
            }`}
          >
            <div className="font-display text-foreground/90 leading-relaxed space-y-4 text-base sm:text-lg">
              <p className="text-2xl font-cursive text-primary mb-2">
                🌊 The Unexpected Beginning
              </p>

              <p>
                We didn’t begin like a fairytale. You were my friend’s
                girlfriend’s friend. We used to text sometimes… tease each other…
                laugh over silly things. It was casual. Light. Effortless.
              </p>

              <p>
                Then life moved on. We stopped talking. Years passed quietly.
                I didn’t know that Vizag would bring you back into my life.
              </p>

              <p>
                One random day, I saw you again — standing there with your friend.
                And in that moment, something inside me shifted. It felt like
                the universe had paused just long enough to give us another chance.
              </p>
            </div>

            <img
              src={storyImg}
              alt="Sriram and Nissy at Vizag beach"
              className="rounded-2xl shadow-xl w-full object-cover max-h-[450px] photo-hover"
            />
          </div>

          {/* Beach Night */}
          <div
            className={`grid md:grid-cols-2 gap-10 items-center ${
              visible ? "animate-fade-up-delay-2" : "opacity-0"
            }`}
          >
            <img
              src={storyImg2}
              alt="Sriram and Nissy by the rocks"
              className="rounded-2xl shadow-xl w-full object-cover max-h-[450px] photo-hover md:order-1 order-2"
            />

            <div className="font-display text-foreground/90 leading-relaxed space-y-4 text-base sm:text-lg md:order-2 order-1">
              <p className="text-2xl font-cursive text-primary mb-2">
                🌙 The Night That Changed Everything
              </p>

              <p>
                A few days later, we went to the beach one night. The waves were
                loud. The air was calm. And somehow, it felt like the world had
                disappeared, leaving just you and me.
              </p>

              <p>
                We stood close. We talked softly. And then we kissed.
                It wasn’t planned. It wasn’t dramatic.
                It just felt right.
              </p>

              <p>
                That night, you looked at me with those emotional eyes and said
                what my heart was already feeling. You proposed to me.
                I still remember how you said it, Bujji… with so much honesty,
                so much courage.
              </p>

              <p>
                After a few days, I accepted. And seeing how emotional you were,
                how deeply you felt it — that moment became one of the best
                feelings of my life.
              </p>
            </div>
          </div>

          {/* Journey */}
          <div
            className={`max-w-3xl mx-auto font-display text-foreground/90 leading-relaxed space-y-4 text-base sm:text-lg ${
              visible ? "animate-fade-up-delay-3" : "opacity-0"
            }`}
          >
            <p className="text-2xl font-cursive text-primary mb-2 text-center">
              🏍️ Our Journey — Beautiful & Difficult
            </p>

            <p>
              From that night, everything became real. Beach rides, endless
              laughter, random food stops, dreams about places we would go.
              Every “Bujji” you called me felt like a world that belonged only
              to us.
            </p>

            <p>
              But our story wasn’t only sunsets and smiles. There were hurdles.
              Questions at home. Pressure from different directions.
              Moments that tested us.
            </p>

            <p>
              Yet through everything, we didn’t part ways.
              We stayed. We chose patience. We chose understanding.
              We chose each other.
            </p>

            <p className="text-2xl font-cursive text-primary mb-2 text-center pt-4">
              🌅 No Matter What Tomorrow Holds
            </p>

            <p>
              Bujji, I don’t know what the future has written for us.
              Life is complicated. Our paths may not always align.
              And maybe destiny won’t let us stay side by side forever.
            </p>

            <p>
              But one thing will never change —
              you will always have a place in my heart.
            </p>

            <p>
              You are not just a chapter I can close.
              You are a part of my growth. A part of my strength.
              A part of the man I am becoming.
            </p>

            <p>
              And if someday, whenever you need me —
              in happiness, in confusion, in silence, in pain —
              I will be there.
              Not because I have to.
              But because loving you changed me.
            </p>

            <p>
              No matter what life decides,
              Vizag will always remind me of the day
              my heart chose you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
