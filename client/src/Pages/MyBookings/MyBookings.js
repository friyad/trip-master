import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import useSrollRestore from '../../Hooks/useSrollRestore';
import myBookingImage from '../../images/myOrders.jpg'
import Booking from './Booking/Booking';
import swal from 'sweetalert';

const MyBookings = () => {
    useSrollRestore()
    const { user } = useAuth()
    const [bookings, setBookings] = useState(null)

    useEffect(() => {
        if (user) {
            fetch(`https://cryptic-spire-27482.herokuapp.com/bookings/${user.uid}`)
                .then(res => res.json())
                .then(data => setBookings(data))
        }
    }, [user])


    let price = 0;
    if (bookings) {
        for (const bkngs of bookings) {
            price += parseInt(bkngs.item.price);
        }
    }


    const handleBookingsDelete = id => {
        const proceed = window.confirm('Are you sure? You want to delete this?')
        if (proceed) {
            fetch(`https://cryptic-spire-27482.herokuapp.com/bookings/${id}`, {
                method: "delete",
            })
                .then(res => res.json())
                .then(result => {
                    if (result.acknowledged) {
                        const withOutDeletedBkngs = bookings.filter(bkngs => bkngs._id !== id)
                        setBookings(withOutDeletedBkngs)
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
        <div className="mt-16 xs:w-11/12 max-w-screen-3xl mx-auto">
            <h1 className="text-4xl font-bold text-left">My Bookings</h1>
            <hr className="border-2 my-2" />

            <div className="grid xs:grid-cols-1 lg:grid-cols-12 gap-5 mt-4">
                <div className="col-span-8">
                    <div className="grid grid-cols-2 p-3 rounded-md shadow-md border-2 bg-gray-200">
                        <h1 className="xs:text-sm lg:text-2xl ">
                            Total Booking Tours: {('0' + bookings?.length || 0).slice(-2)}</h1>
                        <h1 className="xs:text-sm lg:text-2xl ">Total Payment: ${price}</h1>
                    </div>
                    {!bookings
                        ? <h1 className="text-2xl mt-24 text-white w-max py-2 px-4 mx-auto font-semibol rounded-lg" style={{ backgroundColor: '#142046' }}>
                            <FontAwesomeIcon icon={faSpinner} className="animate-spin" /> Loading...</h1>
                        : <div className="mt-8">
                            {bookings.map(bkngs => <Booking
                                key={bkngs._id}
                                bkngs={bkngs}
                                handleBookingsDelete={handleBookingsDelete}
                            />)
                            }
                        </div>
                    }
                </div>
                <div className="col-span-4">
                    <img src={myBookingImage} alt="" className="w-full h-96" />
                </div>
            </div>

        </div>
    );
};

export default MyBookings;