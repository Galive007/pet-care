import React from 'react';
import MyContainer from '../Component/MyContainer';
import { useLoaderData } from 'react-router';
import ServiceCard from '../Component/ServiceCard';

const Services = () => {
    const services = useLoaderData()
    // console.log(services);

    return (
        <MyContainer>
            <h1 className='text-center text-2xl md:text-3xl font-semibold text-primary py-5'>Popular Winter Care Services</h1>
            <div className='py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceCard key={service.serviceId} service={service}></ServiceCard>)
                }
            </div>
        </MyContainer>

    );
};

export default Services;