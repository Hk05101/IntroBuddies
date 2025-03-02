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
      <img className='w-[800px] h-[500px] mt-32 ' src="https://media.licdn.com/dms/image/v2/D4D22AQGQdoJUnJqXXA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1696175930573?e=2147483647&v=beta&t=mnqii8drpaK7W6DtnjAMKlAZ2bzHfFHuXoPTaiDsGV4" alt="" />
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