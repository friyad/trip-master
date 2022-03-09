import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Tour = ({ tour }) => {
    const { description, imgUrl, name, place, price, days, _id } = tour;
    const [showDescription, setShowDescription] = useState(false)

    return (
        <div className="shadow-md" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="h-72">
                <img src={imgUrl} alt="" className="w-full h-full" />
            </div>
            <div className="p-2">
                <h2 className="text-2xl font-bold my-2 text-gray-800">{name}</h2>
                <h2 className="text-2xl font-bold my-2">Place: <span className="text-gray-700">{place}</span></h2>
                <p className="text-justify">{description?.slice(0, 400)}</p>
                <div className="flex justify-around xs:text-xl xl:text-3xl font-bold items-center my-3">
                    <h3>${price}</h3>
                    <h3> <FontAwesomeIcon icon={faCloudSun} /> {days}D</h3>
                    <Link to={`/tourDetails/${_id}`} className="defaultBtn px-6 py-3 inline-block rounded-lg text-sm">
                        Details & Book
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Tour;