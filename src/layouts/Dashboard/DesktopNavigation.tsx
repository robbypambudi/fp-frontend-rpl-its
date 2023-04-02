import { format } from 'date-fns';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';
import Logo from '@/components/Logo';
import Typography from '@/components/typography/Typography';
import Navigation from '@/layouts/Dashboard/Navigation';
import UserAction from '@/layouts/Dashboard/UserAction';

export default function DesktopNavigation() {
  return (
    <>
      <div className='hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col bg-dashboard lg:pt-8 lg:pb-4 bg-slate-400'>
        <div className='flex items-center justify-center'>
          <UnstyledLink href='/'>
            <Logo />
          </UnstyledLink>
        </div>

        {/* Sidebar component */}
        <div className='mt-6 flex h-0 flex-1 flex-col overflow-y-auto'>
          {/* Navigation */}
          <Navigation className='mt-6' />
        </div>
      </div>
      <div className='hidden lg:fixed right-0 top-0 w-[calc(100%-16rem)] h-16 bg-slate-200 shadow-navbar-dashboard lg:flex justify-between z-20'>
        <Typography className='my-auto pl-10'>
          {format(new Date(), 'EEEE, dd MMMM yyyy')}
        </Typography>
        <UserAction />
      </div>
    </>
  );
}
