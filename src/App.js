import React, { useContext, useEffect } from 'react';
import { StoreContext } from './store/StoreProvider';
import './App.css';

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
    </div>
  );
}

export default App;
