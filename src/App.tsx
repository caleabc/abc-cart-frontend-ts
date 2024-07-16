// Lib
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/customer/Home";
import Products from "./pages/customer/Products";
import Product from "./pages/customer/Product";
import Checkout from "./pages/customer/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
