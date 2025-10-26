import React, { useEffect, useState } from 'react';
import MyContainer from '../Component/MyContainer';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { useLoaderData, useParams } from 'react-router';
import ServiceDetailCard from './ServiceDetailCard';

const ServiceDetails = () => {
    const [service, setService] = useState({})
    const data = useLoaderData()
    const { id } = useParams()
    // console.log(data,id);
    useEffect(() => {
        const findServiceDetails = data.find(service => service.serviceId == id)
        // console.log(findServiceDetails);
        setService(findServiceDetails)
    }, [data, id])
    // console.log(service);

    return (
        <div>
            <MyContainer>
                <header>
                    <Navbar></Navbar>
                </header>
                <main>
                    <section>
                        <h1 className='text-xl font-semibold text-primary pb-3'>Service Details</h1>
                        <ServiceDetailCard service={service}></ServiceDetailCard>
                    </section>
                </main>

            </MyContainer>
            <Footer></Footer>
        </div>
        // <div>
        //     <h2>ServiceDetails</h2>
        // </div>
    );
};

export default ServiceDetails;