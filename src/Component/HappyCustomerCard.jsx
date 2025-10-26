import React from 'react';

const HappyCustomerCard = ({ c }) => {
    return (
        <div className="card bg-base-100 shadow-xl py-5" data-aos="zoom-out-left">
            <figure>
                <img className='w-[130px] h-[130px] rounded-full' src={c.image} alt={c.name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{c.name}</h2>
                <p>{c.review}</p>
            </div>
        </div>
    );
};

export default HappyCustomerCard;