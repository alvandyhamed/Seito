"use client";
import Image from "next/image";
import React from "react";
import { UserCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { BeakerIcon } from "@heroicons/react/20/solid";
import Avatar from "react-avatar";

function Header() {
  return (
    <header>
      <div
        className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl
      "
      >
        <div
          className=" absolute bg-gradient-to-br
         from-pink-400
          to-[#0055D1]
        top-0 left-0 w-full h-96
         rounded-md
          filter
         blur-3xl
         opacity-50
          -z-50
        "
        />

        <Image
          src={
            "https://static.vecteezy.com/system/resources/previews/015/547/748/original/griffin-illustration-free-vector.jpg"
          }
          alt={"terelo logo"}
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full ">
          <form
            className="flex items-center 
            space-x-5 bg-white rounded-md p-2 shadow-md
            flex-1 md:flex-initial"
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
            />
            <button>Search</button>
          </form>

          {/* <Avatar name="Hamed" /> */}
          <Avatar name="Hamed alvandy" round size="50" color="#0055d1" />
        </div>
      </div>
      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p
          className="flex items-center p-5 text-sm font-light pr-5
         shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]
        "
        >
          <UserCircleIcon className=" inline-block h-10 w-10 text-[#0055D1] mr-1" />
          GPT is Summery task for you
        </p>
      </div>
    </header>
  );
}

export default Header;
