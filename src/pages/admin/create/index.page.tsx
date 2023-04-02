import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Input from '@/components/form/Input';
import SelectInput from '@/components/form/SelectInput';
import withAuth from '@/components/hoc/withAuth';
import DashboardLayout from '@/layouts/Dashboard/DashboardLayout';
import { Film } from '@/types/entity/film';

export default withAuth(CreatePageFilm, 'admin');

function CreatePageFilm() {
  const methods = useForm<Film>();

  const { handleSubmit } = methods;

  const onSubmit = (data: Film) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <DashboardLayout>
      <main className='dashboard-layout min-h-screen'>
        <header>
          <h1>Create Page Film</h1>
        </header>
        <body>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='max-w-2xl space-y-4'>
                <Input
                  name='title'
                  label='Title'
                  id='title'
                  labelColor='primary'
                  validate={{
                    required: 'Title is required',
                  }}
                />
                <Input
                  name='slug'
                  label='Slug'
                  id='slug'
                  labelColor='primary'
                  validate={{
                    required: 'Slug is required',
                  }}
                />
                <Input
                  name='synopsis'
                  label='Synopsis'
                  id='synopsis'
                  labelColor='primary'
                  validate={{
                    required: 'Synopsis is required',
                  }}
                />
                <Input
                  name='duration'
                  label='Duration'
                  id='duration'
                  labelColor='primary'
                  validate={{
                    required: 'Duration is required',
                  }}
                />
                <Input
                  name='genre'
                  label='Genre'
                  id='genre'
                  labelColor='primary'
                  validate={{
                    required: 'Genre is required',
                  }}
                />
                <Input
                  name='director'
                  label='Director'
                  id='director'
                  labelColor='primary'
                  validate={{
                    required: 'Director is required',
                  }}
                />
                <Input
                  id='writer'
                  label='Writer'
                  labelColor='primary'
                  validate={{
                    required: 'Writer is required',
                  }}
                />
                <Input
                  id='production'
                  label='Production'
                  labelColor='primary'
                  validate={{
                    required: 'Production is required',
                  }}
                />
                <Input
                  id='cast'
                  label='Cast'
                  labelColor='primary'
                  validate={{
                    required: 'Cast is required',
                  }}
                />
                <Input
                  id='trailer'
                  label='Trailer'
                  labelColor='primary'
                  validate={{
                    required: 'Trailer is Required',
                  }}
                />
                <Input
                  id='image'
                  label='Image'
                  labelColor='primary'
                  validate={{
                    required: 'Image is required',
                  }}
                />
                <SelectInput
                  id='status_code'
                  label='Status Film'
                  validation={{
                    required: 'Status Film',
                  }}
                >
                  <option value='1'>Now Playing</option>
                  <option value='2'>Coming Soon</option>
                </SelectInput>
              </div>
            </form>
          </FormProvider>
        </body>
      </main>
    </DashboardLayout>
  );
}
