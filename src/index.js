import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { StateProvider } from './StateProvider';
import reducer,{ intialState } from './reducer';
ReactDOM.render( <StateProvider initialState={intialState} reducer={reducer}>
    <App />
    </StateProvider>,document.getElementById("root"))