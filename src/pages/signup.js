import React from 'react';

import Button from '../components/button2';
import FormGroup from '../components/form/formgroup';
import Form from '../components/form';

const SignupPage = () => {
    return (
        <Form title='Register' alternateLink='/login' alternateText='Already have an account? Login now!'>
            <FormGroup id='username' label='enter your name' />

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

export default SignupPage;