import React from "react";

const InputRadio = ({ selected, id, value, handleChange }) => {
  return (
    <li className="bg-slate-400 p-3 rounded-full">
      <input
        type="radio"
        id={`num${id}`}
        name="rating"
        value={value}
        onChange={handleChange}
        checked={selected === id}
      />
      <label htmlFor={`num${id}`}>{value}</label>
    </li>
  );
};

export default InputRadio;
