import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import MyContext from "../../context";
import Footer from "../Footer/Footer";
import Pagination from "./Pagination";
import MovieCard from "../MovieCard/MovieCard";
import MovieDetail from "../MovieDetail/MovieDetail";
import SideBar from "../SideBar/SideBar";
import "./MovieCards.css";

const MovieCards = (props) => {
  const { filterMovies, setFilterMovies } = useContext(MyContext);
  const [movies, setMovies] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const searchedText = props.searchText;
  const [page, setPage] = useState(0);
  const [filteredDataPage, setFilteredDataPage] = useState([]);

  const getMovies = async () => {
    try {
      const { data } = await axios.get(
        "https://movies-app.prakashsakari.repl.co/api/movies"
      );

      setMovies(data);
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleMovieClick = (data) => {
    setSelectedMovie(data);
  };

  useEffect(() => {
    getMovies();
    setFilteredData(null);
  }, []);

  useEffect(() => {
    const tempFilter = movies.filter(
      (movie) =>
        movie.genre.toLowerCase().indexOf(filterMovies.toLowerCase()) > -1
    );
    setFilterDatas(tempFilter);
  }, [filterMovies, movies]);

  useEffect(() => {
    const temp = movies.filter(
      (movie) =>
        movie.name.toLowerCase().indexOf(searchedText.toLowerCase()) > -1
    );
    setFilterDatas(temp);
  }, [searchedText, movies]);

  const setFilterDatas = (temp) => {
    setFilteredData(temp);
    setFilteredDataPage(temp.slice(0, 8));
    setPage(0);
  };

  return (
    <>
      <div className="movie-cards-container">
        <div className="banner-home">
          <h1>Welcome to Reels</h1>
          <div>
            <p>
              We are glad you're here! On Reeels you can easily find out
              favorite movies.
            </p>
          </div>
        </div>
        <SideBar />

        <div className="movie-cards">
          {selectedMovie && (
            <MovieDetail
              selectedMovie={selectedMovie}
              close={handleMovieClick}
            />
          )}

          {filteredDataPage.map((movie, index) => (
            <div
              onClick={() => {
                handleMovieClick(movie);
              }}
            >
              <MovieCard key={movie.id} movie={movie} />
            </div>
          ))}

          <Pagination
            filteredData={filteredData}
            setFilteredDataPage={setFilteredDataPage}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MovieCards;
