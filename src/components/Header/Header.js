import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from './../../media/logo.png';

// &#xF002
const Header = () => {
    const location = useLocation();
    const [searchView, setSearchView] = useState(true);
    console.log(location.pathname);

    useEffect(() => {
        if ((location.pathname === '/auth/signin') || (location.pathname === '/auth/signup')) {
            setSearchView(false);
        }
        else {
            setSearchView(true);
        }
    }, [location])

    return (
        <div className={`flex justify-between items-center opacity-[2.5] font-bold w-[100%] p-5 ${searchView ? undefined : 'shadow-lg shadow-black'}`}>
            <div className='w-[20%] text-white'>
                <img className='w-[100px] brightness-[100%] text-white mx-[auto]' src={logo} alt="" />
            </div>
            <div className={`w-[30%] ${searchView ? 'inline' : 'hidden'}`}>
                <input className='w-[100%] opacity-[1.5] text-white text-xl border-2 border-gray-50 border-solid rounded-lg p-2 bg-[rgba(0,0,0,0.5)]' type="search" name="search" id="" placeholder="🔍 Search your Destination..." />
            </div>
            <nav className={`w-[30%] flex text-2xl  justify-evenly ${searchView ? 'text-white' : 'text-black'}`}>
                <NavLink>News</NavLink>
                <NavLink>Destination</NavLink>
                <NavLink>Blog</NavLink>
                <NavLink>Contact</NavLink>
            </nav>
            <div className={`w-[20%] text-black ${searchView ? 'inline' : 'hidden'}`}>
                <NavLink to={'/auth/signin'} className='mr-auto bg-[#ff9f04] px-[29px] py-[12px] rounded-md'>Log In</NavLink>
            </div>
        </div>
    );
};

export default Header;