import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ManageTypes from "./components/ManageTypes";
import ObjectType from "./components/ObjectType";
import AllObjects from "./components/AllObjects";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="all" element={<AllObjects />} />
        <Route path="bullDozers" element={<ObjectType type={"bullDozers"} />} />
        <Route path="chainsaws" element={<ObjectType type={"chainsaws"} />} />
        <Route path="manageTypes" element={<ManageTypes />} />
      </Routes>
    </BrowserRouter>
  );
}
