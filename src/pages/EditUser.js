/** @format */

import { Avatar } from "@mui/material";
import React,{useState} from "react";

function EditUser() {
  const[loader , setLoader] = useState(false)

  const handleLoading = () => {
    setLoader(true)
      setTimeout(() => {
      setLoader(false);
    }, 3000);
  };
  return (
    <div className="p-2  flex mx-auto md:w-3/5 justify-center">
      <div className=" mx-auto w-full md:w-screen  ">
        <div className="bg-white rounded   w-full h-full  p-4 ">
 
          <div className="text-gray-600  ">
            <p className="font-medium text-lg">User Details</p>
          </div>


          <div className="text-gray-400 mt-4 mb-2 border-t">
            <p>Personal Details</p>
          </div>
          <div className="w-full bg-white flex justify-center p-3 border-b mb-4">
            <Avatar
              src="https://res.cloudinary.com/moodgiver/image/upload/v1608198254/thumbnail_fashion_1_d66f5610d2.jpg"
              alt="img"
              style ={{height:'140px',width:"140px"}}
            />
          </div>

          <div className="flex flex-col md:flex-row mb-3 lg:flex-row content-start flex-wrape  w-full   justify-between ">
            <div className="flex-1 mr-3">
              <label >First Name</label>
              <input
                type="text"
                id="address"
                className="h-10 border mt-1 rounded px-4 w-full  bg-gray-200"
                placeholder="Pranav"
              />
            </div>
            <div className="flex-1  mb-3">
              <label >Last Name</label>
              <input
                type="text"
                id="address"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-200"
                placeholder="Deugi"
              />
            </div>
          </div>

          {/* Date */}
          <div className="flex flex-col md:flex-row mb-3 lg:flex-row content-start flex-wrape  w-full   justify-between ">
            <div className=" flex-1 mr-3 ">
              <label >Date of Birth</label>
              <input
                type="date"
                id="address"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-200"
                placeholder=""
              />
            </div>
            <div className="flex-1 ml-3 mb-3 relative">
              <label >Gender</label>
              <svg
                className="w-3 h-2 absolute text-black top-0 right-0 m-4 mt-10 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 412 232"
              >
                <path
                  d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                  fill="#648299"
                  fillRule="nonzero"
                />
              </svg>
              <select className="border border-gray-300 h-10 border mt-1 rounded px-4 w-full bg-gray-200  text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                <option defaultValue>Male </option>
                <option>Female</option>
              </select>
            </div>
          </div>

          <div className="md:col-span-3">
            <label  className="mt-1">
              {" "}
              Full Address
            </label>
            <div className="relative text-gray-600 focus-within:text-gray-400 mb-3">
              <span className="absolute inset-y-0 left-0 flex items-center pl-1 ">
                <button
                  type="submit"
                  className="p-1 pr-3 text-gray-500 focus:outline-none "
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 mr-3 pr-1"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="q"
                className="h-10 border mt-1 mb-3 pl-8 rounded px-4 w-full bg-gray-200"
                placeholder="99 Stoneygate Road, Luton..."
                autoComplete="off"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row mb-3 lg:flex-row content-start flex-wrape  w-full   justify-between ">
            <div className=" flex-1 mr-3 ">
              <label >Lat</label>
              <input
                type="number"
                id="lat"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-200"
                placeholder="91.121"
              />
            </div>
            <div className="flex-1 ml-3 mb-3">
              <label >Long</label>
              <input
                type="number"
                id="long"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-200"
                placeholder="0.24234"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row mb-3 lg:flex-row content-start flex-wrape  w-full  justify-between ">
            <div className=" flex-1 mr-3 ">
              <label >Flat, Floor & Street Name</label>
              <input
                type="text"
                id="flat"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-200"
                placeholder="99 Leagreave Street"
              />
            </div>
            <div className="flex-1 ml-3 mb-3">
              <label >Post Code</label>
              <input
                type="text"
                id="long"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-200"
                placeholder="LU4 9RL"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row mb-3 lg:flex-row content-start flex-wrape  w-full   justify-between ">
            <div className=" flex-1 mr-3 ">
              <label >City</label>
              <input
                type="text"
                id="city"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-200"
                placeholder="Luton"
              />
            </div>
            <div className="flex-1 ml-3 mb-3 relative justify-center">
              <label >Country</label>

              <svg
                className="w-3 h-2 absolute top-0 right-0 m-4 mt-10 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 412 232"
              >
                <path
                  d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                  fill="#648299"
                  fillRule="nonzero"
                />
              </svg>
              <select className="border border-gray-300 h-10 border mt-1 rounded  w-full bg-gray-50  text-gray-600 h-10 pl-5 pr-10 bg-gray-200 hover:border-gray-400 focus:outline-none appearance-none">
                <option defaultValue> United Kingdom </option>
                <option>USA</option>
                <option>China</option>
              </select>
            </div>
          </div>

          <div className="md:col-span-5">
            <label className="mt-1">
              Email Address
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="h-10 border mt-1 mb-2 rounded px-4 w-full bg-gray-200 h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              placeholder="pranavdeugi@space.com"
            />
          </div>

          <div className="w-full ">
          <div onClick={handleLoading} className="bg-black mt-2 cursor-pointer text-center hover:bg-black-400 text-white font-bold py-2 px-4 rounded w-full">
              {
                loader ? <button className="btn bg-black btn-sm border-none  loading"></button> 
                : "Save"
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
