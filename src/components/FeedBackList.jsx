import React, { useState } from "react";
import FeedBackItem from "./FeedBackItem";
import { motion, AnimatePresence, Reorder } from "framer-motion";

const FeedBackList = ({ data, setData }) => {
  const [items, setItems] = useState([0, 1, 2, 3]);

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
    <AnimatePresence>
      <Reorder.Group axis="y" values={data} onReorder={setData}>
        {data?.map((singleData) => {
          const { id, rank, text } = singleData;
          return (
            <motion.div
              key={id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Reorder.Item value={singleData} id={id}>
                <FeedBackItem
                  key={id}
                  rank={rank}
                  text={text}
                  id={id}
                  handleDelete={handleDelete}
                />
              </Reorder.Item>
            </motion.div>
          );
        })}
      </Reorder.Group>
    </AnimatePresence>
  );
};

export default FeedBackList;
