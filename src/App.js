import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { theme } from './styles';
import Button from './components/atoms/Button';
import Layout from './components/templates/Layout';
import MovieList from './components/molecules/MovieList';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.backgroundColor};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/admin">
            <Layout><Button>Log in</Button></Layout>
          </Route>
          <Route path="/movies">
            <Layout><MovieList /></Layout>
          </Route>
          <Route path="/">
            <Layout>Home</Layout>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
