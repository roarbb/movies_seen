import React, { useState } from 'react';
import { BehaviorSubject, from } from 'rxjs';
import { filter, distinctUntilChanged, mergeMap, debounceTime } from 'rxjs/operators';

import { searchMoviesByName } from '../../endpoints/omdb';
import { useObservable } from '../../utils/hooks/observable';
import MovieResults from '../molecules/MovieResults';

let searchSubject = new BehaviorSubject('');
let searchResultObservable = searchSubject.pipe(
  filter(val => val.length > 1),
  debounceTime(750),
  distinctUntilChanged(),
  mergeMap(val => from(searchMoviesByName(val))),
);

function MovieSearch() {
  const [results, setResults] = useState([]);
  useObservable(searchResultObservable, setResults);

  const handleSearchOnChange = (e) => {
    searchSubject.next(e.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={handleSearchOnChange}
      />
      {results.length > 0
        ? <MovieResults movies={results} />
        : <div>Empty</div>}
    </div>
  );
}

export default MovieSearch;
