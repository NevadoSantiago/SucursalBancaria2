import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Reducer from './reducers'
import Login from './components/login'

function App() {
  let store = createStore(Reducer);
  return (
    <Provider store = {store}>
        <Login />
    </Provider>

  );
}

export default App;
