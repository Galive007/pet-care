import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { loginUser, forgetPassword, googleLogin } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const emailRef = useRef()
    const location = useLocation()
    // console.log(location);
    const navigate = useNavigate()


    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password);
        const specialRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_\-+=\[{\]};:'",<.>/?\\|`~]).{6,}$/;
        if (!specialRegEx.test(password)) {
            setError('Passwords must be 6 character and one upperCase ,One lowercase and one special characters')
        }
        loginUser(email, password)
            .then((result) => {
                const user = result.user
                // console.log(user);
                toast.success('Login Successfully', user)
                navigate(`${location.state ? location.state : '/'}`)
            }).catch((error) => {
                const errorCode = error.code
                setError(errorCode)
                if (errorCode === 'auth/invalid-email') {
                    toast.error('Invalid email format. Please check your email.');
                } else if (errorCode === 'auth/user-disabled') {
                    toast.error('This account has been disabled. Contact support.');
                } else if (errorCode === 'auth/user-not-found') {
                    toast.error('No user found with this email.');
                } else if (errorCode === 'auth/wrong-password') {
                    toast.error('Incorrect password. Please try again.');
                } else if (errorCode === 'auth/too-many-requests') {
                    toast.error('Too many failed attempts. Please try again later.');
                } else {
                    toast.error('Login failed. Please try again.');
                }

            })
    }
    const handleGoogleLogin = () => {
        // console.log('cl');
        googleLogin()
            .then(result => {
                const user = result.user
                // console.log(user);

                toast.success('Login Successfully', user)
                navigate(`${location.state ? location.state : '/'}`)
            }).catch(error => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                setError(errorMessage)
                toast.error(email)
            })

    }
    const handleForgetPassword = () => {
        // console.log('clicked');
        const email = emailRef.current.value
        forgetPassword(email)
            .then(() => {
                toast.success('Password reset successfully,Please check Your Email!')
            }).catch(err => {
                const errorCode = err.code
                setError(errorCode)
            })

    }
    const handleToggleShowPassword = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    return (
        <div>
            <div onClick={handleGoogleLogin} className='text-center pt-10 md:pt-23 lg:pt-20'>
                <button class="btn btn-primary px-10 text-xl">
                    <FcGoogle />
                    Login with Google
                </button>
            </div>
            <form onSubmit={handleLogin} className='flex justify-center items-center pb-10 md:pb-23 lg:pb-38'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend text-center text-primary text-xl">Login</legend>

                    <label className="label">Email</label>
                    <input type="email"
                        ref={emailRef}
                        name='email' className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <div className='relative'>
                        <input type={showPassword ? 'text' : 'password'}
                            name='password' className="input" placeholder="Password" />
                        <button onClick={handleToggleShowPassword} className='absolute top-3.5 right-4'>{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
                    </div>
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    <div onClick={handleForgetPassword}><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                    <p className='font-semibold'>Dont’t Have An Account ?  <Link to='/auth/register' className='text-[#D72050] hover:underline'>Register</Link></p>
                </fieldset>
            </form>

        </div>


    );
};

export default Login;