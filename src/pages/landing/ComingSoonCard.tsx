import * as React from 'react';

import Typography from '@/components/Typography';
import { Film } from '@/types/entity/film';

export default function ComingSoonCard({ film }: { film: Film }) {
  return (
    <div>
      <Typography variant='h1' as='h1' color='white'>
        {film.title}
      </Typography>
      <div>
        <Typography variant='h4' as='h4' color='white'>
          {film.genre} | {film.duration}
        </Typography>
      </div>
      <div className='mt-2'>
        <Typography variant='p' color='white'>
          {film.synopsis}
        </Typography>
      </div>
      <Typography variant='h4' as='h4' color='white'>
        Coming Soon
      </Typography>
    </div>
  );
}
