'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NewsContentHub = () => {
  // Initialize Swiper for video carousel
  useEffect(() => {
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

    function initializeSwipers() {
      const SwiperClass = (window as any).Swiper;
      if (SwiperClass) {
        // Video carousel swiper - pagination moved outside
        new SwiperClass("#mySwiper-today", {
          slidesPerView: 1,
          spaceBetween: 10,
          pagination: {
            el: "#pagination-today",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            578: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1600: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          },
        });

        // Monthly magazine swiper - 2 columns, 2 rows
        new SwiperClass("#mySwiper-monthly", {
          slidesPerView: 2,
          spaceBetween: 15,
          speed: 2000,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          pagination: {
            el: "#swiper-pagination-monthly",
            clickable: true,
          },
          grid: {
            rows: 2,
            fill: 'row'
          },
          breakpoints: {
            320: {
              slidesPerView: 2,
              grid: {
                rows: 2,
              },
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              grid: {
                rows: 2,
              },
              spaceBetween: 15,
            },
          },
        });

        // Kids content swiper
        new SwiperClass("#mySwiper-kids", {
          slidesPerView: 1,
          spaceBetween: 10,
          pagination: {
            el: "#swiper-pagination-kids",
            clickable: true,
          },
          breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          },
        });
      }
    }
  }, []);

  const notices = [
    {
      title: '[Teacher Recruitment] Daegu Lincoln School Teacher Recruitment Notice',
      date: '2025-07-04',
      href: '/board/view/BOD_ID/2_notice/B_NO/4590'
    },
    {
      title: '[Actor Staff Recruitment] Europe 40-country Tour Actor Staff Recruitment',
      date: '2025-06-20',
      href: '/board/view/BOD_ID/2_notice/B_NO/4588'
    },
    {
      title: '[Recruitment] Saesori Senior Choir Recruitment',
      date: '2025-03-01',
      href: '/board/view/BOD_ID/2_notice/B_NO/4583'
    }
  ];

  const headlineNews = [
    {
      title: '[Japan] TICAD, Continued meetings with leaders...South African President Meeting',
      date: '2025.08.21',
      image: '/Slider/slider-1.jpg',
      href: 'http://www.gndaily.kr/news/articleView.html?idxno=50164'
    },
    {
      title: '[Japan] TICAD, 6 summit-level meetings including 2 presidents',
      date: '2025.08.21',
      image: '/Slider/slider-2.jpg',
      href: 'http://www.gndaily.kr/news/articleView.html?idxno=50161'
    },
    {
      title: '[Japan] Exchange with African countries at TICAD...19th, Liberia Presidential Meeting',
      date: '2025.08.20',
      image: '/Slider/slider-3.jpg',
      href: 'http://www.gndaily.kr/news/articleView.html?idxno=50157'
    },
    {
      title: '[Gimpo] United Worship Service inviting Pastor Ock Soo Park with Gracias Choir',
      date: '2025.08.16',
      image: '/Slider/slider-4.jpg',
      href: 'http://www.gndaily.kr/news/articleView.html?idxno=50134'
    }
  ];

  const importantNews = [
    {
      title: '[Taiwan] "Say the word of faith first" 15th Summer Retreat',
      href: 'http://www.gndaily.kr/news/articleView.html?idxno=50201'
    },
    {
      title: 'Wonju Beautiful Silver University, 2025 Second Half Opening Ceremony',
      href: 'http://www.gndaily.kr/news/articleView.html?idxno=50199'
    },
    {
      title: '[Masan] Summer Bible School, Children\'s Happy Cheers in Masan',
      href: 'http://www.gndaily.kr/news/articleView.html?idxno=50198'
    },
    {
      title: '[Jinju] Youth University, Gospel delivered with "Happy Filial Piety Table"',
      href: 'http://www.gndaily.kr/news/articleView.html?idxno=50197'
    },
    {
      title: '[Philippines] From teacher to righteous person, Olongapo Mind Education Site',
      href: 'http://www.gndaily.kr/news/articleView.html?idxno=50191'
    }
  ];

  const videos = [
    {
      id: 'd0CISjhuj5E',
      title: 'Pastor Ock Soo Park, South African President & Cameroon Prime Minister Meeting[20250822]_Good News TV',
      date: '2025.08.22'
    },
    {
      id: 'uQvWxzdCWmU',
      title: 'Pastor Ock Soo Park, Meeting with African Leaders[20250821]_Good News TV',
      date: '2025.08.22'
    },
    {
      id: 'LXNdYYQq_TM',
      title: 'Pastor Ock Soo Park Japan Visit and Liberian Presidential Meeting[20250820]_Good News TV',
      date: '2025.08.21'
    }
  ];

  const monthlyMagazine = [
    {
      title: '[Sermon] The Blessing of Those Who Make Peace with God',
      date: '2025.08.06',
      image: '/Slider/slider-5.jpg',
      href: 'http://www.gndaily.kr/news/articleView.html?idxno=50067'
    },
    {
      title: '[Life] Becoming Friends',
      date: '2025.08.27',
      image: '/Slider/slider-1.jpg',
      href: 'http://www.gndaily.kr/news/articleView.html?idxno=50068'
    },
    {
      title: '[Opinion] Success Investment for Three Sisters',
      date: '2025.08.28',
      image: '/Slider/slider-2.jpg',
      href: 'http://www.gndaily.kr/news/articleView.html?idxno=50098'
    },
    {
      title: '[Sermon] The Human Jesus Drew',
      date: '2025.08.04',
      image: '/Slider/slider-3.jpg',
      href: 'http://www.gndaily.kr/news/articleView.html?idxno=50075'
    }
  ];

  const kidsContent = [
    {
      title: '[Word] God Who Does New Things',
      date: '2024.12.04',
      image: '/Slider/slider-4.jpg',
      href: 'http://www.gndaily.kr/news/articleView.html?idxno=48780'
    },
    {
      title: '[Interview] Thanks to English, I have more things I want to do and people I want to meet',
      date: '2024.12.03',
      image: '/Slider/slider-5.jpg',
      href: 'http://www.gndaily.kr/news/articleView.html?idxno=48778'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Left Column - Main News Content (9/12) */}
        <div className="lg:col-span-9">
          <div className="bg-[#0A37BF] rounded-xl shadow-lg p-6">

            {/* Mobile Notice View */}
            {/* <div className="lg:hidden mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">Notice +</h3>
              </div>
              <div className="space-y-3">
                {notices.map((notice, index) => (
                  <Link
                    key={index}
                    href={notice.href}
                    className="block p-2 hover:bg-gray-50 rounded transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <p className="text-sm text-gray-800 flex-1 pr-2">{notice.title}</p>
                      <span className="text-xs text-gray-500 whitespace-nowrap">
                        {notice.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div> */}

            {/* Mission News Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Link href="https://www.gndaily.kr/" target="_blank" className="hover:text-[#0A37BF] transition-colors">
                  Mission News

                </Link>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Headline News */}
                <div className="space-y-4">
                  {headlineNews.map((news, index) => (
                    <Link
                      key={index}
                      href={news.href}
                      target="_blank"
                      className="group block hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden"
                    >
                      <div className="flex gap-4 p-3 hover:bg-gray-50">
                        <div className="w-24 h-16 flex-shrink-0 overflow-hidden rounded-lg">
                          <Image
                            src={news.image}
                            alt={news.title}
                            width={120}
                            height={80}
                            quality={90}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 96px, 96px"
                            priority={index === 0}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-medium text-gray-800 group-hover:text-[#0A37BF] line-clamp-2 leading-tight mb-1 transition-colors">
                            {news.title}
                          </h3>
                          <p className="text-xs text-gray-500">{news.date}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Important Articles */}
                <div className="space-y-3">
                  {importantNews.map((news, index) => (
                    <Link
                      key={index}
                      href={news.href}
                      target="_blank"
                      className="block p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <h3 className="text-sm text-gray-800 hover:text-[#0A37BF] font-medium line-clamp-2 transition-colors">
                        {news.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Good News Today Video Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Link href="https://www.goodnewstv.kr/" target="_blank" className="hover:text-[#0A37BF] transition-colors">
                  Good News Today
                </Link>
              </h2>

              <div id="mySwiper-today" className="swiper">
                <div className="swiper-wrapper">
                  {videos.map((video, index) => (
                    <div key={index} className="swiper-slide">
                      <div className="bg-gray-100 rounded-lg overflow-hidden">
                        <div className="aspect-video">
                          <iframe
                            src={`https://www.youtube.com/embed/${video.id}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-gray-800 line-clamp-2 mb-2">{video.title}</h3>
                          <p className="text-sm text-gray-500">{video.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
              {/* Pagination moved outside and below */}
              <div id="pagination-today" className="swiper-pagination mt-4 !relative"></div>
            </div>
          </div>
        </div>

        {/* Right Column - Magazine & Kids Content (3/12) */}
        <div className="lg:col-span-3 space-y-6">

          {/* Monthly Magazine - 2x2 Grid */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <Link href="https://www.gndaily.kr/news/articleList.html?sc_section_code=S1N12&view_type=sm" target="_blank" className="hover:text-[#0A37BF] transition-colors">
                Monthly Good News

              </Link>
            </h2>

            <div id="mySwiper-monthly" className="swiper">
              <div className="swiper-wrapper">
                {monthlyMagazine.map((article, index) => (
                  <div key={index} className="swiper-slide">
                    <Link href={article.href} target="_blank" className="block group">
                      <div className="aspect-[4/3] overflow-hidden rounded-lg mb-2">
                        <Image
                          src={article.image}
                          alt={article.title}
                          width={150}
                          height={112}
                          quality={90}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 1024px) 150px, 150px"
                        />
                      </div>
                      <h3 className="text-xs font-medium text-gray-800 group-hover:text-[#0A37BF] line-clamp-2 mb-1 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-xs text-gray-500">{article.date}</p>
                    </Link>
                  </div>
                ))}
              </div>
              <div id="swiper-pagination-monthly" className="swiper-pagination mt-4"></div>
            </div>
          </div>

          {/* Kids Mind Section */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <Link href="https://www.gndaily.kr/index.html?editcode=MAIN_8" target="_blank" className="hover:text-[#0A37BF] transition-colors">
                Kids Mind
              </Link>
            </h2>

            <div id="mySwiper-kids" className="swiper">
              <div className="swiper-wrapper">
                {kidsContent.map((article, index) => (
                  <div key={index} className="swiper-slide">
                    <Link href={article.href} target="_blank" className="block group">
                      <div className="aspect-[4/3] overflow-hidden rounded-lg mb-3">
                        <Image
                          src={article.image}
                          alt={article.title}
                          width={200}
                          height={150}
                          quality={90}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 1024px) 200px, 200px"
                        />
                      </div>
                      <h3 className="text-sm font-medium text-gray-800 group-hover:text-[#0A37BF] line-clamp-2 mb-2 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-xs text-gray-500">{article.date}</p>
                    </Link>
                  </div>
                ))}
              </div>
              <div id="swiper-pagination-kids" className="swiper-pagination mt-4"></div>
            </div>
          </div>

          {/* Documentary Banner */}
          <div>
            <Link
              href="https://www.youtube.com/watch?v=2t1qgshEMUs&list=PL9pW9HArv6spU1UrJO3MuRYqFoqQmekB3"
              target="_blank"
              className="block group"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                <Image
                  src="/Slider/documentary.jpg"
                  alt="Documentary"
                  width={300}
                  height={200}
                  quality={90}
                  className="w-full h-44 object-fill group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 1024px) 300px, 300px"
                />
                {/* <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300">
                  <div className="flex flex-col justify-center items-center h-full text-white text-center p-4">
                    <h3 className="font-bold text-lg mb-2 drop-shadow-lg">Documentary</h3>
                    <p className="text-sm opacity-90 drop-shadow-lg">Watch our latest documentaries</p>
                  </div>
                </div> */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsContentHub;