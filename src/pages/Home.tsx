import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import NoteCard from "../components/NoteCard";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-center items-center w-[100%]">
        <div className="lg:w-[1000px] md:w-[700px] w-[95%] pt-10">
          <Link
            to={"/new-note"}
            className="py-4 px-8 rounded-lg bg-darkOra text-white font-DM_sans w-full text-xl active:scale-[0.99] inline-block text-center hover:bg-orange-700"
          >
            Add New Note
          </Link>
          <NoteCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
