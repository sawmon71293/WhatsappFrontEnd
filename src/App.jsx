import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Status from './components/Status/Status';
import StatusViewer from './components/Status/StatusViewer';
import Signin from './components/Register/Signin';
import Signup from './components/Register/Signup';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/status">
              <Status />
            </Route>
            <Route path="/status/userId">
              <StatusViewer />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
