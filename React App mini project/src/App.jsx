import { useState } from 'react';
import './App.css';
import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer';

function App() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
