import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      monument: ['MonumentExtended', 'sans-serif'],
      satoshi: ['Satoshi-Regular', 'sans-serif'],
      satoshiMedium: ['Satoshi-Medium', 'sans-serif'],
      satoshiBold: ['Satoshi-Bold', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'blue-to-purple': 'linear-gradient(to right, #3D8BFF, #AB23FF)',
        'invert-blue-to-purple': 'linear-gradient(to right, #AB23FF, #3D8BFF)',
        'hero-gradient':
          'linear-gradient(to top, rgba(0, 0, 0) 0%, rgba(41, 99, 215, 0.3) 60%, rgba(121, 25, 185, .7) 100%)',
        'blue-to-purple-vertical':
          'linear-gradient(to right, rgba(61, 139, 255, 0.3), rgba(171, 35, 255, 0.3))',
        'black-fade-vertical':
          'linear-gradient(to top, rgba(0, 0, 0), transparent, rgba(0, 0, 0))',
        'black-fade-horizontal':
          'linear-gradient(to right, rgba(0, 0, 0), transparent, rgba(0, 0, 0))',
      },

      colors: {
        black: '#000',
        white: '#fff',
        purple: '#AB23FF',
        blue: '#3D8BFF',
        'grey-dark': '#13171D',
        grey: '#46505F',
      },
      fontFamily: {
        monument: ['var(--font-monument)', 'sans-serif'],
        satoshi: ['var(--font-satoshi)', 'sans-serif'],
        satoshiMedium: ['var(--font-satoshi-medium)', 'sans-serif'],
        satoshiBold: ['var(--font-satoshi-bold)', 'sans-serif'],
      },
      fontSize: {
        xs: '0.625rem', // 10px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.375rem', // 22px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.375rem', // 38px
        '5xl': '3rem', // 48px
        '6xl': '4.25rem', // 68px
      },
    },
  },
  plugins: [],
};
export default config;
