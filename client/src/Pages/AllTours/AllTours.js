import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import useSrollRestore from '../../Hooks/useSrollRestore';
import topBanner from '../../images/TourPackageBanner.jpg'
import Tour from './Tour/Tour';

const AllTours = () => {
    useSrollRestore()
    const [allTours, setAllTours] = useState(null)

    useEffect(() => {
        fetch('https://cryptic-spire-27482.herokuapp.com/allTours')
            .then(res => res.json())
            .then(data => setAllTours(data))
    }, [])

    // const tour = Math.floor(Math.random() * allTours.length)

    return (
        <div className="xs:w-11/12 max-w-screen-3xl mx-auto">
            <div className="h-80 relative flex justify-center items-center" data-aos="fade-right">
                <img src={topBanner} alt="" className="h-full w-full" />
                <h1 className="absolute text-5xl font-hachi opacity-70 text-white">MAKE HAPPY YOUR JOURNEY</h1>
            </div>

            <div className="mt-10">
                <h1 className="text-left text-gray-800 xs:text-2xl lg:text-4xl font-extrabold">Our Tour Packages</h1>
                <hr className="mt-3 mb-6 border-2" />
                {!allTours
                    ? <h1 className="text-2xl mt-24 text-white w-max py-2 px-4 mx-auto font-semibol rounded-lg" style={{ backgroundColor: '#142046' }}>
                        <FontAwesomeIcon icon={faSpinner} className="animate-spin" /> Loading...</h1>
                    : <div className="grid gap-8
                    xs:grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-3
                    ">
                        {allTours.map(tour => <Tour
                            key={tour._id}
                            tour={tour}
                        />)}
                    </div>
                }
            </div>
        </div>
    );
};

export default AllTours;