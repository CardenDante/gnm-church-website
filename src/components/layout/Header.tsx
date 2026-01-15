'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const aboutDropdownItems = [
    { name: 'Greetings Message', href: '/about/greetings' },
    { name: 'History', href: '/about/history' },
    { name: 'What we believe', href: '/about/beliefs' },
    { name: 'Our Church Branches', href: '/branches' },
  ];

  const mbcDropdownItems = [
    { name: 'Mahanaim Bible College', href: '/mbc/college' },
    { name: 'Curriculum and Delivery', href: '/mbc/curriculum' },
    { name: 'Certificate course', href: '/mbc/certificate' },
    { name: 'Diploma Course', href: '/mbc/diploma' },
    { name: 'Advanced Diploma Course', href: '/mbc/advanced-diploma' },
  ];

  const departmentsDropdownItems = [
    { name: 'Good News Broadcasting System', href: '/departments/broadcasting' },
    { name: 'Good News Medical Volunteers', href: '/departments/medical' },
    { name: 'Mahanaim College', href: '/departments/college' },
    { name: 'Mahanaim International School', href: '/departments/school' },
    { name: 'International Youth Fellowship', href: '/departments/youth' },
    { name: 'Christian Leaders Fellowship', href: '/departments/leaders' },
  ];

  const mediaDropdownItems = [
    { name: 'Sermons', href: '/sermons' },
    { name: 'Testimonies', href: '/testimonies' },
    { name: 'News', href: '/news' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header className="bg-white shadow-lg border-b-4 border-gradient-to-r border-[#0477BF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
<div className="flex-shrink-0">
  <Link href="/" className="flex items-center">
    <div className="relative h-12 sm:h-14 lg:h-16 aspect-[4/1]">
      <Image
        src="/logo.png"
        alt="Good News Mission Kenya"
        fill
        className="object-contain"
        priority
      />
    </div>
  </Link>
</div>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-6">
            <Link
              href="/"
              className="text-[#0A37BF] hover:text-[#0477BF] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('about')}
                className="text-[#0A37BF] hover:text-[#0477BF] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
              >
                About
                <svg
                  className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg z-50 transition-all duration-200 ${
                  activeDropdown === 'about'
                    ? 'opacity-100 visible transform translate-y-0'
                    : 'opacity-0 invisible transform -translate-y-2'
                }`}
              >
                {aboutDropdownItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#0477BF] transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* MBC Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('mbc')}
                className="text-[#0A37BF] hover:text-[#0477BF] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
              >
                MBC
                <svg
                  className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg z-50 transition-all duration-200 ${
                  activeDropdown === 'mbc'
                    ? 'opacity-100 visible transform translate-y-0'
                    : 'opacity-0 invisible transform -translate-y-2'
                }`}
              >
                {mbcDropdownItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#0477BF] transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Departments Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('departments')}
                className="text-[#0A37BF] hover:text-[#0477BF] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
              >
                Departments
                <svg
                  className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 mt-1 w-72 bg-white rounded-md shadow-lg z-50 transition-all duration-200 ${
                  activeDropdown === 'departments'
                    ? 'opacity-100 visible transform translate-y-0'
                    : 'opacity-0 invisible transform -translate-y-2'
                }`}
              >
                {departmentsDropdownItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#0477BF] transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Media Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('media')}
                className="text-[#0A37BF] hover:text-[#0477BF] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
              >
                Media
                <svg
                  className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50 transition-all duration-200 ${
                  activeDropdown === 'media'
                    ? 'opacity-100 visible transform translate-y-0'
                    : 'opacity-0 invisible transform -translate-y-2'
                }`}
              >
                {mediaDropdownItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#0477BF] transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact us */}
            <Link
              href="/contact"
              className="text-[#0A37BF] hover:text-[#0477BF] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Contact us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 text-[#0A37BF] hover:text-[#0477BF] focus:outline-none transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mb-4">
            <Link href="/" className="text-[#0A37BF] hover:text-[#0477BF] block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            
            {/* Mobile About Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('mobile-about')}
                className="text-[#0A37BF] hover:text-[#0477BF] w-full text-left px-3 py-2 rounded-md text-base font-medium flex justify-between items-center"
              >
                About
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-about' && (
                <div className="pl-6 space-y-1">
                  {aboutDropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-600 hover:text-[#0477BF] block px-3 py-2 rounded-md text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile MBC Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('mobile-mbc')}
                className="text-[#0A37BF] hover:text-[#0477BF] w-full text-left px-3 py-2 rounded-md text-base font-medium flex justify-between items-center"
              >
                MBC
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-mbc' && (
                <div className="pl-6 space-y-1">
                  {mbcDropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-600 hover:text-[#0477BF] block px-3 py-2 rounded-md text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Departments Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('mobile-departments')}
                className="text-[#0A37BF] hover:text-[#0477BF] w-full text-left px-3 py-2 rounded-md text-base font-medium flex justify-between items-center"
              >
                Departments
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-departments' && (
                <div className="pl-6 space-y-1">
                  {departmentsDropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-600 hover:text-[#0477BF] block px-3 py-2 rounded-md text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Media Dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('mobile-media')}
                className="text-[#0A37BF] hover:text-[#0477BF] w-full text-left px-3 py-2 rounded-md text-base font-medium flex justify-between items-center"
              >
                Media
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'mobile-media' && (
                <div className="pl-6 space-y-1">
                  {mediaDropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-600 hover:text-[#0477BF] block px-3 py-2 rounded-md text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" className="text-[#0A37BF] hover:text-[#0477BF] block px-3 py-2 rounded-md text-base font-medium">
              Contact us
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay to close dropdowns when clicking outside */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </header>
  );
};

export default Header;