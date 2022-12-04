import { createContext, useState, useContext } from "react";
import data from "../data/data";

const AppContext = createContext({
  loading: true,
  feedBack: [],
  setFeedBack: () => {},
  setLoading: () => {},
  toggle: "",
});

export const useAppContext = () => {
  return useContext(AppContext);
};

export const FeedBackProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const [feedBack, setFeedBack] = useState(data);
  const contextValue = {
    loading: loading,
    feedBack: feedBack,
    setFeedBack: setFeedBack,
    setLoading: setLoading,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
