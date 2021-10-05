import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header'
import ListForm from './components/ToDo/ListForm/ListForm';
import ListWrapper from './components/ToDo/LIstWrapper/ListWrapper';
import './App.css';

function App() {


  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route
            /* exact */
            path="/" render={() => <div>STRONA GŁÓWNA</div>} />
          <Route path="/lists" component={ListWrapper} />
          <Route path="/listform" component={ListForm} />
          <Route render={() => <div>something went wrong</div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
