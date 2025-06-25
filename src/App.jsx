import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import { fetchProducts } from "./features/products/productSlice";
import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
