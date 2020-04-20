// External imports
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// Local imports
import { reducer } from '../reducers/index'


export const store = createStore( reducer, applyMiddleware( thunk ))