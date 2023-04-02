import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import SelectInput from '@/components/form/SelectInput';
import withAuth from '@/components/hoc/withAuth';
import Loading from '@/components/Loading';
import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';
import { ApiReturn } from '@/types/api';
import { DetailFilm } from '@/types/entity/film';

export default withAuth(DetailPage, 'user');
function DetailPage() {
  // State Definition
  const methods = useForm();
  const router = useRouter();
  const { handleSubmit } = methods;
  const { slug } = router.query;

  // Query Definition
  const { data: detailMovie } = useQuery<ApiReturn<DetailFilm>>([
    `/films/${slug}`,
  ]);

  // Handler Definition
  const onSubmit = (data: DetailFilm) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  if (!detailMovie) return <Loading />;

  return (
    <main className='divide-y-2 bg-[#181818] divide-[#494949]'>
      <div className='min-h-screen flex items-center justify-center'>
        <div className='flex gap-12'>
          <div className='flex items-center justify-center'>
            <NextImage
              src='/detail/poster.png'
              width={350}
              height={530}
              alt=''
            />
          </div>
          <div>
            <div className='w-[500px] flex flex-col gap-5'>
              <div>
                <Typography
                  variant='h2'
                  color='white'
                  className='tracking-widest'
                >
                  {detailMovie.data.title}
                </Typography>
              </div>
              <div className='text-[#C9C9C9]'>
                <p>{detailMovie.data.synopsis}</p>
              </div>
            </div>
            <div>
              <div className='pt-20'>
                <Typography
                  variant='h2'
                  color='white'
                  className='tracking-widest'
                >
                  Sessions
                </Typography>
              </div>
              <div className='pt-5'>
                <FormProvider {...methods}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <SelectInput
                      id='session'
                      label='Jam Tayang'
                      placeholder='Pilih Jam Tayang'
                    >
                      {detailMovie.data.session?.length === 0 &&
                        detailMovie.data.session.map((ses) => (
                          <option key={ses.id} value={ses.id}>
                            {format(ses.time, 'HH:mm - dd MMM yyyy')}
                          </option>
                        ))}
                    </SelectInput>
                  </form>
                </FormProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
