import React from 'react';

const CartItem = () => (
	<div className=' bg-white h-40 w-full flex px-4 mt-10'>
		<div className='h-24 w-full flex my-auto'>
			<div className='div rounded h-full w-20 bg-gray-500 my-auto'></div>

			<div className='div h-full px-4 flex flex-col justify-between py-1 '>
				<div>
					<span className='block'> Dry Kachori</span>
					<span className='block text-sm text-gray-600'> vada pav</span>
				</div>

				<span className='text-purple-600' >20$</span>

			</div>
		</div>

		<div className=' h-24  my-auto py-1'>
			<div className='div h-full flex flex-col justify-between'>
				<div className=' h-5 w-5 bg-purple-200 flex items-center justify-center text-base rounded'>
					+
				</div>
				<div className='div h-5 w-5 flex items-center justify-center '>2</div>

				<div className=' h-5 w-5 bg-purple-200 text-lg  flex items-center justify-center rounded'>-</div>
			</div>
		</div>

	</div>

);

export default CartItem