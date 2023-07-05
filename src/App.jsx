import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import AddProduct from "./pages/AddProduct";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='admin' element={<Admin />} />
          <Route path='addProduct' element={<AddProduct />} />
        </Routes>
      </Router>
    </div>
  );
}
