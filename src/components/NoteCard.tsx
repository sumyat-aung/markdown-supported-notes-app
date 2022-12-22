import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { context } from "../context/Context";
import { Value } from "../types/types";

// * FC
const NoteCard: React.FC = () => {
  const { notes, deleteNote, searchTerm, filteredNotes } = useContext(
    context
  ) as Value;
  const navigate = useNavigate();

  //// jsx
  return (
    <div className="flex flex-col mt-10 w-full">
      {notes?.length <= 0 && (
        <div>
          <div className="text-darkOra text-2xl sm:text-4xl py-5 w-full px-4 flex flex-col justify-center font-DM">
            Mindmap Notes !
            <h4 className="text-darkOra  text-sm font-DM_sans">
              Your go-to app for boosting productivity through organized
              note-taking.
            </h4>
          </div>
        </div>
      )}
      {!searchTerm &&
        notes?.map((note) => {
          return (
            <Link
              to={`note/${note.id}`}
              className="my-4 shadow border border-slate-50 px-5 py-5 rounded-md cursor-default sm:cursor-pointer "
              key={note.id}
            >
              <div className="w-[90%]">
                <h1 className="text-2xl font--Alge text-gray-700 tracking-wide truncate font-bold">
                  {note.title}
                </h1>
                <ReactMarkdown className="truncate font-DM_sans text-gray-500 font-medium h-[30px] mt-3">
                  {note.body}
                </ReactMarkdown>
              </div>
              <div className=" flex items-center mt-5 gap-3 justify-end cursor-default sm:cursor-pointer">
                <button
                  onClick={(e) => {
                    navigate(`/edit-note/${note.id}`);
                    e.preventDefault();
                  }}
                  className="border rounded px-3 py-1 text-sm bg-darkOra text-white flex justify-center items-center hover:bg-ora2 cursor-default sm:cursor-pointer"
                >
                  Edit Note
                  <i className="fa-solid fa-pen-to-square ml-2"></i>
                </button>
                <button
                  className="border rounded px-3 py-1 text-sm bg-darkOra text-white flex justify-center items-center  hover:bg-ora2 cursor-default sm:cursor-pointer "
                  onClick={(e) => {
                    e.preventDefault();
                    deleteNote(note.id);
                  }}
                >
                  Delete Note
                  <i className="fa-solid fa-trash ml-2"></i>
                </button>
              </div>
            </Link>
          );
        })}

      {searchTerm &&
        filteredNotes &&
        filteredNotes?.map((note) => {
          return (
            <Link
              to={`note/${note.id}`}
              className="my-4 shadow border border-slate-50 px-5 py-5 rounded-md cursor-default sm:cursor-pointer "
              key={note.id}
            >
              <div className="w-[90%]">
                <h1 className="text-2xl font--Alge text-gray-700 tracking-wide truncate font-bold">
                  {note.title}
                </h1>
                <ReactMarkdown className="truncate font-DM_sans text-gray-500 font-medium h-[30px] mt-3">
                  {note.body}
                </ReactMarkdown>
              </div>
              <div className=" flex items-center mt-5 gap-3 justify-end cursor-default sm:cursor-pointer">
                <button
                  onClick={(e) => {
                    navigate(`/edit-note/${note.id}`);
                    e.preventDefault();
                  }}
                  className="border rounded px-3 py-1 text-sm bg-darkOra text-white flex justify-center items-center hover:bg-ora2 cursor-default sm:cursor-pointer"
                >
                  Edit Note
                  <i className="fa-solid fa-pen-to-square ml-2"></i>
                </button>
                <button
                  className="border rounded px-3 py-1 text-sm bg-darkOra text-white flex justify-center items-center  hover:bg-ora2 cursor-default sm:cursor-pointer "
                  onClick={(e) => {
                    e.preventDefault();
                    deleteNote(note.id);
                  }}
                >
                  Delete Note
                  <i className="fa-solid fa-trash ml-2"></i>
                </button>
              </div>
            </Link>
          );
        })}

      {filteredNotes?.length <= 0 && searchTerm !== "" && notes?.length > 0 && (
        <div>
          <h4 className="text-darkOra  text-2xl font-DM_sans">
            No results found.
          </h4>
        </div>
      )}
    </div>
  );
};

export default NoteCard;
