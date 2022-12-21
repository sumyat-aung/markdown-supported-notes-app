import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../context/Context";
import { Value } from "../types/types";

const NoteCard: React.FC = () => {
  const { notes } = useContext(context) as Value;

  return (
    <div className="flex flex-col mt-10 w-full">
      {notes?.map((note) => {
        return (
          <div
            className="my-4 shadow border border-slate-50 px-5 py-5"
            key={note.id}
          >
            <div className="w-[90%]">
              <h1 className="text-2xl font--Alge text-gray-700 tracking-wide truncate font-bold">
                {note.title}
              </h1>
              <p className="truncate font-DM_sans text-gray-500 font-medium">
                {note.body}
              </p>
            </div>
            <div className=" flex items-center mt-5 gap-3 justify-end">
              <Link
                to={"/edit-note"}
                className="border rounded-lg px-3 py-1 text-sm bg-ora2 text-white flex justify-center items-center hover:bg-ora"
              >
                Edit Note
                <i className="fa-solid fa-pen-to-square ml-2"></i>
              </Link>
              <button className="border rounded-lg px-3 py-1 text-sm bg-ora2 text-white flex justify-center items-center  hover:bg-ora">
                Delete Note
                <i className="fa-solid fa-trash ml-2"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NoteCard;
