import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const Card = ({ children, reverse }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 0, opacity: 0 }}
      >
        <div
          className={
            reverse
              ? "card bg-stone-900 text-white rounded-md mx-20  relative p-7 mt-4"
              : "card bg-slate-100 rounded-md mx-20  relative p-7 mt-6"
          }
        >
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

Card.defaultProps = {
  reverse: false,
};
export default Card;
