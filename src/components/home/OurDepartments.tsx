'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const OurDepartments = () => {
  // Initialize Swiper for featured departments carousel
  useEffect(() => {
    function initializeSwiper() {
      const SwiperClass = (window as any).Swiper;
      if (SwiperClass) {
        // Featured departments carousel
        new SwiperClass("#mySwiper-departments", {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 5500,
            disableOnInteraction: false,
          },
          pagination: {
            el: "#swiper-pagination-departments",
            clickable: true,
          },
        });
      }
    }

    // Load Swiper if not already loaded
    if (!(window as any).Swiper) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/swiper@11.0.5/swiper-bundle.min.css';
      document.head.appendChild(link);

      const script = document.createElement('script');
      script.src = 'https://unpkg.com/swiper@11.0.5/swiper-bundle.min.js';
      script.onload = initializeSwiper;
      document.body.appendChild(script);
    } else {
      initializeSwiper();
    }
  }, []);

  const departments = [
    {
      name: 'Good News Broadcasting System',
      description: 'Spreading the Gospel through media',
      href: '/departments/broadcasting',
      logo: '/departments/gbs-logo.svg',
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Good News Medical Volunteers',
      description: 'Healthcare ministry worldwide',
      href: '/departments/medical',
      logo: '/departments/logo_GMV.png',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Mahanaim Bible College',
      description: 'Training future ministers',
      href: '/departments/college',
      logo: '/departments/mclogo.svg',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Mahanaim International School',
      description: 'Christian education excellence',
      href: '/departments/school',
      logo: '/departments/full_white_logo.svg',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'International Youth Fellowship',
      description: 'Empowering young leaders',
      href: '/departments/youth',
      logo: '/departments/IYF-logo-white.png',
      color: 'from-orange-500 to-orange-600'
    },
    {
      name: 'Christian Leaders Fellowship',
      description: 'Uniting Christian leaders globally',
      href: '/departments/leaders',
      logo: '/departments/clf.avif',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  const featuredDepartments = [
    {
      name: 'Good News Broadcasting System',
      description: 'Reaching millions through television, radio, and digital media with the Gospel message',
      logo: '/departments/gbs-logo.svg',
      href: '/departments/broadcasting'
    },
    {
      name: 'International Youth Fellowship',
      description: 'Training and empowering young people to be leaders in their communities and churches',
      logo: '/departments/IYF-logo-white.png',
      href: '/departments/youth'
    },
    {
      name: 'Mahanaim Bible College',
      description: 'Providing comprehensive theological education and ministry training',
      logo: '/departments/mclogo.svg',
      href: '/departments/college'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column - Departments Overview (3/12) */}
          <div className="lg:col-span-3">
            <div className="h-full flex flex-col justify-between space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#0A37BF] mb-4">Our Departments</h2>
                <p className="text-gray-700 leading-relaxed">
                  Discover the various ministries and organizations working together to spread the Gospel and serve communities worldwide through diverse channels of ministry.
                </p>
              </div>
              <div>
                <Link
                  href="/departments"
                  className="inline-block bg-[#04D9C4] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0477BF] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  View All Departments
                </Link>
              </div>
            </div>
          </div>

          {/* Middle Column - Departments Grid (6/12) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {departments.map((dept, index) => (
                <Link
                  key={index}
                  href={dept.href}
                  className={`group block p-4 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] border border-gray-100 hover:border-[#04D9C4] ${
                    dept.name.includes('Youth') || dept.name.includes('School')
                      ? 'bg-gray-800 hover:bg-gray-700' 
                      : 'bg-gray-50 hover:bg-white'
                  }`}
                >
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={dept.logo}
                        alt={dept.name}
                        width={96}
                        height={96}
                        className={`object-contain ${
                          dept.name.includes('Medical') || dept.name.includes('College') || dept.name.includes('Fellowship') || dept.name.includes('School')
                            ? 'w-24 h-24' 
                            : 'w-20 h-20'
                        }`}
                      />
                    </div>
                    <h3 className={`font-semibold text-sm leading-tight mb-2 transition-colors ${
                      dept.name.includes('Youth') || dept.name.includes('School')
                        ? 'text-white group-hover:text-[#04D9C4]' 
                        : 'text-gray-800 group-hover:text-[#0A37BF]'
                    }`}>
                      {dept.name}
                    </h3>
                    <p className={`text-xs transition-colors ${
                      dept.name.includes('Youth') || dept.name.includes('School')
                        ? 'text-gray-300 group-hover:text-gray-200' 
                        : 'text-gray-600 group-hover:text-gray-700'
                    }`}>
                      {dept.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column - Featured Departments Carousel (3/12) */}
          <div className="lg:col-span-3">
            <div id="mySwiper-departments" className="swiper h-full">
              <div className="swiper-wrapper">
                {featuredDepartments.map((dept, index) => (
                  <div key={index} className="swiper-slide">
                    <Link href={dept.href} className="block group h-full">
                      <div className="bg-gradient-to-br from-[#0A37BF] to-[#04D9C4] rounded-xl p-6 text-white h-full flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-[1.02]">
                        <div className="flex-1">
                          <div className="w-20 h-20 bg-white/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors p-3">
                            <Image
                              src={dept.logo}
                              alt={dept.name}
                              width={64}
                              height={64}
                              className={`object-contain ${
                                dept.name.includes('Youth') || dept.name.includes('College')
                                  ? 'w-16 h-16 filter brightness-0 invert' 
                                  : 'w-16 h-16'
                              }`}
                            />
                          </div>
                          <h3 className="font-bold text-lg mb-3 leading-tight">
                            {dept.name}
                          </h3>
                          <p className="text-sm opacity-90 leading-relaxed">
                            {dept.description}
                          </p>
                        </div>
                        <div className="mt-6">
                          <div className="inline-flex items-center text-sm font-semibold group-hover:text-yellow-200 transition-colors">
                            Learn More
                            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div id="swiper-pagination-departments" className="swiper-pagination !bottom-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDepartments;