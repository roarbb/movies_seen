import React, { useState } from 'react';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, mergeMap, debounceTime } from 'rxjs/operators';
import styled from 'styled-components';
import { Search } from 'react-feather';

import { searchMoviesByName } from '../../endpoints/tmdb';
import { useObservable } from '../../utils/hooks/observable';
import MovieResults from '../molecules/MovieResults';
import Empty from '../atoms/Empty';

const SearchInputRow = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  margin-left: 10px;
  border: 0;
  padding: 5px 10px;
  background: none;
  font-size: 1em;
  border-radius: ${({theme}) => theme.radius};
  border-bottom: ${({theme}) => `1px solid ${theme.dark}`};
  width: 200px;

  &:focus,
  &:hover {
    background: ${({theme}) => theme.dark};
    border-left: ${({theme}) => `2px solid ${theme.muted}`};
    outline: none;
  }
`;

const StyledSearchIcon = styled(Search)`
  color: ${({theme}) => theme.muted};
`;

let searchSubject = new BehaviorSubject('');
let searchResultObservable = searchSubject.pipe(
  debounceTime(750),
  distinctUntilChanged(),
  mergeMap(async val => {
    if (val.length < 1) {
      return;
    }

    const results = await searchMoviesByName(val);

    if (results.length > 0) {
      return <MovieResults movies={results} />;
    } else {
      return <Empty>No results, Sorry. Try something else?</Empty>;
    }
  }),
);

function MovieSearch() {
  const [results, setResults] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  useObservable(searchResultObservable, setResults);

  const handleSearchOnChange = (e) => {
    const searchInputValue = e.target.value;
    searchSubject.next(searchInputValue);
    setSearchValue(searchInputValue);
  }

  return (
    <div>
      <SearchInputRow>
        <StyledSearchIcon />
        <SearchInput
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchOnChange}
        />
      </SearchInputRow>
      {results}
    </div>
  );
}

export default MovieSearch;
