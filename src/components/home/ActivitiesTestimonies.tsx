'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ActivitiesTestimonies = () => {
  // Initialize Swiper carousels
  useEffect(() => {
    function initializeSwipers() {
      const SwiperClass = (window as any).Swiper;
      if (SwiperClass) {
        // Personal Stories Swiper
        new SwiperClass("#mySwiper-stories", {
          slidesPerView: 1,
          spaceBetween: 10,
          pagination: {
            el: "#swiper-pagination-stories",
            clickable: true,
          },
          navigation: {
            nextEl: "#stories-next",
            prevEl: "#stories-prev",
          },
          breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1224: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1600: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1900: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          },
        });

        // Global Activities Swiper
        new SwiperClass("#mySwiper-activities", {
          slidesPerView: 1,
          spaceBetween: 10,
          loop: true,
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
          pagination: {
            el: "#swiper-pagination-activities",
            clickable: true,
          },
          navigation: {
            nextEl: "#activities-next",
            prevEl: "#activities-prev",
          },
          breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1224: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1600: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1900: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
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
      script.onload = initializeSwipers;
      document.body.appendChild(script);
    } else {
      initializeSwipers();
    }
  }, []);

  const personalStories = [
    {
      title: '#Born believer #Pastor\'s son #Certainty about heaven',
      subtitle: 'Elder Hwang Hyo-jung\'s Story',
      image: '/testimonies/heart_story04.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=rccH4_7Efpk&t=4s'
    },
    {
      title: '#Suicide #Poverty in wealth #Thought it would end when I die',
      subtitle: 'Sister Kim Ju-won\'s Story',
      image: '/testimonies/heart_story07.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=CwFli8uwsig'
    },
    {
      title: '#Family #Autistic but normal',
      subtitle: 'Sister Ahn Hyun-ji\'s Story',
      image: '/testimonies/heart_story08.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=u1HknuKWtew&t'
    },
    {
      title: '#Alcoholism #Condemnation #Made perfect forever',
      subtitle: 'Evangelist Shim Hong-seop\'s Story',
      image: '/testimonies/heart_story05.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=Yi1WG7kSKSM'
    },
    {
      title: '#With the keyword of heart',
      subtitle: 'Brother Lim Gwang-gyun\'s Story',
      image: '/testimonies/heart_story06.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=1128N3E8d-I&t'
    }
  ];

  const globalActivities = [
    {
      title: 'Meeting with Paraguay President Fernando Lugo',
      image: '/activities/activities09.jpg'
    },
    {
      title: 'Meeting with Kenya President William Samoei Ruto',
      image: '/activities/activities10.jpg'
    },
    {
      title: 'Meeting with Brazil President Jair Bolsonaro',
      image: '/activities/activities01.jpg'
    },
    {
      title: 'Meeting with Fiji President Ratu Wiliame Katonivere',
      image: '/activities/activities02.jpg'
    },
    {
      title: 'Meeting with Paraguay President Mario Abdo Benítez',
      image: '/activities/activities03.jpg'
    },
    {
      title: 'Meeting with Zambia President Hakainde Hichilema',
      image: '/activities/activities04.jpg'
    },
    {
      title: 'Meeting with Eswatini King Mswati III',
      image: '/activities/activities05.jpg'
    },
    {
      title: 'Meeting with Malawi President Lazarus Chakwera',
      image: '/activities/activities06.jpg'
    },
    {
      title: 'Meeting with Lesotho King Letsie III',
      image: '/activities/activities07.jpg'
    },
    {
      title: 'Meeting with Botswana President Mokgweetsi Masisi',
      image: '/activities/activities08.jpg'
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      
      {/* Personal Stories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Stories of people who escaped from sin<br className="hidden sm:block" />
            and found happiness
          </h2>
          <Link
            href="/testimonies"
            className="inline-block bg-white text-[#0A37BF] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-200"
          >
            View Details
          </Link>
        </div>

        <div className="relative">
          <div id="mySwiper-stories" className="swiper pb-12">
            <div className="swiper-wrapper">
              {personalStories.map((story, index) => (
                <div key={index} className="swiper-slide">
                  <div className="text-center group">
                    <Link href={story.videoUrl} target="_blank" className="block">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-4 shadow-lg">
                        <Image
                          src={story.image}
                          alt={story.subtitle}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Video Play Overlay */}
                        {/* <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-6 h-6 text-red-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div> */}
                      </div>
                      <h3 className="text-sm font-medium text-gray-800 group-hover:text-[#0A37BF] mb-2 line-clamp-3 transition-colors">
                        {story.title}
                      </h3>
                      <p className="text-xs text-gray-600">{story.subtitle}</p>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div id="swiper-pagination-stories" className="swiper-pagination !relative !bottom-0 !mt-8"></div>
          </div>

          {/* Custom Navigation Buttons for Stories */}
          <button 
            id="stories-prev" 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-gray-600 hover:text-[#0A37BF] transition-all duration-300 transform hover:scale-110 -ml-6"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            id="stories-next" 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-gray-600 hover:text-[#0A37BF] transition-all duration-300 transform hover:scale-110 -mr-6"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Global Activities Section - Full Width */}
      <div className="w-full">
        <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
            The world embraces the Gospel that<br className="hidden sm:block" />
            Good News Mission delivers
          </h2>
          <Link
            href="/activities#part4"
            className="inline-block bg-white text-[#0A37BF] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-200"
          >
            View Details
          </Link>
        </div>

        <div className="relative px-4 sm:px-6 lg:px-8">
          <div id="mySwiper-activities" className="swiper pb-12">
            <div className="swiper-wrapper">
              {globalActivities.map((activity, index) => (
                <div key={index} className="swiper-slide px-2">
                  <div className="relative group cursor-pointer">
                    <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                      <Image
                        src={activity.image}
                        alt={activity.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Overlay Title */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-white font-semibold text-sm leading-tight">
                            {activity.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div id="swiper-pagination-activities" className="swiper-pagination !relative !bottom-0 !mt-8"></div>
          </div>

          {/* Custom Navigation Buttons for Activities */}
          <button 
            id="activities-prev" 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-gray-600 hover:text-[#0A37BF] transition-all duration-300 transform hover:scale-110 ml-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            id="activities-next" 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-gray-600 hover:text-[#0A37BF] transition-all duration-300 transform hover:scale-110 mr-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesTestimonies;