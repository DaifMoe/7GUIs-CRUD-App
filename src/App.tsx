import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeListing from "./EmployeeListing";
import CreateEmployee from "./CreateEmployee";
import EmployeeDetails from "./EmployeeDetails";
import EditEmployee from "./EditEmployee";

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeListing />} />
          <Route path="/employee/create" element={<CreateEmployee />} />
          <Route path="/employee/details/:employeeId" element={<EmployeeDetails />} />
          <Route path="/employee/edit/:employeeId" element={<EditEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
