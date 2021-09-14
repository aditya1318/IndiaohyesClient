import React from 'react';

import Button from '../components/buttons/button';
import FormGroup from '../components/form/formgroup';
import Form from '../components/form';

const LoginPage = () => {
    return (
        <Form title='Login' alternateLink='/signup' alternateText={`Don't have an account? Sign up now!`}>
            <FormGroup id='phone' inputType='number' label='enter your phone number' />
            <div className='text-center'>
                <Button>Send OTP</Button>
            </div>

            <FormGroup id='otp' inputType='number' label='Enter OTP' />
            <div className='text-center'>
                <Button type='submit'>Verify</Button>
            </div>
        </Form>
    );
};

export default LoginPage;