import './App.css';
import HomePage from './Components/HomePage.jsx'
import Music from "./Components/Music";
import Nav from "./Components/Nav";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Nav />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/music">
            <Music />
          </Route>
        </Switch>
      </Router>
      </div>
  );
}

export default App;
