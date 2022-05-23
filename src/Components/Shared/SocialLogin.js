import React, { useEffect } from 'react';
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import useToken from '../../Hooks/useToken';
import Loading from './Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gituser, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [token] = useToken(user || gituser);
   
        if (token || user || gituser) {
            navigate(from, { replace: true });
        }
   
    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className='text-red-500'>Error: {error?.message} {error1?.message} </p>
    }

    return (
        <div class="flex flex-col space-y-5">
            <span class="flex items-center justify-center space-x-2">
                <span class="h-px bg-gray-400 w-14"></span>
                <span class="font-normal text-gray-500">or login with</span>
                <span class="h-px bg-gray-400 w-14"></span>
            </span>
            {errorElement}
            <div class="flex flex-col space-y-4">
                <p
                    onClick={() => signInWithGithub()}
                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                >
                    
                    <span class="text-sm font-medium text-gray-800 group-hover:text-white">Github</span>
                </p>
                <p
                    onClick={() => signInWithGoogle()} 
                    class="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                >
                    <span>

                    </span>
                    <span  class="text-sm font-medium text-blue-500 group-hover:text-white">Google</span>
                </p>
            </div>
        </div>
    );
};

export default SocialLogin;