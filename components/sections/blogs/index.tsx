import { BlogCard, Flex, Section, Video } from '@/components/ui';
import { BLOGS } from '@/utils/constants';

const Blogs: React.FC = () => {
  return (
    <Section className='px-5 md:px-20 xl:px-32 relative'>
      <Video
        src='/assets/videos/roadmap-video.mp4'
        className='absolute inset-0 object-cover w-full h-full'
        keepPlaying
      />

      <div className='absolute inset-0 bg-black-fade-vertical' />
      <div className='absolute inset-0 bg-black-fade-horizontal' />

      <Flex direction='column' className='relative z-10 gap-5'>
        {BLOGS.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </Flex>
    </Section>
  );
};

export default Blogs;
