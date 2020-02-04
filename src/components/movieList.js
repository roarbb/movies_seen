import React, { useState, useEffect } from 'react';

import { from } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import styled from 'styled-components';

import myFirestore from '../firestore';

const Movie = styled.div`
  color: ${({theme}) => theme.pink};
`;

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const movieQuery$ = from(myFirestore.collection("movies").get());
  const movies$ = movieQuery$.pipe(
    map(snapshot => snapshot.docs),
    map(docs => docs.map(doc => Object.assign(doc.data(), { id: doc.id }))),
    shareReplay(1)
  );

  useEffect(() => {
    if (!!loaded) {
      return;
    }

    const subscription = movies$.subscribe(movies => {
      setMovies(movies);
      setLoaded(true);
    });
    return () => subscription.unsubscribe();
  }, [loaded, movies$]);

  return (
      <div className="App">
        {!loaded &&
          <div>Loading...</div>
        }

        {!!loaded && movies.map(movie => {
          return <Movie key={movie.id}>{movie.title}</Movie>
        })}
      </div>
  );
}

export default MovieList;
