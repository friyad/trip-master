import { faSpinner, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useSrollRestore from '../../../Hooks/useSrollRestore';

const Booking = ({
    mngBooking, handleSeeDetails,
    handleApprove, approveLoading,
    handleBookingsDelete }) => {
    useSrollRestore()
    const { imgUrl, days, place, price, description, } = mngBooking.item; //Item Info-----
    const { address, upazilla, district, division, email, fromPlace, name,
        phone, aditionalPhone, status } = mngBooking.info; // Customar Info------
    const newAddress = `${address}, ${upazilla}, ${district}, ${division}`


    const updatedObject = {
        name,
        phone,
        aditionalPhone,
        address,
        fromPlace,
        division,
        district,
        upazilla,
        status: "Approved"
    }


    return (
        <tr className="">
            <td className=""> <img src={imgUrl} alt="" className="w - full h - full" /></td>

            < td > {mngBooking.item.name?.slice(0, 10)}{mngBooking.item.name ? "..." : "N/A"}
            </td >

            <td><h3>{place?.slice(0, 20)}...</h3></td>

            <td className="">${price}</td>
            <td>{name}</td>
            <td>{days}</td>
            <td colSpan="2">{email}</td>
            <td>{phone}</td>
            <td colSpan="2">{newAddress}</td>

            <td><h3 className={status === "Pending" ? "bg-yellow-400 w-full py-2 rounded-md" : "bg-green-700 text-white w-full py-2 rounded-md"}>{status}</h3></td>

            <td> <button onClick={() => handleSeeDetails(mngBooking._id)} className="bg-blue-600 rounded-md w-full text-white py-2">See Details</button>
            </td>

            <td>
                <button onClick={() => handleApprove(mngBooking._id, updatedObject)}
                    className={approveLoading ? "w-full py-1 rounded-md bg-gray-200 text-white font-semibold" : "w-full py-1 rounded-md bg-green-700 text-white font-semibold"}>
                    {approveLoading && <FontAwesomeIcon icon={faSpinner} className="animate-spin text-blue-700" />}
                    Approve
                </button>

                <button onClick={() => handleBookingsDelete(mngBooking._id)} className="w-full py-1 mt-1 rounded-md bg-red-600 text-white font-semibold">
                    <FontAwesomeIcon icon={faTrashAlt} /> Delete</button>
            </td>
        </tr >
    );
};

export default Booking;