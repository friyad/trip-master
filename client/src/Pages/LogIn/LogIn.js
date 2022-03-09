import { faFacebook, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, } from 'react-router-dom';
import { useHistory, useLocation, } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useSrollRestore from '../../Hooks/useSrollRestore';

const LogIn = () => {
    useSrollRestore()
    const {
        user,
        setUser,
        error,
        loading,
        setLoading,
        setError,
        handleGoogleLogIn,
        handleTwitterLogIn,
        handleFacebookLogIn } = useAuth()
    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || "/";

    // A Function for handle Other sign in method like google, github etc.
    const handleSignInRedirect = signInMethod => {
        signInMethod()
            .then(result => {
                setUser(result.user)
                history.push(redirect_url)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    if (user) {
        history.push("/")
    }
    return (
        <div className="xs:w-11/12 max-w-screen-3xl mx-auto mt-36">
            <div className="lg:w-4/12 xs:w-11/12 md:w-8/12 xl:w-3/12
            shadow-lg rounded-2xl p-6 mx-auto border-2">
                <h2 className="text-3xl text-gray-800 font-bold text-left">Please Log in</h2>
                <hr className="mb-4 mt-2" />

                {/* Email Password Sign In Form---------- */}
                <form action="" className="flex flex-col">
                    <input type="email" name="" id=""
                        placeholder="Type your email" required
                        className="bg-gray-100 rounded-lg pl-5 outline-none p-2 text-xl mb-3" />

                    <input type="password" name="" id=""
                        placeholder="Type your password" required
                        className="bg-gray-100 rounded-lg pl-5 outline-none p-2 text-xl mb-3" />

                    <p>New user? Please <Link to="/registration" className="text-blue-600 underline">Register</Link></p>

                    <p className="my-3 text-red-600">{error}</p>

                    <input type="submit" value="Log In"
                        className="bg-gray-500 font-semibold cursor-pointer text-white rounded-lg pl-5 outline-none p-2 text-xl mt-4" />
                </form>

                {/* Other Sign In------------ */}
                <div className="flex justify-evenly mt-8">
                    <button onClick={() => handleSignInRedirect(handleFacebookLogIn)} className="flex justify-evenly items-center p-3 rounded-full
                    bg-blue-600 text-white text-3xl border-4 border-gray-300">
                        <FontAwesomeIcon icon={faFacebook} />
                    </button>
                    <button onClick={() => handleSignInRedirect(handleGoogleLogIn)} className="flex justify-evenly items-center p-3 rounded-full
                    bg-red-700 text-white text-3xl border-4 border-gray-300">
                        <FontAwesomeIcon icon={faGoogle} />
                    </button>
                    <button onClick={() => handleSignInRedirect(handleTwitterLogIn)} className="flex justify-evenly items-center p-3 rounded-full
                    bg-blue-500 text-white text-3xl border-4 border-gray-300">
                        <FontAwesomeIcon icon={faTwitter} />
                    </button>
                </div>
            </div>






        </div>
    );
};

export default LogIn;