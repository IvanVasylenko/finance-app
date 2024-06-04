import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

import { stocksReducer } from './stocksReducer'
import { tickerReducer } from './tickerReducer'


const rootReducer = combineReducers({
  tickers: tickerReducer,
  stocks: stocksReducer,
})

export const getState = (state) => state

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
))

export default store
