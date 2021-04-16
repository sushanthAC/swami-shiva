import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import Routes from './Routes';

function App() {
  return (
    <div >
        <Router>
          <Nav />
          <Routes />
        </Router>
    </div>
  );
}

export default App;
