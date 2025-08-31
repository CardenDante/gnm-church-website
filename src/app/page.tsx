import Hero from '@/components/home/Hero';
import NewsContentHub from '@/components/home/NewsContentHub';
import ActivitiesTestimonies from '@/components/home/ActivitiesTestimonies';
import OurDepartments from '@/components/home/OurDepartments';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <NewsContentHub />
      <OurDepartments />
      <ActivitiesTestimonies />
      
      
      {/* Placeholder for upcoming components */}
      {/* <QuickNavCards /> */}
      {/* <NoticesSection /> */}
      {/* <FaithQA /> */}
      {/* <SermonCards /> */}
      {/* <SocialMedia /> */}
    </div>
  );
}