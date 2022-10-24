import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthProvider';
import fbIcon from '../../media/images/icons/fb.png'
import googleIcon from '../../media/images/icons/google.png'

const SignUp = () => {

    const {
        googleSignIn,
        fbSignIn, signUp,
        setProfile,
        emailVerification
    } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const conditions = form.conditions.checked;
        console.log(name, photoUrl, email, password, confirm, conditions);

        if (password.length < 6) {
            setError('Password must contain at least 6 characters');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contsin at least 2 upper case latter');
            return;
        }
        if (!/(?=.*[!@#$%^&*@])/.test(password)) {
            setError('Password must contain at least one special character(!@#$%^&*@)');
            return;
        }
        if (!/(?=.*\d)/.test(password)) {
            setError('Password must contain at least one number(0-9)');
            return;
        }

        signUp(email, password)
            .then(result => {
                const user = result.user;
                userProfile(name, photoUrl);
                varifyEmail();
                Swal.fire('Your account has been created successfully. Please check your email to verify the account.');
                form.reset();
                console.log(user);
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });
    }

    const userProfile = (name, photoUrl) => {
        const profile = {
            displayName: name,
            photoURL: photoUrl
        }
        setProfile(profile)
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });
    }
    const handleFbSignIn = () => {
        fbSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    const handleCondition = (event) => {
        if (event.target.checked) {
            setAccepted(true);
        }
        else {
            setAccepted(false);
        }
    }
    const varifyEmail = () => {
        emailVerification()
            .then(() => { })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className='border-[1px] text-start border-solid border-[#ABABAB] lg:w-[50%] w-[90%] mx-auto mt-[5%] lg:px-[55px] px-10 py-[37px]'>
                <h1 className='text-5xl font-bold'>Sign Up</h1>
                <form onSubmit={handleSubmit} className='w-full'>
                    <div className='flex flex-col-reverse lg:flex-row justify-evenly w-full'>
                        <div className='mx-5 w-full'>
                            <div className='mt-[20px]'>
                                <label className='block' htmlFor="name">User Name</label>
                                <input className='px-3 py-2 w-full border-b-[2px] border-solid border-[#C5C5C5]' type="text" name="name" id="" />
                            </div>
                            <div className='mt-[15px]'>
                                <label className='block' htmlFor="photp">Photo URL</label>
                                <input className='px-3 py-2 w-full border-b-[2px] border-solid border-[#C5C5C5]' type="text" name="photoUrl" id="" />
                            </div>
                            <div className='mt-[20px]'>
                                <input onChange={handleCondition} type="checkbox" name="conditions" id="" />
                                <label className='mx-2' htmlFor="conditions">Accept terms & conditions</label>
                            </div>
                        </div>
                        <div className='mx-5 w-full'>
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
                        </div>
                    </div>
                    <div>
                        <p className='text-red-500 font-bold'>
                            {error}
                        </p>
                    </div>
                    <div className='mt-[20px] lg:w-[20%] w-full lg:mx-auto font-bold text-xl'>
                        <button disabled={!accepted} className={`px-5 py-2 cursor-pointer ${!accepted ? 'bg-[#734b0c]' : 'bg-[#F9A51A]'}`} type="submit">Sign Up</button>
                    </div>
                    <p className='mt-2 font-bold text-xl'>
                        Already have an account ? <NavLink className={'text-blue-500'} to={'/auth/signin'}>Sign In</NavLink>
                    </p>
                </form>
            </div>
            <div className='flex items-center w-[90%] lg:w-[25%] mt-[10px]'>
                <hr className='border-1 border-solid border-black w-full' />
                <p className='mx-[5px] text-xl font-bold'>Or</p>
                <hr className='border-1 border-solid border-black w-full' />
            </div>
            <div className='lg:w-[30%] w-[90%]'>
                <div onClick={handleFbSignIn} className='cursor-pointer px-2 py-2 my-2 flex items-center justify-between w-[100%] rounded-lg border-[1px] border-solid border-[#C7C7C7]'>
                    <img className='w-[37px] h-[37px]' src={fbIcon} alt="" />
                    <p className='font-bold text-xl lg:mr-56'>Continue with facebook</p>
                </div>
                <div onClick={handleGoogleSignIn} className='cursor-pointer px-2 py-2 my-2 flex items-center justify-between w-[100%] rounded-lg border-[1px] border-solid border-[#C7C7C7]'>
                    <img className='w-[37px] h-[37px]' src={googleIcon} alt="" />
                    <p className='font-bold text-xl lg:mr-56'>Continue with google</p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;