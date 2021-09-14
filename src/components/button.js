import React from 'react';
import { Link } from 'gatsby';

const btnClasses = 'inline-block py-1 px-3 rounded-md border-2 border-violet transition-colors hover:bg-purple-800 hover:border-purple-800 hover:text-white';

const Button = props => props.isLink
    ? <Link to={props.to || '/'} className={btnClasses}>{props.children}</Link>
    : <button className={`${btnClasses} text-gray-800`}>{props.children}</button>

export default Button;