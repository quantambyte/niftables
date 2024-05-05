'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Button, Chip, Flex, Image, NavLink } from '@/components/ui';
import { NAV_LINKS, SOCIALS } from '@/utils/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='absolute top-0 left-0 w-full z-50 bg-transparent'>
      <Flex className='mx-auto justify-between items-center py-4 px-5 md:px-10'>
        <Link href='/'>
          <Image
            src='/assets/images/logo.svg'
            alt='Logo'
            width={160}
            height={40}
          />
        </Link>
        <div className='hidden md:flex md:items-center'>
          <div className='mr-16 space-x-20'>
            {NAV_LINKS.map((link) => (
              <NavLink
                text={link.label}
                key={link.href}
                href={link.href}
                comingSoon={link.soon}
                chipClasses='!px-1 !py-0'
              />
            ))}
          </div>
          <Button className='border-2 border-white hover:scale-105 transition-all duration-300'>
            Connect
          </Button>
        </div>
        <div className='md:hidden'>
          <Button onClick={toggleDrawer}>
            <Image
              src='/assets/images/burger.svg'
              alt='Menu'
              width={25}
              height={25}
            />
          </Button>
        </div>
      </Flex>
      {isOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-40 overflow-hidden max-h-screen'
          onClick={toggleDrawer}
        >
          <div className='fixed inset-y-0 right-0 w-1/2 bg-black pl-10 py-5 z-50 flex flex-col justify-between overflow-y-auto max-h-screen'>
            <Flex direction='column' className='h-full'>
              <div className='flex justify-end mb-8 mr-2'>
                <Button className='border-2 border-white max-md:text-sm md:text-base'>
                  Connect
                </Button>
                <Button
                  onClick={toggleDrawer}
                  className='bg-blue h-10 px-2 ml-2'
                >
                  X
                </Button>
              </div>
              <Flex direction='column' className='gap-3 font-satoshiBold '>
                {NAV_LINKS.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    className={`${
                      link.label === 'Home' && 'border-t'
                    } border-b border-grey-dark py-3 text-sm`}
                  >
                    {link.label}
                    {link.soon && (
                      <Chip text='Soon' className='-mt-1 font-satoshi' />
                    )}
                  </Link>
                ))}
              </Flex>
            </Flex>
            <div className='flex space-x-4'>
              {SOCIALS.map((social) => (
                <Link
                  href={social.url}
                  key={social.name}
                  target='_blank'
                  className='border-2 border-white rounded-full w-8 h-8 flex items-center justify-center'
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={14}
                    height={12}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
