import { createContext, useState, ReactNode } from "react";
import { ToastContainer, toast } from "react-toastify";

import { userDataObj, Value } from "../types/types";

// Create the context
export const context = createContext<Value | null>(null);

// * FC
export const ContextProvider = (props: { children: ReactNode }) => {
  // accountData state to handle 2 input
  const [accountData, setAccountData] = useState<userDataObj>({
    userName: "",
    imgFile: null,
  });

  // when user click register button
  const OnSubmitHandle = () => {
    if (accountData.userName) {
      localStorage.setItem("accountData", JSON.stringify(accountData));
      window.location.reload();
    } else {
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
