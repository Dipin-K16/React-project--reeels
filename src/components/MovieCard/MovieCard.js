import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

import "./MovieCard.css";

const MovieCard = (props) => {
  const { name, imdb_rating, genre, duration, img_link } = props.movie;
  const [rate, setRate] = useState("");

  const ratingChanged = (newRating) => {
    setRate(newRating);
    console.log(newRating);
  };


  return (
    <Button variant="outlined">
      <Card className="card-1" style={{ width: "18rem" }}>
        <Card.Img variant="top" height="180px" src={img_link} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <div>Rating : {imdb_rating}</div>
          <Card.Text>
            Genre : {genre} <span style={{ color: "black" }}></span>
          </Card.Text>
          Duration : {duration}
        </Card.Body>
      </Card>
    </Button>
  );
};

export default MovieCard;
