import React from 'react';
import { Link } from 'react-router';

const ServiceCard = ({ service }) => {
    const { image, serviceName, price, rating, serviceId } = service;
    // console.log(image);

    return (
        <div className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition" data-aos="flip-left">
            <figure>
                <img
                    src={image}
                    alt={serviceName}
                    className="h-60 w-full object-cover rounded-t-xl"
                />
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title justify-center">{serviceName}</h2>
                <p className="text-gray-500">⭐ {rating} / 5</p>
                <p className="text-lg font-semibold text-amber-600">${price}</p>
                <div className="card-actions justify-center">
                    <Link to={`/service-details/${serviceId}`} className="btn bg-primary text-white border-0 hover:bg-amber-500 hover:text-[#403F3F]">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;