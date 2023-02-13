import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails";
import Images from "./components/Images";

const App = () => (
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

export default App;
