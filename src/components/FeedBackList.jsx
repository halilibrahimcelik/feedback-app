import React from "react";
import FeedBackItem from "./FeedBackItem";

const FeedBackList = ({ data, setData }) => {
  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  if (!data || data.length === 0) {
    return (
      <p className="text-white text-2xl pt-10 font-semibold">No Feedback yet</p>
    );
  }
  return (
    <>
      {data?.map((singleData) => {
        const { id, rank, text } = singleData;
        return (
          <FeedBackItem
            key={id}
            rank={rank}
            text={text}
            id={id}
            handleDelete={handleDelete}
          />
        );
      })}
    </>
  );
};

export default FeedBackList;
