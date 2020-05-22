import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Solitaire from './components/Solitaire';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Solitaire />
      </div>
    </Provider>
  );
}

export default App;
