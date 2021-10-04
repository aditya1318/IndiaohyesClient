
import Layout from '../components/layout';
import React, { useState, useEffect } from 'react';
import axios, { URL } from '../services/api';
import { data } from 'autoprefixer';
const Profile = () => {

const [User,setUser] = useState();


    useEffect(() => {
       axios
       .get('/user/me')
       .then(res => setUser(res.data.data.me))
       .catch(err => {
				setUser([]);
				console.log(err.response);
			});
     
    }, []);
  
    return (
        //ad
        <Layout>
      <div className='h-screen'>

      <div className='w-full h-full'>
      
   
      {
   User
   ? 
  
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-full phone:w-full    '>
      <h1 className='mb-6 text-2xl font-semibold'> Profile</h1>
      <div className='phone:flex-col flex w-full space-x-10 phone:space-x-0'>
      <div className= 'w-full'>
        
      <div className='mb-4'>

      <label className='block text-gray-700 text-sm font-bold mb-2' for='username'>
     First Name
      </label>
      <input className='shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-500' id='username' type='text' placeholder= {User.name}/>
      </div>

      <div className='mb-6'>
      <label className='block text-gray-700 text-sm font-bold mb-2' for='text'>
      Last Name
      </label>
      <input className='shadow appearance-none border 0 rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500' id='password' type='text' placeholder='last name'/>
      
      </div>
      </div>
      <div className='w-full'>
      <div className='mb-4'>
      <label className='block text-gray-700 text-sm font-bold mb-2' for='text'>
    Email
      </label>
      <input className='shadow appearance-none border 0 rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500' id='password' type='text' placeholder={User.email}/>
      
      </div>
      <div className='mb-6'>
      <label className='block text-gray-700 text-sm font-bold mb-2' for='text'>
      Phone
      </label>
      <input className='shadow appearance-none border 0 rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500' id='password' type='number' placeholder={User.phone}/>
      
      </div>
      </div>
      </div>
      <div className='mb-6'>
      <label className='block text-gray-700 text-sm font-bold mb-2' for='text'>
      Address
      </label>
      <input className='shadow appearance-none border 0 rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500 overflow-ellipsis' id='password' type='text' placeholder={User.address}/>
      
      </div>
      <div className='flex justify-end space-x-5 '>
      
      <button className='bg-purple-200 hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 rounded'>
      Save
      </button>
      <button className='bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded'>
      Reset
      </button>
      
      
      </div>

      
      
      
      
      </form>
      :<></>
}
      
      </div>
      
      </div>
      </Layout>
      
      
    )
}

export default Profile