import { createContext, useState, ReactNode } from "react";

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
    }
  };

  ////jsx
  return (
    <context.Provider value={{ accountData, setAccountData, OnSubmitHandle }}>
      {props.children}
    </context.Provider>
  );
};
