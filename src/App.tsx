import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          {' '}
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </Route>
        <Redirect from="/" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
