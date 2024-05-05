import { Grid, Section, ComingSoonCard } from '@/components/ui';
import { COMING_SOON_FEATURES } from '@/utils/constants';

const ComingSoon: React.FC = () => {
  return (
    <Section>
      <Grid columns={1} className='lg:grid-cols-3 md:gap-5 gap-y-9'>
        {COMING_SOON_FEATURES.map((feature) => (
          <ComingSoonCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            imagePath={feature.image}
            content={feature.content}
          />
        ))}
      </Grid>
    </Section>
  );
};

export default ComingSoon;
