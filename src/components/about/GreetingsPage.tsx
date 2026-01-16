'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Mic, GraduationCap, Landmark, Star } from 'lucide-react';

const GreetingsPage = () => {
  const profileAchievements = [
    { number: 1, text: "Founder of the Good News Mission Church" },
    { number: 2, text: "Author of 38 books, including the best-selling titles, 'Navigating the Heart: Who Are You Who Is Dragging Me?' and 'Secret of Forgiveness of Sins and Being Born Again'" },
    { number: 3, text: "Author of a featured sermon series in the New York Times and Los Angeles Times" },
    { number: 4, text: "Founder of Mahanaim, a Christian post-secondary school in NY" },
    { number: 5, text: "Religious advisor to national presidents" },
    { number: 6, text: "Founder of International Youth Fellowship (IYF)" },
    { number: 7, text: "Host of the annual Ministers of Youth World Forum" },
    { number: 8, text: "Founder of Good News Corps" },
    { number: 9, text: "Founder of the Lincoln House School" },
    { number: 10, text: "Founder of Good News Broadcasting System (GBS)" },
    { number: 11, text: "Honorary Doctor of Philosophy, National University of Mongolia" },
    { number: 12, text: "'New Leader of Churches' award, The Daily Sports" },
    { number: 13, text: "2005 New Korean Award, Hankook Ilbo" },
    { number: 14, text: "'2005 Great Korean Grand Prize' award from The Korea Times" },
    { number: 15, text: "Official TI&E Speaker for the Korean National Army" }
  ];

  return (
    <main>
      {/* Hero Section */}
      <div className="relative py-12 bg-gradient-to-r from-blue-900 to-cyan-800  text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Greetings Message</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            From the Founder - A message of faith, peace, and spiritual guidance from Pastor Park Ock Soo
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about/history"
              className="bg-white text-[#0477BF] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Our History
            </Link>
            <Link
              href="/about/beliefs"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Our Beliefs
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column: Message Content */}
          <div className="lg:col-span-2">
            {/* Founder Introduction */}
            <div className="bg-white rounded-2xl md:shadow-md p-8 mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
                <div className="order-2 lg:order-1">
                  <div className="relative aspect-square rounded-xl overflow-hidden md:shadow-md">
                    <Image
                      src="/profiles/ocksoo.jpg"
                      alt="Pastor Park Ock Soo"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-2xl font-bold text-[#0477BF] mb-4">Greeting from the Founder</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Bible shows that David was playing the harp when King Saul was about to throw a spear at him. King Saul was a king who believed in God, but he always felt uneasy, keeping a spear with him. But David could play the harp and sing in front of King Saul even when he knew that Saul planned to kill him.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    David believed that God would stay with him and protect him from all hardships including Saul's spear. David sang in peace while King Saul was in fear.
                  </p>
                </div>
              </div>

              {/* Faith and Peace Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Living in Faith, Not Fear</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The ones who are with God can rest even in front of any possible problems including sins because God takes care of them. But the ones who do not have true lives of faith try to handle all the hardships by themselves, are in pain feeling fearful and sad.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    I see the members of the Good News Mission enjoy peace, a happy family, and blessed lives by receiving the forgiveness of sins and living spiritual lives. Some couples were divorced before they came to the mission, but they became united after joining the mission.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#0477BF] to-cyan-600 p-6 rounded-xl text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 mx-auto mb-4">
                    <path d="M11 2h2v7h5v2h-5v11h-2v-11h-5v-2h5z" />
                  </svg>
                  <blockquote className="text-lg italic leading-relaxed text-center mb-4">
                    "There are almost no incidents of divorce inside the mission because God holds and keeps our hearts to give us happy families."
                  </blockquote>
                  <cite className="block text-right text-sm opacity-90">
                    — Pastor Park Ock Soo
                  </cite>
                </div>
              </div>
                <div className="text-center my-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">True Spiritual Life</h3>
                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  When we are saved from sin, born again, and accompany Jesus, He leads us to rest, peace, and joy. That is to say, we will live true spiritual lives where God works among us. I hope that you will receive the forgiveness of sins and enjoy a peaceful and blessed life by coming to the Good News Mission.
                </p>
              </div>
            </div>


          </div>

          {/* Right Column: Quick Info */}
          <div className="space-y-8">

            {/* Founder Quick Facts */}
            <div className="bg-white border-blue-100 rounded-2xl md:shadow-md p-6 text-gray-700">
              <h2 className="text-xl font-bold mb-4">Founder at a Glance</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">Pastor Park Ock Soo</h3>
                  <p className="text-[#0477BF] text-sm">Founder & Spiritual Leader</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-300 fill-yellow-300 mr-2" />
                    <span>38 Published Books</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-300 fill-yellow-300 mr-2" />
                    <span>International Ministry Reach</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-300 fill-yellow-300 mr-2" />
                    <span>Multiple Educational Initiatives</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-300 fill-yellow-300 mr-2" />
                    <span>15+ Major Awards & Honors</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Messages */}
            <div className="bg-white rounded-2xl md:shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">More From Our Leadership</h2>
              <div className="space-y-4">
                <Link
                  href="/sermons"
                  className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <BookOpen className="w-6 h-6 mr-3 text-[#0477BF]" />
                  <div>
                    <div className="font-medium text-gray-800">Latest Sermons</div>
                    <div className="text-sm text-gray-600">Biblical teaching from our pastors</div>
                  </div>
                </Link>
                <Link
                  href="/testimonies"
                  className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <Mic className="w-6 h-6 mr-3 text-[#0477BF]" />
                  <div>
                    <div className="font-medium text-gray-800">Testimonies</div>
                    <div className="text-sm text-gray-600">Stories of changed lives</div>
                  </div>
                </Link>
                <Link
                  href="/mbc"
                  className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <GraduationCap className="w-6 h-6 mr-3 text-[#0477BF]" />
                  <div>
                    <div className="font-medium text-gray-800">Bible College</div>
                    <div className="text-sm text-gray-600">Theological education</div>
                  </div>
                </Link>
                <Link
                  href="/departments"
                  className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <Landmark className="w-6 h-6 mr-3 text-[#0477BF]" />
                  <div>
                    <div className="font-medium text-gray-800">Our Ministries</div>
                    <div className="text-sm text-gray-600">Departments & services</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-white rounded-2xl md:shadow-md p-6 border-2 border-blue-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Experience True Spiritual Life</h2>
              <p className="text-gray-600 mb-4 text-sm">
                Join us in discovering the peace and joy that comes from receiving forgiveness of sins and living in faith.
              </p>
              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="block w-full bg-[#0477BF] text-white py-3 rounded-lg font-semibold text-center hover:bg-[#0A37BF] transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="/about/branches"
                  className="block w-full border-2 border-[#0477BF] text-[#0477BF] py-3 rounded-lg font-semibold text-center hover:bg-blue-50 transition-colors"
                >
                  Find a Church Near You
                </Link>
              </div>
            </div>

          </div>
        </div>


        {/* Achievements Section */}
        <div className="bg-white rounded-2xl md:shadow-md mt-6 p-8">
          <h2 className="text-2xl font-bold text-[#0477BF] mb-4 text-center">Pastor Park Ock Soo Profile</h2>
          <p className="text-gray-600 text-center mb-8">Founder and spiritual leader of the Good News Mission</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profileAchievements.map((achievement) => (
              <div key={achievement.number} className="flex items-start p-4 bg-blue-50 rounded-lg transition-colors border border-gray-100">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#0477BF] to-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                  {achievement.number}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{achievement.text}</p>
              </div>
            ))}
          </div>

          {/* Website Link */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Learn More About Pastor Park Ock Soo</h4>
                <p className="text-sm text-gray-600">Visit his personal website for more insights and teachings</p>
              </div>
              <Link
                href="https://www.ocksoopark.com"
                target="_blank"
                className="inline-flex items-center bg-white border border-[#0477BF] text-[#0477BF] px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors whitespace-nowrap"
              >
                www.ocksoopark.com
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default GreetingsPage;
