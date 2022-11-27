import React from "react";
import FeedBackItem from "./FeedBackItem";
import { motion, AnimatePresence } from "framer-motion";

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
      <AnimatePresence>
        {data?.map((singleData) => {
          const { id, rank, text } = singleData;
          return (
            <motion.div
              key={id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedBackItem
                key={id}
                rank={rank}
                text={text}
                id={id}
                handleDelete={handleDelete}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </>
  );
};

export default FeedBackList;
