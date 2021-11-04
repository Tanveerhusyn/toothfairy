/** @format */

import React from "react";

function CaptureDetails() {


  return (
     
    <div className="p-2  flex mx-auto sm:w-64 md:w-8/12  justify-center">
    <div className=" mx-auto w-full md:w-screen  ">
      <div className="bg-white rounded   w-full h-full  p-2 ">

          <div className=" flex flex-row justify-between border-b p-2">
            <div>
              <p>Capture Details</p>
            </div>
            <div className="text-gray-500 text-sm mt-1">12/11/2024 12:16</div>
          </div>


          <div className="pb-5  mb-1 border-b">
            <div >
              <p className="text-gray-500 p-2">Captures</p>
            </div>
            <div className="flex flex-col  lg:flex-row mx-3">
              <div style={{margin:'3px',marginBottom:'30px',height:'240px'}}>
                <img
                  alt="gallery"

                  className="h-full"
                  // class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                />
                <p className="m-2 text-gray-500">Upeer</p>
              </div>
              <div style={{margin:'3px',height:'240px',marginBottom:'30px'}}>
                <img
                  alt="gallery"
                  className="h-full"
                  // class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                />
                <p className="m-2 text-gray-500">Middle</p>
              </div>
              <div style={{margin:'3px',height:'240px',marginBottom:'30px'}}>
                <img
                  alt="gallery"
                  className="h-full"
                  // class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                />
                <p className="m-2 text-gray-500">Lower</p>
              </div>

            </div>

          </div>

          <p className="text-gray-500 p-3">Treatment Tracking</p>

          <div className=" p-3 border-b">
            <p className="text-gray-400">
              What number aligner are you wearing?
            </p>
            <div className="flex flex-row justify-between mb-1 mt-2">
              <p>-</p>
              <p className="text-gray-400">Answer</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>12CE89</p>
              <p className="text-gray-400">Note</p>
            </div>
          </div>

          <div className=" p-3 border-b">
            <p className="text-gray-400">What day are you on?</p>
            <div className="flex flex-row justify-between mb-1 mt-2">
              <p>Day 8</p>
              <p className="text-gray-400">Answer</p>
            </div>
          </div>

          <div className=" p-3 border-b">
            <p className="text-gray-400">
              On a scale of 1-10 how loose does the upper aligner fit?
            </p>
            <div className="flex flex-row justify-between mb-1 mt-2">
              <p>6</p>
              <p className="text-gray-400">Answer</p>
            </div>
          </div>
          <div className=" p-3 border-b">
            <p className="text-gray-400">
              On a scale of 1-10 how loose does the lower aligner fit?
            </p>
            <div className="flex flex-row justify-between mb-1 mt-2">
              <p>6</p>
              <p className="text-gray-400">Answer</p>
            </div>
          </div>
          <p className="text-gray-500 p-3 ">User Details</p>

          <div className=" p-3 border-b">
            <div className="flex flex-row justify-between mb-1 mt-2">
              <p>Pranav Deugi</p>
              <p className="text-gray-500">Full name</p>
            </div>
          </div>
          <div className=" p-3 border-b">
            <div className="flex flex-row justify-between mb-1 mt-2">
              <p>03 JUN 1986</p>
              <p className="text-gray-500">Date of birth</p>
            </div>
          </div>

          <div className=" p-3 border-b">
            <div className="flex flex-row justify-between mb-1 mt-2">
              <p>Male</p>
              <p className="text-gray-500">Gender</p>
            </div>
          </div>

          <div className=" p-3 border-b">
            <div className="flex flex-row justify-between mb-1 mt-2">
              <div>
                <p>99 Stoneygate Road, Luton</p>
                <p>LU4 9TL</p>
                <p>United Kingdom</p>
              </div>
              <p className="text-gray-500 ">Address</p>
            </div>
          </div>

          <div className=" p-3 border-b">
            <div className="flex flex-row justify-between mb-1 mt-2">
              <p>pranav@toothfairyapp.co.uk</p>
              <p className="text-gray-500">Email address</p>
            </div>
          </div>

          <div className=" p-3 border-b">
            <div className="flex flex-row justify-between mb-1 mt-2">
              <p>+44 75937 57439</p>
              <p className="text-gray-500">Contact number</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaptureDetails;
