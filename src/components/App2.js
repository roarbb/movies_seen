import React from 'react';

import { useStream } from './streams/utils'
import { allMovies } from './streams/movies'

function App() {
  const movies = useStream(allMovies(), []);

  console.log('movies', movies);

  return (
    <div className="App">
      app
    </div>
  );
}

export default App;
