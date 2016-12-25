import React from 'react';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';

import store from '../store';

import Sidebar from './Sidebar';
import Main from '../containers/Main';


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <Main />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
