import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Dashboard />}></Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;
