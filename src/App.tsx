import React from "react";
import { Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Home from "./pages/Home";
import NewNote from "./pages/NewNote";
import EditNote from "./pages/EditNote";
import NoteDetails from "./pages/NoteDetails";

// * FC
const App: React.FC = () => {
  ////jsx
  return (
    <>
      <div>
        <Routes>
          <Route
            path={"/"}
            element={
              !localStorage.getItem("user-name") &&
              !localStorage.getItem("user-image") ? (
                <Register />
              ) : (
                <Home />
              )
            }
          />
          <Route path="/new-note" element={<NewNote />} />
          <Route path="/note/:id" element={<NoteDetails />} />
          <Route path="/edit-note/:id" element={<EditNote />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
