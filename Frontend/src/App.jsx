import React from 'react'
import Home from './home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Resources from './resources/Resources'
import Signup from './components/Signup'
import {Toaster} from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'
import Events from './Events/Events'
import Map from '../Map/Map'
import ContactUs from '../ContactUs/ContactUs'

function App() {
  const [authUser,setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className=" dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/resources' element={authUser?<Resources />:<Navigate to='/signup' />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/events' element={<Events />}></Route>
        <Route path='/map' element={<Map />}></Route>
        <Route path='/contactus' element={<ContactUs />}></Route>
      </Routes>
      <Toaster />
      </div>
    </>
  )
}

export default App