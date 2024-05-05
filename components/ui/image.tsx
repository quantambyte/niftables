import NextImage from 'next/image';

import { ImageProps } from '@/interfaces';

const Image: React.FC<ImageProps> = ({ className, alt, ...props }) => {
  return (
    <NextImage alt={alt} {...props} className={`object-cover ${className}`} />
  );
};

export default Image;
