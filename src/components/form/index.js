import React from 'react';

import Heading from '../heading';
import Curtain from '../abstracts/curtain';
import Bubble from '../abstracts/bubble';
import Intro from './intro';

const Form = props => {
    return (
        <div className='grid grid-cols-2 pr-10 pb-10 gap-20 min-h-screen'>
            <form action='#' className='relative space-y-10 px-20 self-center' autoComplete='off' onSubmit={props.onSubmit}>
                <Curtain coordinates='-left-10 -top-20' />
                <Bubble color='cream' coordinates='-top-16 left-8' />

                <Heading>{props.title}</Heading>

                {props.children}
            </form>

            <Intro />
        </div>
    );
};

export default Form;