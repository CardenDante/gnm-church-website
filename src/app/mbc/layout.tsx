'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const mbcNavItems = [
    {
        name: 'Mahanaim Bible College',
        href: '/mbc',
    },
    {
        name: 'Curriculum and Delivery',
        href: '/mbc/curriculum-and-delivery',
    },
    {
        name: 'Certificate Course',
        href: '/mbc/certificate',
    },
    {
        name: 'Diploma Course',
        href: '/mbc/diploma',
    },
    {
        name: 'Advanced Diploma Course',
        href: '/mbc/advanced-diploma',
    },
];

export default function MBCLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [activeItem, setActiveItem] = useState(
        mbcNavItems.find(item => pathname === item.href)?.name || 'Mahanaim Bible College'
    );

    const getPageSubtitle = () => {
        switch (activeItem) {
            case 'Mahanaim Bible College':
                return 'Spiritual Training for God\'s Host';
            case 'Curriculum and Delivery':
                return 'Course structure and academic policies';
            case 'Certificate Course':
                return 'Certificate program details';
            case 'Diploma Course':
                return 'Diploma program information';
            case 'Advanced Diploma Course':
                return 'Advanced diploma program';
            default:
                return 'Mahanaim Bible College Programs';
        }
    };

    return (
        <div className="min-h-screen ">
            {/* Dynamic Header  */}
            <div className="head_title_area text-center py-16 bg-gray-50">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-3">
                    {activeItem}
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-4">
                    {getPageSubtitle()}
                </p>
                <div className="w-24 h-1 bg-[#0477BF] mx-auto"></div>
            </div>


            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
                            <h3 className="text-xl font-bold text-[#0477BF] mb-5 pb-3 border-b border-gray-200">
                                MBC Programs
                            </h3>

                            <nav className="space-y-2">
                                {mbcNavItems.map((item) => {
                                    const isActive = pathname === item.href ||
                                        (item.href === '/mbc' && (pathname === '/mbc' || pathname === '/'));

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

