'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dot } from 'lucide-react';

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

// dynamic content for each page
const dynamicContent = {
    '/mbc': {
        title: 'College Overview',
        description: 'Mahanaim means "God\'s host" - a spiritual Bible college teaching the heart of God from Scripture.',
        highlights: [
            'Founded in 2007, online since 2020',
            'Teaches pure biblical theology',
            'Global reach across 105 countries',
            '1,200+ graduates serving worldwide',
            'Focus on spiritual transformation',
        ],
        stats: [
            { label: 'Founded', value: '2007' },
            { label: 'Graduates', value: '1,200+' },
            { label: 'Countries', value: '105' },
            { label: 'Years', value: '17+' },
        ],
    },
    '/mbc/curriculum-and-delivery': {
        title: 'Academic Structure',
        description: 'Comprehensive theological education with modern delivery methods.',
        highlights: [
            '60% assignments, 40% final exams',
            'Minimum 2.0 GPA for graduation',
            'Monthly face-to-face sessions',
            'Google Classroom platform',
            '60+ credits required for graduation',
        ],
        stats: [
            { label: 'Cost/Semester', value: 'Ksh 5,000' },
            { label: 'Credits Required', value: '60+' },
            { label: 'GPA Scale', value: '4.0' },
            { label: 'Lectures/Subject', value: '12' },
        ],
    },
    '/mbc/certificate': {
        title: 'Certificate Program',
        description: 'Foundation level theological studies for beginning ministry.',
        highlights: [
            '3 semesters (9 months total)',
            'Introduction to Synoptic Gospels',
            'In-depth Book of John study',
            'Forgiveness of Sins doctrine',
            'Special lectures by founder',
        ],
        stats: [
            { label: 'Duration', value: '9 Months' },
            { label: 'Courses', value: '4' },
            { label: 'Semesters', value: '3' },
            { label: 'Credits', value: '12' },
        ],
    },
    '/mbc/diploma': {
        title: 'Diploma Program',
        description: 'Intermediate theological training for ministry development.',
        highlights: [
            '6 semesters (18 months total)',
            'Exodus & Genesis studies',
            'Gospel of Matthew analysis',
            'Book of Romans theology',
            'Divided into 2 levels',
        ],
        stats: [
            { label: 'Duration', value: '18 Months' },
            { label: 'Courses', value: '6' },
            { label: 'Levels', value: '2' },
            { label: 'Credits', value: '24' },
        ],
    },
    '/mbc/advanced-diploma': {
        title: 'Advanced Program',
        description: 'Advanced theological studies for leadership and specialized ministry.',
        highlights: [
            '3 semesters (9 months total)',
            'Major Prophets analysis',
            'Epistles of Paul study',
            'Repentance and Faith doctrine',
            'Leadership training included',
        ],
        stats: [
            { label: 'Duration', value: '9 Months' },
            { label: 'Courses', value: '3' },
            { label: 'Level', value: 'Advanced' },
            { label: 'Credits', value: '12' },
        ],
    },
};

