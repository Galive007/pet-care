import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';
import { toast } from 'react-toastify';

const ServiceDetailCard = ({ service }) => {
    // console.log(service);

    const { image, serviceName, description } = service

    const handleBook = (e) => {
        e.preventDefault()
        // console.log('clicked');
        const form = e.target

        const name = form.name.value
        const email = form.email.value
        form.reset()
        toast.success('Book Successfully')
        console.log({ name, email });

    }

    return (
        <div className='grid grid-cols-12 gap-6 pb-10 px-5 md:px-0'>
            <div className='col-span-12 md:col-span-9'>
                <img src={image} className='w-full ' alt="" />
                <h1 className='text-2xl font-bold text-primary mt-3'>{serviceName}</h1>
                <p className='text-secondary mt-3'>{description}</p>
                <Link to={`/service`} className='flex items-center
                gap-3 btn w-fit text-base-100 bg-amber-500 mt-5'><FaArrowLeft />All Services</Link>
            </div>
            <div className='col-span-12 md:col-span-3'>
                <form onSubmit={handleBook}>
                    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                        <legend class="fieldset-legend text-primary text-xl">Book Service</legend>

                        <label class="label">Name</label>
                        <input type="text" class="input"
                            name='name'
                            placeholder="Enter Your Name" required />

                        <label class="label">Email</label>
                        <input type="email" class="input"
                            name='email'
                            placeholder="Enter Your Email" required />

                        <button className='mt-5 btn btn-primary'>Book Now</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default ServiceDetailCard;