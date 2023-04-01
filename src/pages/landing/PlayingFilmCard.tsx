import * as React from 'react';

import clsxm from '@/lib/clsxm';
import { Film } from '@/types/entity/film';

type PlayingFilmCardProps = {
  film: Film;
} & React.HTMLAttributes<HTMLDivElement>;

export default function PlayingFilmCard({ film }: PlayingFilmCardProps) {
  return (
    <div
      className={clsxm(
        'h-[500px] w-[360px] bg-[url(/background/Poster.png)]',
        'bg-no-repeat bg-center relative'
      )}
    >
      <div className='relative'>{film.produer}</div>
    </div>
  );
}
