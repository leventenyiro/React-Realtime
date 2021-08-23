import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import RealTime from './RealTime';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/realtime">
            <RealTime />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
