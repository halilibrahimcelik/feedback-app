import { useEffect, useState } from "react";
import FeedBackItem from "./components/FeedBackItem";
import FeedBackList from "./components/FeedBackList";
import Header from "./components/Header";
import data from "./data/data";

function App() {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("FeedBack-App");
  const [feedBack, setFeedBack] = useState(data);

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
    <div className="App">
      <Header title={title} />
      <FeedBackList data={feedBack} />
    </div>
  );
}

export default App;
