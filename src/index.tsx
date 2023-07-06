import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import store from './store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

if (process.env.NODE_ENV === 'production') {
  console.log = () => {}
}

const ConfigApp: React.FC = () => {
  return (
    <Provider store={store}>
      <App></App>
    </Provider>
  )
}

root.render(<ConfigApp />)