export default function MBCLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [activeItem, setActiveItem] = useState(
        mbcNavItems.find(item => pathname === item.href || (item.href === '/mbc' && pathname === '/mbc'))?.name || 'Mahanaim Bible College'
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

    const getGradientClass = () => {
        switch (activeItem) {
            case 'Mahanaim Bible College':
                return 'from-blue-900 to-cyan-800';
            case 'Curriculum and Delivery':
                return 'from-purple-900 to-indigo-800';
            case 'Certificate Course':
                return 'from-green-900 to-emerald-800';
            case 'Diploma Course':
                return 'from-amber-900 to-orange-800';
            case 'Advanced Diploma Course':
                return 'from-red-900 to-pink-800';
            default:
                return 'from-blue-900 to-cyan-800';
        }
    };

    // dynamic content for current path
    const currentContent = dynamicContent[pathname as keyof typeof dynamicContent] || dynamicContent['/mbc'];

    return (
        <div className="min-h-screen">
            {/* Dynamic Header */}
            <div className={`head_title_area text-center py-16 bg-gradient-to-r ${getGradientClass()} text-white`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {activeItem}
                    </h1>
                    <p className="text-xl text-blue-100 mb-6">
                        {getPageSubtitle()}
                    </p>
                    <div className="w-32 h-1 bg-white/30 mx-auto rounded-full"></div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Main Content Area */}
                    <div className="lg:flex-1 order-2 lg:order-1">
                        <div className=" rounded-2xl shadow md:shadow-lg overflow-hidden">
                            {children}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-96 order-1 lg:order-2 space-y-8">

                        {/* Navigation Card */}
                        <div className="bg-white rounded-2xl shadow md:shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-5 pb-3 border-b border-gray-200">
                                MBC Programs
                            </h3>

                            <nav className="space-y-2">
                                {mbcNavItems.map((item) => {
                                    const isActive = pathname === item.href ||
                                        (item.href === '/mbc' && (pathname === '/mbc'));

                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setActiveItem(item.name)}
                                            className={`
                        block px-4 py-3 rounded-lg transition-all duration-200
                        ${isActive
                                                    ? 'bg-gradient-to-r from-[#0477BF] to-cyan-600 text-white font-medium shadow-md'
                                                    : 'text-gray-700 hover:bg-gray-50 hover:text-[#0477BF] border border-gray-100'
                                                }
                      `}
                                        >
                                            {item.name}
                                        </Link>
                                    );
                                })}
                            </nav>

                            {/* Quick Contact Section */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <h4 className="font-semibold text-gray-800 mb-3">Admissions Office</h4>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-start">
                                        <span className="text-gray-500 mr-2">📧</span>
                                        <a href="mailto:mbc@goodnews.or.ke" className="text-[#0477BF] hover:underline">
                                            mbc@goodnews.or.ke
                                        </a>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-gray-500 mr-2">📱</span>
                                        <a href="tel:0704333111" className="text-[#0477BF] hover:underline">
                                            0704 333 111
                                        </a>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-gray-500 mr-2">🏛️</span>
                                        <span className="text-gray-600">Thika Road, Behind Safari Park, Nairobi</span>
                                    </div>
                                </div>
                                <Link
                                    href="/contact"
                                    className="inline-block mt-3 text-sm font-medium text-[#0477BF] hover:underline"
                                >
                                    Contact Admissions Team →
                                </Link>
                            </div>
                        </div>

                        {/* Dynamic Content Card */}
                        <div className="bg-gradient-to-br from-[#0477BF] to-cyan-600 rounded-2xl md:shadow-lg p-6 text-white">
                            <h3 className="text-xl font-bold mb-3">{currentContent.title}</h3>
                            <p className="text-blue-100 mb-4 text-sm">{currentContent.description}</p>

                            <div className="mb-6">
                                <h4 className="font-semibold mb-2 text-blue-200">Key Highlights</h4>
                                <ul className="space-y-2 items-center">
                                    {currentContent.highlights.map((item, index) => (
                                        <li key={index} className="flex items-center justify-start">
                                            <span className="text-yellow-300 mr-1 mt-1"><Dot /> </span>
                                            <span className="text-blue-100 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="grid grid-cols-2 gap-3 mb-6">
                                {currentContent.stats.map((stat, index) => (
                                    <div key={index} className="bg-white/10 rounded-lg p-3 text-center backdrop-blur-sm">
                                        <div className="text-xl font-bold">{stat.value}</div>
                                        <div className="text-xs text-blue-200 mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="/contact"
                                className="block w-full bg-white text-[#0477BF] text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors md:shadow-lg"
                            >
                                Apply for This Program
                            </Link>
                        </div>

                        {/* About MBC & Founder  */}
                        <div className="bg-white rounded-2xl shadow md:shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">About MBC & Founder</h3>

                            <div className="space-y-4">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2">Rev. Dr. Ock Soo Park</h4>
                                    <p className="text-sm text-gray-600 mb-3">Founder of Mahanaim Bible College</p>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        <li>• Author of 64 spiritual books</li>
                                        <li>• Founder of Good News Mission</li>
                                        <li>• Global ministry in 105 countries</li>
                                        <li>• Bestselling author worldwide</li>
                                    </ul>
                                    <Link
                                        href="/about/greetings"
                                        className="inline-block mt-3 text-sm text-[#0477BF] hover:underline"
                                    >
                                        Read Founder's Message →
                                    </Link>
                                </div>

                                <div className=" p-4 ">
                                    <h4 className="font-semibold text-gray-800 mb-2">Mission Statement</h4>
                                    <p className="text-sm text-gray-600">
                                        To lead Christians to return to the Bible, receive God's heart, and become ministers of righteousness with divine wisdom.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Related Departments & Resources  */}
                        <div className="bg-white rounded-2xl shadow md:shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Related Departments</h3>

                            <div className="space-y-3">
                                <Link
                                    href="/departments/college"
                                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                                >
                                    <span className="text-2xl mr-3">🏛️</span>
                                    <div>
                                        <div className="font-medium text-gray-800">Mahanaim College</div>
                                        <div className="text-sm text-gray-600">Secondary & post-secondary education</div>
                                    </div>
                                </Link>

                                <Link
                                    href="/departments/broadcasting"
                                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                                >
                                    <span className="text-2xl mr-3">📺</span>
                                    <div>
                                        <div className="font-medium text-gray-800">GBS TV</div>
                                        <div className="text-sm text-gray-600">Good News Broadcasting System</div>
                                    </div>
                                </Link>

                                <Link
                                    href="/departments/youth"
                                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                                >
                                    <span className="text-2xl mr-3">👥</span>
                                    <div>
                                        <div className="font-medium text-gray-800">IYF Kenya</div>
                                        <div className="text-sm text-gray-600">International Youth Fellowship</div>
                                    </div>
                                </Link>

                                <Link
                                    href="/departments/leaders"
                                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                                >
                                    <span className="text-2xl mr-3">🤝</span>
                                    <div>
                                        <div className="font-medium text-gray-800">CLF</div>
                                        <div className="text-sm text-gray-600">Christian Leaders Fellowship</div>
                                    </div>
                                </Link>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <h4 className="font-semibold text-gray-800 mb-3">Quick Resources</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    <Link
                                        href="/media/sermons"
                                        className="text-center p-2 bg-blue-50 text-[#0477BF] rounded-lg text-sm hover:bg-blue-100 transition-colors"
                                    >
                                        Sample Lectures
                                    </Link>
                                    <Link
                                        href="/mbc#faq"
                                        className="text-center p-2 bg-gray-50 text-gray-700 rounded-lg text-sm hover:bg-gray-100 transition-colors"
                                    >
                                        FAQ
                                    </Link>
                                    <Link
                                        href="/about/history"
                                        className="text-center p-2 bg-gray-50 text-gray-700 rounded-lg text-sm hover:bg-gray-100 transition-colors"
                                    >
                                        Our History
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="text-center p-2 bg-green-50 text-green-700 rounded-lg text-sm hover:bg-green-100 transition-colors"
                                    >
                                        Contact
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Application Timeline Card */}
                        <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl md:shadow-lg p-6 text-gray-800">
                            <h3 className="text-xl font-bold mb-3">Application Timeline</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                                        1
                                    </div>
                                    <span>Submit online application</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                                        2
                                    </div>
                                    <span>Interview with admissions team</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                                        3
                                    </div>
                                    <span>Receive acceptance letter</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                                        4
                                    </div>
                                    <span>Enroll and begin classes</span>
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                <p className="text-amber-100 text-sm mb-2"> intake Ongoing </p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-white text-amber-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    Check Availability
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

