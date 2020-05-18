import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { Layout } from './pages';
import './App.css';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route component={Layout} />
      </Router>
    </div>
  );
}

export default App;
