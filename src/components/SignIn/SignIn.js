import React from 'react';
import { NavLink } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className='border-[1px] text-start border-solid border-[#ABABAB] w-[30%] mx-auto mt-[5%] px-[55px] py-[37px]'>
            <h1 className='text-5xl font-bold'>Sign In</h1>
            <form>
                <div className='mt-[53.97px]'>
                    <label className='block' htmlFor="email">Email</label>
                    <input className='px-3 py-2 w-full border-b-[2px] border-solid border-[#C5C5C5]' type="email" name="email" id="" />
                </div>
                <div className='mt-[50px]'>
                    <label className='block' htmlFor="password">Password</label>
                    <input className='px-3 py-2 w-full border-b-[2px] border-solid border-[#C5C5C5]' type="password" name="password" id="" />
                </div>
                <p className='text-[#F9A51A] mt-[20px] font-bold'>
                    Forgot Password ? <NavLink className={'text-blue-500'}>Reset</NavLink>
                </p>
                <div className='mt-[30px] font-bold text-xl'>
                    <button className='bg-[#F9A51A] w-full px-5 py-2' type="submit">Sign In</button>
                </div>
                <p className='mt-5 font-bold text-xl'>
                    doesn't have an account ? <NavLink className={'text-blue-500'} to={'/auth/signup'}>Sign Up</NavLink>
                </p>
            </form>
        </div>
    );
};

export default SignIn;