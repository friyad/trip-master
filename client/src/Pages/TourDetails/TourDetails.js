import { faChevronDown, faCloudSunRain, faDollarSign, faShoppingCart, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import useSrollRestore from '../../Hooks/useSrollRestore';
import useAuth from '../../Hooks/useAuth';

// const { description, imgUrl, name, place, price, days, _id } = desExTour;

const TourDetails = () => {
    useSrollRestore()
    const { tourID } = useParams()
    const { user } = useAuth()
    const [tour, setTour] = useState(null)
    const [divisions, setDivisions] = useState(null)
    const [district, setDistrict] = useState(null)
    const [upazilla, setUpazilla] = useState(null)
    const [goToOrder, setGoToOrder] = useState(false)
    const history = useHistory()
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    // Load a single data for display tour details
    useEffect(() => {
        fetch(`https://cryptic-spire-27482.herokuapp.com/tourDetails/${tourID}`)
            .then(res => res.json())
            .then(data => {
                setTour(data)
            })
    }, [])
    // Load all divisions for display in division select
    useEffect(() => {
        fetch('https://bdapis.herokuapp.com/api/v1.1/divisions')
            .then(res => res.json())
            .then(data => setDivisions(data))
    }, [])

    const [radioValue, setRadioValue] = useState('')
    const [divisionValue, setDivisionValue] = useState('')
    const [districtValue, setDistrictValue] = useState('')
    const [upazillaValue, setUpazillaValue] = useState('')

    const onSubmit = data => {
        const newOrder = { item: { ...tour }, info: { ...data }, uid: user.uid } // Copy tour and form data in a Object
        newOrder.info.fromPlace = radioValue;
        newOrder.info.division = divisionValue;
        newOrder.info.district = districtValue;
        newOrder.info.upazilla = upazillaValue;
        newOrder.info.status = 'Pending';

        // Post on the database----
        fetch('https://cryptic-spire-27482.herokuapp.com/bookings', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    swal({
                        title: "Submited!",
                        text: "Your Booking submited successfully!",
                        icon: "success",
                        button: "Ok Thanks!",
                    });
                    reset()
                    history.push("/allTours")
                }
            })
    }

    const handleRadio = e => setRadioValue(e.target.value)
    // Select divistion and get the Districts under this division
    const handleDivisionSelect = e => {
        setDivisionValue(e.target.value)
        if (e.target.value !== "") {
            fetch(`https://bdapis.herokuapp.com/api/v1.1/division/${e.target.value.toLowerCase()}`)
                .then(res => res.json())
                .then(data => setDistrict(data))
        }
    }
    // Select District and get the Upazilla under this district
    const handleDistrictSelect = e => {
        setDistrictValue(e.target.value)
        if (district && e.target.value !== "") {
            const matchUpzilla = district.data.find(distr => distr.district === e.target.value)
            setUpazilla(matchUpzilla.upazilla)
        }
    }
    const handleUpazillaSelect = e => setUpazillaValue(e.target.value)


    return (
        <div className="xs:w-11/12 max-w-screen-3xl mx-auto mt-16">
            {!tour
                ? <h1 className="text-2xl mt-24 text-white w-max py-2 px-4 mx-auto font-semibol rounded-lg" style={{ backgroundColor: '#142046' }}>
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin" /> Loading...</h1>
                :
                // -------------Tour Image and Text with Booking inputs-------------
                <div className="grid gap-4
                xs:grid-cols-1
                lg:grid-cols-12
                ">
                    {/* Tour Image ---- */}
                    <div className="xs:col-span-7 lg:col-span-3 pt-3 ">
                        <img src={tour.imgUrl} alt="" className="w-full xs:h-full lg:h-80" />
                    </div>

                    {/* Toure Texts----- */}
                    <div className="col-span-9 grid
                    xs:grid-cols-1
                    lg:grid-cols-12
                    ">
                        {/* Tour Details in Text--------------- */}
                        <div className="col-span-12 text-left">
                            <h2 className="xs:text-3xl lg:text-3xl text-gray-800 font-extrabold mb-3 ">{tour.name}</h2>
                            <h2 className="text-2xl text-gray-700 font-semibold">Place: {tour.place}</h2>
                            <p className="text-gray-600 my-4">{tour.description}</p>
                            {/* Price and Days with Flex box------ */}
                            <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-4 py-4">
                                <div className="text-4xl font-bold flex justify-center items-center
                                bg-white shadow-md px-10 py-4 rounded-lg border-2">
                                    <FontAwesomeIcon icon={faDollarSign} />
                                    <h3 className="ml-2">{tour.price}</h3>
                                </div>
                                <div className="text-4xl font-bold flex justify-center items-center
                                bg-white shadow-md px-10 py-4 rounded-lg border-2">
                                    <FontAwesomeIcon icon={faCloudSunRain} />
                                    <h3 className="ml-2">{tour.days} {tour.days === 1 ? "Day" : "Days"}</h3>
                                </div>
                                <div className="text-4xl font-bold flex justify-center items-center
                                bg-white shadow-md px-10 py-4 rounded-lg border-2">
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                    <h3 className="ml-2">{Math.floor(Math.random() * 10000)}</h3>
                                </div>
                            </div>
                            <button onClick={() => setGoToOrder(!goToOrder)} className="defaultBtn px-8 py-3 mt-3 rounded-lg">Go To Booking
                                <FontAwesomeIcon icon={faChevronDown} className="ml-2"
                                    style={goToOrder ? { transform: 'rotate(180deg)', transition: '0.3s' } : { transition: '0.3s' }} />
                            </button>
                        </div>


                        {/* Shipping Details----------------- */}
                        {goToOrder &&
                            <div className="col-span-12 mt-16 text-left" data-aos="fade-up">
                                <h1 className="text-4xl font-bold text-gray-800">Shipping Address</h1>
                                <hr className="mt-3 mb-5" />

                                <div className="xs:w-full lg:w-9/12 bg-gray-100 rounded-md shaodw-md p-6">
                                    <form onSubmit={handleSubmit(onSubmit)}
                                        className="grid xs:grid-cols-1 lg:grid-cols-2 gap-4">

                                        {/* Where You Will Receive Your Parcel? ---------*/}
                                        <div className="flex xs:flex-col lg:flex-row justify-start items-center text-xl col-span-2">
                                            <p className="mr-4">Where will we receive you? </p>
                                            <input onClick={handleRadio} required
                                                value="home"
                                                type="radio"
                                                className="w-6 h-6 mr-1"
                                                name="parcel" id="homeRadio" />
                                            <label htmlFor="homeRadio" className="mr-4">Home</label>

                                            <input onClick={handleRadio} required
                                                value="office"
                                                type="radio"
                                                className="w-6 h-6 mr-1"
                                                name="parcel" id="officeRadio" />
                                            <label htmlFor="officeRadio">Office</label>
                                        </div>

                                        {/* Other Inputs----------- */}
                                        <input defaultValue="" {...register("name", { required: true })}
                                            type="text"
                                            placeholder="Type your name"
                                            className="col-span-2 p-2 text-xl outline-none rounded-md shadow-md pl-6" />

                                        <input defaultValue="" {...register("email", { required: true })}
                                            type="text"
                                            placeholder="Type your email"
                                            className="col-span-2 p-2 text-xl outline-none rounded-md shadow-md pl-6" />

                                        <input defaultValue="" {...register("phone", { required: true })}
                                            type="number"
                                            placeholder="Type your phone"
                                            className="p-2 text-xl outline-none rounded-md shadow-md pl-6" />

                                        <input defaultValue=""
                                            {...register("aditionalPhone")}
                                            type="number"
                                            placeholder="Type your aditional phone"
                                            className="p-2 text-xl outline-none rounded-md shadow-md pl-6" />

                                        {/* Bangladesh-------------- */}
                                        <select name="" id="" required
                                            className="p-2 text-xl outline-none rounded-md shadow-md pl-6" >
                                            <option value="bangladesh">Bangladesh</option>
                                        </select>

                                        {/* Select Division------------- */}
                                        <select name="" id="" required
                                            onChange={handleDivisionSelect}
                                            className="p-2 text-xl outline-none rounded-md shadow-md pl-6" >
                                            <option value="">-Division-</option>
                                            {divisions &&
                                                divisions.data.map(divsn =>
                                                    <option key={divsn._id}>{divsn.division}</option>
                                                )
                                            }
                                        </select>

                                        {/* Select Districts------------ */}
                                        <select name="" id="" required
                                            onChange={handleDistrictSelect}
                                            className="p-2 text-xl outline-none rounded-md shadow-md pl-6" >
                                            <option defaultValue="Division" value="">-District-</option>
                                            {district &&
                                                district.data.map(distr =>
                                                    <option key={distr._id}>
                                                        {distr.district}
                                                    </option>
                                                )
                                            }
                                        </select>



                                        {/* Select Upazilla------------ */}
                                        <select name="" id="" required
                                            onChange={handleUpazillaSelect}
                                            className="p-2 text-xl outline-none rounded-md shadow-md pl-6" >
                                            <option defaultValue="Division" value="">-Upazilla-</option>
                                            {upazilla &&
                                                upazilla.map(upzla =>
                                                    <option key={upzla}>
                                                        {upzla}
                                                    </option>
                                                )
                                            }
                                        </select>

                                        <textarea name="" id="" cols="30" rows="3" {...register("address", { required: true })}
                                            className="col-span-2 mt-3 p-2 text-xl outline-none rounded-md shadow-md pl-6"
                                            placeholder="Type here your address">
                                        </textarea>

                                        {errors.exampleRequired && <span>This field is required</span>}
                                        <input type="submit" value="Place Booking Order"
                                            className="py-3 defaultBtn rounded-lg mt-4 xs:col-span-2 lg:col-span-1 text-xl" />
                                    </form>
                                </div>
                            </div>
                        }
                    </div>

                </div>
            }
        </div >
    );
};

export default TourDetails;