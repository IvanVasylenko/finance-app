import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import socket from './socket.js'

import { setTickers, setPeriod } from './store/tickerReducer'

import { StockSelect } from './components/stockSelect'
import { StockTable } from './components/stockTable'

function App() {
  const dispatch = useDispatch()

  const tik = useCallback(() => {
    socket.on("ticker", (arg) => {
      dispatch(setTickers(arg))
    })
    socket.on("currentInterval", (arg) => {
      dispatch(setPeriod(arg))
    })
  }, [])

  useEffect(() => {
    tik()
  }, [])

  return (
    <div className="container">
      <h1 className="center-align white-text">Finance App</h1>
      <div className="row">
        <div className="col s3">
            <StockSelect />
        </div>
        <div className="col s9">
            <StockTable />
        </div>
      </div>
    </div>
  )
}

export default App
