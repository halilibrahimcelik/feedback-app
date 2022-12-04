import { useEffect } from "react";
import { createContext, useState, useContext } from "react";
import data from "../data/data";

const AppContext = createContext({
  loading: true,
  feedBack: [],
  setFeedBack: () => {},
  setLoading: () => {},
  handleDelete: () => {},
  handleEdit: () => {},
  handleAdd: () => {},
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
  const [feedBack, setFeedBack] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("/feedback?_sort=id&_order=desc");
      if (response.ok) {
        setLoading(false);
      }
      const data = await response.json();
      setFeedBack(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setTimeout(() => fetchData(), 1000);
  }, []);

  const [feedBackEdit, setFeedBackEdit] = useState({
    item: {},
    edit: false,
  });

  const handleAdd = async (newForm) => {
    const response = await fetch(`/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newForm),
    });
    const data = await response.json();
    setFeedBack((prev) => [data, ...prev]);
  };
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you have done this ?")) {
      await fetch(`/feedback/${id}`, {
        method: "DELETE",
      });
      const newData = feedBack.filter((item) => item.id !== id);
      setFeedBack(newData);
    }
  };
  const handleEdit = (id) => {
    const selecteddata = feedBack.filter((item) => item.id === id);
    setFeedBackEdit({ item: selecteddata[0], edit: true });
  };
  const handleUpdate = async (id, newItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    });
    const data = await response.json();
    const { item } = feedBackEdit;
    setFeedBack(
      feedBack.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

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
    handleAdd,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
