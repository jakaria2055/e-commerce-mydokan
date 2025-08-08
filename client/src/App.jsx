import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductByBrand from "./pages/ProductByBrand";
import ProductByCategory from "./pages/ProductByCategory";
import ProductByKeyword from "./pages/ProductByKeyword";
import ProductDetails from "./pages/ProductDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/BrandProduct/:id" element={<ProductByBrand />}/>
        <Route path="/CategoryProduct/:id" element={<ProductByCategory />}/>
        <Route path="/ByKeyword/:keyword" element={<ProductByKeyword />}/>
        <Route path="/Details/:id" element={<ProductDetails />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
