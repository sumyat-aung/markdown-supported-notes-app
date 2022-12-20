import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";

// * FC
const App: React.FC = () => {
  ////jsx
  return (
    <>
      <div className="text-blue-800">
        <Routes>
          <Route
            path={"/"}
            element={
              !localStorage.getItem("accountData") ? <Register /> : <Home />
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
