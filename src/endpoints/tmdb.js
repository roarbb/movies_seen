import get from 'lodash/get';

export const searchMoviesByName = async (name) => {
  const tmbdApiUrl = process.env.REACT_APP_TMDB_URL;
  const tmbdApiKey = process.env.REACT_APP_TMDB_API_KEY;

  const movies = await fetch(`${tmbdApiUrl}/search/movie/?&api_key=${tmbdApiKey}&query=${name}&type=movie`)
    .then(results => results.json())
    .then(searchJson => get(searchJson, 'results', []));

  return movies;
}