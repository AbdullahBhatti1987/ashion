import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Shoe from "./pages/Shoe";
import Blog from "./pages/Blog";
import Kid from "./pages/Kid";
import Beg from "./pages/Beg";
import Register from "./pages/Register";
import Signin from "./pages/Signin";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Contact from "./pages/Contact";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route>
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
         
        </Route>
        <Route>
          <Route element={<Dashboard />}>
            <Route path={"/"} index element={<Home />} />
            <Route path={"category/men"} element={<Men />} />
            <Route path={"category/women"} element={<Women />} />
            <Route path={"category/kid"} element={<Kid />} />
            <Route path={"category/shoe"} element={<Shoe />} />
            <Route path={"category/beg"} element={<Beg />} />
            <Route path={"blog"} element={<Blog />} />
            <Route path={"contact"} element={<Contact />} />
            <Route path={"/wishlist"} element={<Wishlist />} />
            <Route path={"/cart"} element={<Cart />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
