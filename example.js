import Router from 'https://esm.sh/preact-router';
import { h, render } from 'https://esm.sh/preact';

/** const Main = () => (
  <Router>
    <Home path="/" />
    <About path="/about" />
    // Advanced is an optional query
    <Search path="/search/:query/:advanced?" />
  </Router>
); **/

import {Component} from 'https://esm.sh/preact';
import TopAppBar from 'https://esm.sh/preact-material-components/TopAppBar';
import 'https://esm.sh/preact-material-components/TopAppBar/style.css';

export default class ToolbarPage extends Component {
  render(){
    return (
      <div>
        <TopAppBar className="topappbar">
            <TopAppBar.Row>
              <TopAppBar.Section align-start>
                <TopAppBar.Icon navigation>menu</TopAppBar.Icon>
                <TopAppBar.Title>
                  My App
                </TopAppBar.Title>
              </TopAppBar.Section>
              <TopAppBar.Section align-end>
                <TopAppBar.Icon>more_vert</TopAppBar.Icon>
              </TopAppBar.Section>
            </TopAppBar.Row>
          </TopAppBar>
      </div>
    );
  }
}

render(<ToolbarPage />, document.body);