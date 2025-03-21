import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/authcontext/AuthContext';

const Navbar = () => {
    const { user, userLogOut } = useContext(AuthContext)

    const handleLogout = () => {
        userLogOut().then(() => {
            // signout successfull
        }).catch(error => {
            console.log("Error", error.message)
        })
    }

    const links =
        <>
            <NavLink>Home</NavLink>
            <NavLink to="/myApplications">My Applications</NavLink>
            <NavLink to="/myPostedJobs">My Posted Jobs</NavLink>
            <NavLink to="/addJobs">Add Jobs</NavLink>
        </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Job Portal</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {
                    user ? <>
                        {user.email}
                        <button className='cursor-pointer' onClick={handleLogout}>Logout</button>
                    </>
                        : <><NavLink to="/registration">Register</NavLink>
                            <NavLink to="/login" className="btn">Login</NavLink></>
                }
            </div>
        </div>
    );
};

export default Navbar;