import React from 'react'
import * as ReactDOMClient from 'react-dom/client'

import { Provider } from 'react-redux'
import store from './store/index'

import App from './App'

import './index.css'

const rootElement = document.getElementById('root')
const root = ReactDOMClient.createRoot(rootElement)

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
