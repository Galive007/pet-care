import React, { useContext } from 'react';
// import logo from '../assets/Logo-1.png'
import logo from '../assets/petcare/Slider/Log2.1.png'
import NavImg from '../assets/user.png'
import MyLink from './MyLink';
import { Link } from 'react-router';
import MyContainer from './MyContainer';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext)

    const handleLogout = () => {
        logOutUser()
            .then(() => {
                toast.success('Logged out successfully!')
            }).catch(() => {
                toast.error('Failed to log out');
            })

    }
    return (
        <MyContainer>
            <div className='flex justify-between items-center flex-col md:flex-row'>
                <div className='flex justify-center items-center '>
                    <Link to='/'>
                        <img className='w-1/3 mx-auto lg:w-[100px] md:w-1/3' src={logo} alt="" />
                    </Link>
                </div>
                <div className='nav flex items-center gap-6 mb-3 md:mb-0'>
                    <MyLink to='/' className='text-secondary'>Home</MyLink>
                    <MyLink to='/service' className='text-secondary'>Services</MyLink>
                    <MyLink to='/profile' className='text-secondary'>My Profile</MyLink>
                    {/* <NavLink to='/career'>Career</NavLink> */}
                </div>
                <div className='login-btn flex items-center gap-3 mb-3 md:mb-0'>
                    <img className='w-12 rounded-full' src={`${user ? user.photoURL : NavImg}`} alt="" title={user ? user.displayName : "Guest"} />

                    {user ?
                        <>
                            <button to='' onClick={handleLogout}
                                className='btn bg-primary text-base-100 px-8 py-2'>Logout</button>
                        </>
                        :
                        <>
                            <Link to='/auth/login' className='btn bg-primary text-base-100 px-8 py-2'>Login</Link>
                        </>
                    }
                </div>
            </div>
        </MyContainer>
    );
};

export default Navbar;