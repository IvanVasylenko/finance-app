import React from 'react';

import socket from '../../socket';

import { useSelector, useDispatch } from 'react-redux';

import { setPeriod } from '../../store/tickerReducer';


export function TimeoutSelect() {
  const dispatch = useDispatch();
  const currentInterval = useSelector(state => state.tickers.currentInterval)

  const handleChange = (event) => {
    socket.emit("time", +event.target.value);

    socket.disconnect();
    socket.connect()

    socket.on("currentInterval", (arg) => {
      dispatch(setPeriod(arg));
    })
  }

  return (
    <div className="input-field">
      <select
        value={currentInterval}
        onChange={handleChange}
      >
        <option value="" disabled selected>Select update time interval</option>
        <option value="1000">1 second</option>
        <option value="3000">3 seconds</option>
        <option value="5000">5 seconds</option>
        <option value="10000">10 seconds</option>
        <option value="30000">30 seconds</option>
        <option value="100000">1 minute</option>
      </select>
      <label>Update time interval</label>
    </div>
  );
}
