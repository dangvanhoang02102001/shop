import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Products from "./components/Products";
// import { useDispatch } from 'react-redux';

function App() {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart/" element={<Cart />} />
        <Route path="/about/" element={<About />} />
        <Route path="/contact/" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
