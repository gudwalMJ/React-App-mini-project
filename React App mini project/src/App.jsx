import { useState } from 'react';
import './App.css';
import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer';
import Sidebar from './assets/components/Sidebar';
import ProductsList from './assets/components/ProductsList';

function App() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Footer />
            </div>
            <div>
                <Sidebar />
            </div>
            <div>
                {' '}
                <ProductsList />
            </div>
        </div>
    );
}

export default App;
