import React from "react";
import FeedBackItem from "./FeedBackItem";

const FeedBackList = ({ data }) => {
  return (
    <>
      {data?.map((singleData) => {
        const { id, rank, text } = singleData;
        return <FeedBackItem key={id} rank={rank} text={text} />;
      })}
    </>
  );
};

export default FeedBackList;
