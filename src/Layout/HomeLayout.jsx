import React from 'react';
import Navbar from '../Component/Navbar';
import MyContainer from '../Component/MyContainer';
import { Outlet } from 'react-router';
import HeroSlider from '../Component/HeroSlider';
import Footer from '../Component/Footer';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>

            <main>
                <section>
                    <Outlet></Outlet>
                </section>
                <section>
                    <Footer></Footer>
                </section>
            </main>
            <footer>

            </footer>

        </div>
    );
};

export default HomeLayout;