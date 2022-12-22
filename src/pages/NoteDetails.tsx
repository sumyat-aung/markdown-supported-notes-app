import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { context } from "../context/Context";
import { Value } from "../types/types";

// * FC
const NoteDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { notes, deleteNote } = useContext(context) as Value;
  const detailNote = notes.filter((note) => note.id === id);

  //// jsx

  return (
    <div className="flex w-full justify-center items-center">
      <div className="lg:w-[900px] w-full rounded border my-10 px-5">
        <div className="w-full flex justify-between items-center my-8">
          <Link to={".."}>
            <i className="fa fa-arrow-left text-darkOra text-lg hover:-translate-x-1 ml-3 transition-all cursor-default sm:cursor-pointer"></i>
          </Link>
          <div className="flex gap-4">
            <button
              onClick={(e) => {
                navigate(`/edit-note/${id}`);
                e.preventDefault();
              }}
              className="border rounded px-3 py-1 text-sm bg-darkOra text-white flex justify-center items-center hover:bg-ora2 cursor-default sm:cursor-pointer"
            >
              Edit Note
              <i className="fa-solid fa-pen-to-square ml-2"></i>
            </button>
            <button
              className="border rounded px-3 py-1 text-sm bg-darkOra text-white flex justify-center items-center  hover:bg-ora2 cursor-default sm:cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                deleteNote(id!);
                navigate("..");
              }}
            >
              Delete Note
              <i className="fa-solid fa-trash ml-2"></i>
            </button>
          </div>
        </div>
        <h1 className="text-3xl border-b pb-5 py-3 px-3 font-DM_sans text-ora2 font-semibold tracking-wider">
          {detailNote[0]?.title}
        </h1>

        <ReactMarkdown className="p-3   font-DM_sans text-ora2 font-semibold tracking-wider text-sm ">
          {detailNote[0]?.body}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default NoteDetails;
