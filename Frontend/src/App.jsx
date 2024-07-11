import React from 'react'
import Home from './home/Home'
import { Route, Routes } from 'react-router-dom'
import Resources from './resources/Resources'
import Signup from './components/Signup'

function App() {
  return (
    <>
      <div className=" dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/resources' element={<Resources />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
      </div>
    </>
  )
}

export default App