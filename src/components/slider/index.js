import React, { useState } from 'react';

import Slide from './slide';
import Control from './control';

import ArrowLeft from '../../assets/arrowleft.svg';
import ArrowRight from '../../assets/arrowright.svg';

const Slider = props => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const MAX_SLIDES = props.children?.length;

    return (
        <div className='flex justify-between items-center 'style={{ minHeight: props.minHeight || '40vh' }}>
            <div>
             <Control align='left' label={<ArrowLeft />} onClick={() => setCurrentSlide(currentSlide - 1 >= 0 ? currentSlide - 1 : MAX_SLIDES - 1)} />
             </div>
        <div className='relative overflow-x-hidden h-full w-full'>
            {
                props.children?.map((child, slideNumber) => (
                    <Slide key={slideNumber} translate={100 * (slideNumber - currentSlide)}>
                        {child}
                    </Slide>
                ))
                ||
                <></>
            }

            <div>
            <Control align='right' label={<ArrowRight />} onClick={() => setCurrentSlide((currentSlide + 1) % MAX_SLIDES)} />
            </div>
            </div>
        </div>
    );
};

export default Slider;