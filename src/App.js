import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from '../src/Component/Home/Home/Home';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/signup">
          <SignUp></SignUp>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
