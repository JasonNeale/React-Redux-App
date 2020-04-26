// External imports
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// Asset imports
import 'bootstrap/dist/css/bootstrap.min.css'

// Local imports
import { reducer } from './redux/reducers/index'
import App from './App'

const store = createStore( reducer, applyMiddleware( thunk ))

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById( 'root' )
)