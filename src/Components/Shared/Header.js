import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
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
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/Blog'>Blog</NavLink></li>
        <li><NavLink to='/portfolio'>My Portfolio</NavLink></li>
        <li>{user &&




            <NavLink to='/dashboard'>DashBoard</NavLink >}</li>
        <li>{user
        ?

            <>
                <button onClick={handleSignOut}>Sing Out</button>
                <div class="avatar online">
                    <div class="w-5 rounded-full">
                        <img src={user?.displayName} alt='' />
                    </div>
                </div>

            </>

            : <NavLink to='/login'>Login</NavLink > }</li>
       

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
                        <Link to='/home' class="btn btn-ghost normal-case text-xl">Computer House</Link>
                    </div>
                    <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal p-0">
                            {menuItem}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>

                </div>
               
              

            </div>
        </div>
    );
};

export default Header;