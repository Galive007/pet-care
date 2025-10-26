import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const { createUser, updateUser, setUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegistration = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        // console.log({ email, password });
        const specialRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_\-+=\[{\]};:'",<.>/?\\|`~]).{6,}$/;
        if (!specialRegEx.test(password)) {
            setError('Passwords must be 6 character and one upperCase ,One lowercase and one special characters')
        }
        createUser(email, password)
            .then(result => {
                const user = result.user
                // console.log(user);
                toast.success('Registration Successfully', user)
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({
                            ...user, displayName: name, photoURL: photo
                        })
                        navigate('/')
                    }).catch((err) => {
                        console.error('Profile update failed:', err.message);
                        toast.warning('Account created, but profile update failed.');
                        setUser(user)
                    })

                form.reset()

            }).catch(error => {
                const errorCode = error.code;
                toast.error('Registration Not Completed', errorCode)
                switch (errorCode) {
                    case 'auth/email-already-in-use':
                        toast.error('This email is already registered.');

                        break;

                    case 'auth/invalid-email':
                        toast.error('Invalid email format.');

                        break;

                    case 'auth/operation-not-allowed':
                        toast.error('Email/password registration is disabled.');

                        break;

                    case 'auth/weak-password':
                        toast.error('Password should be at least 6 characters.');

                        break;

                    case 'auth/missing-password':
                        toast.error('Please enter a password.');

                        break;

                    default:
                        toast.error('Registration failed. Please try again.');

                }

            })
    }
    const handleToggleShowPassword = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }
    return (
        <div>
            <form onSubmit={handleRegistration} className='flex justify-center items-center py-10 md:py-23 lg:py-40'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend text-center text-primary text-xl">Registration</legend>

                    <label className="label">Name</label>
                    <input type="text"
                        name='name' className="input" placeholder="Name" required />

                    <label className="label">Photo</label>
                    <input type="text"
                        name='photo' className="input" placeholder="PhotoURL" required />


                    <label className="label">Email</label>
                    <input type="email"
                        name='email' className="input" placeholder="Email" required />

                    <label className="label">Password</label>
                    <div className='relative'>
                        <input type={showPassword ? 'text' : "password"}
                            name='password'
                            className="input" placeholder="Password" required />
                        <button className='absolute top-3.5 right-4' onClick={handleToggleShowPassword}>{showPassword ? <FaEyeSlash /> : <FaEye />}</button>
                    </div>
                    <div>
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    </div>
                    <button className="btn btn-neutral mt-4">Registration</button>

                    <p className='font-semibold'>Already Have An Account ?  <Link to='/auth/login' className='text-[#D72050] hover:underline'>Login</Link></p>
                </fieldset>
            </form>
        </div >
    );
};

export default Register;