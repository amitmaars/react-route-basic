import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import OuterLayoutComponent from './outer-layout/outer-layout-component';
import InnerLayoutComponent from './inner-layout/inner-layout-component';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={OuterLayoutComponent}/>
            <Route path="/dashboard" component={InnerLayoutComponent}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
