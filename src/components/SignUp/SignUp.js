import React from 'react';
import { NavLink } from 'react-router-dom';
import fbIcon from '../../media/images/icons/fb.png'
import googleIcon from '../../media/images/icons/google.png'

const SignUp = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='border-[1px] text-start border-solid border-[#ABABAB] w-[30%] mx-auto mt-[3%] px-[55px] py-[37px]'>
                <h1 className='text-5xl font-bold'>Sign Up</h1>
                <form>
                    <div className='mt-[20px]'>
                        <label className='block' htmlFor="name">User Name</label>
                        <input className='px-3 py-2 w-full border-b-[2px] border-solid border-[#C5C5C5]' type="text" name="name" id="" />
                    </div>
                    <div className='mt-[15px]'>
                        <label className='block' htmlFor="photp">Photo URL</label>
                        <input className='px-3 py-2 w-full border-b-[2px] border-solid border-[#C5C5C5]' type="text" name="photoUrl" id="" />
                    </div>
                    <div className='mt-[15px]'>
                        <label className='block' htmlFor="email">Email</label>
                        <input className='px-3 py-2 w-full border-b-[2px] border-solid border-[#C5C5C5]' type="email" name="email" id="" />
                    </div>
                    <div className='mt-[15px]'>
                        <label className='block' htmlFor="password">Password</label>
                        <input className='px-3 py-2 w-full border-b-[2px] border-solid border-[#C5C5C5]' type="password" name="password" id="" />
                    </div>
                    <div className='mt-[15px]'>
                        <label className='block' htmlFor="Comfirm">Confirm Password</label>
                        <input className='px-3 py-2 w-full border-b-[2px] border-solid border-[#C5C5C5]' type="password" name="confirm" id="" />
                    </div>
                    <div className='mt-[20px] font-bold text-xl'>
                        <button className='bg-[#F9A51A] w-full px-5 py-2' type="submit">Sign Up</button>
                    </div>
                    <p className='mt-2 font-bold text-xl'>
                        Already have an account ? <NavLink className={'text-blue-500'} to={'/auth/signin'}>Sign In</NavLink>
                    </p>
                </form>
            </div>
            <div className='flex items-center w-[25%] mt-[10px]'>
                <hr className='border-1 border-solid border-black w-full' />
                <p className='mx-[5px] text-xl font-bold'>Or</p>
                <hr className='border-1 border-solid border-black w-full' />
            </div>
            <div className='w-[30%]'>
                <div className='px-2 py-2 my-2 flex items-center justify-between w-[100%] rounded-lg border-[1px] border-solid border-[#C7C7C7]'>
                    <img className='w-[37px] h-[37px]' src={fbIcon} alt="" />
                    <p className='font-bold text-xl mr-56'>Continue with facebook</p>
                </div>
                <div className='px-2 py-2 my-2 flex items-center justify-between w-[100%] rounded-lg border-[1px] border-solid border-[#C7C7C7]'>
                    <img className='w-[37px] h-[37px]' src={googleIcon} alt="" />
                    <p className='font-bold text-xl mr-56'>Continue with google</p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;