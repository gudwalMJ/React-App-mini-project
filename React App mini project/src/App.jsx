import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer';
import Sidebar from './assets/components/Sidebar';
import DashboardPage from './assets/pages/Dashboard';
import NotFoundPage from './assets/pages/NotFound';
import ItemDetailsPage from './assets/pages/ItemDetails';
import AboutPage from './assets/pages/AboutPage';

function App() {
    return (
        <Router>
            <div className='app-container'>
                <Navbar />
                <Sidebar />
                <div className='main-container'>
                    <Routes>
                        <Route path='/' element={<DashboardPage />} />
                        <Route path='/item/:id' element={<ItemDetailsPage />} />
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='*' element={<NotFoundPage />} />
                        {/* Add more routes as needed */}
                    </Routes>
                </div>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
