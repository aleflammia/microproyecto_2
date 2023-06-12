import React from "react";
import { Movie } from "../models/Movie";
import { useNavigate } from "react-router-dom";

const MovieCard = (  {m}: {m: Movie}  ) => {
  const navigate = useNavigate()
  return (
    <div key={m.id} onClick={() => navigate(`/movie/${m.id}`)} className="movie-card">
      <img
        className="movie-card-img"
        src={`https://image.tmdb.org/t/p/w500/${m.posterPath}`}
      />
      <div className="movie-card-conteiner">
        <div style={{ fontWeight: "500", fontSize: "20px" }}>{m.title}</div>
        <div style={{ maxHeight: "120px", overflow: "scroll" }}>{m.overview}</div>
        <div key={m.id}
          style={{
            marginTop: "auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div style={{ fontSize: "14px", fontWeight: "500" }}>{m.originalLanguage}</div>
          {m.genreIds.map((g) => {
            return (
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  backgroundColor: "gray",
                  padding: "0.25rem",
                  borderRadius: "14px",
                }}
              >
                {g}
              </div>
            );
          })}
        </div>
      </div>
    </div>

  );
};

export default MovieCard;
