import {
  CreonPass,
  Profiting,
  OurMission,
  ComingSoon,
  Blogs,
  Footer,
  Hero,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Hero />
      <div className='px-5 md:px-20 xl:px-32'>
        <CreonPass />
        <Profiting />
        <OurMission />
        <ComingSoon />
      </div>
      <Blogs />
      <Footer />
    </>
  );
}
