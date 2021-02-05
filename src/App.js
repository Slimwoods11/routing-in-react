import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Welcome from './Components/Welcome/welcome';
import logo from './logo.svg';
import './App.css';
import Clock from './Components/Clock/clock';
import Contact from './Components/Contact/contact';
import Navigation from './Components/Navigation/navigation';
import NoGo from './Components/NoGo/nogo';

class APP extends React.Component {
  state = {};
}

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route path="/welcome/:name" component={Welcome} />
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Christian" />}
        />
        <Route component={NoGo} />
      </Switch>
    </div>
  );
}

export default App;
