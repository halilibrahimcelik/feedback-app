import React, { useState } from "react";

const FeedBackItem = () => {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState(
    "   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, alias "
  );

  const handleClick = () => {
    setRating((prevState) => {
      console.log(prevState);
      return prevState + 1;
    });
  };
  return (
    <div className="card bg-slate-100 rounded-md mx-20  relative p-7 mt-4">
      <div
        className="num-display absolute bg-[#ff6e95] text-ellipsis
      text-white
      border-white
      border-2
 font-bold
     
      text-center
      p-3 rounded-full"
      >
        {rating}
      </div>
      <div className="card-text font-mono">{text}</div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default FeedBackItem;
