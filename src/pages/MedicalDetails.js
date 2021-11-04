/** @format */

import React from "react";

function MedicalDetails() {
  return (
    <div className="p-2  flex mx-auto sm:w-64 md:w-8/12 justify-center">
      <div className=" mx-auto w-full md:w-screen  ">
        <div className="bg-white rounded   w-full h-full  p-4 ">

          <div className=" flex flex-row justify-between divide border-b p-2 mb-3">
            <div className="mt-3">
              <b>Medical History</b>
            </div>

            <div className=" pl-5 relative" >
              <svg
             style={{
              color: "black",
              height: "10px",
              width: "10px",
              marginRight:'10px',
              marginTop:'12px',
            }}
            className="w-2 h-2 absolute  bottom-3  right-2  text-black pointer-events-none "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 412 232"
          >
                <path
                  d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                  fill="black"
                  
                />
              </svg>
              <select style ={{color:'#adad85',outline:'none',border:'none',borderRadius:'2px'}} className="border border-gray-300 h-9 mr-2  rounded-sm px-4 bg-gray-100 px-9  text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                <option  defaultValue>Latest </option>
                <option>old</option>
              </select>
            </div>
                      </div>
          <div className=" p-3 border-b">
            <p className="text-gray-400">Do you smoke?</p>
            <div className="flex flex-row justify-between mb-1 mt-2">
              <p>Yes</p>
              <p className="text-gray-400">Answer</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>I smoke 20 times a day</p>
              <p className="text-gray-400">Note</p>
            </div>
          </div>

          <div className=" p-3 border-b">
            <p className="text-gray-400">Are you on any medication?</p>
            <div className="flex flex-row justify-between mb-1 mt-2">
              <p>No</p>
              <p className="text-gray-400">Answer</p>
            </div>
       
          </div>

          <div className=" p-3 border-b">
            <p className="text-gray-400">Are you pregnent?</p>
            <div className="flex flex-row justify-between mb-1 mt-2">
              <p>No</p>
              <p className="text-gray-400">Answer</p>
            </div>
            {/* <div className='flex flex-row justify-between'>
                <p>I smoke 20 times a day</p>
                <p className='text-gray-400'>Note</p>
              </div> */}
          </div>
          <div className=" p-3 border-b">
            <p className="text-gray-400">Are you pregnent?</p>
            <div className="flex flex-row justify-between mb-1 mt-2">
              <p>No</p>
              <p className="text-gray-400">Answer</p>
            </div>
            {/* <div className='flex flex-row justify-between'>
                <p>I smoke 20 times a day</p>
                <p className='text-gray-400'>Note</p>
              </div> */}
          </div>
          <div className=" p-3 border-b">
            <p className="text-gray-400">Are you pregnent?</p>
            <div className="flex flex-row justify-between mb-1 mt-2">
              <p>No</p>
              <p className="text-gray-400">Answer</p>
            </div>
            {/* <div className='flex flex-row justify-between'>
                <p>I smoke 20 times a day</p>
                <p className='text-gray-400'>Note</p>
              </div> */}
          </div>
          <div className=" p-3 border-b">
            <p className="text-gray-400">Are you pregnent?</p>
            <div className="flex flex-row justify-between mb-1 mt-2">
              <p>No</p>
              <p className="text-gray-400">Answer</p>
            </div>
            {/* <div className='flex flex-row justify-between'>
                <p>I smoke 20 times a day</p>
                <p className='text-gray-400'>Note</p>
              </div> */}
          </div>

          <div className=" p-3 border-b">
            <p className="text-gray-400">Are you vaccinated?</p>
            <div className="flex flex-row justify-between mb-1 mt-2">
              <p>Yes</p>
              <p className="text-gray-400">Answer</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>AstraZeneca two jabs</p>
              <p className="text-gray-400">Note</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicalDetails;
