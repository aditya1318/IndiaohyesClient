import React from 'react';

const Heading = props => <h2 className={`text-4xl text-${props.align || 'center'} font-semibold capitalize ${props.className || ''}`}>{props.children}</h2>;

export default Heading;