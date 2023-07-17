import React from 'react';
import Header from '../ReUseableComponents/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../ReUseableComponents/Footer';

const HomePage = () => {
    return (
        <>
        <Header/>
        <div className='min-h-[calc(100vh-120px)]'><Outlet/></div>
        <Footer/>
        </>
    );
};

export default HomePage;