'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Tv,
  Building,
  School,
  Users,
  Heart,
  Radio,
  BookOpen,
  Target,
  Calendar,
  Globe,
  MapPin,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users as PeopleIcon,
  GraduationCap,
  Activity,
  Mail,
  ExternalLink,
  Award
} from 'lucide-react';

const departmentNavItems = [
  {
    name: 'Good News Broadcasting System',
    href: '/departments/broadcasting',
    icon: Tv,
    shortDesc: 'Media Ministry',
    externalLink: 'https://gbskenya.com',
    externalText: 'Visit GBS Website'
  },
  {
    name: 'Good News Medical Volunteers',
    href: '/departments/medical',
    icon: Heart,
    shortDesc: 'Healthcare Service',
    externalLink: 'https://goodnews.or.ke/departments/good-news-medical-volunteers',
    externalText: 'Medical Programs'
  },
  {
    name: 'Mahanaim College',
    href: '/departments/college',
    icon: School,
    shortDesc: 'Higher Education',
    externalLink: 'https://mahanaim.ac.ke',
    externalText: 'College Website'
  },
  {
    name: 'Mahanaim International School',
    href: '/departments/school',
    icon: Building,
    shortDesc: 'K-12 Education',
    externalLink: 'https://mihs.ac.ke',
    externalText: 'School Portal'
  },
  {
    name: 'International Youth Fellowship',
    href: '/departments/youth',
    icon: Users,
    shortDesc: 'Youth Empowerment',
    externalLink: 'https://iyfkenya.org',
    externalText: 'IYF Kenya'
  },
  {
    name: 'Christian Leaders Fellowship',
    href: '/departments/leaders',
    icon: Target,
    shortDesc: 'Leadership Development',
    externalLink: 'https://clfusa.org',
    externalText: 'CLF Network'
  },
];

// Dynamic content for each department
const departmentContent = {
  '/departments/broadcasting': {
    color: 'from-blue-500 to-blue-700',
    icon: Radio,
    stats: [
      { label: 'Launched', value: '2009', icon: Calendar },
      { label: 'Coverage', value: 'Nationwide', icon: Globe },
      { label: 'Format', value: 'Digital TV', icon: Tv },
      { label: 'Content', value: 'Christian Media', icon: BookOpen },
    ],
    quickLinks: [
      { text: 'Watch Live', href: 'https://gbskenya.com/live', icon: Tv },
      { text: 'Program Schedule', href: 'https://gbskenya.com/schedule', icon: Calendar },
      { text: 'GBS Website', href: 'https://gbskenya.com', icon: Globe },
    ],
  },
  '/departments/medical': {
    color: 'from-green-500 to-green-700',
    icon: Heart,
    stats: [
      { label: 'Volunteers', value: '100+', icon: PeopleIcon },
      { label: 'Services', value: 'Medical Camps', icon: Activity },
      { label: 'Focus', value: 'Community Health', icon: Target },
      { label: 'Reach', value: 'Rural Areas', icon: MapPin },
    ],
    quickLinks: [
      { text: 'Volunteer Form', href: '/contact', icon: Mail },
      { text: 'Medical Camps', href: '/departments/medical#camps', icon: Activity },
      { text: 'Donate', href: '/contact', icon: Heart },
    ],
  },
  '/departments/college': {
    color: 'from-purple-500 to-purple-700',
    icon: GraduationCap,
    stats: [
      { label: 'Established', value: '2011', icon: Calendar },
      { label: 'Programs', value: 'Multiple', icon: BookOpen },
      { label: 'Focus', value: 'Spiritual + Academic', icon: Award },
      { label: 'Students', value: '500+', icon: PeopleIcon },
    ],
    quickLinks: [
      { text: 'Admissions', href: '/departments/college#admissions', icon: Mail },
      { text: 'Courses', href: '/departments/college#courses', icon: BookOpen },
      { text: 'Campus Tour', href: '/departments/college#campus', icon: Building },
    ],
  },
  '/departments/school': {
    color: 'from-amber-500 to-amber-700',
    icon: Building,
    stats: [
      { label: 'Levels', value: 'K-12', icon: GraduationCap },
      { label: 'Curriculum', value: 'CBC + Christian', icon: BookOpen },
      { label: 'Focus', value: 'Holistic Education', icon: Target },
      { label: 'Students', value: '300+', icon: PeopleIcon },
    ],
    quickLinks: [
      { text: 'Admissions', href: '/departments/school#admissions', icon: Mail },
      { text: 'Academic Calendar', href: '/departments/school#calendar', icon: Calendar },
      { text: 'School Tour', href: '/departments/school#tour', icon: Building },
    ],
  },
  '/departments/youth': {
    color: 'from-cyan-500 to-cyan-700',
    icon: Users,
    stats: [
      { label: 'Members', value: '2,000+', icon: PeopleIcon },
      { label: 'Activities', value: 'Monthly', icon: Calendar },
      { label: 'Focus', value: 'Youth Development', icon: Target },
      { label: 'Age Group', value: '13-35', icon: Activity },
    ],
    quickLinks: [
      { text: 'Join IYF', href: '/departments/youth#join', icon: Users },
      { text: 'Events', href: '/departments/youth#events', icon: Calendar },
      { text: 'IYF Kenya', href: 'https://iyfkenya.org', icon: Globe },
    ],
  },
  '/departments/leaders': {
    color: 'from-indigo-500 to-indigo-700',
    icon: Target,
    stats: [
      { label: 'Members', value: '500+', icon: PeopleIcon },
      { label: 'Meetings', value: 'Quarterly', icon: Calendar },
      { label: 'Focus', value: 'Leadership Growth', icon: TrendingUp },
      { label: 'Network', value: 'National', icon: Globe },
    ],
    quickLinks: [
      { text: 'Membership', href: '/departments/leaders#membership', icon: Users },
      { text: 'Conferences', href: '/departments/leaders#conferences', icon: Calendar },
      { text: 'Resources', href: '/departments/leaders#resources', icon: BookOpen },
    ],
  },
};

