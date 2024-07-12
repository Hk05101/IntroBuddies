import React from "react";

function Event({ item }) {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col items-center justify-center mb-10 md:my-10">
        <h2 className="text-2xl pt-24">{item.subtitle}</h2>
        <img src={item.img} alt="" className="w-[800px] h-[500px] mt-32" />
        <p className="pt-16">{item.content}</p>
      </div>
    </>
  );
}

export default Event;
