import * as React from 'react';

import NextImage from '@/components/NextImage';
import Typography from '@/components/Typography';

export default function DetailPage() {
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
                  Black Phanter: <br />
                  Wakanda Forever
                </Typography>
              </div>
              <div className='text-[#C9C9C9]'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  cum praesentium error nisi aliquam quo quos iusto ratione,
                  impedit laudantium architecto quae adipisci tenetur similique!
                  Unde quia tenetur voluptatum rerum!
                </p>
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
              <form action=''></form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
