import { Body, Chip, Flex, Image, Subheading } from '@/components/ui';

interface ComingSoonCardProps {
  title: string;
  description: string;
  imagePath: string;
  content: string;
}

const ComingSoonCard: React.FC<ComingSoonCardProps> = ({
  title,
  description,
  imagePath,
  content,
}) => {
  return (
    <div className='bg-grey-dark shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg relative'>
      <Chip
        text='COMING SOON'
        className='absolute -top-3 right-2 bg-white text-black'
      />

      <div className='p-5'>
        <Subheading>{title}</Subheading>
        <Body
          size='sm'
          className='md:text-xl gradient-text h-[70px] font-satoshiBold'
        >
          {description}
        </Body>
      </div>

      <Image
        src={imagePath}
        alt='Coming Soon'
        className='w-full mb-3'
        width={300}
        height={230}
      />
      <div className='p-5'>
        <p className='text-white text-base'>{content}</p>
      </div>
    </div>
  );
};

interface BlogCardProps {
  title: string;
  content: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, content, image }) => (
  <Flex className='bg-[#13171D80] rounded-md flex-col md:flex-row-reverse'>
    <div className='w-full md:w-[30%]'>
      <div className='h-full'>
        <Image
          src={image}
          alt={title}
          className='w-full h-full object-cover'
          width={230}
          height={230}
        />
      </div>
    </div>
    <div className='w-full md:w-[70%] p-5'>
      <Subheading className='mb-5'>{title}</Subheading>
      <Body size='sm' className='md:text-lg font-satoshi'>
        {content}
      </Body>
    </div>
  </Flex>
);

export { ComingSoonCard, BlogCard };
