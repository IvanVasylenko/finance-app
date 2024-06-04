import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { updateStatus } from '../../store/stocksReducer'

import './StockSelect.css'

export function StockSelect() {
  const dispatch = useDispatch()

  const visibleStocks = useSelector(state => state.stocks.visibleStocks)

  const handleChange = (event) => {
    dispatch(updateStatus(event.target.value))
  }

  return (
    <div className="card grey darken-4">
      <div className="card-content">
      <div className="card-title center-align white-text">Stock List</div>
      <ul className="collection no-frame">
        {Object.entries(visibleStocks).map(([ticker, prop]) => (
          <li key={ticker} className="collection-item grey darken-4 no-frame">
            <div className="switch">
              <label>
                <input
                  type="checkbox"
                  value={ticker}
                  checked={prop.status}
                  onChange={handleChange}
                />
                <span className="lever"></span>
                <span className="white-text">{prop.title}</span>
              </label>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}
