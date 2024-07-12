import React from "react";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="pt-32 min-h-screen max-w-2xl flex items-center justify-center container mx-auto">
        <div className="h-32 w-32  shadow-lg p-8">
        <h3 className="font-bold text-lg">Name</h3>
          <label class="input input-bordered flex items-center gap-2">
            <input type="text" class="grow" placeholder="Name" />
          </label>
          <br />
        <h3 className="font-bold text-lg">Email</h3>
          <label class="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="email" class="grow" placeholder="Email" />
          </label>
          <br />
        <h3 className="font-bold text-lg">Concern</h3>
          <label class="input input-bordered flex items-center gap-2">
           <input type="text" class="grow" placeholder="Concern" />
          </label>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
