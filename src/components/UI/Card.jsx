import React from "react";

const Card = ({ children, reverse }) => {
  return (
    <div
      className={
        reverse
          ? "card bg-stone-900 text-white rounded-md mx-20  relative p-7 mt-4"
          : "card bg-slate-100 rounded-md mx-20  relative p-7 mt-6"
      }
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  reverse: false,
};
export default Card;
