import React from 'react'
import Home from './home/Home'
import { Route, Routes } from 'react-router-dom'
import Resources from './resources/Resources'

function App() {
  return (
    <>
      <div className=" dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/resources' element={<Resources></Resources>}></Route>
      </Routes>
      </div>
    </>
  )
}

export default App