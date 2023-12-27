import Router from 'https://esm.sh/preact-router';
import { h, render } from 'https://esm.sh/preact';

const Main = () => (
  <Router>
    <Home path="/" />
    <About path="/about" />
    // Advanced is an optional query
    <Search path="/search/:query/:advanced?" />
  </Router>
);

render(<Main />, document.body);