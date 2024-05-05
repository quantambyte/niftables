import { DividerProps } from '@/interfaces';

const Divider: React.FC<DividerProps> = ({
  className = '',
  vertical = false,
}) => {
  const baseClass = vertical ? 'border-l' : 'border-t';
  return <hr className={`${baseClass} border-grey-dark mb-3 ${className}`} />;
};

export default Divider;
