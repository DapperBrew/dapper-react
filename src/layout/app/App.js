import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../store';

import Sidebar from '../sidebar/Sidebar';
import Main from '../main/Main';


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

// const App = () => (
//   <div className="App">
//     <Main />
//   </div>
// );

export default App;
