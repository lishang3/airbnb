import React from 'react'
import { Outlet } from 'react-router-dom'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import useScrollTop from './hooks/useScrollTop'
// import routes from './router'

const App = () => {
  useScrollTop()
  return (
    <div className='app'>
      <AppHeader/>
      <div className='page'>
        <Outlet/>
      </div>
      <AppFooter/>
      <div></div>
    </div>
  )
}

export default App


