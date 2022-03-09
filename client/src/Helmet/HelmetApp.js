import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom';

const HelmetApp = () => {
    const location = useLocation()

    return (
        <div>
            <Helmet>
                <title>The Trip Master
                    {location.pathname &&
                        ` | ${location.pathname.toUpperCase().slice(1, location.pathname.length)}`}
                    {location.hash &&
                        ` | ${location.hash.toUpperCase().slice(1, location.hash.length)}`}
                </title>
                <meta name="description" content="This is Trip Master for travel or trip booking" />
            </Helmet>
        </div>
    );
};

export default HelmetApp;