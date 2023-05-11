import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import NewMovieDetail from "./NewMovieDetail";
import YouTubeDisplay from "./YouTubeDisplay";
import "./NewMovie.css";

const NewMovies = () => {
  const [newMovies, setNewMovies] = useState({ results: [] });
  const [urlId, setUrlId] = useState("");
  const [close, setClose] = useState(true);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/trending/all/week?api_key=75e331c30b2267e3c45f51c09abf20e4"
      );
      console.log(data);
      setNewMovies({ results: data.results });
    } catch (err) {}
  };

  const onCloseClick = (data) => {
    setClose(data);
  };

  return (
    <div className="new-movie-container">
      {newMovies.results.map((newMovie) => {
        return (
          <NewMovieDetail
            newMovie={newMovie}
            setClose={setClose}
            setUrlId={setUrlId}
          />
        );
      })}

      {close && urlId && <YouTubeDisplay urlId={urlId} close={onCloseClick} />}
    </div>
  );
};

export default NewMovies;
