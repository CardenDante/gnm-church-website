'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BookOpen,
  Feather,
  Coffee,
  Clock,
  Search,
  Filter,
  Users,
  Bookmark,
  TrendingUp,
  Calendar,
  Tag,
  Star,
  MessageSquare,
  ArrowRight,
  Moon,
  Sunrise
} from 'lucide-react';

const blogCategories = [
  { 
    name: 'Spiritual Insights', 
    href: '/media/blog/insights',
    icon: BookOpen,
    color: 'from-purple-500 to-purple-600',
    count: '45'
  },
  { 
    name: 'Personal Testimonies', 
    href: '/media/blog/testimonies',
    icon: Feather,
    color: 'from-green-500 to-green-600',
    count: '32'
  },
  { 
    name: 'Biblical Studies', 
    href: '/media/blog/studies',
    icon: BookOpen,
    color: 'from-blue-500 to-blue-600',
    count: '28'
  },
  { 
    name: 'Daily Devotions', 
    href: '/media/blog/devotions',
    icon: Sunrise,
    color: 'from-orange-500 to-orange-600',
    count: '56'
  },
];

const featuredWriters = [
  { name: 'Pastor Yohan Kim', articles: '24', role: 'Senior Pastor' },
  { name: 'Grace Wambui', articles: '18', role: 'Ministry Leader' },
  { name: 'David Mwangi', articles: '15', role: 'Bible Teacher' },
];

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Creative Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              {/* <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-8">
                <Feather className="w-10 h-10 text-white" />
              </div> */}
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Spiritual Insights
              </h1>
              <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
                Deep biblical reflections, personal testimonies, and spiritual teachings for your journey of faith
              </p>
              
              {/* Reading Time Indicator */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
                <Clock className="w-4 h-4 text-white" />
                <span className="text-white text-sm">Average read: 5-7 minutes</span>
                <Coffee className="w-4 h-4 text-white" />
              </div>

            
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content */}
          <div className="lg:flex-1">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <BookOpen className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">Latest Articles</h2>
                      <p className="text-sm text-gray-600">Fresh spiritual insights</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="search"
                        className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent w-56"
                        placeholder="Search articles..."
                      />
                    </div>
                   
                  </div>
                </div>
              </div>
              {children}
            </div>
          </div>

          {/* Sidebar - Different Style */}
          <div className="lg:w-96 space-y-8">
            {/* Featured Writers */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-6 border border-purple-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  Featured Writers
                </h3>
                <span className="text-xs font-medium bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                  Top Contributors
                </span>
              </div>
              <div className="space-y-4">
                {featuredWriters.map((writer, index) => (
                  <div key={index} className="p-3 bg-white rounded-lg border border-purple-100 hover:border-purple-200 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                        {writer.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{writer.name}</h4>
                        <p className="text-xs text-gray-600">{writer.role}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-purple-600">{writer.articles}</div>
                        <div className="text-xs text-gray-500">articles</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link 
                href="/media/blog/writers"
                className="inline-flex items-center justify-center w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2.5 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Meet All Writers
              </Link>
            </div>

            {/* Reading List */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Bookmark className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Reading List</h3>
                  <p className="text-sm text-gray-600">Curated for you</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-700">Editor's Pick</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">The Power of Surrender</h4>
                  <p className="text-sm text-gray-600">A deep study on letting go</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium text-gray-700">Most Read</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">Faith in Difficult Times</h4>
                  <p className="text-sm text-gray-600">Biblical encouragement</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium text-gray-700">Quick Read</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">Morning Devotion Guide</h4>
                  <p className="text-sm text-gray-600">Start your day right</p>
                </div>
              </div>
            </div>

            {/* Subscribe for Updates */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-6 text-white">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">Join the Conversation</h3>
                <p className="text-sm text-gray-300 mb-4">Subscribe to receive new articles and join discussions</p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                  />
                  <button className="w-full bg-white text-gray-900 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe Now
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-3">Weekly digest • No spam</p>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Tag className="w-5 h-5 text-gray-600" />
                Popular Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Salvation', 'Grace', 'Faith', 'Prayer', 'Bible Study', 'Testimony', 'Ministry', 'Leadership', 'Healing', 'Hope'].map((tag) => (
                  <Link
                    key={tag}
                    href={`/media/blog/tag/${tag.toLowerCase()}`}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
              <Link 
                href="/media/blog/tags"
                className="inline-flex items-center mt-6 text-sm font-medium text-purple-600 hover:text-purple-800 hover:underline"
              >
                View All Topics
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

