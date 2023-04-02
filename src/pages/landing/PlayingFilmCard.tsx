import * as React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import clsxm from '@/lib/clsxm';
import { Film } from '@/types/entity/film';

type PlayingFilmCardProps = {
  film: Film;
} & React.HTMLAttributes<HTMLDivElement>;

export default function PlayingFilmCard({ film }: PlayingFilmCardProps) {
  return (
    <div
      className={clsxm(
        'h-[500px] w-[360px] bg-[url(/background/Poster.png)] shadow-xl shadow-[#18181890]',
        'bg-no-repeat bg-start relative rounded-3xl'
      )}
    >
      <div className='flex flex-col items-start justify-end px-8 w-full h-full bg-gradient-to-t from-[#181818] from-40% to-[#00000001] rounded-3xl'>
        <div className='text-white font-bold font-lg  pb-2 tracking-widest'>
          {film.title}
        </div>
        <div className='text-[#C9C9C9] line-clamp-3 tracking-wider'>
          {film.synopsis}
        </div>
        <div className='py-5 w-full'>
          <ButtonLink
            variant='noorple'
            type='submit'
            className='w-full'
            href={`/${film.slug}`}
          >
            See Details
          </ButtonLink>
        </div>
      </div>
      <div className='relative'>{film.produer}</div>
    </div>
  );
}
