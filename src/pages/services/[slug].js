import React, { useState } from 'react';

import FormGroup from '../../components/form/formgroup';
import Button from '../../components/button2';
import Package from '../../components/package';

const data = {
    title: 'brahmin bhojan',
    description: 'To Satisfy your ancestor (as per Hindu Vedic scriptures) this is the religious tradition to offer a lunch feast to Brahmin(Priest).It starts from Rs.401 only including GST.',
    packs: [
        {
            title: 'standard',
            price: 499,
            points: [
                'What is in me?',
                'What is special in me?',
                'What is not so special in me?'
            ]
        },

        {
            title: 'premium',
            price: 599,
            points: [
                'What is special in me?',
                'What is in me?',
                'What is not so special in me?'
            ]
        },

        {
            title: 'exotic',
            price: 699,
            points: [
                'What is not so special in me?',
                'What is special in me?',
                'What is in me?'
            ]
        }
    ]
};

const user = {
    firstName: 'Amin',
    lastName: 'Painter',
    email: 'aminpainter786@gmail.com',
    phone: 8401220838,
    address: 'Vadodara, Gujarat, India'
};

const ServicePage = ({ params }) => {
    // State variables
    const [componentState, setComponentState] = useState(0);
    const [activePackage, setActivePackage] = useState(data.packs[0]);

    // Component to be displayed based on state variable
    if (componentState === 0)
        return (
            <main className='py-9 px-16 space-y-12 text-center min-h-screen bg-cream'>
                <h2 className='capitalize font-semibold text-3xl'>{data.title}</h2>

                <p>{data.description}</p>

                <div className='grid grid-cols-3 gap-8 self-stretch'>
                    <Package data={data.packs[0]} setComponentState={setComponentState} setActivePackage={setActivePackage} />
                    <Package data={data.packs[1]} setComponentState={setComponentState} setActivePackage={setActivePackage} />
                    <Package data={data.packs[2]} setComponentState={setComponentState} setActivePackage={setActivePackage} />
                </div>
            </main>
        );

    if (componentState === 1)
        return (
            <main className='grid gap-32 items-center py-9 px-16 min-h-screen' style={{ gridTemplateColumns: '2fr 1fr' }}>
                <form className='text-gray-500 grid grid-cols-2 content-start gap-16'>
                    <h2 className='col-span-full text-3xl text-black'>Enter your details</h2>

                    <FormGroup label='first name' inputValue={user.firstName} />
                    <FormGroup label='last name' inputValue={user.lastName} />
                    <FormGroup label='last name' inputValue={user.email} />
                    <FormGroup label='last name' inputValue={user.phone} />
                    <FormGroup className='col-span-full' label='address' inputValue={user.address} />

                    <Button type='submit' className='col-span-full justify-self-center'>Submit</Button>
                </form>

                <Package data={activePackage} />
            </main>
        );
};

export default ServicePage;