import React from "react";
import PropTypes from "prop-types";
const Header = ({ title }) => {
  return (
    <header>
      <h1
        className=" text-3xl bg-[rgba(0,0,0,0.4)] p-5 font-extrabold 
      text-[#ff6e95]
      font-serif text-center"
      >
        {title}
      </h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Feedback UI",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
