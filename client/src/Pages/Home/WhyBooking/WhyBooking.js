import React from 'react';
import { Link } from 'react-router-dom';
import { faCommentDollar, faHeart, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bookingWithUsImg from '../../../images/whyBookingWithUs.png'

const WhyBooking = () => {
    return (
        <div className="p-8 rounded-lg my-10" style={{ backgroundColor: '#eef8ff' }}>
            <div className="xs:w-11/12 mx-auto max-w-screen-3xl grid gap-8
            xs:grid-cols-1
            xl:grid-cols-12
            " data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="col-span-4 text-center shadow-xl rounded-lg">
                    <img src={bookingWithUsImg} alt="" className="w-96" />
                </div>
                <div className="text-left col-span-8">
                    <h1 className="text-4xl font-bold font-mochy cusColor my-5">
                        Why Booking With Us?</h1>

                    <p className="my-5">Designed with you in mind. It is called private as it includes just you and your party and your dedicated Driver/Guide. Book safe in the knowledge that your money is protected. We are a registered tour operator based in the UK & bonded member of ABTOT.</p>

                    <h3 className="text-xl my-2">
                        <FontAwesomeIcon icon={faThumbsUp} className="cusColor mr-3" />
                        All placges and activiates are carefully picked by us.
                    </h3>
                    <h3 className="text-xl my-2">
                        <FontAwesomeIcon icon={faCommentDollar} className="cusColor mr-3" />
                        Best price guaranteee & Hassle free!
                    </h3>
                    <h3 className="text-xl my-2">
                        <FontAwesomeIcon icon={faStar} className="cusColor mr-3" />
                        We are an award winning agency
                    </h3>
                    <h3 className="text-xl my-2">
                        <FontAwesomeIcon icon={faHeart} className="cusColor mr-3" />
                        Trusted by more than 80,000 customers in 35+ countries
                    </h3>

                    <Link to="/allTours" className="defaultBtn px-8 py-3 rounded-md mt-8 inline-block">
                        Find More Service
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default WhyBooking;