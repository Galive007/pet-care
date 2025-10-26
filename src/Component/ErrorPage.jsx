import React from 'react';
import Navbar from './Navbar';
import MyContainer from './MyContainer';
import Footer from './Footer';
import errorImg from '../assets/petcare/Slider/error-404.png'


const ErrorPage = () => {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <MyContainer>
                    <div className='flex justify-center items-center py-27'>
                        <img src={errorImg} alt="" />
                    </div>
                </MyContainer>
            </main>
            <Footer></Footer>
        </>
    );
};

export default ErrorPage;