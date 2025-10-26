import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../assets/petcare/Slider/slide1.jpg'
import slide2 from '../assets/petcare/Slider/slide2.jpg'
import slide3 from '../assets/petcare/Slider/slide3.jpg'
import slide4 from '../assets/petcare/Slider/slide1.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import MyContainer from './MyContainer';
import { Link } from 'react-router';

const HeroSlider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <div className='h-[450px] md:h-[750px]'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >

                    <SwiperSlide className='bg-cover bg-center'
                        style={{ backgroundImage: `url(${slide3})` }}>
                        <div className=' p-10 space-y-3'>
                            <div className='left pb-3'>
                                <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold text-white'>We offer special services for <br /> special pets!</h1>
                            </div>
                            <div className='right flex gap-4 items-center justify-center'>
                                <Link to='/service' className='btn bg-primary border-0 text-white hover:bg-amber-500 hover:text-[#403F3F]'>OUR SERVICES</Link>
                                <Link to='#' className='btn bg-primary border-0 text-white hover:bg-amber-500 hover:text-[#403F3F]'>CONTACT US</Link>

                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-cover bg-no-repeat w-[500px] bg-center'
                        style={{ backgroundImage: `url(${slide4})` }}>
                        <div className=' p-10 space-y-3'>
                            <div className='left pb-3'>
                                <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold text-white'>We will treat every pet<br />with a similar sympathy</h1>
                            </div>
                            <div className='right flex gap-4 items-center justify-center'>
                                <button className='btn bg-primary border-0 text-white hover:bg-amber-500 hover:text-[#403F3F]'>OUR SERVICES</button>
                                <button className='btn bg-primary border-0 text-white hover:bg-amber-500 hover:text-[#403F3F]'>CONTACT US</button>

                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>

                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
        </>
    );
};

export default HeroSlider;