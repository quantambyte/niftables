import {
  FlexContainerProps,
  GridChildProps,
  GridContainerProps,
} from '@/interfaces';

const Flex: React.FC<FlexContainerProps> = ({
  direction = 'row',
  justify = 'start',
  align = 'stretch',
  wrap = 'nowrap',
  className = '',
  children,
  ...props
}) => {
  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
  };

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  };

  return (
    <div
      className={`flex ${direction === 'row' ? 'flex-row' : 'flex-col'} ${
        justifyClasses[justify]
      } ${alignClasses[align]} ${wrap} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const Grid: React.FC<GridContainerProps> = ({
  columns = 2,
  gap = '4',
  className = '',
  children,
  ...props
}) => {
  return (
    <div
      className={`grid grid-cols-${columns} gap-${gap} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const GridChild: React.FC<GridChildProps> = ({
  colSpan,
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={`col-span-${colSpan} ${className}`} {...props}>
      {children}
    </div>
  );
};

const Section: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <section className={`py-12 md:py-20 ${className}`} {...props}>
      {children}
    </section>
  );
};

export { Flex, Grid, GridChild, Section };
