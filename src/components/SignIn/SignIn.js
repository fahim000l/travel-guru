import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthProvider';

const SignIn = () => {

    const { signIn, forgetPassword } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    Swal.fire('Your account is not verified yet');
                }
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    const handleUserEmail = (event) => {
        setUserEmail(event.target.value);
        console.log(userEmail);
    }

    const passwordReset = () => {
        if (!userEmail) {
            Swal.fire('Please provide your email.');
        }
        forgetPassword(userEmail)
            .then(() => {
                Swal.fire('Please check your email to reset the password.');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });

    }
    return (
        <div className='border-[1px] w-[90%] text-start border-solid border-[#ABABAB] lg:w-[30%] mx-auto mt-[5%] lg:px-[55px] px-10 py-[37px]'>
            <h1 className='text-5xl font-bold'>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className='mt-[53.97px]'>
                    <label className='block' htmlFor="email">Email</label>
                    <input onBlur={handleUserEmail} className='px-3 py-2 w-full border-b-[2px] border-solid border-[#C5C5C5]' type="email" name="email" id="" />
                </div>
                <div className='mt-[50px]'>
                    <label className='block' htmlFor="password">Password</label>
                    <input className='px-3 py-2 w-full border-b-[2px] border-solid border-[#C5C5C5]' type="password" name="password" id="" />
                </div>
                <div className='mt-[20px]'>
                    <p className='text-red-500 font-bold'>
                        {error}
                    </p>
                </div>
                <div className='mt-[20px] font-bold text-xl'>
                    <button className='bg-[#F9A51A] w-full px-5 py-2' type="submit">Sign In</button>
                </div>
            </form>
            <p className='text-[#F9A51A] mt-[20px] font-bold'>
                Forgot Password ? <button onClick={passwordReset} className={'text-blue-500'}>Reset</button>
            </p>
            <p className='mt-5 font-bold text-xl'>
                doesn't have an account ? <NavLink className={'text-blue-500'} to={'/auth/signup'}>Sign Up</NavLink>
            </p>
        </div>
    );
};

export default SignIn;