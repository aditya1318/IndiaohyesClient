import React from 'react';

import Heading from '../components/heading';
import Button from '../components/button2';

import NotfoundSVG from '../assets/notfound.svg';

const NotFoundPage = () => (
	<main className='grid grid-cols-2 p-16 items-center bg-cream h-screen'>
		<div className='space-y-10 text-center'>
			<Heading>OOPS...</Heading>
			<p>Looks like this page doesn't exist,<br />but don't let that stop you!</p>
			<Button isLink={true} to='/'>Go Home</Button>
		</div>

		<NotfoundSVG className='h-full w-full' />
	</main>
);

export default NotFoundPage;