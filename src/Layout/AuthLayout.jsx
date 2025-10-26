import React from 'react';
import MyContainer from '../Component/MyContainer';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';

const AuthLayout = () => {
    return (
        <div>
            <header>
                <MyContainer>
                    <Navbar></Navbar>
                </MyContainer>
            </header>
            <main>
                <MyContainer>
                    <Outlet></Outlet>
                </MyContainer>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;