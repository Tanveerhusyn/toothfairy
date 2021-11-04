import React from "react";

function Card({title, stitle}) {
  return (
    <div className="bg-white ">
      <div className=" w-56 items-stretch lg:flex h-24">
        <div className="md:w-full bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              {title}
            </div>
            <p className="text-gray-700 text-base">{stitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
