import React from "react";
import Card from "./UI/Card";
import { FaTimes } from "react-icons/fa";

const FeedBackItem = ({ rank, text, handleDelete, id }) => {
  return (
    <Card>
      <div
        className="num-display absolute bg-[#ff6e95] text-ellipsis
      text-white
      border-white
      border-2
 font-bold
     
      text-center
      p-3 rounded-full"
      >
        {rank}
      </div>
      <button className="float-right absolute top-3 right-3">
        <FaTimes color="purple" size={20} onClick={() => handleDelete(id)} />
      </button>
      <div className="card-text font-mono">{text}</div>
    </Card>
  );
};

export default FeedBackItem;
