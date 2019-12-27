import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './containers/Home'
import User from './containers/User'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter >
        <Switch>
          <Route path='/user?id=:id' component={User} />
          <Route path='/' exact component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
