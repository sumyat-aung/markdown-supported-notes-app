import React from "react";
import { Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Home from "./pages/Home";
import NewNote from "./pages/NewNote";

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
          <Route path="/edit-note" element={<h1>edit</h1>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
