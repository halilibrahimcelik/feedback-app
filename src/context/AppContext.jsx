import { createContext, useState, useContext } from "react";
import data from "../data/data";

const AppContext = createContext({
  loading: true,
  feedBack: [],
  setFeedBack: () => {},
  setLoading: () => {},
  handleDelete: () => {},
});

//assigning custom useContext
export const useAppContext = () => {
  return useContext(AppContext);
};

export const FeedBackProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setFeedBack(newData);
  };
  const [feedBack, setFeedBack] = useState(data);
  const contextValue = {
    loading: loading,
    feedBack: feedBack,
    setFeedBack: setFeedBack,
    setLoading: setLoading,
    handleDelete,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
