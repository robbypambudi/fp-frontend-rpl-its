import { useMutation } from '@tanstack/react-query';

import Button from '@/components/buttons/Button';
import Form from '@/components/form/Form';
import Input from '@/components/form/Input';
import useMutationToast from '@/hooks/toast/useMutationToast';
import logger from '@/lib/logger';

type FormValues = {
  name: string;
  email: string;
  alamat: string;
};

export default function FormExample() {
  const { mutate, isLoading } = useMutationToast<void, void>(
    useMutation(async (data) => {
      logger('Data', data);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
    })
  );
  const onSubmit = () => {
    logger('Submit');
    mutate();
  };

  const defaultValues: FormValues = {
    name: '',
    email: '',
    alamat: 'Hallo',
  };

  return (
    <main className='bg-gray-200'>
      <section className='layout min-h-screen mt-10'>
        <h1 className='text-3xl font-bold underline'>
          Example Of Smart Form Components
        </h1>
        <Form<FormValues>
          onSubmit={onSubmit}
          className='w-96'
          defaultValues={defaultValues}
        >
          {({ formState: { isDirty } }) => (
            <>
              <Input
                color='primary'
                id='name'
                label='Nama'
                placeholder='Masukkan nama'
                validate={{
                  required: 'Nama harus diisi',
                }}
                helperText='Contoh dengan validate'
              />
              <Input
                id='email'
                label='Email'
                placeholder='Masukkan email'
                type='email'
                showValid={true}
                helperText='Contoh dengan showValid'
                validate={{
                  required: 'Email harus diisi',
                }}
              />
              <Input
                id='alamat'
                label='Alamat'
                placeholder='Masukkan alamat'
                showValid={true}
                helperText='Contoh dengan showValid dan default value'
                validate={{
                  required: 'Email harus diisi',
                }}
              />
              <div className='space-x-5 mt-6'>
                <Button type='submit' isLoading={isLoading}>
                  Kirim
                </Button>
                <Button type='button' disabled={!isDirty}>
                  Is Dirty
                </Button>
              </div>
            </>
          )}
        </Form>
      </section>
    </main>
  );
}
