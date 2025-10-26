import React from 'react';

const VetCard = ({ vet }) => {
    return (
        <div key={vet.id} className="card bg-base-100 shadow-xl" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
            <figure>
                <img src={vet.image} alt={vet.title} className="h-56 w-full object-cover" />
            </figure>

            <div className="card-body">
                <h1 className="card-title">{vet.name}</h1>
                <div className='flex  w-full justify-between items-center'>
                    <p className="font-semibold">{vet.specialty}</p>
                    <p className="font-semibold text-end">{vet.experience}</p>
                </div>
                <p>{vet.description}</p>
            </div>
        </div>
    );
};

export default VetCard;