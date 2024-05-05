import {
  Grid,
  Heading,
  Body,
  Divider,
  Section,
  Button,
  Video,
  Flex,
} from '@/components/ui';
import { CREON_PASS_FEATURES } from '@/utils/constants';

const CreonPass: React.FC = () => {
  /**
   * Renders a single feature item with a bullet point.
   * @param feature - The feature to render.
   * @returns A bullet point with the feature text.
   */
  const renderFeatureItem = (feature: string, ind: number) => (
    <li
      className='border border-grey-dark py-2 px-4 rounded-lg w-max'
      key={ind}
    >
      <Body size='xs' className='md:lg'>
        {feature}
      </Body>
    </li>
  );

  return (
    <Section>
      <Grid columns={1} className='md:gap-8 md:grid-cols-2'>
        <Flex
          justify='center'
          direction='column'
          className='text-center md:text-left'
        >
          <Heading>creon pass nft</Heading>
          <Divider className='mb-5' />
          <Body size='lg' className='gradient-text font-satoshiBold'>
            The Creon NFT pass unlocks access to AI projects, the Creon
            launchpad, and a ticket to generate passive income through AI-driven
            tools
          </Body>
          <ul className='flex flex-col gap-4 mt-5 md:mt-10'>
            {CREON_PASS_FEATURES.map((feature, ind) =>
              renderFeatureItem(feature, ind)
            )}
          </ul>

          <Button className='mt-5 md:mt-10 w-full bg-blue-to-purple'>
            Buy Creon Pass
          </Button>
        </Flex>
        <Flex align='center' justify='center'>
          <Video src='/assets/videos/nft-video.mp4' />
        </Flex>
      </Grid>
    </Section>
  );
};

export default CreonPass;
