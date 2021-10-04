import React from 'react';

const Control = props => (
    <div>
    <button
        className={`absolute flex justify-center items-center h-12 w-12 bg-gray-300 opacity-70 rounded-full top-1/2 transition-opacity ${props.align}-8  hover:opacity-100 `}
        onClick={props.onClick}
    >
        {props.label}
    </button>
    </div>
);

export default Control;