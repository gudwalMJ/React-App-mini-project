import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import Sidebar from "./assets/components/Sidebar";
import DashboardPage from "./assets/pages/Dashboard";

import ItemDetailsPage from "./assets/pages/ItemDetails";

function App() {
  return (
    <Router>
      <>
        <div>
          <div>
            <Navbar />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/item/:id" element={<ItemDetailsPage />} />
              {/* Add more routes as needed */}
            </Routes>
          </div>
          <div>
            <Sidebar />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </>
    </Router>
  );
}

export default App;
