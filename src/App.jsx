import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import ViewProduct from "./pages/ViewProduct";
import ViewAllStarWarsProducts from "./pages/ViewAllStarWarsProducts";
import ViewAllConsoleProducts from "./pages/ViewAllConsoleProducts";
import ViewAllVaiousProducts from "./pages/ViewAllVaiousProducts";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/editProduct" element={<EditProduct />} />
          <Route path="/viewProduct/:id" element={<ViewProduct />} />
          <Route path="/viewAllStarWarsProducts" element={<ViewAllStarWarsProducts />} />
          <Route path="/viewAllConsoleProducts" element={<ViewAllConsoleProducts />} />
          <Route path="/viewAllVaiousProducts" element={<ViewAllVaiousProducts />} />
        </Routes>
      </Router>
    </div>
  );
}
