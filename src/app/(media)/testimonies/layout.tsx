// app/testimonies/layout.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Heart,
  MessageSquare,
  Users,
  Calendar,
  MapPin,
  Share2,
  ArrowRight,
  ExternalLink,
  Mail,
  BookOpen,
  Video,
  Headphones,
  TrendingUp,
  Star,
  Search,
  Filter
} from 'lucide-react';

const testimonyNavItems = [
  { 
    name: 'All Testimonies', 
    href: '/testimonies',
    icon: Heart,
    shortDesc: 'All Stories'
  },
  { 
    name: 'Video Testimonies', 
    href: '/testimonies/#',
    icon: Video,
    shortDesc: 'Video Stories'
  },
  { 
    name: 'Written Testimonies', 
    href: '/testimonies/#',
    icon: BookOpen,
    shortDesc: 'Written Stories'
  },
  { 
    name: 'Recent Testimonies', 
    href: '/testimonies/#',
    icon: Calendar,
    shortDesc: 'Latest Stories'
  },
  { 
    name: 'Featured Testimonies', 
    href: '/testimonies/#',
    icon: Star,
    shortDesc: 'Highlighted Stories'
  },
  { 
    name: 'Share Your Story', 
    href: '/testimonies/#',
    icon: MessageSquare,
    shortDesc: 'Submit Your Story'
  },
];



const testimonyCategories = [
  {
    title: 'Salvation Stories',
    description: 'Transformations through salvation',
    count: '45 stories',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Healing Testimonies',
    description: 'Physical and emotional healing',
    count: '32 stories',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Family Restorations',
    description: 'Families transformed by God',
    count: '28 stories',
    color: 'from-purple-500 to-purple-600'
  }
];

export default function TestimoniesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState(
    testimonyNavItems.find(item => pathname === item.href)?.name || 'All Testimonies'
  );

  const getPageSubtitle = () => {
    switch(activeItem) {
      case 'All Testimonies':
        return 'Stories of transformation and God\'s faithfulness';
      case 'Video Testimonies':
        return 'Watch powerful video stories of changed lives';
      case 'Written Testimonies':
        return 'Read inspiring written testimonies';
      case 'Recent Testimonies':
        return 'Latest stories of God\'s work';
      case 'Featured Testimonies':
        return 'Highlighted stories of transformation';
      case 'Share Your Story':
        return 'Share how God has changed your life';
      default:
        return 'Stories of transformation through Christ';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Dynamic Header */}
      <div className="bg-gradient-to-r from-blue-900 to-cyan-800 text-white py-12  relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Heart className="size-8 text-white" />
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
                  placeholder="Search testimonies by name, location, or topic..."
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

          {/* Enhanced Sidebar */}
          <div className="lg:w-80 space-y-8">
            
            {/* Navigation Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-200 flex items-center gap-2">
                <Heart className="w-5 h-5 text-blue-600" />
                Browse Testimonies
              </h3>
              
              <nav className="space-y-3">
                {testimonyNavItems.map((item) => {
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
                          ? 'bg-gradient-to-r from-blue-50 to-emerald-50 border-2 border-blue-200 shadow-sm'
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

             
            </div>

            {/* Categories Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-gray-700">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Testimony Categories
              </h3>
              <div className="space-y-4">
                {testimonyCategories.map((category, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg backdrop-blur-sm">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">{category.title}</h4>
                      <span className="text-xs bg-blue-50 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{category.description}</p>
                 
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/20">
                <Link
                  href="/testimonies/categories"
                  className="flex items-center justify-center w-full bg-gray-100 text-center py-2.5 rounded-lg font-semibold text-gray-800 hover:bg-gray-50 transition-colors gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  View All Categories
                </Link>
              </div>
            </div>

         

            {/* Share Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 text-gray-700">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                Share a Testimony
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Your story can inspire others. Share how God has worked in your life.
              </p>
              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="block w-full bg-blue-100 text-gray-800 font-semibold py-2.5 rounded-lg transition-colors text-center"
                >
                  Share Your Story
                </Link>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

