import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [cursorVariant, setCursorVariant] = useState("default");
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  const variants = {
    default: {
      x: springX,
      y: springY,
      width: 16,
      height: 16,
      backgroundColor: "#3b82f6",
      transition: { type: "spring", mass: 0.1 }
    },
    text: {
      x: springX,
      y: springY,
      width: 32,
      height: 32,
      backgroundColor: "transparent",
      border: "2px solid #3b82f6",
      transition: { type: "spring", mass: 0.1 }
    },
    link: {
      x: springX,
      y: springY,
      width: 24,
      height: 24,
      backgroundColor: "#10b981",
      transition: { type: "spring", mass: 0.1 }
    },
    hidden: {
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  // Export the setCursorVariant function to be used by other components
  useEffect(() => {
    window.setCursorVariant = setCursorVariant;
    return () => {
      delete window.setCursorVariant;
    };
  }, []);

  return (
    <motion.div
      className="fixed rounded-full pointer-events-none z-[9999] mix-blend-difference"
      variants={variants}
      animate={cursorVariant}
      initial="default"
    />
  );
}