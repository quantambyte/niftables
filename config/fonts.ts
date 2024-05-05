import localFont from 'next/font/local';

const monument = localFont({
  src: '../public/assets/fonts/MonumentExtended-Regular.woff2',
  variable: '--font-monument',
});

const satoshi = localFont({
  src: '../public/assets/fonts/Satoshi-Regular.woff2',
  variable: '--font-satoshi',
});

const satoshiMedium = localFont({
  src: '../public/assets/fonts/Satoshi-Medium.woff2',
  variable: '--font-satoshi-medium',
});

const satoshiBold = localFont({
  src: '../public/assets/fonts/Satoshi-Bold.woff2',
  variable: '--font-satoshi-bold',
});

export { monument, satoshi, satoshiMedium, satoshiBold };
