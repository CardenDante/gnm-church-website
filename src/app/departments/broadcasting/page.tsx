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
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Good News Broadcasting System (GBS)
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Spreading the Gospel through modern media to reach every home in Kenya and beyond.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="https://gbskenya.com" 
              target="_blank"
              className="bg-blue-600 text-white px-4 py-3 gap-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
             <Globe className=' ' />  Visit GBS Website
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
            <Link 
              href="https://gbskenya.com/live" 
              target="_blank"
              className="bg-white border-2 border-blue-600 gap-2 text-blue-600 px-4 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              <Video className=' '/> Watch Live
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6">
              <p className="text-lg mb-4">
                "To become a leading multicultural content provider that develops our world into one living beautifully in harmony."
              </p>
              <p className="text-blue-100">
                With a fortified foundation, we lead the future into the high-definition multi-channel era, creating content that transforms lives and builds community.
              </p>
            </div>
          </section>
        </div>

        {/* Side Content */}
        <div>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-2 h-6 bg-blue-600 mr-3 rounded"></span>
              Program Schedule
            </h2>
            <div className="space-y-4">
              {programs.map((program, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-gray-800">{program.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                      {program.format}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{program.description}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span className="mr-2">🕒</span>
                    <span>{program.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <Link 
              href="https://gbskenya.com/schedule" 
              target="_blank"
              className="inline-block mt-4 text-blue-600 font-medium hover:underline"
            >
              View Full Schedule →
            </Link>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-6 bg-blue-600 mr-3 rounded"></span>
              Coverage Areas
            </h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="grid grid-cols-2 gap-3">
                {coverageAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Plus expanding coverage to Tanzania and neighboring regions
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-10 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Partner With GBS</h3>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Join us in spreading the Gospel through media. Support our broadcasts, advertise with us, or volunteer your media skills.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact GBS Team
          </Link>
          <Link 
            href="https://gbskenya.com/partner" 
            target="_blank"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Partnership Opportunities
          </Link>
        </div>
      </div>
    </div>
  );
}

