import React from 'react';
import { Link } from 'react-router-dom';
import offerImage from '../../../../images/offer.png'

const Offer = ({ offer }) => {
    const { description, imgUrl, place, price, days, _id } = offer;

    return (
        <div className="rounded-lg shadow-md bg-white p-2 transition hover:shadow-2xl">
            <div className="relative">
                <img src={offerImage} alt="" className="absolute top-0 right-0 w-16 "
                    style={{ zIndex: '90' }} />
                <img src={imgUrl} alt="" className="w-full rounded-lg" />
            </div>
            <h1 className="text-xl text-gray-800 font-semibold my-2">{place.slice(0, 15)}</h1>
            <p>{description.slice(0, 50)}</p>
            <div className="flex justify-between px-4 mt-3 mb-2">
                <h2 className="text-xl font-bold">${price}</h2>
                <Link to={`/tourDetails/${_id}`} className="defaultBtn inline-block px-4 py-1 rounded-full">Clime Offer</Link>
            </div>
        </div>
    );
};

export default Offer;