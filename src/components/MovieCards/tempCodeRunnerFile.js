import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import axios from "axios";
import "./MovieCards.css";
import MovieDetail from "../MovieDetail/MovieDetail";
import SideBar from "../SideBar";

const MovieCards = (props) => {
  const [movies, setMovies] = useState([]);
  const [filteredData, setFilteredData]= useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const searchedText = props.searchText;



  const[page,setPage]=useState('')

  const getMovies = async () => {
    try {
      const { data } = await axios.get(
        "https://movies-app.prakashsakari.repl.co/api/movies"
      );

      setMovies(data);

      console.log("data", data);
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleMovieClick = (data) => {
    setSelectedMovie(data);
  };

  useEffect(() => {
    getMovies();
  }, []);
  useEffect(()=>{
    const temp = movies.filter((movie) => 
       movie.name.toLowerCase().indexOf(searchedText.toLowerCase()) > -1
    );
    console.log('ddd',temp)
    setFilteredData(temp)
  },[searchedText])

  

  return (
    <div className="movie-cards-container">
      <SideBar/>
      <div>
        {console.log("sd",Array())}
        <div style={{display: 'flex', gap:2}}>
      {new Array(Math.ceil(filteredData.length/8)).fill(null).map((item, index) =>(

<button style={{color: 'white'}} >
{index+1}
</button>
      ))}
      </div>
      </div>

      <div className="movie-cards">
      {selectedMovie && <MovieDetail selectedMovie={selectedMovie} close={handleMovieClick}/>


      
        }
       

      {filteredData.map((movie,index) => 

         (


          <div
            onClick={() => {
              handleMovieClick(movie);
            }}
          >

            {/* <MovieCard key={movie.id} movie={movie} /> */}
          </div>
        )
      )}
      </div>
      {Array(Math.ceil(filteredData.length/8)).map((item, index)=>(
        <button>{index+1}</button>
      ))}
    </div>
  );
};

export default MovieCards;
