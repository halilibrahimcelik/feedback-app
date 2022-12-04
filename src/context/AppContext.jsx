import { createContext, useState, useContext } from "react";
import data from "../data/data";

const AppContext = createContext({
  loading: true,
  feedBack: [],
  setFeedBack: () => {},
  setLoading: () => {},
  handleDelete: () => {},
  handleEdit: () => {},
  setEditFeedBack: () => {},
  feedBackEdit: {},
  handleUpdate: () => {},
});

//assigning custom useContext
export const useAppContext = () => {
  return useContext(AppContext);
};

export const FeedBackProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [feedBack, setFeedBack] = useState(data);
  const [feedBackEdit, setFeedBackEdit] = useState({
    item: {},
    edit: false,
  });
  const handleDelete = (id) => {
    console.log(id);
    const newData = feedBack.filter((item) => item.id !== id);
    setFeedBack(newData);
  };
  const handleEdit = (id) => {
    const selecteddata = feedBack.filter((item) => item.id === id);
    setFeedBackEdit({ item: selecteddata[0], edit: true });
  };
  const handleUpdate = (id, newItem) => {
    const { item } = feedBackEdit;
    setFeedBack(
      feedBack.map((item) => (item.id === id ? { ...item, ...newItem } : item))
    );
  };
  console.log(feedBackEdit);

  const contextValue = {
    loading: loading,
    feedBack: feedBack,
    setFeedBack: setFeedBack,
    setLoading: setLoading,
    handleDelete,
    handleEdit,
    setFeedBackEdit,
    feedBackEdit,
    handleUpdate,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
