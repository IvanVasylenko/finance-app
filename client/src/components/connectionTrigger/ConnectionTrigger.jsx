import React, { useEffect, useState } from 'react'

import socket from '../../socket'

export function ConnectionTrigger() {
  const [online, setOnline] = useState(true)

  useEffect(() => {
    if (online) {
      socket.connect()
    } else {
      socket.disconnect()
    }
  }, [online])

  return (
    <div className="switch right-align white-text">
      <h6>
        Real-time Data Update
      </h6>
      <label>
        OFF
        <input
          type="checkbox"
          checked={online}
          onChange={() => (setOnline(!online))}
        />
        <span className="lever"></span>
        ON
      </label>
    </div>
  )
}
