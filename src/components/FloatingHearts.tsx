import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: string;
  size: string;
  duration: string;
  delay: string;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${14 + Math.random() * 18}px`,
      duration: `${8 + Math.random() * 10}s`,
      delay: `${Math.random() * 12}s`,
    }));
    setHearts(generated);
  }, []);

  return (
    <>
      {hearts.map((h) => (
        <span
          key={h.id}
          className="floating-heart"
          style={{
            left: h.left,
            fontSize: h.size,
            animationDuration: h.duration,
            animationDelay: h.delay,
          }}
        >
          ♥
        </span>
      ))}
    </>
  );
};

export default FloatingHearts;
