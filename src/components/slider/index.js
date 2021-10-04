import React, { useState } from 'react';

import Slide from './slide';
import Control from './control';

import ArrowLeft from '../../assets/arrowleft.svg';
import ArrowRight from '../../assets/arrowright.svg';

const Slider = props => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const MAX_SLIDES = props.children?.length;

    return (
        <div className='w-full flex justify-between items-center'>
        <div className='relative overflow-x-hidden' style={{ minHeight: props.minHeight || '40vh' }}>
            {
                props.children?.map((child, slideNumber) => (
                    <Slide key={slideNumber} translate={100 * (slideNumber - currentSlide)}>
                        {child}
                    </Slide>
                ))
                ||
                <></>
            }

            <Control align='left' label={<ArrowLeft />} onClick={() => setCurrentSlide(currentSlide - 1 >= 0 ? currentSlide - 1 : MAX_SLIDES - 1)} />
            <Control align='right' label={<ArrowRight />} onClick={() => setCurrentSlide((currentSlide + 1) % MAX_SLIDES)} />
            </div>
        </div>
    );
};

export default Slider;