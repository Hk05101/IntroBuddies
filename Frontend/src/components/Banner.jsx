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
            <p className="text-xl font-semibold pr-2">
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
            <label className="input input-bordered flex items-center gap-2 max-w-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn btn-secondary mt-6">Secondary</button>
          <div></div>
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
