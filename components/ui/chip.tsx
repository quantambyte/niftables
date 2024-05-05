import { ChipProps } from '@/interfaces';

const Chip: React.FC<ChipProps> = ({ text, className }) => {
  return (
    <span
      className={`bg-black text-purple text-center font-satoshiBold text-xs px-3 py-2 rounded-full ${className}`}
    >
      {text}
    </span>
  );
};

export default Chip;
