import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from 'axios';

function Resource() {
    const [resource,setResource] = useState([])
    useEffect(()=>{
        const getResource = async () => {
            try {
                const res = await axios.get("http://localhost:4001/resource")
                console.log(res.data)
                setResource(res.data)
            } catch (error) {
                console.log(error)
            }
        };
        getResource();
    },[])
  return (
    <>
      <div className="max-w-screen-2xl container pt-20 mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="mt-28 items-center justify-center text-center ">
          <h1 className="text-2xl font-semibold md:text-4xl ">
            We're delighted to have you{" "}
            <span className="text-red-700 ">Here :)</span>
          </h1>
          <p className="mt-12 ">
          Unlock a treasure trove of study hacks and resources straight from the pros—your seniors! Dive into curated notes, exam tips that hit different, and tricks to breeze through assignments. We've been in your shoes and know what it takes to ace it. So, grab those notes, master those concepts, and level up your study game. With our guidance, you'll be crushing exams like a boss!
          </p>
          <Link to="/">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 duration-300 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
          {resource.map((item) => (
            <Cards item={item} key={item.id}></Cards>
          ))}
        </div>
      </div>
    </>
  );
}

export default Resource;
