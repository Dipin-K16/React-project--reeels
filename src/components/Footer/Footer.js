import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export const Footer = () => {
  const [newMovies, setNewMovies] = useState({ results: [] });

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=75e331c30b2267e3c45f51c09abf20e4"
      );
      console.log(data);
      setNewMovies({ results: data.results });
    } catch (err) {}
  };

  return (
    <div className="footer">
      <div className="new-movie-daily">
        {newMovies.results.map((newMovie) => {
          return (
            <Card className="card-1" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                height="180px"
                alt="Poster"
                src={"https://image.tmdb.org/t/p/w500" + newMovie.poster_path}
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
