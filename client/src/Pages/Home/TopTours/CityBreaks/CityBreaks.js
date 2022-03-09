import React from 'react';
import { Link } from 'react-router-dom';

const CityBreaks = ({ cityBr }) => {
    const { description, imgUrl, name, place, price, days, _id } = cityBr;

    console.log()
    return (
        <div className="rounded-lg bg-gray-100 shadow-md" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
            <img src={imgUrl} alt="" className="w-full rounded-t-lg" />
            <div className="p-2">
                <h2 className="text-xl my-2 font-semibold text-gray-800">{name}</h2>
                <p className="text-justify text-gray-600">{description.slice(0, 300)}</p>
                <div className="flex justify-between py-3 px-2 items-center">
                    <h3 className="text-xl font-semibold text-gray-800">${price}</h3>
                    <Link to={`/tourDetails/${_id}`}
                        className="px-4 py-2 rounded-md defaultBtn inline-block">
                        Show Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CityBreaks;