import React from 'react';
import { Link, navigate } from 'gatsby';

import isLoggedIn, { logout } from '../../services/auth';

import Button from '../buttons/button2';

import logo from '../../images/logo.png';
import BagIcon from '../../assets/bag.svg';

import * as styles from '../../styles/layout/nav.module.scss';

const Nav = props => (
    <nav className={`flex justify-between relative z-40 py-4 px-8 bg-${props.bgColor || 'cream'} `}>
        <Link to='/'>
            <img src={logo} alt='LOGO' className='w-30 h-10 object-cover' />
        </Link>

        <ul className='flex items-center space-x-16 tab-port:hidden'>
            <li className={styles['item']}><Link to='/about'>About</Link></li>
            <li className={styles['item']}><Link to='/'>Contact</Link></li>
            <li className={styles['item']}><Link to='/profile'>Profile</Link></li>
        </ul>

        <div className='space-x-8 flex items-center tab-port:hidden'>
            <Link to='/shop' className='flex items-center'><BagIcon className='mr-1' /> Shop</Link>
            {
                isLoggedIn()
                    ? <Button className='py-1 px-3 rounded-md border-2 border-violet' onClick={() => logout(() => navigate('/login'))}>Logout</Button>
                    : <Button isLink={true} to='/login' className='py-1 px-3 rounded-md border-2 border-violet'>Login</Button>
            }
        </div>

        <div className=' hidden tab-port:space-x-8 tab-port:flex tab-port:items-center '>
            <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
</svg>
</div>
 <div>
<svg xmlns="http://www.w3.org/2000/svg " class="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
</svg>
</div>
        </div>

        
    </nav>
);

export default Nav;