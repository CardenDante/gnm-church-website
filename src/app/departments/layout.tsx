'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const broadcastingNavItems = [
  { 
    name: 'Good News Broadcasting System', 
    href: '/departments/broadcasting',
  },
  { 
    name: 'Good News Medical Volunteers', 
    href: '/departments/medical',
  },
  { 
    name: 'Mahanaim College', 
    href: '/departments/college',
  },
  { 
    name: 'Mahanaim International School', 
    href: '/departments/school',
  },
  { 
    name: 'International Youth Fellowship', 
    href: '/departments/youth',
  },
  { 
    name: 'Christian Leaders Fellowship', 
    href: '/departments/leaders',
  },
];

export default function BroadcastingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState(
    broadcastingNavItems.find(item => pathname === item.href)?.name || 'Good News Broadcasting System'
  );

  const getPageSubtitle = () => {
    switch(activeItem) {
      case 'Good News Broadcasting System':
        return 'Spreading the Gospel through Media';
      case 'Good News Medical Volunteers':
        return 'Healthcare Ministry and Community Service';
      case 'Mahanaim College':
        return 'Academic Excellence with Spiritual Foundation';
      case 'Mahanaim International School':
        return 'Quality Education for Global Citizens';
      case 'International Youth Fellowship':
        return 'Empowering the Next Generation';
      case 'Christian Leaders Fellowship':
        return 'Nurturing Spiritual Leadership';
      default:
        return 'Ministry Departments of Good News Mission';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dynamic Header */}
      <div className="head_title_area text-center py-16 bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          {activeItem}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-3">
          {getPageSubtitle()}
        </p>
        <div className="w-24 h-1 bg-[#0477BF] mx-auto"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-[#0477BF] mb-6 pb-3 border-b border-gray-200">
                 Departments
              </h3>
              
              <nav className="space-y-2">
                {broadcastingNavItems.map((item) => {
                  const isActive = pathname === item.href || 
                    (item.href === '/departments/broadcasting' && (pathname === '/departments/broadcasting' || pathname === '/departments/broadcasting/'));
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setActiveItem(item.name)}
                      className={`
                        block px-4 py-3 rounded-lg transition-all duration-200
                        ${isActive
                          ? 'bg-[#0477BF] text-white font-medium shadow-sm'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-[#0477BF]'
                        }
                      `}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md">
              {children}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

