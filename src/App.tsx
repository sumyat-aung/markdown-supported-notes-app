import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";

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
          <Route path="/new-note" element={<h1>new</h1>} />
          <Route path="/edit-note" element={<h1>edit</h1>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
