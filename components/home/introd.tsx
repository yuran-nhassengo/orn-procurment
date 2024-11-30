import React, { useEffect, useState } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number; 
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 30 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0); 

  useEffect(() => {
    const typeText = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1); 
      }
    };

    const interval = setInterval(typeText, speed);

    if (index >= text.length) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [index, text, speed]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;
