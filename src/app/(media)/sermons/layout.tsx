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
    href: '/sermons/#',
    icon: Mic,
    shortDesc: 'Most Recent Messages'
  },
  { 
    name: 'Sermon Series', 
    href: '/sermons/#',
    icon: FileText,
    shortDesc: 'Topical Collections'
  },
  { 
    name: 'Popular Sermons', 
    href: '/sermons/#',
    icon: TrendingUp,
    shortDesc: 'Most Viewed'
  },
  { 
    name: 'Audio Messages', 
    href: '/sermons/#',
    icon: Headphones,
    shortDesc: 'MP3 Downloads'
  },
  { 
    name: 'Video Sermons', 
    href: '/sermons/#',
    icon: Video,
    shortDesc: 'Video Collection'
  },
  { 
    name: 'By Speaker', 
    href: '/sermons/#',
    icon: Users,
    shortDesc: 'Browse by Preacher'
  },
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
      <div className="bg-gradient-to-r from-blue-900 to-cyan-800  text-white py-12 relative overflow-hidden">
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
              
                <button className="px-4 py-3 bg-white text-gray-800 rounded-lg hover:bg-gray-100 transition-all font-medium">
                  Search
                </button>
              </div>
            </div>
          </div>
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

         
          

            {/* Subscribe Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 text-gray-700">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get New Sermons
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Subscribe to receive notifications when new sermons are published.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2.5 rounded-lg  border border-blue-200 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                />
                <button className="w-full bg-blue-100 text-gray-500 font-semibold py-2.5 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer ">
                  Subscribe
                </button>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

