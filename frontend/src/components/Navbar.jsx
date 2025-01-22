import {React,useState} from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Profile from '../assets/profile.png'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false); // State for the mobile menu
  const navItems = ["Home", "Planner", "Kahitri", "Team"];

    return (
          <div className="relative flex items-center justify-between w-full px-6 py-4 bg-transparent text-white sticky top-0 z-50">
            <img src={Logo} className='w-32'/>
          <div className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
            </div> */}
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="bg-white text-black px-4 py-2 rounded sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <div
              className={`w-6 h-1 bg-white rounded-md mb-1 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-white rounded-md mb-1 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-white rounded-md transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            ></div>
          </button>

          {/* Middle Nav Links (Desktop) */}
          <div className="hidden sm:flex items-center space-x-6 bg-gradient-to-r bg-nav_purple2 text-white bg-opacity-100 shadow-lg px-6 py-2 rounded-2xl shadow-md mx-auto">
            {navItems.map((item) => {
              const path = `/${item.replace(/\s+/g, "-").toLowerCase()}`;
              return (
                <NavLink
                  key={item}
                  to={path}
                  className={({ isActive }) =>
                    `relative text-base font-medium px-3 py-2 transition-all duration-300 ${
                      isActive
                        ? "text-white shadow-lg"
                        : "text-gray-400 hover:text-white"
                    }`
                  }
                  aria-current={({ isActive }) => (isActive ? "page" : undefined)}
                >
                  {item}
                </NavLink>
              );
            })}
          </div>

          {/* Right Button (Desktop) */}
          <div className="hidden sm:block mr-5">
            <NavLink
              to="/launch"
              className="px-4 sm:px-6 py-2  text-white font-semibold rounded-full shadow-md hover:opacity-90 transition-all duration-300"
            >
              <img src={Profile} className='w-12'/>
            </NavLink>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-black bg-opacity-50 shadow-lg sm:hidden z-50">
              <div className="flex flex-col items-center space-y-4 py-4">
                {navItems.map((item) => {
                  const path = `/${item.replace(/\s+/g, "-").toLowerCase()}`;
                  return (
                    <NavLink
                      key={item}
                      to={path}
                      className={({ isActive }) =>
                        `relative text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-blue-700 to-purple-700 text-white shadow-lg"
                            : "text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600"
                        }`
                      }
                      onClick={() => setIsOpen(false)} // Close menu on link click
                    >
                      {item}
                    </NavLink>
                  );
                })}
                <NavLink
                  to="/launch"
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-md hover:opacity-90 transition-all duration-300"
                  onClick={() => setIsOpen(false)} // Close menu on button click
                >
                  Launch Webapp
                </NavLink>
              </div>
            </div>
          )}
        </div>
    );
};

export default Navbar;
