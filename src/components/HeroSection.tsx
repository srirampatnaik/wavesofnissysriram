import heroImg from "@/assets/photo1.jpeg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Sriram and Nissy looking at the ocean in Vizag"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(340_60%_55%/0.45)] via-[hsl(340_40%_30%/0.5)] to-[hsl(340_30%_15%/0.7)]" />
    </div>

    {/* Content */}
    <div className="relative z-10 text-center px-6 max-w-3xl">
      <h1 className="font-cursive text-5xl sm:text-7xl md:text-8xl text-primary-foreground mb-6 animate-fade-up drop-shadow-lg">
        To My Forever, Nissy ❤️
      </h1>
      <p className="font-display text-lg sm:text-xl md:text-2xl text-primary-foreground/90 italic animate-fade-up-delay-1 drop-shadow">
        Our love began in Vizag, and my heart has belonged to you ever since.
      </p>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="hsl(0 0% 100% / 0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </div>
  </section>
);

export default HeroSection;
