import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllProducts from "./Components/AllProducts";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import ProductDetails from "./Components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<AllProducts />} />
        <Route path="products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
