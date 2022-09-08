import { Route, Switch } from 'react-router-dom';
import './App.css';
import DetailPage from './sass/pages/DetailPage';
import Homepage from './sass/pages/Homepage';
import LoginPage from './sass/pages/LoginPage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/detail" component={DetailPage} />
      </Switch>
    </>
  );
}

export default App;