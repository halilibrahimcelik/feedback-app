import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import RatingSelect from "./RatingSelect";

const FeedBackForm = ({ setFeedBack }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    if (text.trim().length > 10) {
      const newForm = {
        id: parseFloat(43 * Math.random()),
        rank: rating,
        text: text,
      };
      setFeedBack((prev) => [newForm, ...prev]);
    }
    setText(" ");
    setBtnDisabled(true);
  };
  const handleChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Your review must have at least 10 character");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };
  return (
    <Card>
      <form className="max-w-2xl mx-auto" onSubmit={(e) => handleSubmit(e)}>
        <h2 className="text-center text-2xl font-bold">
          Rate Your Service with Us ?
        </h2>
        <RatingSelect setRating={setRating} rating={rating} />
        <div className="mx-auto border-2 border-[#151F30] p-2 flex justify-between rounded-lg">
          <input
            className="p-2 w-full bg-transparent outline-none "
            type="text"
            placeholder="Write a reiview"
            onChange={handleChange}
            value={text}
          />
          <Button type={"submit"} isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && (
          <div className="text-[#151F30] text-lg pt-2">{message} </div>
        )}
      </form>
    </Card>
  );
};

export default FeedBackForm;
