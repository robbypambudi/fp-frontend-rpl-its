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
    <main className='bg-[url(/background/BG1.png)] bg-cover bg-[#303030]'>
      <div className='min-h-screen flex items-center justify-center py-5'>
        <div className='grid grid-cols-2'>
          <div className='py-20 bg-[#181818] layout--content rounded-l-3xl'>
            <div className='flex items-center justify-center'>
              <NextImage src='/logo.png' width={48} height={43} alt='' />
            </div>
            <div className='my-12'>
              <Typography variant='h2' color='white'>
                Login
              </Typography>
            </div>

            <Form<LoginFormValue> onSubmit={onSubmit}>
              {({ formState: { isDirty } }) => (
                <div>
                  <div className='space-y-4'>
                    <Input
                      id='user-identifier'
                      label='Username / Password'
                      placeholder='Masukkan username atau email'
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
                </div>
              )}
            </Form>
          </div>
          <div className='background-login'>
            <NextImage
              src='/login/poster.png'
              width={513}
              height={626}
              alt=''
            />
          </div>
        </div>
      </div>
    </main>
  );
}
