import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './home';
import './index.css';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path={'/'} component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('gameContainer')
);
