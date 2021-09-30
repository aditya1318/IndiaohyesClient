import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import { Helmet } from 'react-helmet';

import axios from '../../services/api';
import isLoggedIn, { logout } from '../../services/auth';

import Layout from '../../components/layout';
import Heading from '../../components/heading';
import FormGroup from '../../components/form/formgroup';
import Button from '../../components/buttons/button';
import Button2 from '../../components/buttons/button2';
import Loader from '../../components/loader';
import SubmitMessage from '../../components/submitMessage';

import ArrowIcon from '../../assets/arrow.svg';

const ServicePage = ({ params }) => {
    const [user, setUser] = useState();
    const [data, setData] = useState();
    const [descriptionState, setDescriptionState] = useState(false);
    const [popupState, setPopupState] = useState(false);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (isLoggedIn())
            axios
                .get('/users/me')
                .then(response => {
                    setUser(response.data.data.user);
                })
                .catch(err => {
                    console.log(err.response);
                    logout(() => navigate('/login'))
                });

        axios
            .get(`/services/slug/${params.slug}`)
            .then(response => {
                setData(response.data.data.service);
            })
            .catch(err => {
                console.log(err.response);
            });
    }, [params.slug]);

    return (
        <>
            <Helmet>
                <title>Indiaohyes &mdash; {data?.title || 'Service'}</title>
            </Helmet>

            <Layout>
                {popupState ? <SubmitMessage /> : <></>}

                {
                    data
                        ? <div className='grid' style={{ gridTemplateColumns: '22rem 1fr' }}>
                            <div className='col-span-full space-y-7 bg-gray-100 pt-20 pb-6 px-12'>
                                <Heading align='left' className='text-violet'>{data.title}</Heading>

                                <p className={descriptionState ? '' : 'hidden'}>
                                    {data.description}
                                </p>

                                <Button2 onClick={() => setDescriptionState(!descriptionState)}>Learn more</Button2>
                            </div>

                            <div className='bg-cream flex flex-col'>
                                <h3 className='text-2xl text-center my-12'>Choose other services</h3>

                                <div className='px-10 overflow-auto mb-auto' style={{ height: '85vh' }}>
                                    {
                                        data.packages?.map((pack, i) => (
                                            <div className='bg-white p-4 rounded-xl mb-8' key={i}>
                                                <div className='flex justify-between'>
                                                    <h4>
                                                        <span className='font-semibold capitalize block w-2/3 mb-2'>{pack.title}</span>
                                                        <span>₹{pack.price}</span>
                                                    </h4>
                                                    <input type='checkbox' onChange={e => {
                                                        if (e.target.checked)
                                                            setTotal(total + pack.price);
                                                        else
                                                            setTotal(total - pack.price);
                                                    }} />
                                                </div>

                                                <ul className={pack.points ? 'mt-4' : ''}>
                                                    {pack.points?.map((pt, i) => <li className='flex' key={i}><ArrowIcon />{pt}</li>)}
                                                </ul>
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className='bg-violet text-white rounded-tl-3xl rounded-tr-3xl py-6 px-10 flex justify-between'>
                                    <span className='font-semibold tracking-wider'>Total</span>
                                    <span>₹{total}</span>
                                </div>
                            </div>

                            <form className='text-gray-500 grid grid-cols-2 gap-x-16 gap-y-10 content-start px-32 py-10' onSubmit={async e => {
                                e.preventDefault();

                                setPopupState(true);
                            }}>
                                <h2 className='col-span-full text-3xl text-center text-black'>Order Now</h2>

                                <FormGroup label='full name' inputValue={user?.name} />
                                <FormGroup label='phone number' inputType='tel' inputValue={user?.phone} />

                                <FormGroup label='email' inputValue={user?.email} />
                                <FormGroup label='budget in rupees' inputType='number' inputValue='5000' />

                                <FormGroup label='date of event' inputType='date' inputValue={new Date().toISOString().slice(0, 10)} />
                                <FormGroup label='time of event' inputType='time' inputValue='12:00' />

                                <FormGroup label='place of event' />
                                <FormGroup label='state' />

                                <FormGroup className='col-span-full' label='your current address' inputValue={user?.address} />
                                <FormGroup className='col-span-full' label='other requirements (if any)' />

                                <Button type='submit' className='col-span-full'>Submit</Button>
                            </form>
                        </div>

                        : <Loader className='h-screen' />
                }
            </Layout>
        </>
    );
};

export default ServicePage;