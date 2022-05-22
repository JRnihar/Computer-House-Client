import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import Loading from './Loading';


const Header = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate()

    const handleSignOut = () => {

        signOut(auth);
        navigate('/')
    }
    if (loading) {
        return <Loading></Loading>
    }
    const menuItem = <>
        {/* <li><Link to='/'>Home</Link></li> */}
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Blog'>Blog</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/login'>About</Link></li>
        <li>{user
        ?

            <button onClick={handleSignOut}>Sing Out</button>

          :  <Link to='/login'>About</Link>}</li>

    </>
    return (
        <div>
            <div>
                <div class="navbar bg-base-100">
                    <div class="navbar-start">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menuItem}
                            </ul>
                        </div>
                        <a class="btn btn-ghost normal-case text-xl">Doctor Portal</a>
                    </div>
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal p-0">
                            {menuItem}
                        </ul>
                    </div>

                </div>
              

            </div>
        </div>
    );
};

export default Header;