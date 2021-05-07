import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider, useDispatch, useSelector } from "react-redux";
import store from './store';
import { increment } from './redux/counterSlice';
import Example from './components/Example';
import { useAppSelector } from './hooks';


const App = () => {

  return (
    <Provider store={store}>
        <Example/>
    </Provider>
  );
}

export default App;
