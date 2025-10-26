import React from 'react';

const TipsCard = ({ tip }) => {
    return (
        <div className="card bg-base-100 shadow-xl" data-aos="zoom-in-up">
            <figure>
                <img src={tip.image} alt={tip.title} className="h-56 w-full object-cover" />
            </figure>
            <div className="card-body">
                <h3 className="card-title">{tip.title}</h3>
                <p>{tip.description}</p>
            </div>
        </div>
    );
};

export default TipsCard;