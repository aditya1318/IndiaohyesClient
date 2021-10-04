import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import axios, { URL } from '../services/api';

import Layout from '../components/layout';
import Heading from '../components/heading';
import Category from '../components/category';
import Loader from '../components/loader';
import Service from '../components/service';
import Slider from '../components/slider';
import Testimonial from '../components/testimonial';
import Offer from '../components/offer';

import FacebookIcon from '../assets/facebook.svg';
import InstagramIcon from '../assets/instagram.svg';
import TwitterIcon from '../assets/twitter.svg';



import logo from '../images/logo.png';
import omImg from '../images/om.png';

const IndexPage = () => {
	// State variables
	const [categories, setCategories] = useState();
	const [services, setServices] = useState();
	const [offers, setOffers] = useState();

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
			.then(response => {
				const data = response.data.data.services;
				setServices(data);
				setOffers(data.filter(srv => srv.offer));
			})
			.catch(err => {
				setServices([]);
				console.log(err.response);
			});
	}, []);

	// JSX to be returned
	return (
		<>
			<Helmet>
				<title>Indiaohyes &mdash; Home</title>
			</Helmet>

			<Layout>
				<header className='bg-cream min-h-screen px-20 grid grid-cols-2 items-center -mt-24 tab-port:mt-0 tab-port:grid-cols-none'>
					<div className='tab-port:text-center'>
						<h1 className='text-5xl leading-relaxed font-semibold'>
							<span className='block'>From India</span>
							<span className='block'>To India</span>
							<span className='block'>By India</span>
						</h1>

						<p className='mt-6 mb-12'>An E-supermarket for Indian Needs</p>

						<Link to='/' className='border-2 border-violet bg-violet text-white py-3 px-6 rounded-tl-full rounded-bl-full'>Let's start</Link>
						<Link to='/quick' className='border-2 border-violet bg-white py-3 px-6 rounded-tr-full rounded-br-full'>Quick contact</Link>
					</div>

					<img src={omImg} alt='OM' className='mt-16 tab-port:hidden animate-pulse' />
				</header>

				<main>
					<section className='border-b-2 border-gray-300'>
						<Slider>
							<Testimonial review='Hello, world. Greetings from development mode.' writer='- Amin Painter' writerRole='Customer' />
							<Testimonial review='Hello, world. Greetings from development mode.' writer='- Mirage Patel' writerRole='Customer' />
							<Testimonial review='Hello, world. Greetings from development mode.' writer='- Jeet Patel' writerRole='Customer' />
							<Testimonial review='Hello, world. Greetings from development mode.' writer='- Aditya Patel' writerRole='Customer' />
						</Slider>
					</section>

					{
						offers?.length
							? <section>
								<Slider minHeight='60vh'>
									{
										offers.map((srv, i) => (
											<Offer
												summary={srv.offer.description}
												description={srv.description}
												image={srv.image}
												link={srv.slug}
												key={i}
											/>
										))
									}
								</Slider>
							</section>
							: <> </>
					}

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
							? <section className='bg-gray-100 pt-5 rounded-xl'>
									<ul className='flex sticky top-0 justify-between bg-violet text-gray-100 capitalize shadow-lg px-6 py-4'>
									{categories?.map((cat, i) => <li key={i}><a href={`/#section-categories-${i}`}>{cat.title}</a></li>)}
								</ul>
								<div className='px-5 space-y-5'>
									{
										categories.map((cat, i) =>
											<section id={`section-categories-${i}`} className='flex items-center bg-white rounded-xl p-8 tab-port:flex-col' key={i}>
												<div className='w-service-description-width-box mr-12 tab-port:w-full tab-port:mr-0 tab-port:mb-10'>
													<Heading align='left' className='leading-tight tab-port:text-center'>{cat.title} services</Heading>
													<p className='mt-8 tab-port:text-center'>{cat.description}</p>
												</div>
												<div className='grid grid-flow-col gap-x-12 overflow-x-auto pt-28 pb-4 tab-port:w-full' style={{ gridAutoColumns: '18rem' }}>
													{services.map((srv, i) => <Service data={srv} key={i} />)}
												</div>
											</section>
										)
									}
								</div>
							
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
			</Layout>
		</>
	);
};

export default IndexPage;