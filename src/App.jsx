import { useState } from 'react'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <div className=''>
        <Outlet></Outlet>
      </div>
      {/* <Footer></Footer> */}
    </div>
  )
}

export default App
