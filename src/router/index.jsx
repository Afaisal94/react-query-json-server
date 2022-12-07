import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Home, Create, Edit, Paginate, Infinitescroll, List} from "../pages";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/paginate" element={<Paginate />} />
        <Route path="/infinitescroll" element={<Infinitescroll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
