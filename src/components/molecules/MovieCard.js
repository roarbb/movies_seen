import React from 'react';
import styled from 'styled-components';

import Box from '../atoms/Box';
import ImageWrapper from '../atoms/ImageWrapper';
import Placeholder from '../atoms/Placeholder';

const StyledBox = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;
`;

const Content = styled.div`
  /* justify-content: start; */
`;

const MovieTitle = styled.h2`
  font-size: 1.4em;
  display: inline-block;
  margin: 0;
`;

const Year = styled.span`
  font-size: .9em;
`;

const Overview = styled.div`
  margin-top: 20px;
  height: 100px;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);

  &:hover {
    height: initial;
    -webkit-mask-image: none;
    mask-image: none;
  }
`;

const Votes = styled.span`
  background: ${({ theme }) => theme.dark};
  border-radius: ${({ theme }) => theme.radius};
  padding: 1px 4px;
  margin-right: 6px;
`;

const MovieCard = ({ movie, className }) => {
  console.log('🌺🌺 movie', movie);

  const tmbdImageBaseUrl = process.env.REACT_APP_TMDB_IMAGE_BASE_URL;
  const imageUrl = `${tmbdImageBaseUrl}/w342/${movie.poster_path}`;

  return (
    <StyledBox className={className}>
      {!!movie.poster_path ?
        <ImageWrapper>
          <img src={imageUrl} alt={`${movie.title} poster`} />
        </ImageWrapper>
        : <Placeholder />
      }
      <Content>
        <div>
          <MovieTitle>{movie.title}</MovieTitle>
          {!!movie.release_date &&
            <Year>{` (${movie.release_date.substr(0, 4)})`}</Year>
          }
        </div>
        <Overview>
          {!!movie.vote_count && <Votes>{movie.vote_average}/10</Votes>}
          {movie.overview}
        </Overview>
      </Content>
    </StyledBox>
  );
};

export default MovieCard;