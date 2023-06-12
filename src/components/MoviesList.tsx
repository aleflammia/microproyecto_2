import "./movieslist.css";
import { Movie } from "../models/Movie";
import { FaSearch } from "react-icons/fa";
import MovieCard from "./MovieCard";

const MoviesList = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="movies-list-container">
      <form className="search-form">
        <input
          className="search-input"
          type="text"
          placeholder="Busca una película"
        />
        <button className="search-button">
          <FaSearch />
        </button>
      </form>
      <div className="movies-card-container">
        {movies.map((m, i) => {
          return <MovieCard m={m} key={i} />;
        })}
      </div>
    </div>
  );
};

export default MoviesList;
