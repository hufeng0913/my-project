import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { App } from './components/App'
import reducers from './store/reducers'
import state from './store/state'

const loggerMiddleware = createLogger()
let store = createStore(reducers, state, applyMiddleware(thunkMiddleware, loggerMiddleware))

render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.querySelector('#root')
)