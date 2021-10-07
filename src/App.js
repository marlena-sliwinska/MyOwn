import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header'
import Homepage from './views/Homepage/Homepage';
import ToDo from './views/ToDo/ToDo';
import Pomodoro from './views/Pomodoro/Pomodoro';
import './App.css';

function App() {

  return (
    <div>

      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/todo" component={ToDo} />
          {/*  <Route path="/timer" component={Pomodoro} /> */}
          <Route render={() => <div>something went wrong</div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
