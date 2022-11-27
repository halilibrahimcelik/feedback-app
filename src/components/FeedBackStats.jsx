import React from "react";
import Card from "./UI/Card";

const FeedBackStats = ({ data }) => {
  const allRanks = data.map((item) => parseFloat(item.rank));
  const average = (
    allRanks.reduce((a, b) => a + b, 0) / allRanks.length
  ).toFixed(1);

  return (
    <Card>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold"> Total Review:{data.length} </h2>
        <p className="text-2xl font-bold">
          {" "}
          Average Rating: {isNaN(average) ? "0" : average}{" "}
        </p>
      </div>
    </Card>
  );
};

export default FeedBackStats;
