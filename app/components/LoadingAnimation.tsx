// components/AnimatedLetter.js
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const LoadingAnimation = () => {
  const lettersRef = useRef([]);

  useEffect(() => {
    // Start from 200px below
    gsap.set(lettersRef.current, { y: 300, opacity: 0 });

    // Slide up to the final position and become fully opaque
    gsap.to(lettersRef.current, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.7,
      ease: "power2.out",
    });

    // Wait for 1 second then slide down by 200px and back to the original position
    gsap.to(lettersRef.current, {
      y: -300,
      opacity: 1,
      stagger: 0.1,
      duration: 0.7,
      delay: 3,
      ease: "power2.in",
    });
    // gsap.to(lettersRef.current, { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, delay: 1.5, ease: 'power2.out' });
  }, []);

  return (
    <div className="flex h-screen items-center justify-center overflow-hidden">
    <div className="flex h-[313px] items-center justify-center  space-x-2 overflow-hidden">
      {"Loading...".split("").map((letter, index) => (
        <div
          key={index}
          ref={(el) => (lettersRef.current[index] = el)}
          className="overflow-hidden text-[240px] font-bold text-MaBlue opacity-0"
        >
          {letter}
        </div>
      ))}
    </div>
    </div>
  );
};

export default LoadingAnimation;
