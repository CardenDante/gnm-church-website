'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Mic,
  Headphones,
  Video,
  Calendar,
  Users,
  Globe,
  FileText,
  Download,
  PlayCircle,
  Share2,
  Clock,
  Filter,
  Search,
  ArrowRight,
  ExternalLink,
  Mail,
  Building,
  Heart,
  TrendingUp,
  BookOpen,
  MapPin
} from 'lucide-react';

const sermonNavItems = [
  { 
    name: 'Latest Sermons', 
    href: '/media/sermons',
    icon: Mic,
    shortDesc: 'Most Recent Messages'
  },
  { 
    name: 'Sermon Series', 
    href: '/media/sermons/series',
    icon: FileText,
    shortDesc: 'Topical Collections'
  },
  { 
    name: 'Popular Sermons', 
    href: '/media/sermons/popular',
    icon: TrendingUp,
    shortDesc: 'Most Viewed'
  },
  { 
    name: 'Audio Messages', 
    href: '/media/sermons/audio',
    icon: Headphones,
    shortDesc: 'MP3 Downloads'
  },
  { 
    name: 'Video Sermons', 
    href: '/media/sermons/video',
    icon: Video,
    shortDesc: 'Video Collection'
  },
  { 
    name: 'By Speaker', 
    href: '/media/sermons/speakers',
    icon: Users,
    shortDesc: 'Browse by Preacher'
  },
];

const stats = [
  { label: 'Total Sermons', value: '500+', icon: FileText },
  { label: 'Speakers', value: '20+', icon: Users },
  { label: 'Languages', value: '3', icon: Globe },
  { label: 'Years', value: '10+', icon: Calendar },
];

const quickLinks = [
  { text: 'Watch Live Service', href: 'https://youtube.com/goodnewsor/live', icon: PlayCircle },
  { text: 'Download App', href: '/download', icon: Download },
  { text: 'Request Prayer', href: '/prayer', icon: Heart },
];

const featuredSeries = [
  {
    title: 'The Book of Romans',
    description: 'Deep study of Paul\'s epistle',
    count: '12 sermons',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Foundations of Faith',
    description: 'For new believers',
    count: '8 sermons',
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Sermon on the Mount',
    description: 'Jesus\' core teachings',
    count: '10 sermons',
    color: 'from-green-500 to-green-600'
  }
];

export default function SermonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState(
    sermonNavItems.find(item => pathname === item.href)?.name || 'Latest Sermons'
  );

  const getPageSubtitle = () => {
    switch(activeItem) {
      case 'Latest Sermons':
        return 'Fresh biblical teachings and messages';
      case 'Sermon Series':
        return 'Topical collections for deep study';
      case 'Popular Sermons':
        return 'Most viewed and shared messages';
      case 'Audio Messages':
        return 'Downloadable MP3 sermons';
      case 'Video Sermons':
        return 'Watch full sermon videos';
      case 'By Speaker':
        return 'Messages from specific preachers';
      default:
        return 'Biblical teachings and messages';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dynamic Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center justify-center size-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Mic className="size-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {activeItem}
          </h1>
          <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
            {getPageSubtitle()}
          </p>
          
          {/* Search and Filter Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="search"
                  className="block w-full pl-10 pr-3 py-3 border border-transparent rounded-lg bg-white/20 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                  placeholder="Search sermons by title, speaker, or topic..."
                />
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </button>
                <button className="px-4 py-3 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition-all font-medium">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-md p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full mb-3">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content Area */}
          <div className="lg:flex-1">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {children}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-8">
            
            {/* Navigation Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-200 flex items-center gap-2">
                <Mic className="w-5 h-5 text-blue-600" />
                Browse Sermons
              </h3>
              
              <nav className="space-y-3">
                {sermonNavItems.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setActiveItem(item.name)}
                      className={`
                        flex items-center p-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02]
                        ${isActive
                          ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 shadow-sm'
                          : 'bg-gray-50 hover:bg-gray-100 border border-gray-100'
                        }
                      `}
                    >
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-blue-100' : 'bg-gray-100'}`}>
                        <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-600'}`} />
                      </div>
                      <div className="flex-1 ml-3">
                        <div className={`font-medium ${isActive ? 'text-blue-700' : 'text-gray-700'}`}>
                          {item.name}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{item.shortDesc}</div>
                      </div>
                      {isActive && (
                        <ArrowRight className="w-5 h-5 text-blue-500 ml-2" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Quick Stats */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-600">Monthly Downloads</span>
                  <span className="text-sm font-bold text-gray-800">5,000+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">Countries Reached</span>
                  <span className="text-sm font-bold text-gray-800">25+</span>
                </div>
                <Link 
                  href="/media"
                  className="inline-flex items-center mt-4 text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
                >
                  Browse All Media
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Featured Series Card */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Featured Series
              </h3>
              <div className="space-y-4">
                {featuredSeries.map((series, index) => (
                  <div key={index} className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">{series.title}</h4>
                      <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                        {series.count}
                      </span>
                    </div>
                    <p className="text-sm text-white/80 mb-2">{series.description}</p>
                    <Link 
                      href={`/media/sermons/series/${series.title.toLowerCase().replace(/ /g, '-')}`}
                      className="text-sm font-medium hover:underline flex items-center gap-1"
                    >
                      Explore Series
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/20">
                <Link
                  href="/media/sermons/series"
                  className="flex items-center justify-center w-full bg-white text-center py-2.5 rounded-lg font-semibold text-gray-800 hover:bg-gray-100 transition-colors gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  View All Series
                </Link>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-blue-600" />
                Quick Actions
              </h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                      className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-blue-600 mr-3" />
                      <span className="flex-1 font-medium text-gray-700">{link.text}</span>
                      {link.href.startsWith('http') ? (
                        <ExternalLink className="w-4 h-4 text-gray-400" />
                      ) : (
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      )}
                    </a>
                  );
                })}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full bg-blue-50 text-center py-2.5 rounded-lg font-semibold text-blue-700 hover:bg-blue-100 transition-colors gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Contact Media Team
                </Link>
              </div>
            </div>

            {/* Subscribe Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get New Sermons
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Subscribe to receive notifications when new sermons are published.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                />
                <button className="w-full bg-white text-gray-800 font-semibold py-2.5 rounded-lg hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20 text-center">
                <p className="text-xs text-gray-400">No spam. Unsubscribe anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

