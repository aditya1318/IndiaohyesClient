import React from 'react';
import { Link } from 'gatsby';

import Button from '../buttons/button2';

import logo from '../../images/logo.png';
import BagIcon from '../../assets/bag.svg';

import * as styles from '../../styles/layout/nav.module.scss';

const Nav = () => (
    <nav className='flex justify-between py-6 px-8 bg-cream tab-port:hidden'>
        <img src={logo} alt='LOGO' className='w-30 h-10 object-cover' />

        <ul className='flex items-center space-x-16'>
            <li className={styles['item']}><Link to='/'>Home</Link></li>
            <li className={styles['item']}><Link to='/'>About</Link></li>
            <li className={styles['item']}><Link to='/'>Contact</Link></li>
            <li className={styles['item']}><Link to='/'>Tv</Link></li>
        </ul>

        <div className='space-x-8 flex items-center'>
            <Link to='/' className='flex items-center'><BagIcon className='mr-1' /> Shop</Link>
            <Button isLink={true} to='/login' className='py-1 px-3 rounded-md border-2 border-violet'>Login</Button>
        </div>
    </nav>
);

export default Nav;