import Link from 'next/link';
import {
  Tv,
  Globe,
  Video,
} from 'lucide-react';

export default function BroadcastingPage() {
  const programs = [
    {
      title: 'Sunday Service Broadcast',
      description: 'Live transmission of our main Sunday worship services',
      time: 'Sundays 9:00 AM & 11:00 AM',
      format: 'Live'
    },
    {
      title: 'Daily Devotionals',
      description: 'Short spiritual messages for daily inspiration',
      time: 'Weekdays 7:00 AM',
      format: 'Pre-recorded'
    },
    {
      title: 'Youth Programs',
      description: 'Content focused on youth development and empowerment',
      time: 'Fridays 8:00 PM',
      format: 'Live & Recorded'
    },
    {
      title: 'Special Features',
      description: 'Documentaries, interviews, and special ministry coverage',
      time: 'Various Times',
      format: 'Pre-recorded'
    }
  ];

  const coverageAreas = [
    'Nairobi Metropolitan',
    'Central Kenya',
    'Coastal Region', 
    'Western Kenya',
    'Rift Valley',
    'Eastern Kenya',
    'Nyanza Region'
  ];

  return (
    <div className="p-8">
      {/* Hero Section */}
      <div className="mb-10">
        <div className=" ">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Good News Broadcasting System (GBS)
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Spreading the Gospel through modern media to reach every home in Kenya and beyond.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 ">
        {/* Main Content */}
        <div>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-2 h-6 bg-blue-600 mr-3 rounded"></span>
              About GBS
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Good News Broadcasting System (GBS) is founded on Christian values with a strong emphasis on youth leadership training. Established to practice media ministry more efficiently, GBS delivers reliable information and touching content directly to viewers' homes.
              </p>
              <p>
                We predict and adapt to the massive media changes of the 21st century. As we meet the digital broadcast era, we're opening a new chapter with bold innovation and constant challenge under our motto: <strong>"Beyond the limit"</strong>.
              </p>
              <p>
                In December 2009, GBS launched alongside Kenya's Digital TV switch-on. We began with analogue broadcasting from Nairobi to all major towns in Kenya, and are now preparing for digital broadcasting expansion into Tanzania and beyond.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-2 h-6 bg-blue-600 mr-3 rounded"></span>
              Our Vision
            </h2>
            <div className="bg-gradient-to-r from-blue-100 to-blue-200 text-white rounded-xl p-6">
              <p className="text-lg mb-4">
                "To become a leading multicultural content provider that develops our world into one living beautifully in harmony."
              </p>
              <p className="text-blue-100">
                With a fortified foundation, we lead the future into the high-definition multi-channel era, creating content that transforms lives and builds community.
              </p>
            </div>
          </section>
        </div>

      </div>

    </div>
  );
}

