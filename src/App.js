import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Categories from './components/Categories';
import NavComponent from './components/NavComponent';
class App extends Component {
  render() {
    return (
      <Router>
        <NavComponent />
        <div>
          <Switch>

            <Route path='/categories'>
              <Categories></Categories>
            </Route>
            <Route path='/'>
              <Home></Home>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;