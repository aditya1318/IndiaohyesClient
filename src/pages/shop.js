import React, { useState, useEffect } from 'react';




import { Link } from 'gatsby';


import axios from '../services/api';







import Product from '../components/product';


import CartItem from '../components/cartItem';


import Loader from '../components/loader';


import Button from '../components/buttons/button';







import BagIcon from '../assets/bag.svg';







const ShopPage = () => {


	// State variables


	const [data, setData] = useState();


	const [cart, setCart] = useState();







	// Fetching data from API


	useEffect(() => {


		axios


			.get('/products')


			.then(res => setData(res.data.data.products))


			.catch(err => {


				setData([]);


				console.log(err.response);


			});







		axios


			.get('/users/cart')


			.then(res => setCart(res.data.data.cart))


			.catch(err => {


				setCart([]);


				console.log(err.response);


			});


	}, []);







	return (


		<div className='grid min-h-screen grid-cols-3-and-1 tab-land:grid-cols-none'>


			<div className='p-8'>


				<div className='flex justify-between items-center mb-6 col-span-full'>


					<Link to='/' className='font-semibold text-xl'>Go Home</Link>


					<BagIcon />


				</div>







				<input type='text' className='w-full bg-gray-100 py-2 px-4 rounded-lg' placeholder='Search' />







				<div className='grid grid-cols-3 gap-10 mt-6 tab-port:grid-cols-2 phone:grid-cols-none'>


					{


						data


							? data.length


								? data.map((product, i) => <Product key={i} data={product} setCart={setCart} />)


								: <h1>No data found</h1>


							: <Loader className='col-span-full' />


					}


				</div>


			</div>







			<div className='bg-gray-200 border-l-2 border-gray-200 flex flex-col'>


				<div className='flex justify-between items-center p-4 mb-10'>


					<h2 className='text-xl'>Cart</h2>


					<button


						className='bg-violet rounded-md text-white text-xs px-2 py-1'


						onClick={async () => {


							try {


								const response = await axios.get('/users/cart/clear');


								setCart(response.data.data.cart);


							}


							catch (err) {


								console.log(err);


							}


						}}


					>


						Clear


					</button>


				</div>







				<div className='overflow-auto mb-auto h-80 tab-land:h-auto tab-land:mb-10'>


					{


						cart


							? Object.entries(cart.items)


								? Object.entries(cart.items).map(([property, item], i) => <CartItem data={item} id={property} key={i} setCart={setCart} />)


								: <h1 className='text-center'>Fill up your cart now!</h1>


							: <Loader />


					}


				</div>







				{


					cart


						? <div className='bg-white rounded-tl-2xl rounded-tr-2xl p-6 capitalize'>


							<p className='flex justify-between'>


								<span className='font-semibold'>sub total:</span>


								<span>₹{cart.totalPrice}</span>


							</p>


							<p className='flex justify-between border-b-2 pb-2 border-gray-200'>


								<span className='font-semibold'>tax:</span>


								<span>18% GST</span>


							</p>


							<p className='flex justify-between mb-8'>


								<span className='font-semibold'>Grand Total:</span>


								<span>₹{cart.totalPrice + cart.totalPrice / 10}</span>


							</p>


							<div className='tab-land:text-center'>


							<Link to='/checkout'> 	<Button className='block w-full tab-land:w-auto'>Check out</Button></Link>
							


							</div>


						</div>


						: <></>


				}


			</div>


		</div>


	);


};







export default ShopPage;


