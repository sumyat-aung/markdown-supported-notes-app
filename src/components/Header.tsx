import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-darkOra flex sm:justify-between justify-center items-center md:px-10 px-5 py-3 sm:flex-row flex-col-reverse">
      <div className="relative sm:w-auto w-full">
        <input
          type="text"
          placeholder="Search"
          className="bg-darkOra pl-10 pr-5 py-2 focus:outline-none border border-white rounded-xl font-DM_sans text-xl text-white w-[100%] sm:w-[350px] "
        />
        <i className="fa-solid fa-magnifying-glass absolute top-4 left-4 text-md text-gray-200"></i>
      </div>
      <div className="flex justify-center items-center sm:mb-0 mb-5">
        <h1 className="text-white font-DM font-semibold tracking-widest text-lg md:text-2xl">
          {localStorage.getItem("user-name")!}
        </h1>
        <img
          src={localStorage.getItem("user-image")!}
          alt="user-image"
          className="w-[60px] h-[60px] object-cover rounded-full ml-5"
        />
      </div>
    </header>
  );
};

export default Header;
