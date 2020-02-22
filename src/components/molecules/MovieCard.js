import React, { useState } from 'react';
import styled from 'styled-components';

import Box from '../atoms/Box';
import ImageWrapper from '../atoms/ImageWrapper';
import Placeholder from '../atoms/Placeholder';

const StyledBox = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr;
  grid-gap: 20px;
  height: 170px;
  transition: all .2s;

  ${({ expanded }) => !!expanded && `
    height: 100%;
  `}
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

  ${({ expanded }) => !!expanded && `
    height: 100%;
    -webkit-mask-image: none;
    mask-image: none;
  `}
`;

const Votes = styled.span`
  background: ${({ theme }) => theme.dark};
  border-radius: ${({ theme }) => theme.radius};
  padding: 1px 4px;
  margin-right: 6px;
`;

const MovieCard = ({ movie, className }) => {
  const tmbdImageBaseUrl = process.env.REACT_APP_TMDB_IMAGE_BASE_URL;
  const imageUrl = `${tmbdImageBaseUrl}/w342/${movie.poster_path}`;
  const [expanded, setExpanded] = useState(false);

  return (
    <StyledBox
      className={className}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      expanded={expanded}
    >
      {!!movie.poster_path ?
        <ImageWrapper expanded={expanded}>
          <img src={imageUrl} alt={`${movie.title} poster`} />
        </ImageWrapper>
        : <Placeholder />
      }
      <section>
        <div>
          <MovieTitle>{movie.title}</MovieTitle>
          {!!movie.release_date &&
            <Year>{` (${movie.release_date.substr(0, 4)})`}</Year>
          }
        </div>
        <Overview expanded={expanded}>
          {!!movie.vote_count && <Votes>{movie.vote_average}/10</Votes>}
          {movie.overview}
        </Overview>
      </section>
    </StyledBox>
  );
};

export default MovieCard;