import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
// @ts-ignore
import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Home from './pages/Home';
import Urinaire from './pages/Urinaire';
import ReinsVideo from './pages/Reins/Video';
import ReinsData from './pages/Reins/Data';
import VessieVideo from './pages/Vessie/Video';

function App() {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route path="/app">
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
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/urinaire/reins/video">
          <ReinsVideo />
        </Route>
        <Route path="/urinaire/reins/data">
          <ReinsData />
        </Route>
        <Route path="/urinaire/vessie/video">
          <VessieVideo />
        </Route>
        <Route path="/urinaire">
          <Urinaire />
        </Route>
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
}

export default App;
