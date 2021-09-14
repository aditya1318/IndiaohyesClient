import React from 'react';
import Button from './buttons/button2';

import source from '../images/test.png';

const Service = ({ data }) => (
    <div className='bg-cream p-7 rounded-xl'>
        <img src={source} className='-mt-36' />
        <h3 className='text-2xl'>{data.title}</h3>
        <p className='mt-3'>{data.description}</p>
        <div className='text-center mt-7'>
            <Button isLink={true} to='/services/any'>More Details</Button>
        </div>
    </div>
);

export default Service;