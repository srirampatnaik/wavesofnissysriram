import storyImg from "@/assets/photo10.jpeg";
import storyImg2 from "@/assets/photo7.jpeg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const OurStorySection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="py-20 md:py-28 px-6 bg-secondary/50" id="our-story">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <h2 className={`font-cursive text-4xl sm:text-5xl md:text-6xl text-center text-primary mb-16 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          Our Story
        </h2>

        {/* Story as flowing narrative with interspersed photos */}
        <div className="space-y-12">
          <div className={`grid md:grid-cols-2 gap-10 items-center ${visible ? "animate-fade-up-delay-1" : "opacity-0"}`}>
            <div className="font-display text-foreground/90 leading-relaxed space-y-4 text-base sm:text-lg">
              <p className="text-2xl font-cursive text-primary mb-2">🌊 Where It All Began</p>
              <p>
                It started in Vizag. I still remember the first time I saw you — something about you just felt different.
                Not the kind of different you notice and forget. The kind that stays. The kind that changes everything.
              </p>
              <p>
                The beach was where we found ourselves. The waves crashing, the salty wind blowing through your hair,
                and me — just trying to keep up with how fast my heart was beating around you. We'd walk for hours,
                talking about nothing and everything. Those walks were the beginning of us.
              </p>
            </div>
            <img src={storyImg} alt="Sriram and Nissy at Vizag beach" className="rounded-2xl shadow-xl w-full object-cover max-h-[450px] photo-hover" />
          </div>

          <div className={`grid md:grid-cols-2 gap-10 items-center ${visible ? "animate-fade-up-delay-2" : "opacity-0"}`}>
            <img src={storyImg2} alt="Sriram and Nissy by the rocks" className="rounded-2xl shadow-xl w-full object-cover max-h-[450px] photo-hover md:order-1 order-2" />
            <div className="font-display text-foreground/90 leading-relaxed space-y-4 text-base sm:text-lg md:order-2 order-1">
              <p className="text-2xl font-cursive text-primary mb-2">🏍️ Rides, Food & Dreams</p>
              <p>
                Then came the rides. Kilometers and kilometers along the coast, the wind in our faces,
                your arms around me, and laughter louder than the ocean. Those rides were freedom.
                Those rides were us at our happiest.
              </p>
              <p>
                And the food, Nissy — every meal with you became a memory. From street food stalls to small
                restaurants we'd discover together, every bite tasted better because you were there. We'd eat,
                we'd laugh, we'd dream about all the places we'd go and all the food we'd try.
              </p>
            </div>
          </div>

          <div className={`max-w-3xl mx-auto font-display text-foreground/90 leading-relaxed space-y-4 text-base sm:text-lg ${visible ? "animate-fade-up-delay-3" : "opacity-0"}`}>
            <p className="text-2xl font-cursive text-primary mb-2 text-center">💪 You Stayed When Nobody Else Did</p>
            <p>
              But life wasn't always beach rides and sunsets. There were days when everything felt heavy.
              Days when I didn't believe in myself. Days when the world felt empty and I had nobody to turn to.
            </p>
            <p>
              And that's when you showed me who you really are. You didn't just stay — you held me up.
              You believed in me when I had lost all belief in myself. You stayed when everyone else walked away.
              You fought for us when I was too tired to fight for anything.
            </p>
            <p>
              Because of you, I learned what real love means. Not the kind you see in movies. The kind that shows up
              at 2 AM when you're crying. The kind that says "I'm not going anywhere" and actually means it.
              That's you, Nissy. That's always been you.
            </p>

            <p className="text-2xl font-cursive text-primary mb-2 text-center pt-4">💕 Growing Stronger Every Day</p>
            <p>
              Every challenge we've faced has made us closer. Every argument taught us patience. Every hard day
              reminded us why we choose each other. And I'd choose you again, Nissy. Every single time.
            </p>
            <p>
              I know our paths carry the weight of different worlds. I know the future isn't always clear.
              But what I know for sure is this — my love for you is as long as the ocean in Vizag and as
              beautiful as its sunsets. And it's not going anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
