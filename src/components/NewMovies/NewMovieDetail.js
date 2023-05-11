import axios from "axios";
import React from "react";
import { Card} from "react-bootstrap";
import { Tooltip } from "@mui/material";

import "./NewMovie.css";

const NewMovieDetail = ({ newMovie, setClose, setUrlId }) => {

  const handleWatchVideos = (id) => {
    setClose(true);
    console.log(id);

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=75e331c30b2267e3c45f51c09abf20e4&language=en-US`
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("Not found");
        }
      });
  };

  return (
    <>
      <Card
        onClick={() => handleWatchVideos(newMovie.id)}
        className="card-1"
        style={{ width: "18rem" }}
      >
        <Tooltip title="Click to see video" arrow>
          <Card.Img
            variant="top"
            height="180px"
            src={"https://image.tmdb.org/t/p/w500" + newMovie.poster_path}
          />
        </Tooltip>
        <Card.Body>
          <Card.Title>
            <strong>
              {newMovie.title
                ? newMovie.title
                : newMovie?.name
                ? newMovie?.name
                : ""}
            </strong>
          </Card.Title>
          <div>
            <strong>Release Date : </strong>
            {newMovie.release_date
              ? newMovie.release_date
              : newMovie?.first_air_date
              ? newMovie?.first_air_date
              : ""}
          </div>
          <div>
            <strong>Overview :</strong> {newMovie.overview}
          </div>
          <div>
            <strong>Average vote : </strong>
            {newMovie.vote_average}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default NewMovieDetail;
