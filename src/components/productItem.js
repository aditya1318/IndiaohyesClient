import React from 'react';
import { URL } from '../services/api';

const ProductItem = ({ data }) => (
    <div className='bg-cream  h-24  w-80 rounded-xl flex px-4 '>
        <div className='h-24 w-20'>
            <img src={`${URL}/images/${data.image}`} alt='ITEM' className=' object-cover' />
        </div>

        <div className=' flex flex-col justify-around h-24 my-auto py-3 ml-2 w-full '>
            <div className='flex flex-col'>
                <span>{data.title}</span>
                <span className='text-xs text-gray-500'>great quality</span>
            </div>
            <div className='w-full justify-between flex'>
                <span className='text-purple-400 text-sm '>{data.price}</span>
                <span className='block'>+</span>
            </div>
        </div>
    </div>
);

export default ProductItem;