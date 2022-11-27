import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Header = ({ title }) => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  return (
    <motion.div
      animate={{
        scale: [1, 1.2],
        rotate: [0, 0, 0],
        borderRadius: ["20%", "20%", "20%"],
      }}
      variants={variants}
    >
      <header>
        <h1
          className=" text-3xl bg-[rgba(0,0,0,0.4)] p-5 font-extrabold 
      text-[#ff6e95]
      font-serif text-center"
        >
          {title}
        </h1>
      </header>
    </motion.div>
  );
};

Header.defaultProps = {
  title: "Feedback UI",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
