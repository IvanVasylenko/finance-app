import React from 'react'
import { useSelector } from 'react-redux'

import classnames from 'classnames'

export function Stocks() {
  const tickers = useSelector(state => state.tickers.tickers)
  const visibleStocks = useSelector(state => state.stocks.visibleStocks)

  const preparedStocks = tickers.filter(stock => (
    visibleStocks[stock.ticker].status
  ))

  return (
    <table>
      <thead>
        <tr>
          <th className="center-align">Title</th>
          <th className="center-align"><i className="material-icons">show_chart</i></th>
          <th className="center-align">Price</th>
          <th className="center-align">Change</th>
          <th className="center-align">Change %</th>
          <th className="center-align">Dividend</th>
          <th className="center-align">Yield</th>
        </tr>
      </thead>

      <tbody>
        {preparedStocks.map(stock => (
          <tr
            key={stock.ticker}
            className={classnames({
              'green-text text-accent-3': stock.profit,
              'red-text text-accent-1': !stock.profit,
              })}
          >
            <td className="center-align">
              {stock.ticker}
            </td>
            <td className="center-align">
              {stock.profit
                ? <i className="material-icons">call_made</i>
                : <i className="material-icons">call_received</i>
              }
            </td>
            <td className="center-align">
              {stock.price}
            </td>
            <td className="center-align">
              {stock.profit ? '+' : '-'}
              {stock.change}
            </td>
            <td className="center-align">
              {stock.change_percent}
            </td>
            <td className="center-align">
              {stock.dividend}
            </td>
            <td className="center-align">
              {stock.yield}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
