import { useContext } from "react";
import MyContext from "../../context";
import MovieCard from "../MovieCard/MovieCard";
import "./Favourite.css";

const Favourite = () => {
  const { watchList } = useContext(MyContext);

  return (
    <div className="favorite-container">
      {watchList.map((movie, index) => (
        <div>
          <MovieCard key={movie.id} movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default Favourite;
