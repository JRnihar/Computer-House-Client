import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink,Outlet } from 'react-router-dom';
import auth from '../../Firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const DashBoard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content bg-teal-200">
                {/* <!-- Page content here --> */}
                {/* <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                <h2 className='text-2xl text-center mt-5 font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>

            </div>
            <div class="drawer-side ">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-slate-500 text-base-content">
                    <li className='text-white'><NavLink to='/dashboard/profile'>My Profile</NavLink></li>




                   { 
                   admin
                            ?
                        <>
                                <li className='text-white'><NavLink to='/dashboard/manageOrder'> Manage All Orders</NavLink></li>
                                <li className='text-white'><NavLink to='/dashboard/product'>Add A Product</NavLink></li>
                                <li className='text-white'><NavLink to='/dashboard/makeAdmin'>Make Admin</NavLink></li>
                                <li className='text-white'><NavLink to='/dashboard/manageProducts'>Manage Products</NavLink></li>
                    </>
            
                  
                   : <>
                                <li className='text-white'><NavLink to='/dashboard'>My order</NavLink></li>
                                <li className='text-white'><NavLink to='/dashboard/review'>My Review</NavLink></li>
                                
                    </>}

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;