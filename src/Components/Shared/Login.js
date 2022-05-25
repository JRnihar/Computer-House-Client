import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import useToken from '../../Hooks/useToken';
import Loading from './Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const [email, setEmail] = useState()
    const location = useLocation();


    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user)
    if (token || user) {
        navigate(from, { replace: true });
    }

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );


    if (loading || sending) {
        return <Loading></Loading>
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-red-700'>Error: {error?.message}</p>
    }

    const handelSubmit =  (e) => {
        e.preventDefault()
        const email = emailRef.current.value
        const pasword = passwordRef.current.value
       signInWithEmailAndPassword(email, pasword);
        

    }
    return (
        <div>
            <div class="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
                <div
                    class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
                >
                    <div
                        class="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
                    >
                        <div class="my-3 text-4xl font-bold tracking-wider text-center">
                            <a>Computer House</a>
                        </div>
                        <p class="mt-6 font-normal text-center text-gray-300 md:mt-0">
                            A computer is a digital electronic machine that can be programmed to carry out sequences of arithmetic or logical operations (computation) automatically.
                        </p>
                        <p class="flex flex-col items-center justify-center mt-10 text-center">
                            <span>Don't have an account?</span>
                            <button className='w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-700 rounded-md drop-shadow-2xl hover:bg-blue-500 mt-5 focus:outline-none focus:ring-blue-200 focus:ring-4"'><Link to='/singUp'>Get Started!</Link></button>
                        </p>
                       
                    </div>
                    <div class="p-5 bg-white md:flex-1">
                        <h3 class="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>
                        <form onSubmit={handelSubmit}  class="flex flex-col space-y-5">
                            <div class="flex flex-col space-y-1">
                                <label for="email" class="text-sm font-semibold text-gray-500">Email address</label>
                                <input
                                    ref={emailRef} 
                                    type="email"
                                     name="email"
                                     onChange={(e) => setEmail(e.target.value)}
                                    id="email"
                                    autofocus
                                    class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                    required
                                />
                            </div>
                            <div class="flex flex-col space-y-1">
                                <div class="flex items-center justify-between">
                                    <label for="password" class="text-sm font-semibold text-gray-500">Password</label>
                                    <p onClick={async () => {
                                        await sendPasswordResetEmail(email);
                                        alert('Sent email');
                                    }}  class="text-sm text-blue-600 hover:underline focus:text-blue-800">Forgot Password?</p>
                                </div>
                                <input
                                    ref={passwordRef}
                                    name='password'
                                    type="password"
                                    id="password"
                                    class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                />
                            </div>
                            <div class="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    class="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                                />
                                <label for="remember" class="text-sm font-semibold text-gray-500">Remember me</label>
                            </div>
                            {errorElement}
                            <div>
                                <button
                                    type="submit"
                                    class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                                >
                                    Log in
                                </button>
                            </div>
                            <SocialLogin></SocialLogin>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;