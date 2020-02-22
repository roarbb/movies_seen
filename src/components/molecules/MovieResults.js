import React from 'react';
import styled from 'styled-components';

import MovieCard from './MovieCard';

const MovieList = styled.div`
  display: grid;
  grid-gap: 30px;
  margin: 20px 0;
`;

const MovieResults = ({ movies }) => {
  return (
    <MovieList>
      {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </MovieList>
  );
};

export default MovieResults;