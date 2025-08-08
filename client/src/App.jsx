import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductByBrand from "./pages/ProductByBrand";
import ProductByCategory from "./pages/ProductByCategory";
import ProductByKeyword from "./pages/ProductByKeyword";
import ProductDetails from "./pages/ProductDetails";
import AboutPage from "./pages/AboutPage";
import RefundPage from "./pages/RefundPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import HowtoBuyPage from "./pages/HowtoBuyPage";
import ContactPage from "./pages/ContactPage";
import ComplainPage from "./pages/ComplainPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BrandProduct/:id" element={<ProductByBrand />} />
        <Route path="/CategoryProduct/:id" element={<ProductByCategory />} />
        <Route path="/ByKeyword/:keyword" element={<ProductByKeyword />} />
        <Route path="/Details/:id" element={<ProductDetails />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/refund" element={<RefundPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/how-to-buy" element={<HowtoBuyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/complain" element={<ComplainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
