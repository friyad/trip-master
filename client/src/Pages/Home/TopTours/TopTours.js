import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import CityBreaks from './CityBreaks/CityBreaks';
import DesEx from './DesEx/DesEx';

const TopTours = () => {
    const [cityBreaks, setCityBreaks] = useState(null)
    const [desEx, setDesEx] = useState(null)

    useEffect(() => {
        fetch('https://cryptic-spire-27482.herokuapp.com/cityBreaks')
            .then(res => res.json())
            .then(data => setCityBreaks(data))
    }, [])

    useEffect(() => {
        fetch('https://cryptic-spire-27482.herokuapp.com/desEx')
            .then(res => res.json())
            .then(data => setDesEx(data))
    }, [])

    return (
        <div className="mt-10 xs:w-11/12 mx-auto max-w-screen-3xl">
            <h1 id="topTours" className="xs:text-2xl md:text-4xl font-bold cusColor font-mochy"
                data-aos="fade-right">
                Top Suggested Tours for December 2021</h1>
            <p className="xs:text-sm md:text-xl mt-3" data-aos="fade-right">
                “Do not follow where the path may lead. Go instead where there is no path and leave a trail” – Ralph Waldo Emerson</p>


            {/* City Breaks Tours of Top December Toure----------- */}
            <div className="my-8">
                <h1 className="text-left mb-3 text-3xl font-semibold">Best City Breaks</h1>
                {!cityBreaks
                    ? <h1 className="text-2xl mt-24 text-white w-max py-2 px-4 mx-auto font-semibol rounded-lg" style={{ backgroundColor: '#142046' }}>
                        <FontAwesomeIcon icon={faSpinner} className="animate-spin" /> Loading...</h1>
                    :
                    <div className="grid gap-5
                xs:grid-cols-1
                md:grid-cols-2
                lg:grid-cols-4
                ">
                        {cityBreaks.map(cityBr => <CityBreaks
                            key={cityBr._id}
                            cityBr={cityBr}
                        />)}
                    </div>
                }
            </div>

            {/* Top Destinations and Experiences------------ */}
            <div className="my-14">
                <h1 className="text-left mb-3 text-3xl font-semibold">
                    Best Destinations and Experiences</h1>
                {desEx &&
                    <div className="grid gap-5
                xs:grid-cols-1
                md:grid-cols-2
                lg:grid-cols-4
                ">
                        {desEx.map(desExTour => <DesEx
                            key={desExTour._id}
                            desExTour={desExTour}
                        />)
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default TopTours;