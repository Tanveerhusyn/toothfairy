/** @format */

import React from "react";
import Carousel from "./Carousel";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const handleShow = () => {
    setShowModal(true);
  };
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded   outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open large modal
      </button>
      {showModal ? (
        <>
          <div className="border-0 rounded-lg   relative flex flex-col w-screen bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between text-black p-5 rounded-t">
              <button
                className="p-1 ml-auto text-black border-1 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                x
              </button>
            </div>
            {/*body*/}
            <div className="relative w-full p-6 flex-auto">
              <Carousel />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
