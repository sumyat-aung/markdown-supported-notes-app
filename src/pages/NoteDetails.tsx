import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { context } from "../context/Context";
import { Value } from "../types/types";

const NoteDetails: React.FC = () => {
  const { id } = useParams();

  const { notes } = useContext(context) as Value;

  const detailNote = notes.filter((note) => note.id === id);
  return (
    <div className="flex w-full justify-center items-center">
      <div className="w-[900px]">
        <h1 className="text-3xl border-b-2 border-b-oradarkOra py-3 px-3">
          {detailNote[0]?.title}
        </h1>

        <ReactMarkdown className="p-3 border rounded-sm border-darkOra">
          {detailNote[0]?.body}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default NoteDetails;
