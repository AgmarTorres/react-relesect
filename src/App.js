import React from 'react';
import { Provider } from 'react-redux'
import store from './store/store'
import Cart from './Cart'
const App = () => (
  <Provider store={store}>
    <Cart />
  </Provider>
)

export default App;
