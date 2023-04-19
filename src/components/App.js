import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import './App.css';

import CardList from './CardList/CardList';
import AppMenu from "./AppMenu/AppMenu";
import Home from "./Home/Home";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<AppMenu />}>
         <Route index element={<Home/>} /> 
         <Route path="/tweets" element={<CardList/>} />
         
         <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>

  );
}

export default App;
