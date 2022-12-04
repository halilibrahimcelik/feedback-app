import React, { useState, useEffect } from "react";
import FeedBackForm from "../components/forms/FeedBackForm";
import FeedBackStats from "../components/FeedBackStats";
import FeedBackList from "../components/FeedBackList";
import data from "../data/data";
import { useAppContext } from "../context/AppContext";

const Home = () => {
  const { loading, setLoading, feedBack, setFeedBack } = useAppContext();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) {
    return (
      <h1
        className="text-3xl text text-center font-extrabold absolute top-[50%] left-[50%]"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        Loading...
      </h1>
    );
  }
  return (
    <div className="container mx-auto">
      <FeedBackForm />
      <FeedBackStats />
      <FeedBackList setFeedBack={setFeedBack} />
    </div>
  );
};

export default Home;
