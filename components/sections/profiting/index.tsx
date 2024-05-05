import {
  Grid,
  Heading,
  Body,
  Section,
  Video,
  Flex,
  Subheading,
} from '@/components/ui';

const Profiting: React.FC = () => {
  return (
    <Section>
      <header className='mt-5 md:mt-36'>
        <Heading>Profiting Through</Heading>
        <Subheading className='gradient-text text-right w-full'>
          AI Innovation & Decentralization
        </Subheading>
      </header>
      <Grid columns={1} className='md:gap-8 md:grid-cols-2 my-10 md:my-20'>
        <Flex align='center' justify='center'>
          <Video src='/assets/videos/creon-logo.mp4' muted={false} />
        </Flex>
        <Flex
          direction='column'
          align='center'
          justify='center'
          className='border-l border-r border-grey-dark h-full px-5 md:px-10 max-w-[80%] mx-auto'
        >
          <Body
            size='base'
            className='md:text-xl font-satoshiBold mb-3 md:mb-5'
          >
            The dynamic community driven business model of the future.
          </Body>
          <Body size='sm' className='md:text-lg md:mb-5 font-satoshi'>
            At Creon, we blend the power of AI tools with the dynamic crypto and
            NFT markets, utilizing an innovative business model to drive
            profitability. This approach empowers our community, as our NFT and
            token holders directly benefit from the growth and prosperity of the
            Creon network, creating a win-win scenario for both our community
            and for the projects we launch.
          </Body>
        </Flex>
      </Grid>
    </Section>
  );
};

export default Profiting;
