import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import FastLogo from '../../images/logo11.png'
import LastLogo from '../../images/logo22.png'
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
const Navbar = () => {
    const [click, setClick] = useState(false)
    const location = useLocation()
    const path = location.pathname
    /*========================= user work =================   */
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
    return (
        <div style={path.includes('/news') ? { color: 'white' } : path.includes('/destination') ? { color: 'white' } : { color: 'black' }} className='py-7 text-xl   font-mono font-medium'>
            <div className='px-2 md:px-10 flex items-center justify-between md:justify-evenly'>
                <img className='w-16 md:w-20 ' src={path.includes('/news') ? FastLogo : path.includes('/destination') ? FastLogo : LastLogo} alt="" />
                <input className='px-2 md:px-10 input-style' type="text" placeholder='Search Your Destination' />
                <nav className='hidden md:block'>
                    <div className='flex gap-12 items-center'>
                        <Link to='/news'>News</Link>
                        <Link to='/destination'>Destination</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/contact'>Contact</Link>
                        {
                            user?.uid ? <div onClick={logout}>
                                <img className='w-10 rounded-full' src={require('../../images/profile.jpg')} alt="" />
                            </div> : <Link to='/login' className="bg-[#fcb100] px-4 text-black rounded ">Login</Link>
                        }

                    </div>
                </nav>
                <div onClick={() => setClick(!click)} className="md:hidden">
                    {
                        click ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />
                    }
                </div>

            </div>
            {
                click ? <div className='flex text-center flex-col  gap-5 md:hidden'>
                    <Link to='/news'>News</Link>
                    <Link to='/destination'>Destination</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link to='/contact'>Contact</Link>
                    {
                        user?.uid ? <div onClick={logout}>
                            <img className='w-10 rounded-full' src={require('../../images/profile.jpg')} alt="" />
                        </div> : <Link to='/login' className="bg-[#fcb100] px-4 text-black rounded ">Login</Link>
                    }
                </div> : ''
            }
        </div>
    );
};

export default Navbar;