import React from 'react';
import Navbar from '../src/components/Navbar.jsx';
import Footer from '../src/components/Footer.jsx';
import Event from '../src/components/Event.jsx';
import list from '../src/public/map.json'

function Map() {
  return (
    <>
    <Navbar />
    <div className='py-24 mb-24 flex items-center justify-center max-w-screen-2xl container mx-auto'>
      <img className='w-[800px] h-[500px] mt-32 ' src="https://www.froshtiet.com/static/core-photos/Map_draft.png" alt="" />
    </div>
    <h1 className=' flex items-center justify-center text-4xl pt-32'>LOCATIONS AT THAPAR</h1>
      {list.map((item) => (
        <Event item={item} key={item.id}></Event>
      ))}
    <Footer />
    </>
  )
}

export default Map