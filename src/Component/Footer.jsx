import React from 'react';
import MyContainer from './MyContainer';
import logo from '../assets/petcare/Slider/Logo_2-remove.png'

const Footer = () => {
    return (
        <div className='bg-base-200'>

            <MyContainer>

                <footer className="footer sm:footer-horizontal text-base-content p-10">
                    <aside>

                        <img className='w-[150px]' src={logo} alt="" />

                    </aside>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Grooming</a>
                        <a className="link link-hover">Nutrition</a>
                        <a className="link link-hover">Comfort</a>
                        <a className="link link-hover">Clothing</a>
                    </nav>
                    <nav>
                        <h6 class="footer-title">Social</h6>
                        <a class="link link-hover">Twitter</a>
                        <a class="link link-hover">Instagram</a>
                        <a class="link link-hover">Facebook</a>
                        <a class="link link-hover">GitHub</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
            </MyContainer>
        </div>
    );
};

export default Footer;