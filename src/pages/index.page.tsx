import 'swiper/css';
import 'swiper/css/autoplay';

import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next/types';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import SEO from '@/components/SEO';
import Typography from '@/components/Typography';
import Layout from '@/layouts/Layout';
import api, { setApiContext } from '@/lib/api';
import clsxm from '@/lib/clsxm';
import ComingSoonCard from '@/pages/landing/ComingSoonCard';
import PlayingFilmCard from '@/pages/landing/PlayingFilmCard';
import { ApiReturn } from '@/types/api';
import { Film } from '@/types/entity/film';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  setApiContext(context);
  try {
    const res = await api.get<ApiReturn<Film[]>>('/films/all');
    const films = res.data.data;

    const nowplaying = films.filter((film) => film.status === 'Now Playing');
    const comingsoon = films.filter((film) => film.status === 'Coming Soon');

    return {
      props: {
        comingsoon: comingsoon,
        nowplaying: nowplaying,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
}

export default function Home({
  // eslint-disable-next-line unused-imports/no-unused-vars
  comingsoon,
  nowplaying,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout>
      <SEO description='This is the home page' />
      <main>
        <section
          id='hero'
          className={clsxm(
            'min-h-screen bg-[url(/background/hero.png)] bg-cover bg-center bg-no-repeat',
            'flex flex-col justify-center items-center'
          )}
        >
          <div className='layout'>
            <Swiper
              spaceBetween={24}
              slidesPerView={'auto'}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop
              modules={[Autoplay, Navigation, Pagination]}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              className='md:w-full -mt-20 md:-mt-32'
              data-aos='fade-left'
            >
              {comingsoon.map((film) => (
                <SwiperSlide key={film.id}>
                  <ComingSoonCard film={film} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <section
          className={clsxm(
            'bg-[url(/background/BG2.png)] min-h-screen flex justify-center items-center bg-[#303030]',
            'bg-cover bg-no-repeat bg-center'
          )}
        >
          <div className='layout'>
            <Typography variant='h2' as='h2' color='white'>
              NOW SHOWING
            </Typography>
            <div className='gap-28 grid grid-cols-3 pt-5'>
              {nowplaying.map((film) => (
                <PlayingFilmCard film={film} key={film.id} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
