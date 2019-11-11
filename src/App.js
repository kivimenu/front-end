import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'; bu eskisi
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'; //bu olmazsa eskisini kullan
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './util/theme';

//components
import Navbar from './components/Navbar';

//sayfalar
import home from './pages/home';
import menu from './pages/menu';
import Wizard from './components/Wizard';

const theme = createMuiTheme(themeFile);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/menuler" component={menu} />
              <Route exact path="/wizard" component={Wizard} />
            </Switch>
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
