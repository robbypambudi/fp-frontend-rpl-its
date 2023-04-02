import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FiChevronDown } from 'react-icons/fi';

import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';
import useAuthStore from '@/store/useAuthStore';

type UserActionProps = React.ComponentPropsWithoutRef<'div'>;

export default function UserAction({ className, ...rest }: UserActionProps) {
  const user = useAuthStore.useUser();
  const logout = useAuthStore.useLogout();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.replace('/login');
  };

  return (
    <Disclosure
      as='div'
      className={clsxm('relative inline-block px-3 text-left mt-1', className)}
      {...rest}
    >
      {({ open }) => (
        <div className='rounded-md'>
          <Disclosure.Button
            className={clsx(
              'hover:bg-gray-500 group w-full rounded-md px-3.5 py-2 text-left font-medium bg-gray-400',
              'focus:outline-none hover:border hover:border-tainted-100 delay-100'
            )}
          >
            <div className='flex w-full items-center justify-between gap-2'>
              <div className='flex min-w-0 items-center justify-between space-x-3'>
                <NextImage
                  className='h-10 w-10 flex-shrink-0 overflow-hidden rounded-full'
                  src='/dashboard/avatar.png'
                  width={256}
                  height={256}
                  alt='avatar'
                />
                <div className='flex min-w-0 flex-1 flex-col'>
                  <Typography
                    variant='body'
                    className='font-secondary text-typo font-medium'
                  >
                    {user?.name}
                  </Typography>
                </div>
              </div>
              <FiChevronDown
                className={clsx(
                  'h-5 w-5 flex-shrink-0 text-typo group-hover:text-gray-500',
                  open && 'rotate-180'
                )}
                aria-hidden='true'
              />
            </div>
          </Disclosure.Button>
          <Disclosure.Panel className={clsx('mt-2')}>
            <div
              className={clsxm(
                'border border-gray-300 bg-gray-200 flex flex-col gap-1 px-6 py-3',
                'backdrop-blur-md rounded-md'
              )}
            >
              <Button className='' onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
