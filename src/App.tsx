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
import Digestif from './pages/Digestif';
import EstomacVideo from './pages/Estomac/Video';
import EstomacData from './pages/Estomac/Data';
import DuodenumVideo from './pages/Duodenum/Video';
import DuodenumData from './pages/Duodenum/Data';
import JejunoVideo from './pages/Jejuno/Video';
import JejunoData from './pages/Jejuno/Data';
import CaecumVideo from './pages/Caecum/Videos';
import CaecumData from './pages/Caecum/Data';
import ColonVideo from './pages/Colon/Video';
import ColonData from './pages/Colon/Data';

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
        <Route path="/digestif/estomac/video">
          <EstomacVideo />
        </Route>
        <Route path="/digestif/estomac/data">
          <EstomacData />
        </Route>
        <Route path="/digestif/duodenum/video">
          <DuodenumVideo />
        </Route>
        <Route path="/digestif/duodenum/data">
          <DuodenumData />
        </Route>
        <Route path="/digestif/jejejuno_ileon/video">
          <JejunoVideo />
        </Route>
        <Route path="/digestif/jejejuno_ileon/data">
          <JejunoData />
        </Route>
        <Route path="/digestif/caecum/video">
          <CaecumVideo />
        </Route>
        <Route path="/digestif/caecum/data">
          <CaecumData />
        </Route>
        <Route path="/digestif/colon/video">
          <ColonVideo />
        </Route>
        <Route path="/digestif/colon/data">
          <ColonData />
        </Route>
        <Route path="/digestif">
          <Digestif />
        </Route>
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
}

export default App;
