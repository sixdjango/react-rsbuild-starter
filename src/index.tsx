import '~/styles/index.less'
import ReactDOM from 'react-dom/client'
import '@yc-tech/react-component/dist/style.css'
// import '@yc-tech/react-component'
import App from './App'
import React from 'react'

const rootEl = document.getElementById('root')
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
