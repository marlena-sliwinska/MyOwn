import React, { useContext, useEffect } from 'react';
import { StoreContext } from './store/StoreProvider';
import ListWrapper from './components/ToDo/LIstWrapper/ListWrapper';
import './App.css';
import ListForm from './components/ToDo/ListForm/ListForm';

function App() {
  const { user } = useContext(StoreContext)

  return (
    <div>
      <header>
        <h1>LOGO</h1>
        <nav>
          <ul>

          </ul>
        </nav>
        <p>Witaj {user.name}! </p>
      </header>
      <ListWrapper />
      <ListForm />
    </div>
  );
}

export default App;
