import { useEffect, useState } from "react";
import FeedBackItem from "./components/FeedBackItem";
import Header from "./components/Header";

function App() {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("FeedBack-App");
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
      <FeedBackItem />
    </div>
  );
}

export default App;
