import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeListing from "./EmployeeListing";

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeListing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
