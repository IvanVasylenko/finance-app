const defaultState = {
  visibleStocks: {
    "AAPL": { "title": "Apple", "status": true, },
    "GOOGL": { "title": "Alphabet", "status": true, },
    "MSFT": { "title": "Microsoft", "status": true, },
    "AMZN": { "title": "Amazon", "status": true, },
    "FB": { "title": "Facebook", "status": true, },
    "TSLA": { "title": "Tesla", "status": true, },
  },
}

export const updateStatus = ticker => ({type: 'UPDATE_STATUS', payload: ticker})

export const stocksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_STATUS':
      return { ...state, visibleStocks:
        { ...state.visibleStocks, [action.payload]:
          { ...state.visibleStocks[action.payload], status: !state.visibleStocks[action.payload].status }
        }
      }

    default:
      return state
  }
}
