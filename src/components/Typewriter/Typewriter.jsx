// components/Typewriter.jsx
import React, { useState, useEffect, useRef } from 'react';

export default function Typewriter({ 
  text = [], 
  speed = 50, 
  deleteSpeed = 30, 
  waitTime = 1000,
  className = '',
  cursorChar = '|'
}) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(speed);
  const timerRef = useRef(null);

  useEffect(() => {
    const type = () => {
      const currentText = text[currentIndex % text.length];
      
      if (isDeleting) {
        // Deleting text
        setDisplayText(currentText.substring(0, displayText.length - 1));
        setTypingSpeed(deleteSpeed);
      } else {
        // Adding text
        setDisplayText(currentText.substring(0, displayText.length + 1));
        setTypingSpeed(speed);
      }

      if (!isDeleting && displayText === currentText) {
        // Pause at end of typing
        timerRef.current = setTimeout(() => setIsDeleting(true), waitTime);
      } else if (isDeleting && displayText === '') {
        // Move to next text after deleting
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setTypingSpeed(speed);
      } else {
        timerRef.current = setTimeout(type, typingSpeed);
      }
    };

    timerRef.current = setTimeout(type, typingSpeed);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [displayText, currentIndex, isDeleting, text, speed, deleteSpeed, waitTime, typingSpeed]);

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
      <span className="animate-blink">{cursorChar}</span>
    </span>
  );
}