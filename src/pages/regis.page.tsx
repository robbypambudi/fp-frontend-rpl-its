import { useMutation } from '@tanstack/react-query';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import Form from '@/components/form/Form';
import Input from '@/components/form/Input';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import useMutationToast from '@/hooks/toast/useMutationToast';
import api from '@/lib/api';
import { setToken } from '@/lib/cookies';
type LoginFormValue = {
  'user-identifier': string;
  password: string;
};

export default function LoginPage() {
  const { mutate, isLoading } = useMutationToast<void, LoginFormValue>(
    useMutation(async (data) => {
      const res = api.post('/user/login', data);
      const { token } = (await res).data.data;
      setToken(token);

      // eslint-disable-next-line unused-imports/no-unused-vars
      const user = await api.get('/user/me');
    })
  );

  const onSubmit = (data: LoginFormValue) => {
    mutate(data);
  };
  return (
    <main className='bg-[url(/background/BG2.png)] bg-cover bg-[#303030]'>
      <div className='min-h-screen flex items-center justify-center py-5'>
        <div className='grid grid-cols-2  shadow-2xl shadow-black rounded-3xl'>
          <div className='py-10 bg-[#181818] layout--content rounded-l-3xl '>
            <div className='flex items-center justify-center'>
              <NextImage src='/logo.png' width={48} height={43} alt='' />
            </div>
            <div className='my-6'>
              <Typography variant='h2' color='white'>
                Registration
              </Typography>
            </div>

            <Form<LoginFormValue> onSubmit={onSubmit}>
              {({ formState: { isDirty } }) => (
                <div>
                  <div className='space-y-2'>
                    <Input
                      id='user-identifier'
                      label='Name'
                      placeholder='Masukkan nama'
                    />
                    <Input
                      id='user-identifier'
                      label='Username'
                      placeholder='Masukkan username'
                    />
                    <Input
                      id='user-identifier'
                      label='Email'
                      placeholder='Masukkan email'
                    />
                    <Input
                      id='user-identifier'
                      label='Phone Number'
                      placeholder='(+62)'
                    />
                    <Input
                      id='password'
                      label='Password'
                      placeholder='Masukkan password'
                    />
                  </div>
                  <div className='mt-10'>
                    <Button
                      type='submit'
                      disabled={!isDirty}
                      isLoading={isLoading}
                      className='w-full'
                    >
                      Login
                    </Button>
                  </div>
                  <div className='text-center pt-5 text-[#687083]'>
                    <p>
                      Already have an account?{' '}
                      <span className='text-white'>Log In</span>
                    </p>
                  </div>
                </div>
              )}
            </Form>
          </div>
          <div className='background-login'>
            <NextImage
              src='/login/poster.png'
              width={603}
              height={716}
              alt=''
            />
          </div>
        </div>
      </div>
    </main>
  );
}
