import React from 'react'
import { Link, NavLink, Outlet } from "react-router-dom";

function Navbar() {
    return (
        <div className='sticky z-50 top-0 w-full bg-[#060d11] text-white font-sans'>
            <div className='w-full max-w-2xl mx-auto flex flex-row items-center justify-between px-4 py-2'>
                < div className='text-xl font-extrabold' >
                    TASKS
                </ div>

                <ul className='flex flex-row gap-5 font-medium'>
                    <li className=' transition ease-in-out duration-300'>

                        <NavLink
                            to="/"
                            className={({ isActive }) => 
                            `block py-2 px-3 ${isActive ? "text-orange-600" : "text-white"} duration-200 `
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className='transition ease-in-out duration-300'>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `block py-2 px-3 ${isActive ? "text-orange-600" : "text-white"} duration-200 `
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li className='transition ease-in-out duration-300'>
                        <NavLink
                            to="/contactus"
                            className={({ isActive }) =>
                                `block py-2 px-3 ${isActive ? "text-orange-600" : "text-white"} duration-200 `
                            }
                        >
                            Contact Us
                        </NavLink>
                    </li>
                    
                    <Outlet/>
                </ul>

            </div >
        </div>
    )
}

export default Navbar