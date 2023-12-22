import React from "react";
import Login from "./components/login/Login";
import Registration from "./components/Registration";

import Dashboard from "./components/Dashboard"; // Import your Dashboard component
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Registration" element={<Registration />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
