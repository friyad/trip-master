import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Booking = ({ bkngs, handleBookingsDelete }) => {
    const { description, imgUrl, name, place, price, days, _id } = bkngs.item;
    const { address, district, division, email, phone, fromPlace, status, upazilla } = bkngs.info;


    // const handleBookingsDelete = id => {
    //     fetch(`http://localhost:4000/bookings/${id}`, {
    //         method: "delete",

    //     })
    //         .then()
    // }




    return (
        <div className="rounded-md shadow-md p-4 border-2 mb-4">
            <div className="grid xs:grid-cols-1 lg:grid-cols-12 gap-3">
                <div className="col-span-2">
                    <img src={imgUrl} alt="" className="w-full h-full rounded-md" />
                </div>
                <div className="col-span-7 text-left">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <h3 className="text-xl font-bold text-gray-800">{place}</h3>
                    <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-2">
                        <div className="col-span-1">
                            <p>Days: {days}</p>
                            <p>Price: ${price}</p>
                        </div>
                        <div className="lg:col-span-2 md:col-span-1">
                            <p>Phone: {phone}</p>
                            <p>Email: {email}</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 text-left">
                    <h2 className="text-xl">Status: <span className={status === "Pending" ? "p-2 rounded-md bg-yellow-100" : "p-2 rounded-md text-white bg-green-700"}>{status}</span></h2>
                    <button onClick={() => handleBookingsDelete(bkngs._id)} className="px-4 py-1 text-xl bg-red-500 rounded-md my-4 text-white">
                        <FontAwesomeIcon icon={faTrashAlt} className="mr-1" />
                        {status === "Approved" ? "Delete" : "Cancel"}
                    </button>
                </div>




            </div>


        </div>
    );
};

export default Booking;