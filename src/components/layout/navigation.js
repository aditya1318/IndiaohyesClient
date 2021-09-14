import React from 'react';
import { Link } from 'gatsby';

import Button from '../../components/button';

import logo from '../../images/logo.png';
import BagIcon from '../../assets/bag.svg';
import  MenuIcon  from "../../assets/menu.svg";
import  ProfileIcon  from "../../assets/user.svg";

import * as styles from '../../styles/layout/nav.module.scss';

const Nav = () => (
    <nav className='flex justify-between py-6 px-8 bg-cream ' >
        <img src={logo} alt='LOGO' className='w-25 h-10 mt:6 sm:w-25 sm:h-10 md:w-30 md:h-10' />

        <ul className='hidden md:flex items-center space-x-16 md:space-x-12 lg:space-x-14 '>
            <li className={styles['item']}><Link to='/'>Home</Link></li>
            <li className={styles['item']}><Link to='/'>About</Link></li>
            <li className={styles['item']}><Link to='/'>Contact</Link></li>
            <li className={styles['item']}><Link to='/'>Tv</Link></li>
        </ul>

        <div className='hidden md:flex md:space-x-7 items-center'>
        <Link to='/' className='flex items-center'><BagIcon className='mr-1' /> Shop</Link>
            <div isLink={true} to='/login' className='py-1 px-3 rounded-md border-2 border-violet'>Login</div>
            
        </div>
        
   
        <div className='md:hidden flex item-center space-x-3' >
           
            <button>
            <ProfileIcon className='w-4 h-4'/>
            </button>
            <button>
                <MenuIcon className='w-4 h-4'/>
            </button>
        </div>
    </nav>
);

export default Nav;