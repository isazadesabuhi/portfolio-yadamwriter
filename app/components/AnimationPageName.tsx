import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimationPageName = ({
  text,
  direction,
  hovered,
  hoveredIndex,
  index,
  unhoveredIndex,
}) => {
  const lettersRef = useRef([]);

  useEffect(() => {
    // Ensure all elements are present
    const letters = lettersRef.current.filter(Boolean);
    if (letters.length === 0) return;

    if (unhoveredIndex !== index && hoveredIndex === index) {
      // Initial setup for letters
      gsap.set(letters, { y: 0, opacity: 0 });

      // Animation for letters
      gsap.to(letters, {
        y: -25,
        opacity: 1,
        stagger: 0.1,
        duration: 0.4,
        // delay:0.7,
        ease: "power2.out",
        onComplete: function () {
          // Define the animation for another element coming from the bottom to the center
          // Assuming `anotherElement` is the variable for the element you want to animate next
          gsap.fromTo(
            letters,
            {
              y: 25, // Start from the bottom. Adjust the value as needed.
              opacity: 1,
            },
            {
              y: 0, // Position in the center. Adjust based on your layout.
              opacity: 1,
              stagger: 0.1,
              duration: 0.4, // Duration of the animation
              // delay:0.7,
              ease: "power2.out",
              // Additional properties like 'position' might be required depending on your layout
              // For centering exactly in the middle, you might need to adjust 'x' and 'top' properties as well
            }
          );
        },
      });
    } else if (unhoveredIndex === index && hoveredIndex !== index) {
      gsap.set(letters, { y: 0, opacity: 1 });
      gsap.to(letters, {
        y: 25,
        opacity: 1,
        stagger: 0.1,
        duration: 0.4,
        ease: "power2.out",
        delay: 0.5,
        onComplete: function () {
          // Define the animation for another element coming from the bottom to the center
          // Assuming `anotherElement` is the variable for the element you want to animate next
          gsap.fromTo(
            letters,
            {
              y: -25, // Start from the bottom. Adjust the value as needed.
              opacity: 1,
            },
            {
              y: 0, // Position in the center. Adjust based on your layout.
              opacity: 1,
              stagger: 0.1,
              duration: 0.4, // Duration of the animation
              ease: "power2.out",
              // delay: 0.4,
              // Additional properties like 'position' might be required depending on your layout
              // For centering exactly in the middle, you might need to adjust 'x' and 'top' properties as well
            }
          );
        },
      });
    }
    //

    //

    // Cleanup function to kill GSAP animations on unmount
    return () => {
      gsap.killTweensOf(letters);
    };
  }, [hoveredIndex, index, unhoveredIndex, text]);

  useEffect(() => {
    // Reset refs array on component mount and before each update
    lettersRef.current = [];
  }, [hoveredIndex, unhoveredIndex]);

  return (
    <div className="flex h-[31px] flex-row overflow-hidden">
      {text.split("").map((letter, index) => (
        <div
          key={index}
          ref={(el) => {
            // Direct assignment to the refs array based on the current index
            lettersRef.current[index] = el;
          }}
          className="text-[20px] font-bold text-MaBlue opacity-100"
        >
          {letter}
        </div>
      ))}
    </div>
  );
};

export default AnimationPageName;
