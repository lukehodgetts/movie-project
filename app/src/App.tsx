import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Homepage";
import Movie from "./pages/Movie";

import {LinkedPage} from "./pages/Homepage/index.styles"

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <nav>
        <ul>

          <li>
            <LinkedPage path={location.pathname} to="/">Home</LinkedPage>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movie/:id">
          <Movie />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
