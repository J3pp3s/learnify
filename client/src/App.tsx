import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './sass/pages/Homepage';
import LoginPage from './sass/pages/LoginPage';
import DetailPage from './sass/pages/DetailPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
    <Navigation />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/detail" component={DetailPage} />
      </Switch>
    </>
  );
}

export default App;