import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <Header
        cart={cart}
        search={search}
        setSearch={setSearch}
      />

<Routes>

  <Route path="/" element={<Home />} />

  <Route
    path="/products"
    element={
      <Products
        cart={cart}
        setCart={setCart}
        search={search}
      />
    }
  />

  <Route
    path="/products/:id"
    element={<ProductDetail />}
  />

  <Route
    path="/cart"
    element={<Cart cart={cart} />}
  />

  <Route
    path="/login"
    element={<Login />}
  />

  <Route
    path="/dashboard"
    element={
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    }
  />

</Routes>
    </BrowserRouter>
  );
}

export default App;