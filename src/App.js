import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Reducer from './reducers'
import RoutingIngreso from './components/router/RoutingIngreso'

function App() {
  let store = createStore(Reducer);
  return (
    <Provider store = {store}>
      <RoutingIngreso />
    </Provider>

  );
}

export default App;
