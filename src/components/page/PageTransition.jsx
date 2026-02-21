// PageTransition.jsx
import { motion } from "framer-motion";

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    }}
    exit={{
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: "easeInOut" },
    }}
    className="h-full w-full"
  >
    {children}
  </motion.div>
);

export default PageTransition;
