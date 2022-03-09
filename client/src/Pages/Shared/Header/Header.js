import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import logo from '../../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faBars, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';


const Header = () => {
    const { user, handleSignOut, loading, setLoading, } = useAuth()
    const [xsMenu, setXsMenu] = useState(false)
    const [profileOpen, setProfileOpen] = useState(false)
    const [fixedHeader, setFixedHeaer] = useState(false)
    const hisotry = useHistory()


    const headerScrol = e => {
        if (window.scrollY >= 500) {
            setFixedHeaer(true)
        }
        else {
            setFixedHeaer(false)
        }
    }
    window.addEventListener('scroll', headerScrol)

    const handleLogoutRedirect = () => {
        handleSignOut()
        hisotry.push("/")
    }


    return (
        <div className={fixedHeader
            ? "mx-auto mb-2 bg-gray-200 rounded-b-lg w-full 3xl:max-w-screen-3xl sticky top-0"
            : "mx-auto mb-2 bg-gray-200 rounded-b-lg xs:w-full xl:w-11/12 3xl:max-w-screen-3xl"
        } style={{ transition: '0.2s', zIndex: '9999999' }}>
            <div className="grid grid-cols-12 w-full items-center xl:py-3 xs:py-5">

                <div className="col-span-2 ">
                    <a href=""><img src={logo} alt="" className="w-48 ml-5" /></a>
                </div>

                {/* Navbar for Lg ----------------- */}
                <div className="col-span-10 justify-between items-center px-14 xs:hidden
                lg:inline-flex
                ">
                    <div>
                        <Link className="NavItem NavItem:hover" to="/home">Home</Link>
                        <HashLink className="NavItem NavItem:hover" to="/home#offer">Running Offer</HashLink>
                        <Link className="NavItem NavItem:hover" to="/allTours">Tour Packages</Link>
                        {user &&
                            <>
                                <Link className="NavItem NavItem:hover" to="/myBookings">
                                    My Bookings</Link>
                                <Link className="NavItem NavItem:hover" to="/manageBookings">
                                    Manage Bookings</Link>
                            </>}
                        <Link className="NavItem NavItem:hover" to="/about">About</Link>
                    </div>


                    {user ?
                        <button
                            onClick={() => setProfileOpen(!profileOpen)}
                            className="text-3xl border-8 p-2 rounded-full shadow-md border-gray-100
                                  w-14 h-14 flex justify-center items-center">
                            <FontAwesomeIcon icon={faUserCircle} />
                        </button>
                        : !loading &&
                        <div>
                            <Link className="NavItem NavItem:hover" to="/login">Log In</Link>
                            <Link className="NavItem NavItem:hover" to="/registration">Register</Link>
                        </div>
                    }
                </div>


                {profileOpen && user &&
                    <div data-aos="fade-down"
                        className="bg-gray-200 xs:hidden xl:block flex flex-col absolute p-5 right-28 rounded-lg top-24 w-56" style={{ zIndex: '9999999' }}>
                        <h1 className="text-xl mb-3 bg-gray-300 w-full p-2 hover:bg-gray-600 hover:text-white rounded-md ">{user.displayName}</h1>
                        <button onClick={handleLogoutRedirect} className="text-xl mb-3 bg-gray-300 w-full p-2 hover:bg-gray-600 hover:text-white rounded-md ">Log Out</button>
                    </div>
                }


                {/* Nav menu for Extra Small by Menu Btn ------------------------------ */}
                <div className="col-span-9 text-right lg:hidden xs:block">
                    <button onClick={() => setXsMenu(!xsMenu)} className="text-xl font-bold p-2">
                        {!xsMenu
                            ? <FontAwesomeIcon icon={faBars} />
                            : <FontAwesomeIcon icon={faTimes} />
                        }
                    </button>
                </div>

                {xsMenu &&
                    <div className="w-full flex flex-col justify-between items-center py-10 bg-gray-100 absolute z-50 top-20 " style={{ zIndex: '9999999' }}>
                        <Link className="xsNevItem" to="/home">Home</Link>
                        <Link className="xsNevItem" to="/home#offer">Running Offer</Link>
                        <Link className="xsNevItem" to="/allTours">Tour Packages</Link>
                        {user &&
                            (user.displayName || user.email) &&
                            <>  <Link className="xsNevItem" to="/myBookings">My Bookings</Link>
                                <Link className="xsNevItem" to="/manageBookings">Manage Bookings</Link>
                            </>
                        }
                        <Link className="xsNevItem" to="/about">About</Link>

                        {/* Small Device Profile Btn-------------- */}
                        {user ?
                            <>  <button onClick={() => setProfileOpen(!profileOpen)} className="xsNevItem">
                                <FontAwesomeIcon icon={faUserCircle} /> Profile
                                <FontAwesomeIcon className="ml-4" icon={faChevronDown}
                                    style={profileOpen ? {
                                        transform: "rotate(180deg)",
                                        transition: "0.2s"
                                    } : { transition: "0.2s" }} />
                            </button>

                                {profileOpen &&
                                    (user.displayName || user.email) &&
                                    <>
                                        <h1 className="text-2xl px-10">Hello</h1>
                                        <button onClick={handleSignOut} className="text-2xl bg-gray-100 rounded-md py-1 mt-2 hover:bg-gray-400 hover:text-white px-16">Log Out</button>
                                    </>
                                }
                            </>
                            : !loading &&
                            <>
                                <Link className="xsNevItem" to="/login">Log In</Link>
                                <Link className="xsNevItem" to="/registration">Register</Link>
                            </>
                        }
                    </div>}
            </div>
        </div >
    );
};

export default Header;