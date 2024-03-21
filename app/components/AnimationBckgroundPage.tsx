import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimationBckgroundPage = ({
  text,
  hovered
}) => {
    const lettersRef = useRef([]);
    useEffect(() => {
      // Ensure all elements are present
      const letters = lettersRef.current.filter(Boolean);
      if (letters.length === 0) return;
  
      if (hovered) {
        gsap.set(letters, { y: 300, opacity: 0 });
        gsap.to(letters, {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
        });
      } else if (!hovered) {
        gsap.set(letters, { y: 0, opacity: 1 });
        gsap.to(letters, {
          y: 300,
          opacity: 0, // Consider setting opacity to 0 if you want them to fade out
          stagger: 0.1,
          duration: 0.4,
          delay: 0.4,
          ease: "power2.in",
        });
      }
  
      // Cleanup function to kill GSAP animations on unmount
      return () => {
        gsap.killTweensOf(letters);
      };
    }, [hovered]);
  
    useEffect(() => {
      // Reset refs array on component mount and before each update
      lettersRef.current = [];
    }, [text,hovered]);
  return (
    <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden text-[240px] text-[#1364FF] lg:flex ">
    {text.split("").map((letter, index) => (
      <div
        key={index}
        ref={(el) => {
          // Direct assignment to the refs array based on the current index
          lettersRef.current[hovered ? index : text.length - index] = el;
        }}
        className="h-[313px] overflow-hidden text-[240px] font-bold text-MaBlue opacity-100"
      >
        {letter}
      </div>
    ))}
  </div>
  );
};

export default AnimationBckgroundPage;
