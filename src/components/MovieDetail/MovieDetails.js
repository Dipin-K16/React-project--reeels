import React from "react";
import "./MovieDetail.css";


const MovieDetails = ({ selectedMovie }) => {
  return (
    <div>
      <div className="movie-image">
        <img alt="Poster" src={selectedMovie.img_link} />
      </div>
      <h2>
        <strong>Movie name :</strong> {selectedMovie?.name}
      </h2>
      <h2>
        <strong>Year :</strong> {selectedMovie?.year}
      </h2>
      <h2>
        <strong>Genre :</strong> {selectedMovie?.genre}
      </h2>
      <div>
        <strong>Certificate Type :</strong> {selectedMovie?.certificate}
      </div>
      <div>
        <strong>Cast :</strong> {selectedMovie?.cast_name}
      </div>
      <div>
        <strong>Director name : </strong>
        {selectedMovie?.director_name}
      </div>
      <div>
        <strong>Writer name : </strong>
        {selectedMovie?.writter_name}
      </div>
    </div>
  );
};

export default MovieDetails;
