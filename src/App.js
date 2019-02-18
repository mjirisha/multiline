import React, { Component } from "react";
import Home from "./components/Home";
import Character from "./components/Character";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import history from './history';

import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import reducer from "./store/reducer";

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/character/:id" component={Character} />
              <Route exact path="/" component={Home} />
              <Route component={Home}/>
            </Switch>
          </Router>
      </Provider>
    );
  }
}

export default App;
