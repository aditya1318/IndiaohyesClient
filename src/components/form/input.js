import React from 'react';

const Input = props => (
    <input
        className='w-full py-3 border-b-2 border-gray-300 text-black focus:border-gray-400'
        id={props.id || ''}
        type={props.type || 'text'}
        defaultValue={props.defaultValue || ''}
        required={true}
    />
);

export default Input;