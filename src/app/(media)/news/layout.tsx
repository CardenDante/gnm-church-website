'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Newspaper,
  Calendar,
  TrendingUp,
  Clock,
  Search,
  Filter,
  MapPin,
  Users,
  ExternalLink,
  ArrowRight,
  Bell,
  TrendingUp as TrendingIcon,
  Globe
} from 'lucide-react';

const newsTabs = [
  { 
    name: 'Breaking News', 
    href: '/media/news/breaking',
    color: 'bg-red-100 text-red-800 border-red-200'
  },
  { 
    name: 'Events', 
    href: '/media/news/events',
    color: 'bg-blue-100 text-blue-800 border-blue-200'
  },
  { 
    name: 'Ministry Updates', 
    href: '/media/news/updates',
    color: 'bg-green-100 text-green-800 border-green-200'
  },
  { 
    name: 'Mission Reports', 
    href: '/media/news/mission',
    color: 'bg-purple-100 text-purple-800 border-purple-200'
  },
];

const trendingTopics = [
  { name: 'Church Planting', count: '12 new locations' },
  { name: 'Youth Conference', count: '500+ attendees' },
  { name: 'Prison Ministry', count: '3 new facilities' },
  { name: 'Medical Camps', count: '1,000+ served' },
];

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 opacity-95"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              {/* <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Newspaper className="w-8 h-8 text-white" />
              </div> */}
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                News & Updates
              </h1> 
            
              
              {/* Live Updates Banner */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-medium">Live Updates Active</span>
                <Bell className="w-4 h-4 text-white" />
              </div>
              

              {/* News Tabs */}
              <div className="flex flex-wrap justify-center gap-3">
                {newsTabs.map((tab) => {
                  const isActive = pathname === tab.href;
                  return (
                    <Link
                      key={tab.href}
                      href={tab.href}
                      className={`
                        px-5 py-2.5 rounded-full font-medium transition-all duration-300 transform 
                        ${isActive 
                          ? 'bg-white text-blue-700 shadow-lg' 
                          : `${tab.color} border hover:shadow-md`
                        }
                      `}
                    >
                      {tab.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content */}
          <div className="lg:flex-1">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <TrendingIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">Latest News Feed</h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="search"
                        className="pl-10 pr-4 py-2 border border-gray-300 text-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-48"
                        placeholder="Search news..."
                      />
                    </div>
                    <button className="px-4 py-2 border text-gray-500 border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
                      <Filter className="w-4 h-4" />
                      Filter
                    </button>
                  </div>
                </div>
              </div>
              {children}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-96 space-y-8">
            {/* Trending Topics */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  Trending Topics
                </h3>
                <span className="text-xs font-medium bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                  This Week
                </span>
              </div>
              <div className="space-y-4">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-gray-800">{topic.name}</h4>
                      <span className="text-xs text-gray-500 bg-white px-2 py-0.5 rounded-full">
                        #{index + 1}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{topic.count}</p>
                    <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${85 - (index * 15)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <Link 
                href="/media/news/trending"
                className="inline-flex items-center mt-6 text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
              >
                View All Trends
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Upcoming Events */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-xl p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Upcoming Events</h3>
                  <p className="text-sm text-gray-600">Mark your calendar</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-white rounded-lg border border-blue-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-700">Next Week</span>
                    <span className="text-xs text-gray-500">Apr 15-17</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">Annual Leadership Summit</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-3 h-3" />
                    <span>Nairobi Main Church</span>
                  </div>
                </div>
                <div className="p-3 bg-white rounded-lg border border-blue-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-700">This Month</span>
                    <span className="text-xs text-gray-500">Apr 30</span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">Youth Revival Night</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-3 h-3" />
                    <span>500+ Expected</span>
                  </div>
                </div>
              </div>
              <Link 
                href="/media/news/calendar"
                className="inline-flex items-center justify-center w-full mt-6 bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                View Full Calendar
              </Link>
            </div>

            {/* Global Updates */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Global Updates</h3>
                  <p className="text-sm text-gray-300">Across our network</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">East Africa</span>
                    <span className="text-xs text-gray-300">3 new churches</span>
                  </div>
                  <p className="text-sm text-gray-300">Expanding ministry reach</p>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">International</span>
                    <span className="text-xs text-gray-300">5 countries</span>
                  </div>
                  <p className="text-sm text-gray-300">Online ministry growth</p>
                </div>
              </div>
              <Link 
                href="/media/news/global"
                className="inline-flex items-center mt-6 text-sm text-blue-300 hover:text-blue-200 hover:underline"
              >
                View All Updates
                <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Subscribe Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <Bell className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Get News Alerts</h3>
                <p className="text-sm text-gray-600 mb-4">Never miss important updates</p>
                <div className="space-y-3 text-gray-300">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2.5 border border-gray-300 text-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Subscribe Now
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-3">By subscribing, you agree to our Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

