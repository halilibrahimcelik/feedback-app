import React, { useState, useEffect } from "react";
import FeedBackForm from "../components/forms/FeedBackForm";
import FeedBackStats from "../components/FeedBackStats";
import FeedBackList from "../components/FeedBackList";

import { useAppContext } from "../context/AppContext";
import Spinner from "../components/UI/Spinner";

const Home = () => {
  const { loading, setFeedBack } = useAppContext();

  if (loading) {
    return (
      <div
        className="text-3xl text text-center font-extrabold absolute top-[50%] left-[50%]"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <Spinner />
      </div>
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
