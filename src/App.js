import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import Navbar from './components/Navbar';

//sayfalar
import home from './pages/home';
import menu from './pages/menu';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <div className="container">
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/menu" component={menu} />
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
