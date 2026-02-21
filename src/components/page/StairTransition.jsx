// StairTransition.jsx
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const STAIR_COUNT = 6;
const stairs = Array.from({ length: STAIR_COUNT }, (_, i) => i);

const stairVariants = {
  initial: { x: "100%" }, // start off-screen to the right
  animate: (index) => ({
    x: "0%",
    transition: {
      duration: 0.4,
      delay: index * 0.05,
      ease: "easeInOut",
    },
  }),
  exit: (index) => ({
    x: "-100%", // slide out to the left
    transition: {
      duration: 0.4,
      delay: index * 0.05,
      ease: "easeInOut",
    },
  }),
};

const StairTransition = () => {
  const location = useLocation();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    const totalDuration = 0.4 + (STAIR_COUNT - 1) * 0.05;
    const timer = setTimeout(() => setVisible(false), totalDuration * 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!visible) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="pointer-events-none fixed inset-0 z-40"
      >
        {stairs.map((index) => (
          <motion.div
            key={index}
            className="absolute top-0 bottom-0 bg-slate-900"
            style={{
              left: `${(index / STAIR_COUNT) * 100}%`,
              width: `${100 / STAIR_COUNT}%`,
            }}
            variants={stairVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={index}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default StairTransition;
