import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Images from "./Component/Images";
import Header from "./Component/Header";
import PostDetails from "./Component/PostDetails";
import Posts from "./Component/Posts";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/posts">
          <Route index element={<Posts />} />
          <Route path=":id" element={<PostDetails />} />
        </Route>
        <Route path="/images" element={<Images />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
