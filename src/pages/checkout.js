import * as React from "react"
import { Link } from 'gatsby'



const Checkout = () => {

    return (
        <div className='div h-screen bg-gray-100'>
            
            <div className='h-full w-full flex'>
                <div className='w-full h-full bg-gray-100 py-6 px-3 '  >
               
                    <div className='flex items-center font-light' >
                         <Link to='/shop'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 19l-7-7 7-7' />
                        </svg>
                        </Link>
                        
                        <button><Link to='/shop'>Back to cart</Link></button>
                    </div>



                    <spam className='mt-3 block'>Shipping address </spam>

                    <div>
                        <div className='w-full h-10  flex items-center justify-between px-2 bg-white shadow-sm mt-3'>
                            <div className='flex space-x-2 items-center'>
                                <div className='rounded-full h-4 w-4 border-2 border-gray-700 '>

                                </div>

                                <div className='text-sm truncate text-gray-500 '>4/vatika vila new ashok vatika Vadodara, Gujarat  </div>
                            </div>


                            <div className='flex space-x-2  '>
                                <spam className='text-sm text-purple-600 block'> Edit</spam>



                                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-4' fill='none' viewBox='0 0 24 24' stroke='red'>
                                    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
                                </svg>
                            </div>

                        </div>


                        <div className='w-full h-64    justify-between px-2 bg-white shadow-sm mt-3'>

                            <div className='flex space-x-2 mb-2 pt-2'>
                                <div className='rounded-full h-4 w-4 border-2 border-gray-700 flex justify-center items-center p-0.5'>
                                    <div className='rounded-full bg-purple-700 h-full w-full  ' >

                                    </div>
                                </div>
                                <div className='text-sm truncate text-gray-500 '>Add New Address </div>


                            </div>
                            <div>
                                <div>
                                    <div className='flex space-x-3'>
                                        <div className='w-full   mb-2 '>
                                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold  mb-1' >
                                                First Name
                                            </label>
                                            <input className='appearance-none block w-full bg-gray-200 text-gray-700 border focus:border-purple-500 rounded py-2 px-4  leading-tight focus:outline-none focus:bg-white' type='text' placeholder='name'>
                                            </input>
                                        </div>

                                        <div className='w-full    '>
                                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold  mb-1' >
                                                Last name
                                            </label>
                                            <input className='appearance-none block w-full bg-gray-200 text-gray-700 border focus:border-purple-500 rounded py-2 px-4  leading-tight focus:outline-none focus:bg-white' type='text' placeholder='name'>
                                            </input>
                                        </div>




                                    </div>

                                    <div className='w-full   mb-2 '>
                                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold  mb-1' >
                                            ADDRESS
                                        </label>
                                        <input className='appearance-none block w-full bg-gray-200 text-gray-700 border focus:border-purple-500 rounded py-2 px-4  leading-tight focus:outline-none focus:bg-white' type='text' placeholder='street'>
                                        </input>
                                    </div>



                                    <div className='flex mx-3 mb-2'>
                                        <div className='w-full md:w-1/3 px-3 mb-3 md:mb-0'>
                                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-city'>
                                                City
                                            </label>
                                            <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-city' type='text' placeholder='Vadodara'>
                                            </input>
                                        </div>
                                        <div className='w-full md:w-1/3 px-3 mb-3 md:mb-0'>
                                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-state'>
                                                State
                                            </label>
                                            <div className='relative'>
                                                <select className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4  rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-state'>
                                                    <option>Gujarat</option>
                                                    <option>Missouri</option>
                                                    <option>Texas</option>
                                                </select>
                                                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                                                    <svg className='fill-current h-4 w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' /></svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-full md:w-1/3 px-3 mb-3 md:mb-0'>
                                            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' for='grid-zip'>
                                                Zip
                                            </label>
                                            <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' id='grid-zip' type='text' placeholder='90210'></input>
                                        </div>
                                    </div>


                                </div>


                            </div>



                        </div>



                    </div>

                    <div>


                        <spam className='mt-10 block '>Payment Method  </spam>

                        <div className=''>
                            <div className='w-full h-10  flex items-center justify-between px-2 bg-white shadow-sm mt-3'>

                                <div className='flex space-x-2 items-center'>
                                    <div className='rounded-full h-4 w-4 border-2 border-gray-700 '>


                                    </div>
                                    <div className='text-sm truncate text-gray-500 '>Debit or Credit Card </div>
                                </div>


                            </div>

                            <div className='w-full h-10  flex items-center justify-between px-2 bg-white shadow-sm mt-3'>

                                <div className='flex space-x-2 items-center'>
                                    <div className='rounded-full h-4 w-4 border-2 border-gray-700 '>


                                    </div>
                                    <div className='text-sm truncate text-gray-500 '>Cash On Delivery  </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <div className='w-2/3 h-full px-4 mt-8'>

                    <div className='bg-white w-full py-8 flex flex-col px-3 '>

                        <spam className=''> Order Summary </spam>

                        <div className='text-sm font-normal  mt-4'>
                            <div className='flex justify-between'>
                                <div>
                                    <spam >Items</spam>
                                    <spam> (2):</spam>
                                </div>

                                <spam>$300</spam>
                            </div>

                            <div className='flex justify-between'>
                                <div>
                                    <spam >Shipping & Handling </spam>

                                </div>

                                <spam>$23</spam>
                            </div>

                            <div className='flex justify-between'>
                                <div>
                                    <spam >tax</spam>

                                </div>

                                <spam>$12</spam>
                            </div>

                            <div className='border-2 mx-3 mt-6'></div>

                            <div className='flex justify-between text-base mt-4'>
                                <div>
                                    <spam >Total</spam>

                                </div>

                                <spam>$335</spam>
                            </div>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <button className='bg-purple-400 px-8 py-2 rounded mt-4 text-white'>Place Order</button>

                            <p className='text-xs font-light text-gray-500'>By placing your order agree to our company <spam className='underline'>Privacy policy</spam>  and <spam className='underline'>Conditions of use</spam></p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Checkout;