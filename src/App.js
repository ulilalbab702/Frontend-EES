import logo from './logo.svg';
import './App.css';
import {
  LandingPage,
  QuestPage
} from './views'
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import Form from './views/FormPage/Form';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/Form' component={Form} />
          <Route exact path='/Quest' component={QuestPage} />
        </Switch>
        {/* <Redirect to="/Landing/" /> */}
      </Router>
    </div>
  );
}

export default App;
