import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
// imgUrl, days, place, price, description, name

const AddNewBooking = () => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const styls = "xs:text-sm lg:text-xl py-3 bg-white rounded-md shadow-md outline-none px-5"
    const history = useHistory()



    const [descriptionValue, setDescriptionValue] = useState('')
    const onSubmit = data => {
        data.description = descriptionValue;
        fetch("https://cryptic-spire-27482.herokuapp.com/addNewTourPackage", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    swal({
                        title: "Added!",
                        text: "Your new booking package added successfully!. Check it on your Tour Packages",
                        icon: "success",
                        button: "Ok Thanks!",
                    });
                    reset()
                    history.push("/manageBookings")
                }
            })
        console.log(data)
    }
    const handleDescriptionValue = e => setDescriptionValue(e.target.value)



    return (
        <div className="mt-24 xs:w-11/12 max-w-screen-3xl mx-auto">
            <div className="xs:w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12 mx-auto bg-gray-100 rounded-lg p-10">
                <h1 className="text-3xl  font-bold text-left text-gray-800">Add Your New Booking Package</h1>
                <hr className="border-2 mt-2 mb-5" />
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid xs:grid-cols-1 lg:grid-cols-2 gap-5">

                    <input
                        type="text"
                        className={styls}
                        {...register("name", { required: true })}
                        placeholder="Type your Tour name" />

                    <input
                        type="text"
                        className={styls}
                        {...register("place", { required: true })}
                        placeholder="Type your Tour place name" />

                    <input
                        type="number"
                        className={styls}
                        {...register("price", { required: true })}
                        placeholder="Type your Tour price" />

                    <input
                        type="number"
                        className={styls}
                        {...register("days", { required: true })}
                        placeholder="Type your total tour days" />

                    <textarea onBlur={handleDescriptionValue}
                        className={`${styls} lg:col-span-2`}
                        name="" id="" cols="30" rows="4"
                        placeholder="Type your tour description">
                    </textarea>

                    <input
                        type="text"
                        className={`${styls} lg:col-span-2`}
                        {...register("imgUrl", { required: true })}
                        placeholder="Past your Image URL" />


                    {errors.exampleRequired && <span>This field is required</span>}
                    <input className="py-3 rounded-md defaultBtn" type="submit" value="Add Tour" />
                </form>
            </div>

        </div>
    );
};

export default AddNewBooking;