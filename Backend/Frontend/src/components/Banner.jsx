import React from "react";
import ThaparPic from "../public/ThaparPic.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mb-10 md:my-10">
        <div className="w-full md:w-1/2 mt-12 order-2 md:order-1 md:mt-32 ">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Welcome to{" "}
              <span className="text-red-700">
                Thapar Institute of Engineering and Technology !!
              </span>
            </h1>
            <p className="text-xl  pr-2">
              A place where dreams take flight and innovation thrives! Your
              journey here will be filled with opportunities, challenges, and
              unforgettable moments. <br />
              As your seniors, we're here to guide you,
              support you and cheer you on. We remember our first days here, the
              mix of excitement and nerves, the quest to find our place. So,
              we're extending our hands to help you navigate this exciting new
              world. Whether you need advice on academics, want to join a
              society, or simply need someone to talk to, we've got your
              back. Embrace every experience, highs and lows, and most
              importantly, have fun!
            </p>
            
          </div>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2 md:pl-2">
          <img
            src={ThaparPic}
            className="w-92 h-92 mt-32"
            alt="Thapar's Picture"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
