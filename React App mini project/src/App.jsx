import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import productsData from "../products.json";
// Import components
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import Sidebar from "./assets/components/Sidebar";
// Import pages
import DashboardPage from "./assets/pages/Dashboard";
import NotFoundPage from "./assets/pages/NotFound";
import ItemDetailsPage from "./assets/pages/ItemDetails";
import AboutPage from "./assets/pages/AboutPage";

function App() {
  const [products, setProducts] = useState(productsData);

  const updateProduct = (productId, updatedData) => {
    const updatedProducts = products.map((product) => {
      const isMatch = String(product.id) === String(productId);
      return isMatch ? { ...product, ...updatedData } : product;
    });
    setProducts(updatedProducts);
  };

  return (
    <Router>
      <Navbar />
      <div className="application-wrapper">
        <div className="app-plus-sidebar-flex">
          <div className="sidebar-width-placeholder">
            <Sidebar />
          </div>
          <div className="app-container">
            <div className="main-container">
              <div className="routes-container">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <DashboardPage
                        products={products}
                        setProducts={setProducts}
                      />
                    }
                  />
                  <Route
                    path="/item/:id"
                    element={
                      <ItemDetailsPage
                        products={products}
                        updateProduct={updateProduct}
                      />
                    }
                  />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
