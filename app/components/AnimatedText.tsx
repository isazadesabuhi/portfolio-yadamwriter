// components/AnimatedText.js
import React from 'react';
import { motion } from 'framer-motion';
import { useState,useEffect } from 'react'

import { usePathname } from 'next/navigation'

const BottomCenterAnimation = ({ character, delay }: {character?:string;delay?:number}) => {
  return (
    <motion.span
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, delay }}
      className="inline-block" // Use Tailwind CSS for styling
    >
      {character}
    </motion.span>
  );
};


const AnimatedText = ({ text }: {text:string}) => {
  const pathname = usePathname()
// State to force re-render
const [key, setKey] = useState(0);

useEffect(() => {
  // Reset the key to re-trigger the animation
  setKey(prev => prev + 1);
}, [pathname]); // Dependency on pathname

  const characters = Array.from(text);

  return (
    <div className="flex" key={key}>
      {characters.map((char, index) => (
        <BottomCenterAnimation
          key={index}
          character={char}
          delay={index * (0.2/characters.length) }
        />
      ))}
    </div>
  );
};

export default AnimatedText;
