import React, { useEffect, useState } from 'react';
import Offer from './Offer/Offer';

const TrandingOffer = () => {
    const [offers, setOffers] = useState(null)

    useEffect(() => {
        fetch('https://cryptic-spire-27482.herokuapp.com/allTours/offers')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])

    return (
        <div className="xs:w-11/12 max-w-screen-3xl mx-auto rounded-lg p-5 my-10"
            style={{ backgroundColor: '#e6f4fd' }} data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" >

            <div className="grid gap-5
            xs:grid-cols-1
            xl:grid-cols-12">
                <div className="col-span-4 text-left">
                    <h1 className="text-3xl font-bold text-gray-600" id="offer">Our Tranding Offers</h1>
                    <p className="text-gray-700 mt-3">No matter who you’re looking to travel with, you can depend on our 2,500 trusted operators to make sure everything’s taken care of. We work more than 3 years with 100% setisfaction of 35+ countries truist.</p>
                </div>
                <div className="col-span-8 grid gap-10
                xs:grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3">
                    {offers &&
                        offers.map(offer => <Offer
                            key={offer._id}
                            offer={offer}
                        />)
                    }
                </div>
            </div>
        </div>
    );
};

export default TrandingOffer;