import { ImageProps as NextImageProps } from 'next/image';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export interface NavLinkProps {
  comingSoon?: boolean;
  text: string;
  href: string;
  chipClasses?: string;
}

export interface ChipProps {
  text: string;
  className?: string;
}

export interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export interface SubheadingProps {
  children: React.ReactNode;
  className?: string;
}

export interface BodyTextProps {
  children: React.ReactNode;
  className?: string;
  size: 'base' | 'lg' | 'xl' | 'sm' | 'xs';
}

export interface ImageProps extends NextImageProps {
  className?: string;
  alt: string;
}

export interface DividerProps {
  className?: string;
  vertical?: boolean;
}

export interface FlexContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  align?: 'start' | 'center' | 'end' | 'stretch';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  className?: string;
}

export interface GridContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number;
  gap?: string;
  className?: string;
}

export interface GridChildProps extends React.HTMLAttributes<HTMLDivElement> {
  colSpan?: number;
  className?: string;
}

export interface VideoProps {
  src: string;
  muted?: boolean;
  className?: string;
  keepPlaying?: boolean;
}

export interface AccordionProps {
  title: string;
  content: string;
  imageUrl: string;
}
