import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import NoteForm from "../components/NoteForm";
import { context } from "../context/Context";
import { Value } from "../types/types";

const EditNote: React.FC = () => {
  const { id } = useParams();

  const { notes } = useContext(context) as Value;

  const editNote = notes.filter((note) => note.id === id);

  return (
    <div>
      <div className="flex justify-around shadow">
        <div className="text-darkOra text-2xl sm:text-4xl py-5 :px-4 flex flex-col justify-center font-DM">
          Mindmap
        </div>
        <p className="text-darkOra text-2xl sm:text-4xl py-5 px-4 flex items-center justify-center font-DM ">
          Editing Note
        </p>
      </div>
      <NoteForm
        title={editNote[0]?.title}
        body={editNote[0]?.body}
        id={editNote[0]?.id}
      />
    </div>
  );
};

export default EditNote;
