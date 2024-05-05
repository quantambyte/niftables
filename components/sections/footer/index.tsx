import Link from 'next/link';

import { Body, Flex, Image } from '@/components/ui';
import { SOCIALS } from '@/utils/constants';

const Footer = () => {
  return (
    <footer className='py-2 md:py-5 px-5 md:px-20 xl:px-32'>
      <Flex align='center' justify='center' className='md:justify-between'>
        <Flex align='center'>
          <Body size='base'>© Creon 2023. All rights reserved.</Body>
          <div className='hidden md:flex md:space-x-4  md:ml-14'>
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
        </Flex>

        <Image
          src='/assets/images/footer-logo.svg'
          alt='Footer Logo'
          width={190}
          height={21}
          className='hidden md:block'
        />
      </Flex>
    </footer>
  );
};

export default Footer;
