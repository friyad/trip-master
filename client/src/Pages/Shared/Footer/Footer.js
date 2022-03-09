import React from 'react';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import paymentMethodImg from '../../../images/paymentMethod.png'

const Footer = () => {



    return (<>
        <div className="xs:w-full max-w-screen-3xl mx-auto bg-gray-300 py-16 mt-72 ">
            <div className="grid gap-14 w-11/12 mx-auto
            xs:grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4"  data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="text-left">
                    <h1 className="text-3xl font-bold text-gray-700 mb-3">SUBSCRIBE US</h1>
                    <form action="" className="flex-col flex ">
                        <input type="text" className="p-2 pl-4 mb-2 rounded-lg"
                            name="" id="" placeholder="Type your email" />
                        <input type="number" className="p-2 pl-4 mb-2 rounded-lg"
                            name="" id="" placeholder="Type your phone" />
                        <button className="p-2 pl-4 mb-2 text-white rounded-lg cursor-pointer bg-gray-700">Subscribe</button>
                    </form>
                </div>
                <div className="text-left">
                    <h1 className="text-3xl font-bold text-gray-700 mb-3">ABOUT US</h1>
                    <div>
                        <a href="">Our Story</a>
                        <hr className="border-gray-400 my-2" />
                        <a href="">Be a Partner</a>
                        <hr className="border-gray-400 my-2" />
                        <a href="">Travel Blog & Tips</a>
                        <hr className="border-gray-400 my-2" />
                        <a href="">Working With Us</a>
                        <hr className="border-gray-400 my-2" />
                    </div>
                </div>
                <div className="text-left">
                    <h1 className="text-3xl font-bold text-gray-700 mb-3">CONTACT WITH US</h1>
                    <div>
                        <p><FontAwesomeIcon icon={faPhone} className="mr-3" /> +6-345-3456-233 (London) </p>
                        <hr className="border-gray-400 my-2" />
                        <p><FontAwesomeIcon icon={faPhone} className="mr-3" />+1-345-33454-4 (New York) </p>
                        <hr className="border-gray-400 my-2" />
                        <p><FontAwesomeIcon icon={faPhone} className="mr-3" />+34-8757-4556 (Tokyo) </p>
                        <hr className="border-gray-400 my-2" />
                        <p><FontAwesomeIcon icon={faEnvelope} className="mr-3" />Ask@traveltourtheme.com</p>
                        <hr className="border-gray-400 my-2" />
                    </div>
                </div>

                <div className="text-left">
                    <h1 className="text-3xl font-bold text-gray-700 mb-3">PAY SAFELY WITH US</h1>
                    <p>The payment is encrypted and transmitted securely with an SSL protocol.</p>
                    <img src={paymentMethodImg} alt="" />
                </div>
            </div>
        </div>
        <div className="bg-gray-500 py-4 xs:w-full max-w-screen-3xl mx-auto">
            <p className="text-white">© 2022--2023 The Trip Master All Rights Reserved. Developed by RIYAD HOSSAIN</p>
        </div>
    </>);
};

export default Footer;