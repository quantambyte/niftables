import { NavLinkProps } from '@/interfaces';
import Chip from './chip';
import Link from 'next/link';

const NavLink: React.FC<NavLinkProps> = ({
  comingSoon = false,
  text,
  href,
  chipClasses,
}) => {
  return (
    <Link
      href={href}
      className='text-white font-satoshiBold text-base leading-[110%] relative'
    >
      {comingSoon && (
        <Chip
          text='SOON'
          className={`absolute -top-[5px] -right-10 py-0 px-1 ${chipClasses}`}
        />
      )}
      {text}
    </Link>
  );
};

export default NavLink;
