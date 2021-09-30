import React from 'react';

import Curtain from '../abstracts/curtain';
import Bubble from '../abstracts/bubble';

import LogoImg from '../../images/logo.png';

import InstagramIcon from '../../assets/instagram.svg';
import FacebookIcon from '../../assets/facebook.svg';
import LinkedInIcon from '../../assets/linkedin.svg';
import TwitterIcon from '../../assets/twitter.svg';

const Intro = props => (
    <div className={`mt-10 relative flex flex-col bg-cream p-8 overflow-hidden shadow-xl tab-port:shadow-none ${props.className}`}>
        <img src={LogoImg} alt='LOGO' className='w-48 self-center mt-12' />

        <p className='mt-16'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>

        <p className='mt-4 mb-auto'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
        </p>

        <div className='flex space-x-6 tab-port:mt-60'>
            <InstagramIcon />
            <FacebookIcon />
            <LinkedInIcon />
            <TwitterIcon />
        </div>

        <Curtain coordinates='bottom-0 right-0' />
        <Bubble coordinates='bottom-16 right-24' />
    </div>
);

export default Intro;