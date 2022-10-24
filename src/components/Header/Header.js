import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import logo from './../../media/logo.png';
import { FaUserCircle, FaBars } from 'react-icons/fa';

// &#xF002
const Header = () => {
    const location = useLocation();
    const [searchView, setSearchView] = useState(true);
    const { user, logOut } = useContext(AuthContext);
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if ((location.pathname === '/auth/signin') || (location.pathname === '/auth/signup')) {
            setSearchView(false);
        }
        else {
            setSearchView(true);
        }
    }, [location])

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className={`lg:flex justify-between items-center opacity-[2.5] font-bold w-[100%] p-5 ${searchView ? undefined : 'shadow-lg shadow-black'}`}>
            <div className='lg:w-[20%] w-full text-white lg:block flex items-center justify-between'>
                <img onClick={() => navigate('/')} className='lg:w-[100px] cursor-pointer w-[60px] brightness-[100%] text-white lg:mx-[auto]' src={logo} alt="" />
                <div className='w-full lg:hidden block'>
                    {
                        user?.uid &&
                        <div className='flex flex-row-reverse items-center my-2'>
                            <p className='text-white w-full text-2xl'>{user?.displayName}</p>
                            {
                                user.photoURL ?
                                    <img className='rounded-full h-[50px] w-[50px]' src={user?.photoURL} alt="" />
                                    :
                                    <FaUserCircle className='text-white rounded-full h-[50px] w-[50px]' />
                            }
                        </div>
                    }
                </div>
                <FaBars onClick={() => setMenu(!menu)} className='lg:hidden block text-3xl' />
            </div>
            <div className={`w-[30%] ${searchView ? 'inline' : 'hidden'}`}>
                <input className='w-[100%] my-5 lg:my-0 opacity-[1.5] text-white text-xl border-2 border-gray-50 border-solid rounded-lg p-2 bg-[rgba(0,0,0,0.5)]' type="search" name="search" id="" placeholder="🔍 Search your Destination..." />
            </div>
            <nav className={`lg:w-[30%] lg:flex lg:static absolute right-0 pr-5 lg:pr-0 ${menu ? 'top-[70px] bg-black lg:bg-transparent rounded-lg' : 'top-[-1000000000px]'} text-2xl  justify-evenly duration-500 ease-in ${searchView ? 'text-white' : 'text-black'}`}>
                <NavLink className={'lg:inline block text-start px-5 py-2'}>News</NavLink>
                <NavLink className={'lg:inline block text-start px-5 py-2'}>Destination</NavLink>
                <NavLink className={'lg:inline block text-start px-5 py-2'}>Blog</NavLink>
                <NavLink className={'lg:inline block text-start px-5 py-2'}>Contact</NavLink>
            </nav>
            <div className='w-[20%] lg:block hidden'>
                {
                    user?.uid &&
                    <div className='flex items-center'>
                        <p className='text-white w-full text-2xl'>{user?.displayName}</p>
                        {
                            user.photoURL ?
                                <img className='rounded-full h-[50px] w-[50px]' src={user?.photoURL} alt="" />
                                :
                                <FaUserCircle className='text-white rounded-full h-[50px] w-[50px]' />
                        }
                    </div>
                }
            </div>
            {
                user?.uid ?
                    <div className={`lg:w-[20%] w-full text-black ${searchView ? 'inline' : 'hidden'}`}>
                        <button onClick={handleSignOut} className='lg:mr-auto bg-[#ff9f04] px-[29px] py-[12px] lg:w-[50%] w-full rounded-md'>Sign Out</button>
                    </div>
                    :
                    <div className={`lg:w-[20%] w-full text-black ${searchView ? 'inline' : 'hidden'}`}>
                        <NavLink to={'/auth/signin'} className='lg:mr-auto bg-[#ff9f04] px-[29px] py-[12px] lg:w-[50%] w-full rounded-md'>Sign In</NavLink>
                    </div>
            }

        </div>
    );
};

export default Header;