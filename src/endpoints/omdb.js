import get from 'lodash/get';

export const searchMoviesByName = async (name) => {
  const ombdApiKey = process.env.REACT_APP_OMDB_API_KEY;
  const movies = await fetch(`http://www.omdbapi.com/?&apikey=${ombdApiKey}&s=${name}&type=movie`)
    .then(results => results.json())
    .then(searchJson => get(searchJson, 'Search', []));

  return movies;
}