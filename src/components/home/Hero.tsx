'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    const slides = [
    {
      id: 1,
      image: '/Slider/slider-1-1-2.jpg',
      alt: 'Liberia Presidential Meeting',
      href: 'https://www.iyf.or.kr/event/TICAD2025'
    },
    {
      id: 2,
      image: '/Slider/slider-2-2-2.jpg',
      alt: 'South Africa Presidential Meeting',
      href: 'https://www.iyf.or.kr/event/TICAD2025'
    },
    {
      id: 3,
      image: '/Slider/slider-3-3-3.jpg',
      alt: 'Burundi Presidential Meeting',
      href: 'https://www.iyf.or.kr/event/TICAD2025'
    },
    {
      id: 3,
      image: '/Slider/slider-4-4.jpg',
      alt: 'Burundi Presidential Meeting',
      href: 'https://www.iyf.or.kr/event/TICAD2025'
    },
    {
      id: 3,
      image: '/Slider/slider-5-5.jpg',
      alt: 'Burundi Presidential Meeting',
      href: 'https://www.iyf.or.kr/event/TICAD2025'
    }
  ];


  // Initialize Swiper after component mounts
  useEffect(() => {
    // Load FontAwesome CSS
    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.rel = 'stylesheet';
    fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(fontAwesomeLink);

    // Load Swiper CSS and JS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/swiper@11.0.5/swiper-bundle.min.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/swiper@11.0.5/swiper-bundle.min.js';
    script.onload = () => {
      // Initialize Swiper exactly like the original source with type assertion
      const SwiperClass = (window as any).Swiper;
      if (SwiperClass) {
        new SwiperClass("#mySwiper-cover", {
          spaceBetween: 50,
          slidesPerView: 1,
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: "#swiper-pagination-cover",
            clickable: true,
          },
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(fontAwesomeLink)) document.head.removeChild(fontAwesomeLink);
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  const notices = [
    {
      id: 1,
      title: '[Teacher Recruitment] Daegu Lincoln School Teacher Recruitment Notice',
      date: '07-04',
      href: '/board/view/BOD_ID/2_notice/B_NO/4590'
    },
    {
      id: 2,
      title: '[Actor Staff Recruitment] Europe 40-country Tour Actor Staff Recruitment',
      date: '06-20',
      href: '/board/view/BOD_ID/2_notice/B_NO/4588'
    },
    {
      id: 3,
      title: '[Recruitment] Saesori Senior Choir Recruitment',
      date: '03-01',
      href: '/board/view/BOD_ID/2_notice/B_NO/4583'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-[450px]">
        
        {/* Column 1 - Image Slider (6/12) */}
        <div className="lg:col-span-6">
          <div className="relative h-full min-h-[400px] lg:min-h-[450px] rounded-xl overflow-hidden">
            <div id="mySwiper-cover" className="swiper h-full rounded-xl">
              <div className="swiper-wrapper">
                {slides.map((slide) => (
                  <div key={slide.id} className="swiper-slide">
                    <Link href={slide.href} target="_blank" className="block h-full">
                      <Image
                        src={slide.image}
                        alt={slide.alt}
                        fill
                        className="object-cover rounded-xl"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      />
                    </Link>
                  </div>
                ))}
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
              <div id="swiper-pagination-cover" className="swiper-pagination"></div>
            </div>
          </div>
        </div>

        {/* Column 2 - Navigation Buttons + Notices (3/12) */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-lg p-4 h-full flex flex-col">
            {/* 4 Navigation Buttons */}
            <div className="flex-none">
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 mb-6">
                <Link
                  href="/about"
                  className="group flex items-center p-3 bg-gray-50 hover:bg-[#0A37BF] hover:text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <i className="fas fa-info-circle w-5 h-5 mr-3 text-[#04D9C4] group-hover:text-white transition-colors text-lg"></i>
                  <span className="font-medium text-gray-800 group-hover:text-white text-sm transition-colors">Mission Introduction</span>
                </Link>
                <Link
                  href="/address/domesticWeb"
                  className="group flex items-center p-3 bg-gray-50 hover:bg-[#0477BF] hover:text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <i className="fas fa-address-book w-5 h-5 mr-3 text-[#04D9C4] group-hover:text-white transition-colors text-lg"></i>
                  <span className="font-medium text-gray-800 group-hover:text-white text-sm transition-colors">Our Branches</span>
                </Link>
                <Link
                  href="https://www.bibleseminar.kr/"
                  target="_blank"
                  className="group flex items-center p-3 bg-gray-50 hover:bg-[#049DBF] hover:text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <i className="fas fa-book w-5 h-5 mr-3 text-[#04D9C4] group-hover:text-white transition-colors text-lg"></i>
                  <span className="font-medium text-gray-800 group-hover:text-white text-sm transition-colors">Testimonies</span>
                </Link>
                <Link
                  href="/events/index"
                  className="group flex items-center p-3 bg-gray-50 hover:bg-[#04BFBF] hover:text-white rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <i className="fas fa-video w-5 h-5 mr-3 text-[#04D9C4] group-hover:text-white transition-colors text-lg"></i>
                  <span className="font-medium text-gray-800 group-hover:text-white text-sm transition-colors">Sermon</span>
                </Link>
              </div>
            </div>

            {/* Notices Section */}
            <div className="flex-grow flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Notice Board
                </h3>
              </div>
              <div className="flex-grow">
                <div className="space-y-3">
                  {notices.map((notice) => (
                    <Link
                      key={notice.id}
                      href={notice.href}
                      className="group block p-2 hover:bg-blue-50 rounded transition-all duration-300 transform hover:scale-[1.02] hover:shadow-sm border border-transparent hover:border-blue-200"
                    >
                      <div className="flex justify-between items-start">
                        <p className="text-sm text-gray-800 group-hover:text-[#0A37BF] flex-1 pr-2 line-clamp-2 leading-tight transition-colors">
                          {notice.title}
                        </p>
                        <span className="text-xs text-gray-500 group-hover:text-[#04D9C4] whitespace-nowrap transition-colors">
                          {notice.date}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3 - Q&A Card + Sermon Card + Social Icons (3/12) */}
        <div className="lg:col-span-3">
          <div className="h-full flex flex-col space-y-3">
            
            {/* Faith Q&A Card */}
            <div className="group bg-[#0C4F9D] text-white rounded-xl p-4 shadow-lg flex-none hover:bg-[#0D5BB5] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl cursor-pointer">
              <div className="text-center">
                <div className="mb-3">
                  <i className="fas fa-question-circle text-4xl mb-2 text-white opacity-80"></i>
                </div>
                <h3 className="text-base font-bold mb-3 leading-tight">
                  How can you believe that God is alive?
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-xs opacity-90">Faith Q&A</span>
                  <Link
                    href="/life#qna-sec"
                    className="bg-white text-[#0C4F9D] px-3 py-1 rounded-full text-xs font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                  >
                    MORE
                  </Link>
                </div>
              </div>
            </div>

            {/* Sermon Card */}
            <div className="group bg-[#02C0C3] text-white rounded-xl p-4 shadow-lg flex-none hover:bg-[#03D4D7] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl cursor-pointer">
              <div className="text-center">
                <div className="mb-3">
                  <i className="fas fa-volume-up text-4xl mb-2 text-white opacity-80"></i>
                </div>
                <h3 className="text-base font-bold mb-2 leading-tight">Pastor Park Oksoo's Sunday Sermon, August 24, 2025</h3>
                <p className="text-sm mb-3 opacity-90">Good News Special Replay 2025-08-23</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs opacity-90">GOODNEWS TV</span>
                  <Link
                    href="http://www.goodnewstv.kr/"
                    target="_blank"
                    className="bg-white text-[#02C0C3] px-3 py-1 rounded-full text-xs font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                  >
                    MORE
                  </Link>
                </div>
              </div>
            </div>

            {/* Social Media Icons - Single Row at Bottom */}
            <div className="flex-grow flex flex-col justify-end">
              <div className="text-center pt-2">
                <div className="flex justify-center space-x-2 mb-1">
                  <Link
                    href="https://www.youtube.com/user/GoodNewsInternet"
                    target="_blank"
                    className="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
                    aria-label="YouTube"
                  >
                    <i className="fab fa-youtube text-sm"></i>
                  </Link>
                  <Link
                    href="https://www.instagram.com/goodnewskorea/"
                    target="_blank"
                    className="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram text-sm"></i>
                  </Link>
                  <Link
                    href="https://www.facebook.com/goodnewsmission"
                    target="_blank"
                    className="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook-f text-sm"></i>
                  </Link>
                  <Link
                    href="https://pf.kakao.com/_ULcXu"
                    target="_blank"
                    className="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
                    aria-label="KakaoTalk"
                  >
                    <i className="fas fa-comment text-sm"></i>
                  </Link>
                  <Link
                    href="http://cafe.naver.com/goodnewsmissioniyf"
                    target="_blank"
                    className="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
                    aria-label="Cafe"
                  >
                    <i className="fas fa-coffee text-sm"></i>
                  </Link>
                  <Link
                    href="https://blog.naver.com/gnmgospel"
                    target="_blank"
                    className="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
                    aria-label="Blog"
                  >
                    <i className="fas fa-blog text-sm"></i>
                  </Link>
                </div>
                <p className="text-gray-600 text-xs">SOCIAL NETWORKING SERVICE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;