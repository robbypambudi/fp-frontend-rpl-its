import { Menu, Transition } from '@headlessui/react';
import * as React from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import clsxm from '@/lib/clsxm';

const links = [
  { href: '/about-us', label: 'Tentang Kami' },
  { href: '/coming-soon', label: 'Produk' },
  {
    href: '/coming-soon',
    label: 'Acara',
    children: [
      { href: '/pre-event', label: 'Pre Event' },
      { href: '/coming-soon', label: 'Opening' },
      { href: '/coming-soon', label: 'Main Event' },
      { href: '/coming-soon', label: 'Gebyar ITS EXPO' },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [colorChange, setColorChange] = React.useState(false);
  const [showAcara, setShowAcara] = React.useState(false);

  const toogleShowAcara = () => {
    setShowAcara((prev) => !prev);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const toggleShowNav = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <header
      className={clsxm(
        'fixed top-0 z-[100] w-full bg-transparent font-secondary transition-colors duration-300',
        colorChange && 'bg-tainted-100'
      )}
    >
      {/* Desktop Nav Start */}
      <div
        className={`${
          colorChange
            ? 'h-16 transition-all duration-200 ease-in-out'
            : 'transition-all duration-200 ease-in-out h-16 md:h-20'
        } mx-auto flex flex-row-reverse md:flex-row items-center justify-between gap-x-1 layout`}
      >
        <UnstyledLink href='/' className='font-bold hover:text-discolored-500'>
          <NextImage
            src='/logo-navbar.png'
            alt='footer logo'
            width='98'
            height='68'
            priority={true}
            className='w-20'
          />
        </UnstyledLink>
        <nav className='hidden md:block'>
          <ul className='hidden items-center justify-between md:flex space-x-6 xl:space-x-10 text-base'>
            {links.map(({ href, label, children }) => {
              if (children) {
                return (
                  <Menu key={`${href}${label}`} as='div' className='relative'>
                    <Menu.Button className='hover:text-discolored-500 flex items-center gap-1 text-discolored-1000 font-medium'>
                      {label} <BiChevronDown size={18} />
                    </Menu.Button>
                    <Transition
                      as={React.Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='absolute w-max bg-tainted-200 rounded-b-md p-2 mt-2 -translate-x-5'>
                        {children.map(({ href, label }) => (
                          <Menu.Item
                            key={`${href}${label}`}
                            as='a'
                            className='py-2 text-discolored-1000 font-medium'
                          >
                            {({ active }) => (
                              <UnstyledLink
                                href={href}
                                className={`${
                                  active
                                    ? 'bg-tainted-400 text-typo'
                                    : 'text-discolored-1000'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm  mt-1`}
                              >
                                {label}
                              </UnstyledLink>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                );
              } else {
                return (
                  <li key={`${href}${label}`}>
                    <UnstyledLink
                      href={href}
                      className='hover:text-discolored-500 text-discolored-1000 font-medium'
                    >
                      {label}
                    </UnstyledLink>
                  </li>
                );
              }
            })}
            <UnstyledLink
              href='/login'
              className='bg-tainted-300 px-5 py-1.5 rounded-lg text-discolored-700 hover:bg-tainted-400 font-semibold'
            >
              Masuk
            </UnstyledLink>
          </ul>
        </nav>

        <div className='relative z-50 mr-0 flex md:hidden'>
          {!isOpen && (
            <GiHamburgerMenu
              className='text-3xl text-gray-900'
              onClick={toggleShowNav}
            />
          )}
        </div>
      </div>
      {/* Desktop Nav End */}
      {/* Mobile Nav Start */}
      <div
        className={`flex translate-y-[calc(100%-5rem)] md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full opacity-0'
        } absolute bottom-0 left-0 h-screen w-full flex-col bg-discolored-1000 pt-[6vh] text-white transition duration-300`}
      >
        <nav className='relative z-20 flex h-screen w-full flex-col'>
          <UnstyledLink
            href='/'
            className='font-bold hover:text-discolored-500'
          >
            <NextImage
              src='/logo-navbar.png'
              alt='footer logo'
              width='98'
              height='68'
              priority={true}
              className=' mx-auto'
            />
          </UnstyledLink>

          <ul className='flex flex-col items-center justify-center mx-auto font-medium space-y-6 text-white text-base mt-10'>
            {links.map(({ href, label, children }) => {
              if (children) {
                return (
                  <li key={`${href}${label}`}>
                    <button
                      onClick={toogleShowAcara}
                      className='hover:text-discolored-500 flex items-center gap-1'
                    >
                      {label}{' '}
                      <BiChevronDown
                        size={18}
                        className={`inline-flex ${
                          showAcara ? 'rotate-180' : 'rotate-0'
                        }  transition duration-200`}
                      />
                    </button>
                    {showAcara && (
                      <ul className='mt-2'>
                        {children.map(({ href, label }) => (
                          <li
                            key={`${href}${label}`}
                            className='text-sm font-normal py-2'
                          >
                            {' '}
                            <UnstyledLink
                              href={href}
                              className='hover:text-discolored-500'
                            >
                              {label}
                            </UnstyledLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              } else {
                return (
                  <li key={`${href}${label}`}>
                    <UnstyledLink
                      href={href}
                      className='hover:text-discolored-500'
                    >
                      {label}
                    </UnstyledLink>
                  </li>
                );
              }
            })}
            <UnstyledLink
              href='/login'
              className='bg-tainted-300 px-5 py-1.5 rounded-lg text-discolored-700 hover:bg-tainted-400 font-semibold'
            >
              Masuk
            </UnstyledLink>
          </ul>
          {isOpen && (
            <FaTimes
              className='absolute bottom-20 right-1/2 mx-auto h-12 w-12 translate-x-1/2 rounded-lg bg-red-500 p-3 text-3xl font-thin text-discolored-900'
              onClick={toggleShowNav}
            />
          )}
        </nav>
      </div>
      {/* Mobile Nav End */}
    </header>
  );
}
