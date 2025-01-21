import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Profile from '../assets/profile.png'

const Navbar = () => {
    return (
        <nav className="bg-black_c text-white_c shadow-md fixed top-0 left-0 w-full z-50">
            <div className="container mx-5 px-0 py-3 flex justify-between items-center">
                <div className="text-xl font-bold">
                    <NavLink to="/" className="hover:text-gray-300">
                      <img src={Logo} className='w-30 h-20'/> 
                    </NavLink>
                </div>

                {/* Navigation Links */}
                <div className="flex space-x-6">
                    <NavLink 
                        to="/home" 
                        className={({ isActive }) => 
                            isActive 
                              ? "text-white h-10 w-32 flex items-center justify-center" 
                              : "hover:text-green_c text-xl h-10 w-28 flex items-center justify-center"}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className={ ({ isActive }) => 
                            isActive 
                              ? "text-white_c h-10 w-32 flex items-center justify-center" 
                              : "hover:text-green_c text-xl h-10 w-28 flex items-center justify-center"}
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to="/services" 
                        className={({ isActive }) => 
                            isActive 
                            ? "text-white_c h-10 w-32 flex items-center justify-center" 
                            : "hover:text-green_c text-xl h-10 w-28 flex items-center justify-center"}
                    >
                        Services
                    </NavLink>
                    <NavLink 
                        to="/contact" 
                        className={({ isActive }) => 
                            isActive 
                            ? "text-white_c h-10 w-32 flex items-center justify-center" 
                            : "hover:text-green_c text-xl h-10 w-28 flex items-center justify-center"}
                    >
                        Contact
                    </NavLink>
                </div>

                {/* User Profile */}
                <div className="flex items-center space-x-2 mr-0 px-0 py-3">
                    {/*<span className="hidden sm:block">Hello, User</span> */}
                    <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                        <NavLink to="/profile" className="text-gray-300 hover:text-white">
                            <i className="fas fa-user"></i>
                            <img src={Profile} className='w-30 h-20'/> 
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
