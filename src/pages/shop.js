import React, { useState, useEffect } from 'react';
import ProductItem from '../components/productItem';
import axios, { URL } from '../services/api';
import CartItem from '../components/cartItem';
import { Link } from 'gatsby';
import Loader from '../components/loader';

const Shop = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		axios
			.get('/products')
			.then(response => setData(response.data.data.products))
			.catch(err => {
				console.log(err);
				setData([]);
				console.log(err.response?.data.message);
			});
	}, []);

	console.log(data);

	return (
		<div className='div h-screen bg-white  flex  text-black'>
			<div className='flex w-full justify-between bg-white divide-x-2'>
				<div className='mt-9 ml-5 w-full mr-5'>
					<div className='w-full flex justify-between '>
						<div className='div text-xl font-semibold flex flex-col'>
							<span>Shop</span>
							<span className='text-xs font-light text-gray-500'>location Vadodara, Gujarat</span>
						</div>



						<div className='flex'>
							<div className=' bg-blue-100 h-6 w-6 rounded'> </div>

							<div className='flex'>
								<div className='border-2 border-blue-50 h-6 w-6 rounded ml-1'>
								</div>
								<div className='text-xs flex flex-col leading-3 ml-1'>
									<span>Profile</span>
									<span>Aditya Mohite</span>
								</div>

							</div>


						</div>


					</div>

					<div className='w-full h-8 mt-1 '>
						<input className='w-full h-full bg-gray-100 rounded placeholder-gray-400 p-2 text-sm' placeholder='Search' />
					</div>
					<div className=' mt-5'>

						<div className='grid grid-cols-3 gap-10'>
							{
								data
									? data.length
										? data.map((product, i) => <ProductItem
											key={i}
											data={product}
										/>)
										: <h2>No data found</h2>
									: <Loader />
							}
						</div>
					</div>


				</div>


				<div className='div h-full w-2/5 bg-gray-50 '>

					<div className=' bg-gray-100 min-h-screen pt-7 flex flex-col justify-between'>
						<div>
							<div className='div flex justify-between w-full px-4'>
								<h2 className=' font-medium text-xl'>Cart </h2>

								<div className='bg-purple-400 rounded w-11 h-6 flex items-center justify-center text-xs text-white'>Clear </div>
							</div>

							<CartItem />

						</div>

						<div className='div rounded-t-3xl w-full h-3/5 bg-white divide-y-2 flex flex-col justify-between p-5'>

							<div className='div  '>
								<div>
									<div className='flex justify-between'>
										<span>Subtotal</span>
										<span>$100</span>
									</div>

									<div className='flex justify-between'>
										<span>Tax</span>
										<span>$3</span>
									</div>
								</div>


								<div>
									<div className='flex justify-between'>
										<span>Discount </span>
										<span>$0</span>
									</div>
								</div>

							</div>


							<div >


								<div>
									<div className='flex justify-between'>
										<span>Total </span>
										<span>$103</span>
									</div>
									<div className=' w-full flex justify-center pt-5'>
										<button className='bg-purple-400 w-40 h-9 rounded-md '><Link to='/checkout'>CheckOut</Link></button>
									</div>

								</div>
							</div>


						</div>


					</div>

				</div>

			</div>
		</div>

	);
};

export default Shop;