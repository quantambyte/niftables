import { Flex, Body, Video, Heading } from '@/components/ui';
import Navbar from '../navbar';

const HeroSection: React.FC = () => {
  return (
    <div className='relative min-h-screen'>
      <Navbar />
      <section className='h-full flex justify-center items-end'>
        <Video
          src='/assets/videos/main-background-video.mp4'
          className='absolute inset-0 object-cover w-full h-full z-0'
          keepPlaying
        />
        <div className='absolute inset-0 bg-hero-gradient z-10 flex justify-center'>
          <Flex
            direction='column'
            align='start'
            justify='end'
            className='p-8 w-full pb-10 md:pb-28 px-5 md:px-20 xl:px-32'
          >
            <Heading className='leading-tight'>
              The world&apos;s first platform for Tokenizing AI blockchain
              projects
            </Heading>

            <Body
              size='xl'
              className='gradient-text w-max border-t border-b py-1 border-gradient-horizontal max-md:hidden'
            >
              Hold the Creon Pass NFT and earn passive income from AI Tools
            </Body>

            <Body
              size='xs'
              className='gradient-text w-max border-t border-b py-1 border-gradient-horizontal md:hidden'
            >
              Hold the Creon Pass NFT and earn passive income from AI Tools
            </Body>
          </Flex>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
