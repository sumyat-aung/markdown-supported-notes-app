import { createContext, useState, ReactNode } from "react";
import { toast } from "react-toastify";
import { useLocalStorage } from "../custom-hooks/useLocalStorage";

import { userDataObj, Value, NoteType } from "../types/types";

// Create the context
export const context = createContext<Value | null>(null);

// * FC
export const ContextProvider = (props: { children: ReactNode }) => {
  // ! accountData state to handle 2 input
  const [accountData, setAccountData] = useState<userDataObj>({
    userName: "",
    imgFile: null,
  });

  // ! when user click register button
  const OnSubmitHandle = () => {
    // ? checking state onSubmit
    if (accountData.imgFile && accountData.userName) {
      window.location.reload();
      localStorage.setItem("user-name", accountData.userName);
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const dataUrl = fileReader.result as string;
        localStorage.setItem("user-image", dataUrl);
      };
      fileReader.readAsDataURL(accountData.imgFile);
    }
    // ? if state is empty
    else {
      toast.error("Please, Fill Out The Form!", {
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

  // ! notes
  const [notes, setnotes] = useLocalStorage<NoteType[]>("NOTES", []);

  // * updating by (deleting first index of same id)
  function updateNotes(notes: NoteType[], id: string) {
    for (const note of notes) {
      if (note.id === id) {
        notes.splice(notes.indexOf(note), 1);
        break;
      }
    }
  }

  // * creating note handling
  const CreateNoteSubmitHandle = ({ id, title, body }: NoteType) => {
    updateNotes(notes, id);
    setnotes((prev) => [...prev, { id: id, title: title, body: body }]);
  };

  // * delete note
  const deleteNote = (id: string) => {
    setnotes((prev) => prev?.filter((note) => note.id !== id));
  };
  ////jsx
  return (
    <context.Provider
      value={{
        accountData,
        setAccountData,
        OnSubmitHandle,
        CreateNoteSubmitHandle,
        notes,
        deleteNote,
      }}
    >
      {props.children}
    </context.Provider>
  );
};
