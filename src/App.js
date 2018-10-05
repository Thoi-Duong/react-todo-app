import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

import './App.css';
import DashBoard from './containers/dashboard';

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <DashBoard/>
      </Provider>
    );
  }
}

export default App;
