import { faMapMarker, faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Carousel } from 'react-carousel-minimal';


const Slider = () => {

    const data = [
        { image: "https://i.ibb.co/njhJwFD/1.jpg", },
        { image: "https://i.ibb.co/7Yf6wdv/2.jpg", },
        { image: "https://i.ibb.co/JjhV6LH/3.jpg", },
        { image: "https://i.ibb.co/pLDXtXw/4.jpg", },
        { image: "https://i.ibb.co/1Jyf7v7/5.jpg", },
        { image: "https://i.ibb.co/c3VmLZy/6.jpg", },
        { image: "https://i.ibb.co/vwBqPsF/7.jpg", },
        { image: "https://i.ibb.co/vw94vym/8.jpg", },
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }

    return (
        <div className="xl:w-11/12 xs:w-full 3xl:max-w-screen-3xl
        mx-auto flex justify-center items-center bg-black rounded-lg">

            {/* input divs with btns--------- */}
            <div className="absolute" style={{ zIndex: '99' }} data-aos="fade-right">
                <h1 className="md:text-4xl xs:text-xl font-bold xs:mb-1 lg:mb-3 text-white">Search for Booking a trip</h1>
                <div className="lg:bg-white rounded-full p-2 xs:flex-col lg:flex-row flex
                xs:w-10/12 mx-auto
                lg:w-full
                ">
                    <div className="relative xs:mb-1 lg:mb-0">
                        <FontAwesomeIcon className="absolute text-3xl text-gray-500 top-2 left-3"
                            icon={faMapMarkerAlt} />

                        <input type="text" placeholder="Where you will go?"
                            className="lg:rounded-l-full xs:rounded-lg p-3 pl-10 xs:text-sm lg:text-xl border-r-4 mr-2
                        hover:bg-gray-100 outline-none transition xs:w-full lg:w-min" />
                    </div>

                    <input type="date" placeholder="When you will go?"
                        className="rounded-lg p-2 pl-10 xs:text-sm lg:text-xl border-r-4 mr-2
                        hover:bg-gray-100 outline-none transition xs:w-full lg:w-min  xs:mb-1 lg:mb-0" />

                    <select name="" defaultValue="what is " id="" className="rounded-lg p-2 px-5 xs:text-sm lg:text-xl
                    hover:bg-gray-100 outline-none transition xs:w-full lg:w-min  xs:mb-1 lg:mb-0">
                        <option value="">-Tour Type-</option>
                        <option value="">Personal Tour</option>
                        <option value="">Family Tour</option>
                        <option value="">Friends Tour</option>
                    </select>

                    <button className="lg:text-xl xs:text-sm px-10 py-3
                    rounded-full text-white lg:ml-4 xs:w-full lg:w-max xs:ml-0 defaultBtn" style={{ backgroundColor: '#142046' }}>
                        <FontAwesomeIcon icon={faSearch} className="mr-2" />
                        Search
                    </button>
                </div>
            </div >

            {/* Carousel/ Slider----------- */}
            <div style={{
                padding: "0",
                textAlign: "center",
                width: '100%',
            }}>
                <Carousel
                    data={data}
                    time={4000}
                    width="100%"
                    height="500px"
                    captionStyle={captionStyle}
                    radius="10px"
                    slideNumber={false}
                    slideNumberStyle={slideNumberStyle}
                    captionPosition="bottom"
                    automatic={true}
                    dots={true}
                    pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="black"
                    slideImageFit="cover"
                    thumbnails={false}
                    thumbnailWidth="100px"
                    style={{
                        textAlign: "center",
                        maxWidth: "100%",
                        maxHeight: "500px",
                        opacity: '70%'
                    }}
                />
            </div>

        </div >
    );
};

export default Slider;