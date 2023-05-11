import { Button, FormControl, OutlinedInput } from "@mui/material";
import "./BestMovies.css";
import { useState } from "react";

const PostComment = () => {
  const [input, setinput] = useState("");
  const [display, setDisplay] = useState("");

  function onHandleClick() {
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "I am in love with someone.",
        message: input,
        userId: 5,
        /* other post data */
      }),
    })
      .then((res) => res.json())
      .then(console.log);

    setDisplay(input);
  }

  return (
    <div className="best-movie-container">
      <div>
        <FormControl sx={{ width: "25ch" }}>
          <OutlinedInput
            onChange={(e) => {
              setinput(e.target.value);
            }}
            placeholder="Please enter text"
          />
        </FormControl>
        <br></br>
        <br></br>
        <Button onClick={onHandleClick} variant="contained">
          Send data to backend
        </Button>
        <div>{display}</div>
      </div>
    </div>
  );
};

export default PostComment;
