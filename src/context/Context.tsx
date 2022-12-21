import { createContext, useState, ReactNode } from "react";
import { ToastContainer, toast } from "react-toastify";

import { userDataObj, Value } from "../types/types";

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

  // ! the rest

  ////jsx
  return (
    <context.Provider
      value={{
        accountData,
        setAccountData,
        OnSubmitHandle,
      }}
    >
      {props.children}
    </context.Provider>
  );
};
