import React from 'react';

const MovieResults = ({ movies }) => {
  return (
    <div>{movies.map(movie => <div key={movie.imdbID}>
      <div>{movie.Title}</div>
      {movie.Poster !== "N/A" &&
        <img src={movie.Poster} alt={`${movie.Title} poster`} height="200" />
      }
      <br />
      <br />
    </div>)}</div>
  );
};

export default MovieResults;