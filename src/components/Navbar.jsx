import React from "react";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import user from "../assets/user.png";
import cart from "../assets/cart.png";
import menu from "../assets/menu.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='flex items-center justify-between py-5 font-medium'>
            <img src={logo} className="max-w-48 w-full" alt="" /> 

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>

                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <img src={search} className='w-6 cursor-pointer' alt="" />

                <div className='group relative'>
                    <img className='w-6 cursor-pointer' src={user} alt="" />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className="relative">
                    <img src={cart} className='w-6 min-w-6' alt="" />
                    <p className='absolute top-[-4px] right-[-6px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
                </Link>
                <img onClick={() => setVisible(true)} src={menu} className='w-5 cursor-pointer sm:hidden' alt="" />
            </div>
        </div>
    );
};

export default Navbar;