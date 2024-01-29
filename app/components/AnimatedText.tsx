// components/AnimatedText.js
import React from 'react';
import { motion } from 'framer-motion';

const BottomCenterAnimation = ({ character, delay }: {character?:string;delay?:number}) => {
  return (
    <motion.span
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay }}
      className="inline-block" // Use Tailwind CSS for styling
    >
      {character}
    </motion.span>
  );
};

const CenterTopAnimation = ({ character, delay }: {character?:string;delay?:number}) => {
      return (
        <motion.span
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -120, opacity: 1 }}
          transition={{ duration: 0.3, delay }}
          className="inline-block" // Use Tailwind CSS for styling
        >
          {character}
        </motion.span>
      );
    };


const AnimatedText = ({ text }: {text:string}) => {
  const characters = Array.from(text);

  return (
    <div className="flex">
      {characters.map((char, index) => (
        <BottomCenterAnimation
          key={index}
          character={char}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
};

export default AnimatedText;
