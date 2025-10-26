import React from 'react';
import HeroSlider from '../Component/HeroSlider';
import { useLoaderData } from 'react-router';
import MyContainer from '../Component/MyContainer';
import ServiceCard from '../Component/ServiceCard';
import VetCard from '../Component/vetCard';
import TipsCard from '../Component/TipsCard';
import HappyCustomerCard from '../Component/HappyCustomerCard';



const Home = () => {
    const { services, tips, vets, happyCustomer } = useLoaderData()
    // console.log(vets);

    return (
        <div>
            {/* <h2>Home</h2> */}
            <HeroSlider></HeroSlider>

            {/* <div className='mt-8 py-5 border-1'>
                <MyContainer>
                    <h1 className='text-center text-3xl font-semibold text-primary py-5'>Popular Winter Care Services</h1>
                    <div className='py-5 grid grid-cols-3 gap-5'>
                        {
                            tips.map(tip => {
                                <TipsCard key={tip.id} tip={tip}></TipsCard>
                            })
                        }
                    </div>
                </MyContainer>
            </div> */}
            {/* Winter Tips Section */}
            <MyContainer>
                <section className='px-3 md:px-0 mt-8'>
                    <h1 className='text-center text-2xl md:text-3xl font-semibold text-primary py-5'>Popular Winter Care Services</h1>
                    <div className='py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            services.map(service => <ServiceCard key={service.serviceId} service={service}></ServiceCard>)
                        }
                    </div>
                </section>
                <section className='my-8 px-3 md:px-0'>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary text-center">Winter Care Tips for Pets</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {tips.map(tip => <TipsCard key={tip.id} tip={tip}></TipsCard>)}
                    </div>
                </section>
                <section className='my-15 px-3 md:px-0'>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary text-center">Our Expert Veterinarian's</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {vets.map(vet => <VetCard key={vet.id} vet={vet}></VetCard>)}
                    </div>
                </section>
                <section className='my-15 px-3 md:px-0'>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary text-center">Customer Reviews</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {happyCustomer.map(c => <HappyCustomerCard key={c.id} c={c}></HappyCustomerCard>)}

                    </div>
                </section>
            </MyContainer>
        </div>
    );
};

export default Home;