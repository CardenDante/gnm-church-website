'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, Users, Clock, TrendingUp, ChevronRight, Eye, MessageSquare, Bookmark } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: "Fungua Moyo Kenya Church Deacons and Deaconesses meet for 2nd Workshop",
    page: "/news/fungua-moyo-workshop",
    date: "Mar 03, 2019",
    categories: ["Workshop", "Leadership"],
    excerpt: "When we do not consent 100% to the word of God, Satan comes in and interferes with us. True faith requires complete surrender to God's word.",
    imageUrl: "/news/fungua-moyo-workshop.jpg",
    views: "2,543",
    comments: "23",
    location: "Nairobi",
    attendees: "50+ Leaders",
    priority: "high"
  },
  {
    id: 2,
    title: "More Than 90 Sisters Get Together For Unique Fellowship",
    page: "/news/sisters-fellowship",
    date: "Feb 22, 2019",
    categories: ["Fellowship", "Women"],
    excerpt: "Proper mindset is to forsake yourself so that when difficulties come your way, you cannot help but rely on God completely.",
    imageUrl: "/news/sisters-fellowship.jpg",
    views: "1,876",
    comments: "18",
    location: "Kampla",
    attendees: "90+ Sisters",
    priority: "medium"
  },
  {
    id: 3,
    title: "1st Kenya Church Leaders Workshop Marks 24 Years of Ministry",
    page: "/news/church-leaders-workshop",
    date: "May 01, 2018",
    categories: ["Anniversary", "Workshop"],
    excerpt: "This year marks the 24th year since the establishment of GNM Kenya and the 1st Kenya Church Leaders Workshop with focus on spiritual leadership.",
    imageUrl: "/news/church-leaders-workshop.jpg",
    views: "3,210",
    comments: "45",
    location: "National",
    attendees: "100+ Leaders",
    priority: "high",
    trending: true
  },
  {
    id: 4,
    title: "Kenya Easter Bible Retreat: Returning to the Bible",
    page: "/news/easter-bible-retreat",
    date: "Apr 24, 2018",
    categories: ["Retreat", "Seasonal"],
    excerpt: "With the Theme 'Let's Return To The Bible', focusing on the parable of the prodigal son and understanding God's unconditional love for humanity.",
    imageUrl: "/news/easter-retreat.jpg",
    views: "2,987",
    comments: "32",
    location: "Various",
    attendees: "300+ Believers",
    priority: "medium"
  },
  {
    id: 5,
    title: "True Reformation Comes by Changing the Thinking of Inmates",
    page: "/news/prison-ministry-reformation",
    date: "Jan 29, 2018",
    categories: ["Prison Ministry", "Transformation"],
    excerpt: "G.K Prison Kitengela becomes the third correctional facility where Good News Mission brings spiritual transformation through mindset education.",
    imageUrl: "/news/prison-ministry.jpg",
    views: "4,321",
    comments: "56",
    location: "Kitengela",
    attendees: "200+ Inmates",
    priority: "high",
    trending: true
  }
];

export default function NewsPage() {
  const [view, setView] = useState('list');

  return (
    <div className="p-6">
      {/* Stats Overview */}
      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-700 font-medium">Total Articles</p>
              <p className="text-2xl font-bold text-gray-800">200+</p>
            </div>
            <div className="p-2 bg-blue-200 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-700 font-medium">This Month</p>
              <p className="text-2xl font-bold text-gray-800">15+</p>
            </div>
            <div className="p-2 bg-green-200 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-700 font-medium">Upcoming</p>
              <p className="text-2xl font-bold text-gray-800">8</p>
            </div>
            <div className="p-2 bg-purple-200 rounded-lg">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-xl border border-orange-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-orange-700 font-medium">Trending</p>
              <p className="text-2xl font-bold text-gray-800">5</p>
            </div>
            <div className="p-2 bg-orange-200 rounded-lg">
              <TrendingUp className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div> */}

      {/* News Grid */}
      <div className="space-y-6">
        {newsArticles.map((article) => (
          <article 
            key={article.id} 
            className=" border-b border-gray-400 overflow-hidden  transition-all duration-300"
          >
            <div className="pb-6 pt-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Image */}
                <div className="lg:w-2/5 relative">
                  <div className="relative h-56 rounded-lg overflow-hidden">
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                   
                    {article.trending && (
                      <div className="absolute top-3 right-3">
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium border border-orange-200 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Trending
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Stats Bar */}
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-gray-600">
                        <Eye className="w-4 h-4" />
                        <span>{article.views}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <MessageSquare className="w-4 h-4" />
                        <span>{article.comments}</span>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-blue-600">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                {/* Content */}
                <div className="lg:w-3/5">
                  {/* Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{article.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {article.categories.map((category, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">
                    <Link href={article.page} className="hover:text-blue-600 transition-colors">
                      {article.title}
                    </Link>
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  {/* Footer */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{article.attendees}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>3 min read</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Link 
                        href={article.page}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        Read Full Story
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                      <button className="px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-gray-600">
            Showing 1-{newsArticles.length} of 200+ news articles
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              ← Previous
            </button>
            <div className="flex space-x-1">
              <button className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg">
                1
              </button>
              {[2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  {page}
                </button>
              ))}
              <span className="px-2 py-1">...</span>
              <button className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
                20
              </button>
            </div>
            <button className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

