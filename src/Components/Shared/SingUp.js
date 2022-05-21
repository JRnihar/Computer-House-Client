import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import Loading from './Loading';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from './SocialLogin';

const SingUp = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const navigate = useNavigate()


    if (user) {
        navigate('/')
    }

    if (loading) {
        return <Loading></Loading>
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password, name)
        // toast('Email sent.Verify your Email Please!!')
    }
    return (
        <div>
            <div class="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
                <div
                    class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
                >
                    <div
                        class="p-4 py-6 text-white bg-teal-500	 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
                    >
                        <div class="my-3 text-4xl font-bold tracking-wider text-center">
                            <a href="#">K-WD</a>
                        </div>
                        <p class="mt-6 font-normal text-center text-gray-300 md:mt-0">
                            With the power of K-WD, you can now focus only on functionaries for your digital products, while leaving the
                            UI design on us!
                        </p>
                        <p class="flex flex-col items-center justify-center mt-10 text-center">
                            <span>Do you have an account?</span>
                            <Link to='/login'>Please Login !</Link>
                        </p>
                        <p class="mt-6 text-sm text-center text-gray-300">
                            Read our <a href="#" class="underline">terms</a> and <a href="#" class="underline">conditions</a>
                        </p>
                    </div>
                    <div class="p-5 bg-white md:flex-1">
                        <h3 class="my-4 text-2xl font-semibold text-gray-700">Account Sing Up</h3>
                        <form onSubmit={handleSubmit} class="flex flex-col space-y-5">
                            <div class="flex flex-col space-y-1">
                                <label for="name" class="text-sm font-semibold text-gray-500">Name</label>
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    type="name"
                                    id="name"
                                    name='name'
                                    autofocus
                                    class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                />
                            </div>
                            <div class="flex flex-col space-y-1">
                                <label for="email" class="text-sm font-semibold text-gray-500">Email address</label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    id="email"
                                    name='email'
                                    autofocus
                                    class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                />
                            </div>
                            <div class="flex flex-col space-y-1">
                                <div class="flex items-center justify-between">
                                    <label for="password" class="text-sm font-semibold text-gray-500">Password</label>
                                  
                                </div>
                                <input
                                    onChange={(e) => setPassword(e.target.value)} 
                                    name='password'
                                    type="password"
                                    id="password"
                                    class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                />
                            </div>
                 
                            <div>
                                <button
                                    type="submit"
                                    class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-teal-500	 rounded-md shadow hover:bg-teal-600	focus:outline-none focus:ring-blue-200 focus:ring-4"
                                >
                                    Sing Up
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

export default SingUp;