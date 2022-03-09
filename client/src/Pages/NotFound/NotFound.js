import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="mt-28">
            <div className="mx-auto xl:w-5/12 xs:w-9/12">
                <img src="https://i.ibb.co/cFFRLHM/404-Page-Not-Found.png" className="w-full h-full"
                    alt="" />
                <h1 className="lg:text-4xl xs:text-2xl font-bold text-purple-700">We could not found your serched page</h1>
                <p className="text-xl text-red-700">Please back to home and try again letter</p>
                <Link className="mt-4 px-8 py-3 defaultBtn inline-block rounded-lg"
                    to="/home">Back to home</Link>
            </div>
        </div>
    );
};

export default NotFound;