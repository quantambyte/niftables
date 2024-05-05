'use client';

import { useState, FC } from 'react';

import { Button, Image } from '@/components/ui';
import { AccordionProps } from '@/interfaces';

const ChevronDownIcon: FC = () => (
  <svg
    className='w-6 h-6'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M19 9l-7 7-7-7'
    />
  </svg>
);

const ChevronUpIcon: FC = () => (
  <svg
    className='w-6 h-6'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M5 15l7-7 7 7'
    />
  </svg>
);

const Accordion: FC<AccordionProps> = ({ title, content, imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='border-b border-grey-dark pb-5'>
      <Button
        className='flex items-center justify-between w-full focus:outline-none'
        onClick={toggleAccordion}
      >
        <div className='flex items-center'>
          <div className='w-[80px] h-[80px] hexagon-gradient-border p-2'>
            <div
              className={` border-4 ${
                isOpen ? 'border-white' : 'border-grey-dark'
              } w-full h-full bg-grey flex items-center justify-center`}
            >
              <Image src={imageUrl} alt='Image' width={26} height={26} />
            </div>
          </div>
          <span className='text-left mx-4 text-lg font-satoshiBold hover:text-blue transition duration-300'>
            {title}
          </span>
        </div>
        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Button>
      <div
        className={`overflow-hidden transition-max-height duration-300 font-satoshi ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className='p-5'>{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
