import React, { useEffect, useState } from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useSrollRestore from '../../Hooks/useSrollRestore';
import manageOrderImage from '../../images/manageOrders.png'
import Booking from './Booking/Booking';
import swal from 'sweetalert';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const ManageBookings = () => {
    useSrollRestore()
    const [manageBookings, setManageBookings] = useState(null)
    const [bookingDetails, setBookingDetails] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false)

    useEffect(() => {
        fetch('https://cryptic-spire-27482.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setManageBookings(data))
    }, [])


    const handleSeeDetails = id => {
        setBookingDetails(null)
        setIsModalOpen(true)
        fetch(`https://cryptic-spire-27482.herokuapp.com/bookingDetails/${id}`)
            .then(res => res.json())
            .then(data => {
                setBookingDetails(data)
            })
    }


    // To Handle Aprove Update in database and Client side---------------
    const [approveLoading, setApproveLoading] = useState(false)
    const handleApprove = (id, updatedObject) => {
        const proceed = window.confirm("Do you want to delete it?")
        if (proceed) {
            setApproveLoading(true)
            fetch(`https://cryptic-spire-27482.herokuapp.com/updateBookingStatus/${id}`, {
                method: "put",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(updatedObject)
            })
                .then(res => res.json())
                .then(result => {
                    if (result.acknowledged) {
                        const updatedMngBookings = manageBookings.find(mngBkng => mngBkng._id === id)
                        manageBookings[manageBookings.indexOf(updatedMngBookings)].info.status = "Approved"
                        const newBookings = [...manageBookings]
                        setManageBookings(newBookings)
                        setApproveLoading(false)
                    }
                })
        }
    }


    // To Handle delete a Bookings from manage bookings ----
    const handleBookingsDelete = id => {
        const proceed = window.confirm('Are you sure? You want to delete this?')
        if (proceed) {
            fetch(`https://cryptic-spire-27482.herokuapp.com/bookings/${id}`, {
                method: "delete",
            })
                .then(res => res.json())
                .then(result => {
                    if (result.acknowledged) {
                        const withOutDeletedBkngs = manageBookings.filter(bkngs => bkngs._id !== id)
                        setManageBookings(withOutDeletedBkngs)
                        swal({
                            title: "Deleted!",
                            text: "Your Booking Deleted successfully!",
                            icon: "success",
                            button: "Ok Thanks!",
                        });
                    }
                })
        }
    }


    return (
        <div className="mt-24 xs:w-11/12 max-w-screen-3xl mx-auto">
            <h1 className="text-4xl font-mochy font-bold text-left">Manage Bookings</h1>
            <hr className="mt-3 mb-4" />


            <div className="grid xs:grid-cols-1 lg:grid-cols-12 gap-5">
                {/* Add New Tours section with image ----------------- */}
                <div className="col-span-12 grid xs:grid-cols-1 lg:grid-cols-12">
                    <div className=" col-span-2">
                        <img src={manageOrderImage} alt="" />
                    </div>
                    <div className="col-span-10 text-right">
                        <Link className="NavItem NavItem:hover px-4" to="/addNewBooking">
                            Add New Tour Package</Link>
                    </div>
                </div>

                {/* All Booking orders in a Table-------------- */}
                <div className="col-span-12 ">
                    {!manageBookings
                        ? <h1 className="text-2xl mt-24 text-white w-max py-2 px-4 mx-auto font-semibol rounded-lg" style={{ backgroundColor: '#142046' }}>
                            <FontAwesomeIcon icon={faSpinner} className="animate-spin" /> Loading...</h1>
                        : <>
                            {/* Booking Information --------------------------  */}
                            <div className="">
                                <table className="tableStyle">
                                    <thead>
                                        <tr>
                                            <th>Photo</th>
                                            <th>Name</th>
                                            <th>Place</th>
                                            <th>Price ($)</th>
                                            <th>Turist</th>
                                            <th>Days</th>
                                            <th colSpan="2">Email</th>
                                            <th>Phone</th>
                                            <th colSpan="2">Address</th>
                                            <th>Status</th>
                                            <th>Details</th>
                                            <th></th>
                                        </tr>
                                    </thead>

                                    <tbody className="">
                                        {manageBookings.map(mngBooking => <Booking
                                            key={mngBooking._id}
                                            mngBooking={mngBooking}
                                            handleSeeDetails={handleSeeDetails}
                                            handleApprove={handleApprove}
                                            approveLoading={approveLoading}
                                            handleBookingsDelete={handleBookingsDelete}
                                        />)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </>}
                </div>
            </div>



            {/* See Booking Details in a Modal-------------- */}
            {isModalOpen &&
                <div class="fixed top-0 z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

                        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>


                        {!bookingDetails
                            ? <FontAwesomeIcon icon={faSpinner} className="animate-spin text-4xl text-white" />
                            : <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div class="sm:flex sm:items-start">
                                        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <h3 class="text-3xl leading-6 font-bold text-gray-900" id="modal-title">
                                                Booking Details
                                            </h3>
                                            <hr className="my-2 border-2" />
                                            <div class="mt-2">
                                                <img src={bookingDetails.item.imgUrl} alt="" className="rounded-lg w-full h-full" />
                                                <div className="flex justify-between my-4 items-center">
                                                    <h3 className="bg-gray-100 rounded-md px-10 py-2 text-2xl font-bold shadow-md">{bookingDetails.item.days} Days</h3>
                                                    <h3 className="bg-gray-100 rounded-md px-10 py-2 text-2xl font-bold shadow-md">${bookingDetails.item.price}</h3>
                                                </div>
                                                <h1 className="text-2xl font-bold">{bookingDetails.item?.name && "Name: " + bookingDetails.item?.name}</h1>
                                                <h1 className="text-xl font-bold">Place: {bookingDetails.item.place}</h1>


                                                <p className="text-xl mt-3">
                                                    {bookingDetails.item.description.slice(0, 200)}
                                                    {isDescriptionOpen && bookingDetails.item.description.slice(200, bookingDetails.item.description.length)}
                                                    <span onClick={() => setIsDescriptionOpen(!isDescriptionOpen)} className="text-blue-600 underline cursor-pointer ml-2">
                                                        {isDescriptionOpen ? "Read Less...." : "Read More...."}
                                                    </span>
                                                </p>


                                                {/* User Information--- */}
                                                <div className="mt-5">
                                                    <h1 className="text-2xl font-bold">User Information</h1>
                                                    <hr />
                                                    <h3 className="text-xl my-1">Name: {bookingDetails.info.name}</h3>
                                                    <h3 className="text-xl my-1">Phone: {bookingDetails.info.phone}</h3>
                                                    <h3 className="text-xl my-1">Aditional Phone: {bookingDetails.info?.aditionalPhone}</h3>
                                                    <h3 className="text-xl my-1">Email: {bookingDetails.info.email}</h3>
                                                    <h3 className="text-xl my-1">Recive Place: {bookingDetails.info.fromPlace?.toUpperCase()}</h3>
                                                    <h3 className="text-xl my-1">
                                                        Address: {bookingDetails.info.address},
                                                        {" " + bookingDetails.info.upazilla},
                                                        {" " + bookingDetails.info.district},
                                                        {" " + bookingDetails.info.division}
                                                    </h3>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button onClick={() => setIsModalOpen(false)} type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-8 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                                        Ok
                                    </button>
                                </div>
                            </div>
                        }


                    </div>
                </div>
            }







        </div >
    );
};

export default ManageBookings;