import React from 'react';
import { Link, navigate } from 'gatsby';

import isLoggedIn, { logout } from '../../services/auth';

import Button from '../buttons/button2';

import logo from '../../images/logo.png';
import BagIcon from '../../assets/bag.svg';

import * as styles from '../../styles/layout/nav.module.scss';

const Nav = props => (
    <nav className={`flex justify-between relative z-40 py-6 px-8 bg-${props.bgColor || 'cream'} tab-port:hidden`}>
        <Link to='/'>
            <img src={logo} alt='LOGO' className='w-30 h-10 object-cover' />
        </Link>

        <ul className='flex items-center space-x-16'>
            <li className={styles['item']}><Link to='/about'>About</Link></li>
            <li className={styles['item']}><Link to='/'>Contact</Link></li>
            <li className={styles['item']}><Link to='/me'>Profile</Link></li>
        </ul>

        <div className='space-x-8 flex items-center'>
            <Link to='/shop' className='flex items-center'><BagIcon className='mr-1' /> Shop</Link>
            {
                isLoggedIn()
                    ? <Button className='py-1 px-3 rounded-md border-2 border-violet' onClick={() => logout(() => navigate('/login'))}>Logout</Button>
                    : <Button isLink={true} to='/login' className='py-1 px-3 rounded-md border-2 border-violet'>Login</Button>
            }
        </div>
    </nav>
);

export default Nav;