export default function DepartmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState(
    departmentNavItems.find(item => pathname === item.href)?.name || 'Good News Broadcasting System'
  );

  const getPageSubtitle = () => {
    switch (activeItem) {
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

  const currentContent = departmentContent[pathname as keyof typeof departmentContent] || departmentContent['/departments/broadcasting'];
  const DepartmentIcon = currentContent.icon || Tv;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Dynamic Header */}
      <div className={`bg-gradient-to-r ${currentContent.color} text-white py-16 relative overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <DepartmentIcon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {activeItem}
          </h1>
          <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
            {getPageSubtitle()}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/departments"
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/30 transition-all flex items-center gap-2"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              All Departments
            </Link>
            <Link
              href="/about"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all flex items-center gap-2"
            >
              About Our Mission
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {currentContent.stats.map((stat, index) => {
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

          {/* Enhanced Sidebar with Dynamic Cards */}
          <div className="lg:w-80 space-y-8">

            {/* Navigation Card with Icons */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-200 flex items-center gap-2">
                <Building className="w-5 h-5 text-blue-600" />
                Our Departments
              </h3>

              <nav className="space-y-3">
                {departmentNavItems.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;

                  return (
                    <div key={item.href} className="space-y-1">
                      <Link
                        href={item.href}
                        onClick={() => setActiveItem(item.name)}
                        className={`
                          flex items-center p-3 rounded-xl 
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
                      {/* External Link  */}
                      {item.externalLink && (
                        <a
                          href={item.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline transition-colors mt-2"
                        >
                          <ExternalLink className="w-3 h-3" />
                          {item.externalText}
                        </a>
                      )}
                        </div>
                        {/* {isActive && (
                          <CheckCircle className="w-5 h-5 text-blue-500 ml-2" />
                        )} */}
                      </Link>
                      
                    </div>
                  );
                })}
              </nav>

              {/* Quick Contact */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center text-gray-600">
                  <div className="p-2 bg-gray-100 rounded-lg mr-3">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Good News Mission Kenya</p>
                    <p className="text-xs text-gray-600">Thika Road, Behind Safari Park</p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center mt-4 text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
                >
                  General Inquiries
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className={`bg-gradient-to-br ${currentContent.color} rounded-2xl shadow-lg p-6 text-white`}>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Quick Actions
              </h3>
              <div className="space-y-3">
                {currentContent.quickLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                      className="flex items-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
                    >
                      <Icon className="w-4 h-4 mr-3" />
                      <span className="flex-1">{link.text}</span>
                      {link.href.startsWith('http') ? (
                        <ExternalLink className="w-4 h-4 opacity-80" />
                      ) : (
                        <ArrowRight className="w-4 h-4 opacity-80" />
                      )}
                    </a>
                  );
                })}
              </div>
              <div className="mt-6 pt-4 border-t border-white/20">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full bg-white text-center py-2.5 rounded-lg font-semibold text-gray-800 hover:bg-gray-100 transition-colors gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Contact This Department
                </Link>
              </div>
            </div>

            {/* Related Ministries Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-600" />
                Related Ministries
              </h3>
              <div className="space-y-4">
                <div className="flex items-start p-3 bg-blue-50 rounded-lg">
                  <div className="p-2 bg-blue-100 rounded-lg mr-3">
                    <Building className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Church Services</p>
                    <p className="text-sm text-gray-600">Weekly worship and fellowship</p>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-green-50 rounded-lg">
                  <div className="p-2 bg-green-100 rounded-lg mr-3">
                    <BookOpen className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">MBC Programs</p>
                    <p className="text-sm text-gray-600">Bible college and theology</p>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-purple-50 rounded-lg">
                  <div className="p-2 bg-purple-100 rounded-lg mr-3">
                    <Globe className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Mission Outreach</p>
                    <p className="text-sm text-gray-600">Community and global missions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Department Impact Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Department Impact
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Each department works together to fulfill our mission of spreading the Gospel and serving communities.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg">
                  <span className="text-sm text-gray-300 flex items-center gap-2">
                    <Radio className="w-4 h-4" />
                    Media Reach
                  </span>
                  <span className="text-sm font-semibold">Nationwide</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg">
                  <span className="text-sm text-gray-300 flex items-center gap-2">
                    <School className="w-4 h-4" />
                    Education Impact
                  </span>
                  <span className="text-sm font-semibold">800+ Students</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg">
                  <span className="text-sm text-gray-300 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Youth Engagement
                  </span>
                  <span className="text-sm font-semibold">2,000+ Youth</span>
                </div>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center mt-6 text-sm text-blue-300 hover:text-blue-200 hover:underline"
              >
                Learn About Our Full Mission
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

