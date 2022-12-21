import React from "react";
import { Link } from "react-router-dom";

const NoteCard: React.FC = () => {
  return (
    <div className="flex flex-col mt-10 w-full">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 16, 17].map((d) => {
        return (
          <div className="my-4 shadow border border-slate-50 px-5 py-5" key={d}>
            <div className="w-[90%]">
              <h1 className="text-2xl font--Alge text-gray-700 tracking-wide truncate font-bold">
                Diaries For 2022, Dec 24 - Before the day of chrismas
              </h1>
              <p className="truncate font-DM_sans text-gray-500 font-medium">
                Notes descripton Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nostrum eveniet incidunt quia fuga. Ipsa, odio
                ut? Ratione amet provident at. Corporis, rerum voluptate.
                Voluptatibus corporis asperiores pariatur iure. Ab, debitis.
              </p>
            </div>
            <div className=" flex items-center mt-5 gap-3 justify-end">
              <Link
                to={"/edit-note"}
                className="border rounded-lg px-3 py-1 text-sm bg-ora2 text-white flex justify-center items-center hover:bg-ora"
              >
                Edit Note
                <i className="fa-solid fa-pen-to-square ml-2"></i>
              </Link>
              <button className="border rounded-lg px-3 py-1 text-sm bg-ora2 text-white flex justify-center items-center  hover:bg-ora">
                Delete Note
                <i className="fa-solid fa-trash ml-2"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NoteCard;
