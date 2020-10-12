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
import VessieData from './pages/Vessie/Data';
import GlandesVideo from './pages/Glandes/Video';
import GlandesData from './pages/Glandes/Data';
import ExtraDigestif from './pages/ExtraDigestif';
import PancreasVideo from './pages/Pancreas/Video';
import PancreasData from './pages/Pancreas/Data';
import RateVideo from './pages/Rate/Video';
import RateData from './pages/Rate/Data';
import FoieVideo from './pages/Foie/Video';
import FoieData from './pages/Foie/Data';

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
        <Route path="/urinaire/vessie/data">
          <VessieData />
        </Route>
        <Route path="/urinaire/glandes/video">
          <GlandesVideo />
        </Route>
        <Route path="/urinaire/glandes/data">
          <GlandesData />
        </Route>
        <Route path="/urinaire">
          <Urinaire />
        </Route>
        <Route path="/extradigestif/rate/video">
          <RateVideo />
        </Route>
        <Route path="/extradigestif/rate/data">
          <RateData />
        </Route>
        <Route path="/extradigestif/pancreas/video">
          <PancreasVideo />
        </Route>
        <Route path="/extradigestif/pancreas/data">
          <PancreasData />
        </Route>
        <Route path="/extradigestif/foie/video">
          <FoieVideo />
        </Route>
        <Route path="/extradigestif/foie/data">
          <FoieData />
        </Route>
        <Route path="/extradigestif">
          <ExtraDigestif />
        </Route>
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
}

export default App;
