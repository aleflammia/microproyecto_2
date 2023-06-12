import React from 'react'
import { Movie } from '../models/Movie';
import MovieCard from './MovieCard';

const UpcomingList = ({movies}: {movies: Movie[]}) => {
  return (
    <div className="movies-list-container">
      <div>
        <h2>Muy pronto</h2>
      </div>
      <div className="movies-card-container">
        {movies.map((m) => {
          return (
            <MovieCard m={m}/>
          );
        })}
      </div>
    </div>
  )
}

export default UpcomingList