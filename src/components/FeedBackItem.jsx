import React from "react";
import Card from "./UI/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";

const FeedBackItem = ({ rank, text, id }) => {
  const { handleDelete, handleEdit } = useAppContext();

  return (
    <Card>
      <div className="cursor-grabbing">
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
        <button className="float-right absolute top-3 right-9">
          <FaEdit color="purple" size={20} onClick={() => handleEdit(id)} />
        </button>
        <div className="card-text font-mono">{text}</div>
      </div>
    </Card>
  );
};

export default FeedBackItem;
