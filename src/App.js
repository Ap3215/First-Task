import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Imgpage from "./Component/Imgpage";
import Navbar from "./Component/Navbar";
import Postdetails from "./Component/Postdetails";
import Posts from "./Component/Posts";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<Postdetails />} />
        <Route path="/images" element={<Imgpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
