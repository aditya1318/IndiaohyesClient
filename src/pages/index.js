import React, { useState, useEffect } from 'react';
import axios, { URL } from '../services/api';

import Navigation from '../components/layout/navigation';
import Heading from '../components/heading';
import Category from '../components/category';
import Loader from '../components/loader';
import Service from '../components/service';

import FacebookIcon from '../assets/facebook.svg';
import InstagramIcon from '../assets/instagram.svg';
import TwitterIcon from '../assets/twitter.svg';

import logo from '../images/logo.png';
import omImg from '../images/om.png';

const IndexPage = () => {
	// State variables
	const [categories, setCategories] = useState(null);
	const [services, setServices] = useState(null);

	// Fetching data from API
	useEffect(() => {
		axios
			.get('/categories')
			.then(response => setCategories(response.data.data.categories))
			.catch(err => {
				setCategories([]);
				console.log(err.response);
			});

		axios
			.get('/services')
			.then(response => setServices(response.data.data.services))
			.catch(err => {
				setServices([]);
				console.log(err.response);
			});
	}, []);

	// JSX to be returned
	return (
		<>
			<title>IndiaOhYes &mdash; Home</title>

			<Navigation />

			<header className='bg-cream min-h-screen px-20 grid grid-cols-2 items-center -mt-24 tab-port:mt-0 tab-port:grid-cols-none'>
				<div className='tab-port:text-center'>
					<h1 className='text-5xl leading-relaxed font-semibold'>
						<span className='block'>From India</span>
						<span className='block'>To India</span>
						<span className='block'>By India</span>
					</h1>

					<p className='mt-6 mb-12'>An E-supermarket for Indian Needs</p>

					<button className='border-2 border-violet bg-violet text-white py-3 px-6 rounded-tl-full rounded-bl-full'>Let's start</button>
					<button className='border-2 border-violet bg-white py-3 px-6 rounded-tr-full rounded-br-full'>Quick contact</button>
				</div>

				<img src={omImg} alt='OM' className='mt-16 tab-port:hidden' />
			</header>

			<main>
				<section className='px-16 py-24 phone:px-12'>
					<Heading className='mb-16'>services</Heading>

					<div className='grid gap-10' style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))' }}>
						{
							categories
								? categories.length
									? categories.map((cat, i) => <Category
										key={i}
										title={cat.title}
										image={`${URL}/images/${cat.image}`}
										href={`/#section-categories-${i}`}
									/>)
									: <h2>No data found</h2>
								: <div className='flex justify-center col-span-full'>
									<Loader />
								</div>
						}
					</div>
				</section>

				{
					// Render all sections according to the data fetched
					categories?.length && services?.length
						? <section className='bg-gray-100 p-5 space-y-16 rounded-xl'>
							{
								categories.map((cat, i) =>
									<section id={`section-categories-${i}`} className='flex items-center bg-white rounded-xl p-8 tab-port:flex-col' key={i}>
										<div className='w-3/5 mr-12 tab-port:w-full tab-port:mr-0 tab-port:mb-10'>
											<Heading align='left' className='leading-tight tab-port:text-center'>{cat.title} services</Heading>
											<p className='mt-8 tab-port:text-center'>{cat.description}</p>
										</div>
										<div className='grid grid-flow-col gap-x-12 overflow-x-scroll pt-28 pb-4 tab-port:w-full' style={{ gridAutoColumns: '18rem' }}>
											{
												services.map((srv, i) => <> {/* Remove empty element for duplicate key error in console */}
													<Service data={srv} key={i} />
													<Service data={srv} />
													<Service data={srv} />
													<Service data={srv} />
													<Service data={srv} />
												</>)
											}
										</div>
									</section>
								)
							}
						</section>
						: <></>
				}
			</main>

			<footer className='grid grid-cols-3 gap-y-20 py-16 px-20 bg-gray-800 text-white tab-land:grid-cols-none phone:px-10'>
				<div className='tab-land:col-span-full tab-land:flex tab-land:justify-between phone:flex-col phone:items-center'>
					<img src={logo} alt='LOGO' className='h-12 mb-12 tab-land:mb-0 phone:mb-8' />
					<button className='pb-3 border-b-2 border-gray-100 ml-4'>Ask a question &nbsp; &rarr;</button>
				</div>

				<div>
					<h3 className='font-semibold text-3xl mb-6'>Services</h3>
					<ul className='capitalize'>
						{categories?.map((cat, i) => <li key={i}>{cat.title} services</li>)}
					</ul>
				</div>

				<div className='space-y-6'>
					<h3 className='font-semibold text-3xl'>Subscribe to our Newsletter</h3>

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
					<a href='https://facebook.com/' rel='noreferrer' target='_blank' aria-label='FACEBOOK'>
						<FacebookIcon fill='#ffffff' />
					</a>
					<a href='https://instagram.com/' rel='noreferrer' target='_blank' aria-label='INSTAGRAM'>
						<InstagramIcon fill='#ffffff' />
					</a>
					<a href='https://twitter.com/' rel='noreferrer' target='_blank' aria-label='TWITTER'>
						<TwitterIcon fill='#ffffff' />
					</a>
				</div>
			</footer>
		</>
	);
};

export default IndexPage;
//jeet is adding this comment.