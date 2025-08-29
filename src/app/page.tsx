import Hero from '@/components/home/Hero';
import NewsContentHub from '@/components/home/NewsContentHub';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <NewsContentHub />
      
      {/* Placeholder for upcoming components */}
      {/* <QuickNavCards /> */}
      {/* <NoticesSection /> */}
      {/* <FaithQA /> */}
      {/* <SermonCards /> */}
      {/* <SocialMedia /> */}
    </div>
  );
}