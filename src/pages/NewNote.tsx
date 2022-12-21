import React from "react";

import NoteForm from "../components/NoteForm";

const NewNote: React.FC = () => {
  return (
    <div>
      <div className="flex justify-around border-b-2 border-slate-50">
        <div className="text-darkOra text-2xl sm:text-4xl py-5 :px-4 flex flex-col justify-center font-DM">
          Mindmap
          <h4 className="text-darkOra  text-sm font-DM_sans sm:inline-block hidden">
            MarkDown supported Notes Taking Web App
          </h4>
        </div>
        <p className="text-darkOra text-2xl sm:text-4xl py-5 px-4 flex items-center justify-center font-DM ">
          New Note
        </p>
      </div>
      <NoteForm />
    </div>
  );
};

export default NewNote;
