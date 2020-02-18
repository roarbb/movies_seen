import React, { useState, useEffect } from 'react';
import { BehaviorSubject, from } from 'rxjs';
import { filter, distinctUntilChanged, mergeMap, debounceTime } from 'rxjs/operators';

const getMovieByName = async (name) => {
  const ombdApiKey = process.env.REACT_APP_OMDB_API_KEY;
  const movies = await fetch(`http://www.omdbapi.com/?&apikey=${ombdApiKey}&s=${name}&type=movie`)
    .then(results => results.json())
    .then(searchJson => searchJson.Search);

  return movies;
}

let searchSubject = new BehaviorSubject('');
let searchResultObservable = searchSubject.pipe(
  filter(val => val.length > 1),
  debounceTime(750),
  distinctUntilChanged(),
  mergeMap(val => from(getMovieByName(val))),
);

const useObservable = (observable, setter) => {
  useEffect(() => {
    let subscription = observable.subscribe(result => {
      setter(result);
    });

    return () => subscription.unsubscribe();
  }, [observable, setter]);
}

function MovieSearch() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  useObservable(searchResultObservable, setResults);

  const handleSearchOnChange = (e) => {
    const newValue = e.target.value;
    setSearch(newValue);
    searchSubject.next(newValue);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearchOnChange}
      />
      {!!results &&
        <div>{results.map(movie => <div key={movie.imdbID}>
          <div>{movie.Title}</div>
          <img src={movie.Poster} height="200" />
          <br />
          <br />
        </div>)}</div>
      }
    </div>
  );
}

export default MovieSearch;
