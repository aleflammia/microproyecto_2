import { useEffect, useState } from "react";
import { useGlobalState } from "../globalState";
import { MovieDetails } from "../models/Movie";
import { useParams, Link } from "react-router-dom";
import { FaStar, FaTicketAlt, FaArrowLeft } from "react-icons/fa";

import "./movie.css";

const Movie = () => {
  const [user] = useGlobalState("user");
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const movieRes = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?language=es-ES&api_key=${
          import.meta.env.VITE_MOVIE_DB_API_KEY
        }`
      );
      setMovie(await movieRes.json());
    })();
  }, []);

  async function addFav() {
    try {
      // Lógica para agregar a favoritos
    } catch (e: any) {
      // Manejo de errores
    }
  }

  return (
    <div className="movie-details-container">
      <Link to="/" className="back-button">
        <FaArrowLeft className="back-icon" />
      </Link>
      {movie ? (
        <>
          <div className="movie-info-container">
            <div className="movie-image-container">
              <img
                className="movie-container-img"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="rating-container">
                <FaStar className="star-icon" />
                <span className="rating">{movie.vote_average}</span>
              </div>
            </div>
            <div>
              <h1 className="movie-title">{movie.title}</h1>
              <h4 className="movie-overview">{movie.overview}</h4>
              <p className="movie-runtime">Duración: {movie.runtime} minutos</p>
              <div className="languages-container">
                <h4>Idiomas: </h4>
                {movie.spoken_languages.map((l, index) => (
                  <p key={index} className="language-tag">
                    {l.name}
                  </p>
                ))}
              </div>
              {user ? (
                <div className="action-buttons-container">
                  {movie.status === "Released" ? (
                    <button className="reserve-button">
                      <FaTicketAlt className="button-icon" />
                      Reservar
                    </button>
                  ) : (
                    <p>Próximamente: {movie.release_date}</p>
                  )}
                  <button className="favorite-button" onClick={addFav}>
                    <FaStar className="button-icon" />
                    Favorito
                  </button>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Movie;
