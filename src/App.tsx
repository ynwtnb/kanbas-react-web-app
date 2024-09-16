import React from 'react';
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import {HashRouter, Route, Routes, Navigate, Link } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path = "/" element = {<Navigate to="Kanbas" />} />
          <Route path = "/Kanbas/*" element = {<Kanbas />} />
          <Route path = "/Labs/*" element = {<Labs />} />
        </Routes>
      </div>
    </HashRouter>
    
  );
}
