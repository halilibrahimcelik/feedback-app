import React from "react";

const Button = ({ children, version, type, isDisabled }) => {
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`border-2 px-6 rounded-lg ${
        version === "primary"
          ? "bg-[#151F30]"
          : version === "secondary"
          ? "bg-green-500"
          : null
      }  text-white
      disabled:opacity-70
      `}
    >
      {children}
    </button>
  );
};
Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

export default Button;
