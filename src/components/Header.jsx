import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [title, setTitle] = useState("FeedBack-App");

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0.8, x: "100%" },
  };
  return (
    <motion.div
      animate={{
        scale: [0.8, 1],
        rotate: [0, 0, 0],
        borderRadius: ["20%", "20%", "20%"],
      }}
      variants={variants}
    >
      <nav className="flex items-center justify-around bg-[#080B11]">
        <Link to="/" className="cursor-pointer">
          {" "}
          <h1
            className=" text-3xl  p-5 font-extrabold 
      text-[#ff6e95]
      font-serif "
          >
            {title}
          </h1>
        </Link>
        <div>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2 cursor-pointer"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>
            {console.log(isNavOpen)}
            <motion.div
              animate={isNavOpen ? "open" : "closed"}
              variants={variants}
              transition={{ duration: 2, type: "spring", stiffness: 60 }}
              className={isNavOpen ? "showMenuNav" : "hideMenuNav"}
            >
              <motion.div
                animate={isNavOpen ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 2, type: "spring", stiffness: 60 }}
                className="absolute top-0 right-0 x-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </motion.div>
              <ul className="flex flex-col items-center   justify-between min-h-[250px]">
                <li>
                  <Link
                    className="border-b border-gray-400 my-8 uppercase"
                    to="/about"
                    onClick={() => setIsNavOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/portfolio">Portfolio</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </motion.div>
          </section>
          <motion.ul
            animate={{ x: 100 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="DESKTOP-MENU hidden space-x-8 lg:flex text-[#F1F5F9]"
          >
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </motion.ul>
        </div>
      </nav>
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
