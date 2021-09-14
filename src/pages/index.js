import React, { useState, useEffect } from 'react';
import axios from '../services/api';
import getBaseUrl from '../services/detail';

import Navigation from '../components/layout/navigation';
import Heading from '../components/heading';
import Category from '../components/category';
import Loader from '../components/loader';

import BagIcon from '../assets/bag.svg';
import logo from '../images/logo.png';
import omImg from '../images/om.png';

const IndexPage = () => {
	// State variables
	const [categories, setCategories] = useState(null);

	// Fetching data from API
	useEffect(() => {
		axios
			.get('/categories')
			.then(response => setCategories(response.data.data.categories))
			.catch(err => {
				setCategories([]);
				console.log(err.response);
			});
	}, []);

	// JSX to be returned
	return (
		<>
			<title>IndiaOhYes &mdash; Home</title>

			<Navigation />

			<header className='bg-cream min-h-0 px-20 mb-10 pb-10	 md:grid md:grid-cols-2 content-center md:-mt-24'>

			<div className='max-w-xl flex justify-center '>
				<img src={omImg} alt='OM' className='' />
				</div>

				<div className='text-center'>
					<h1 className='text-2xl leading-snug font-semibold  sm:text-3xl sm:leading-normal md:text-4xl md:leading-relaxed '>
						<span className='inline'>From India </span>
						<span className='lnline'>To India</span>
						<br className='sm:hidden'/>
						<span className='block'>By India</span>
					</h1>

					<p className='mt-6 mb-12 md:text-xl  '>An E-supermarket for Indian Needs</p>

					<div className='grid grid-cols-2 max-w-full justify-between items-center text-xs ' >

                <div>
					<button className='border-2 border-violet bg-violet text-white py-2 px-4 '>Let's start</button>
				</div>
			    <div>
					<button className='border-2 border-violet bg-white py-2 px-4 '>Quick contact</button>
				</div>
					</div>
				</div>

                 <div className='hidden'>
				<img src={omImg} alt='OM' className='mt-16' />
				</div>
			</header>

			<main>
				<section className='px-16 py-24'>
					<Heading className='mb-16'>services</Heading>

					<div className='grid grid-cols-5 gap-10'>
						{
							categories ?
								categories.length ?
									categories.map((cat, i) => <Category
										title={cat.title}
										image={`${getBaseUrl()}/images/${cat.image}`}
										key={i}
									/>)
									: <h2>No data found</h2>
								: <div className='flex justify-center col-span-full'>
									<Loader />
								</div>
						}
					</div>
				</section>
			</main>

			<footer className='grid grid-cols-3 gap-y-20 py-16 px-20 bg-gray-800 text-white'>
				<div>
					<img src={logo} alt='LOGO' className='h-12 mb-12' />
					<button className='pb-3 border-b-2 border-gray-100 ml-4'>Ask a question &nbsp; &rarr;</button>
				</div>

				<div>
					<h3 className='font-semibold text-2xl mb-6'>Services</h3>
					<ul className='capitalize'>
						{categories?.map((cat, i) => <li key={i}>{cat.title} services</li>)}
					</ul>
				</div>

				<div className='space-y-10'>
					<h3 className='font-semibold text-2xl'>Subscribe to our Newsletter</h3>

					<p>
						A-32 Riddhi Siddhi Nagar,
						Near Mahavir Hall,Ajwa Road
						District: Vadodara,GUJARAT-INDIA
						Pin Code: 390 019
					</p>

					<p>
						#1-10318 Whalley Blvd. Surrey,BC V3T 4H4
						+1(778)825-1066
						Canada
					</p>

					<p>
						Phone: +91 7043584494
					</p>
				</div>

				<div className='col-span-full flex justify-center space-x-12'>
					<a href='https://instagram.com/' rel='noreferrer' target='_blank' aria-label='INSTAGRAM'>
						<BagIcon fill='#ffffff' />
					</a>
					<a href='https://instagram.com/' rel='noreferrer' target='_blank' aria-label='INSTAGRAM'>
						<BagIcon fill='#ffffff' />
					</a>
					<a href='https://instagram.com/' rel='noreferrer' target='_blank' aria-label='INSTAGRAM'>
						<BagIcon fill='#ffffff' />
					</a>
				</div>
			</footer>
		</>
	);
};

export default IndexPage;