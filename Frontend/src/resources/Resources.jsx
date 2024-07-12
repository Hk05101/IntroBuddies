import React from 'react'
import Navbar from '../components/Navbar'
import Resource from '../components/Resource'
import Footer from '../components/Footer'

function Resources() {
  return (
    <>
    <Navbar></Navbar>
    <div className='min-h-screen '>
        <Resource></Resource>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Resources