import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';

const Mainlayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar />
            <div className='min-h-[calc(100vh-64px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Mainlayout;