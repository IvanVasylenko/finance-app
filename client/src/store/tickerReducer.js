const defaultState = {
  tickers: [],
  prevTickers: [],
  currentInterval: 5000,
}

export const setTickers = tickers => ({type: 'UPDATE_TICKERS', payload: tickers})
export const setPeriod = time => ({type: 'UPDATE_INTERVAL', payload: time})

export const tickerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_TICKERS':
      if (!state.prevTickers.length) {
        return { ...state, tickers: action.payload, prevTickers: action.payload }
      } else {
        const preparedTickers = action.payload.map(( stock, index ) => {
          const profit = (stock.price - state.tickers[index].price > 0) ? true : false
          return ({ ...stock, profit})
        })
        return { ...state, prevTickers: state.tickers, tickers: preparedTickers }
      }

    case 'UPDATE_INTERVAL':
      return { ...state, currentInterval: action.payload}

    default:
      return state
  }
}
