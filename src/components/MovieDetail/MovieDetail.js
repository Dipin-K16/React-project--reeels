import React from "react";
import { Button } from "@mui/material";
import MovieDetails from "./MovieDetails";
import ShareButton from "./ShareButton";
import AddToWatchList from "./AddToWatchList";

import "./MovieDetail.css";

const MovieDetail = (props) => {
  const { selectedMovie } = props;

  return (
    <div className="pop-up">
      <div className="pop-up-container">
        <MovieDetails selectedMovie={selectedMovie} />

        <AddToWatchList selectedMovie={selectedMovie} />

        <ShareButton selectedMovie={selectedMovie} />

        <div className="button2">
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              props.close(null);
            }}
          >
            close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
