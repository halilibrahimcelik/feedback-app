import React, { useState } from "react";
import InputRadio from "../UI/InputRadio";

const RatingSelect = ({ setRating, rating }) => {
  const ratingArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handleChange = (e) => {
    setRating(+e.currentTarget.value);
  };
  return (
    <ul className="my-5 rating flex flex-wrap justify-center  items-center gap-3">
      {ratingArray.map((ratingNumber, index) => (
        <InputRadio
          key={index}
          value={ratingNumber}
          id={ratingNumber}
          selected={rating}
          handleChange={handleChange}
        />
      ))}
    </ul>
  );
};

export default RatingSelect;
