import React, { useContext } from "react";

import { context } from "../context/Context";
import { Value } from "../types/types";

// * FC
const Register: React.FC = () => {
  const { accountData, setAccountData, OnSubmitHandle } = useContext(
    context
  ) as Value;

  ////jsx
  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-green flex justify-center items-center">
        <div className="bg-white rounded flex shadow items-center flex-col w-[350px] sm:w-[500px] ">
          <div className="text-green text-2xl sm:text-4xl py-5 w-full px-4 flex flex-col justify-center font-DM">
            Welcome To Mindmap !
            <h4 className="text-green  text-sm font-DM_sans">
              Your go-to app for boosting productivity through organized
              note-taking.
            </h4>
          </div>

          <div className="w-full h-[410px] py-10 px-5">
            <div className="w-full flex flex-col justify-center items-center">
              {accountData.imgFile ? (
                <img
                  src={URL.createObjectURL(accountData.imgFile)}
                  alt="User photo"
                  className="w-[130px] h-[130px] rounded-full object-cover border text-green"
                />
              ) : (
                <img
                  src="https://i.pinimg.com/474x/f1/da/a7/f1daa70c9e3343cebd66ac2342d5be3f.jpg"
                  alt="User photo"
                  className="w-[130px] h-[130px] rounded-full object-cover border text-green"
                />
              )}
              <label
                htmlFor="files"
                className=" font-bold mt-4 py-1 cursor-default sm:cursor-pointer text-green border-green border px-5 text-center hover:bg-[#798c7131] rounded-md font-DM_sans"
              >
                Upload Picture
              </label>
              <input
                type="file"
                name="imgFile"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAccountData((prev) => {
                    return {
                      ...prev,
                      [e.target.name]: e.target.files?.[0],
                    };
                  })
                }
                className="hidden"
                id="files"
              />
            </div>
            <input
              type="text"
              className="focus:outline-none w-full  px-5 py-2 font-sans text-lg  border-green border-b mt-8 focus:border-b-2 font-DM_sans font-semibold text-green  tracking-wide"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAccountData((prev) => {
                  return {
                    ...prev,
                    [e.target.name]: e.target.value,
                  };
                })
              }
              name="userName"
              placeholder="Name"
            />
            <div className="w-full flex justify-center mt-5">
              <button
                type="button"
                className="font-bold  mt-4 py-1 bg-green cursor-default sm:cursor-pointer text-white tracking-widest border px-5 text-center hover:bg-[#728669d5] rounded-md font-DM_sans"
                onClick={OnSubmitHandle}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
