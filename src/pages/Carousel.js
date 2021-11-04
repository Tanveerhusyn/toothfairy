/** @format */

import React from "react";

function Carousel() {

    
  return (
    <div class="carousel relative rounded relative overflow-hidden bg-black ">
      <div class="carousel-inner relative overflow-hidden w-full">
        <input
          class="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden="true"
          checked="checked"
        />
        <div
          class="carousel-item absolute opacity-0 bg-center"
          style={{
            height: "500px",
            backgroundImage:
              "url(https://mdbootstrap.com/img/new/slides/052.jpg)",
          }}
        ></div>
        <label
          for="carousel-3"
          class="
        control-1
        w-10
        h-10
        ml-2
        md:ml-10
        absolute
        cursor-pointer
        hidden
        font-bold
        text-black
        hover:text-white
        rounded-full
        bg-white
        hover:bg-blue-700
        leading-tight
        text-center
        z-10
        inset-y-0
        left-0
        my-auto
        flex
        justify-center
        content-center
      "
        >
          <i class="fas fa-angle-left mt-3"></i>
        </label>
        <label
          for="carousel-2"
          class="
          
        next
        control-1
        w-10
        h-10
        mr-2
        md:mr-10
        absolute
        cursor-pointer
        hidden
        font-bold
        text-black
        hover:text-white
        rounded-full
        bg-white
        hover:bg-blue-700
        leading-tight
        text-center
        z-10
        inset-y-0
        right-0
        my-auto
      "
        >
          <i class="fas fa-angle-right mt-3"></i>
        </label>

        <input
          class="carousel-open"
          type="radio"
          id="carousel-2"
          name="carousel"
          aria-hidden="true"
          hidden="true"
        />
        <div
          class="carousel-item absolute opacity-0 bg-center"
          style={{
            height: "500px",
            backgroundImage:
              "url(https://mdbootstrap.com/img/new/slides/043.jpg)",
          }}
        ></div>
        <label
          for="carousel-1"
          class="
        control-2
        w-10
        h-10
        ml-2
        md:ml-10
        absolute
        cursor-pointer
        hidden
        font-bold
        text-black
        hover:text-white
        rounded-full
        bg-white
        hover:bg-blue-700
        leading-tight
        text-center
        z-10
        inset-y-0
        left-0
        my-auto
      "
        >
          <i class="fas fa-angle-left mt-3"></i>
        </label>
        <label
          for="carousel-3"
          class="
        next
        control-2
        w-10
        h-10
        mr-2
        md:mr-10
        absolute
        cursor-pointer
        hidden
        font-bold
        text-black
        hover:text-white
        rounded-full
        bg-white
        hover:bg-blue-700
        leading-tight
        text-center
        z-10
        inset-y-0
        right-0
        my-auto
      "
        >
          <i class="fas fa-angle-right mt-3"></i>
        </label>

        <input
          class="carousel-open"
          type="radio"
          id="carousel-3"
          name="carousel"
          aria-hidden="true"
          hidden="true"
        />
        <div
          className="carousel-item absolute opacity-0"
          style={{
            height: "500px",
            backgroundImage:
              "url(https://mdbootstrap.com/img/new/slides/054.jpg)",
          }}
        ></div>
        <label
          for="carousel-2"
          class="
        control-3
        w-10
        h-10
        ml-2
        md:ml-10
        absolute
        cursor-pointer
        hidden
        font-bold
        text-black
        hover:text-white
        rounded-full
        bg-white
        hover:bg-blue-700
        leading-tight
        text-center
        z-10
        inset-y-0
        left-0
        my-auto
      "
        >
          <i class="fas fa-angle-left mt-3"></i>
        </label>
        <label
          for="carousel-1"
          class="
        next
        control-3
        w-10
        h-10
        mr-2
        md:mr-10
        absolute
        cursor-pointer
        hidden
        font-bold
        text-black
        hover:text-white
        rounded-full
        bg-white
        hover:bg-blue-700
        leading-tight
        text-center
        z-10
        inset-y-0
        right-0
        my-auto
      "
        >
          <i class="fas fa-angle-right mt-3"></i>
        </label>

        <ol class="carousel-indicators">
          <li class="inline-block mr-3">
            <label
              for="carousel-1"
              class="
            carousel-bullet
            cursor-pointer
            block
            text-4xl text-white
            hover:text-blue-700
          "
            >
              •
            </label>
          </li>
          <li class="inline-block mr-3">
            <label
              for="carousel-2"
              class="
            carousel-bullet
            cursor-pointer
            block
            text-4xl text-white
            hover:text-blue-700
          "
            >
              •
            </label>
          </li>
          <li class="inline-block mr-3">
            <label
              for="carousel-3"
              class="
            carousel-bullet
            cursor-pointer
            block
            text-4xl text-white
            hover:text-blue-700
          "
            >
              •
            </label>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Carousel;
