import * as React from 'react';

import Button from '@/components/buttons/Button';
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
          Judul
        </div>
        <div className='text-[#C9C9C9] line-clamp-3 tracking-wider'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          distinctio dolore officia accusamus ab? Quia repellat distinctio quo?
          Fugiat deleniti vitae alias, quidem eveniet est. Quis, veritatis!
          Distinctio, cum labore?
        </div>
        <div className='py-5 w-full'>
          <Button variant='noorple' type='submit' className='w-full'>
            See Details
          </Button>
        </div>
      </div>
      <div className='relative'>{film.produer}</div>
    </div>
  );
}
