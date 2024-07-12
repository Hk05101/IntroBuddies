import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Event from "../components/Event";
import list from '../public/froshlist.json'

function Events() {
  return (
    <>
      <Navbar />
      <h1 className=' flex items-center justify-center text-4xl pt-32'>EVENTS IN THAPAR</h1>
      {list.map((item) => (
        <Event item={item} key={item.id}></Event>
      ))}
      
      <Footer />
    </>
  );
}

export default Events;
