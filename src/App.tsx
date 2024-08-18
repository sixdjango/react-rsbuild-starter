import { Suspense } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import { StaticRouters } from './router'
import { clientConfig } from './config'
import { LocaleProvider, zh_CN } from '@yc-tech/react-component'

// const mql = window.matchMedia('(prefers-color-scheme: dark)')
// const body = document.body
// if (mql.matches) {
//   if (!body.hasAttribute('theme-mode')) {
//     body.setAttribute('theme-mode', 'dark')
//   }
// } else {
//   if (body.hasAttribute('theme-mode')) {
//     body.removeAttribute('theme-mode')
//   }
// }

const App = () => {
  return (
    <LocaleProvider locale={zh_CN}>
      <Suspense fallback={<p>Loading...</p>}>
        <BrowserRouter basename={clientConfig.baseRoute}>
          <Routes>{StaticRouters}</Routes>
        </BrowserRouter>
      </Suspense>
    </LocaleProvider>
  )
}

export default App
