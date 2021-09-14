import React from 'react';

import Button from './button2';

import TickIcon from '../assets/tick.svg';

const Package = ({ data, ...props }) => (
    <div className='bg-white p-4 rounded-xl space-y-8 shadow-md'>
        <h2 className='text-violet text-4xl text-center'>₹{data.price}</h2>
        <h2 className='font-medium capitalize text-center'>{data.title} package</h2>

        <ul className='text-gray-600 space-y-4 px-6'>
            {
                data.points.map(pt => <li className='flex'><TickIcon className='mr-6' />{pt}</li>)
            }
        </ul>

        <Button onClick={() => {
            props.setComponentState(1);
            props.setActivePackage(data);
        }} className='w-full'>Next step</Button>
    </div>
);

export default Package