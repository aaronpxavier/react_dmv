import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './Redux/Reducers'
import App from './App'
import * as serviceWorker from './serviceWorker'

const store = createStore(allReducers)

ReactDom.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
    ,

    document.getElementById('root')
)

serviceWorker.unregister();