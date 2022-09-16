import React from "react";
import { Route, Routes } from "react-router-dom";
import Bus from "./pages/Bus/Bus";
import Donation from "./pages/Donation/Donation";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/donation" element={<Donation />} />
      <Route path="/buses" element={<Bus />} />
    </Routes>
  );
}

export default App;
