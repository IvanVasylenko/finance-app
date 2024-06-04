import React, { useEffect } from 'react'

import { Stocks } from '../stocks/Stocks'
import { TimeoutSelect } from '../timeoutSelect'

import { ConnectionTrigger } from '../connectionTrigger'

import M from 'materialize-css'

export function StockTable() {
  useEffect(() => {M.AutoInit()}, [])

  return (
    <div className="card grey darken-4">
      <div className="card-content white-text">
        <span className="card-title center-align">Stock Table</span>
          <Stocks />
      </div>
      <div className="card-action">
        <div className="row">
          <div className="col s3">
            <TimeoutSelect />
          </div>
          <div className="col s9">
            <ConnectionTrigger />
          </div>
        </div>
      </div>
    </div>
  )
}
