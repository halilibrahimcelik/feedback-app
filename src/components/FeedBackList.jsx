import React from "react";
import FeedBackItem from "./FeedBackItem";
import { motion, AnimatePresence, Reorder } from "framer-motion";
import { useAppContext } from "../context/AppContext";

const FeedBackList = () => {
  const { handleDelete, setFeedBack, feedBack } = useAppContext();
  if (!feedBack || feedBack.length === 0) {
    return (
      <p className="text-white text-2xl pt-10 font-semibold">No Feedback yet</p>
    );
  }

  return (
    <AnimatePresence>
      <Reorder.Group axis="y" values={feedBack} onReorder={setFeedBack}>
        {feedBack?.map((singleData) => {
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
