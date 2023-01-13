import React, { FormEvent, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

import { context } from "../context/Context";
import { NoteType, Value } from "../types/types";
import { toast, ToastContainer } from "react-toastify";
import Admin from "../Admin/Admin";

// * FC
const NoteForm: React.FC<NoteType> = ({ title, body, id }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useNavigate();
  const { CreateNoteSubmitHandle } = useContext(context) as Value;

  const submitNoteForm = (e: FormEvent) => {
    e.preventDefault();

    if (titleRef.current!.value && bodyRef.current!.value) {
      CreateNoteSubmitHandle({
        id: id || nanoid(),
        title: titleRef.current!.value,
        body: bodyRef.current!.value,
      });
      navigate("/");
    } else {
      toast.error("Inputs Are Empty", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
      });
    }
  };

  //// jsx
  return (
    <>
      <div className="w-full flex justify-center items-center relative pb-10">
        <div className=" lg:w-[900px] w-full lg:px-0 px-5 py-5">
          <form className="flex flex-col">
            <label
              htmlFor="title"
              className="text-xl py-2 font-DM_sans font-semibold tracking-wide "
            >
              Title
            </label>
            <input
              type="text"
              ref={titleRef}
              placeholder="title"
              id="title"
              className="focus:outline-none border border-gray-600 rounded-md px-2 py-2 font-roboto font-bold bg-[#E7F6F2]"
              defaultValue={title}
            />

            <div className="text-xl py-2 font-DM_sans font-semibold tracking-wide mt-5 flex">
              Notes Markdown Text
            </div>
            <textarea
              id="body"
              ref={bodyRef}
              defaultValue={body}
              className="h-[500px] focus:outline-none border border-gray-600 rounded-md px-2 py-2 font-roboto font-bold bg-[#E7F6F2]"
              placeholder="Start Typing..."
            ></textarea>

            <div className="flex w-full gap-5 justify-end mt-5 ">
              <button
                className="py-2 px-8 rounded-md border-none focus:outline-none active:scale-95  bg-darkOra text-white font-semibold tracking-wider  cursor-default sm:cursor-pointer"
                onClick={submitNoteForm}
              >
                Save
              </button>
              <button
                type="button"
                className="py-2 px-5 rounded-md border-none focus:outline-none active:scale-95 bg-ora2 text-white font-semibold tracking-wider cursor-default sm:cursor-pointer"
                onClick={() => navigate("..")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
        <Admin />
      </div>

      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default NoteForm;
