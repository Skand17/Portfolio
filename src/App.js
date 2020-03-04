import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import './App.css';


// Home
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Home/>
      </Provider>
    );
  }
}

export default App;
