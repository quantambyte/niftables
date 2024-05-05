import {
  Grid,
  Section,
  Flex,
  Subheading,
  Image,
  Accordion,
} from '@/components/ui';
import { MISSION } from '@/utils/constants';

const OurMission: React.FC = () => {
  return (
    <Section>
      <Grid columns={1} className='md:gap-8 md:grid-cols-12 my-10 md:my-20'>
        <Flex
          direction='column'
          align='center'
          justify='center'
          className='col-span-12 md:col-span-8'
        >
          <Subheading className='inline-block uppercase'>
            OUR VISION IS TO SUPPORT THE INNOVATION OF AI BLOCKCHAIN PROJECTS
            <span className='gradient-text'>
              WHILE PRIORITIZING COMMUNITIES AND DEMOCRATIZING PROFITS
            </span>
          </Subheading>
          <Flex justify='end'>
            <Image
              src='/assets/images/mission.png'
              alt='Our mission'
              width={800}
              height={500}
              className='w-full h-[350px]'
            />
          </Flex>
        </Flex>
        <Flex
          direction='column'
          align='center'
          justify='center'
          className='col-span-12 md:col-span-4 gap-5'
        >
          {MISSION.map((item, ind) => (
            <Accordion
              key={ind}
              title={item.title}
              content={item.content}
              imageUrl={item.imageUrl}
            />
          ))}
        </Flex>
      </Grid>
    </Section>
  );
};

export default OurMission;
