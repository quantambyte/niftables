import { HeadingProps, SubheadingProps, BodyTextProps } from '@/interfaces';

const Heading: React.FC<HeadingProps> = ({ children, className = '' }) => {
  return (
    <h2
      className={`text-3xl sm:text-4xl md:text-4xl xl:text-6xl font-monument uppercase ${className}`}
    >
      {children}
    </h2>
  );
};

const Subheading: React.FC<SubheadingProps> = ({
  children,
  className = '',
}) => {
  return (
    <h2
      className={`text-xl sm:text-2xl md:text-4xl font-monument capitalize ${className}`}
    >
      {children}
    </h2>
  );
};

const Body: React.FC<BodyTextProps> = ({ children, className = '', size }) => {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };
  return (
    <p className={`${sizeClasses[size]} font-satoshi ${className}`}>
      {children}
    </p>
  );
};

export { Heading, Subheading, Body };
