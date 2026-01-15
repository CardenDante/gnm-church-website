'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Branch {
  name: string;
  address: string;
  phone: string;
  email: string;
  pastor: string;
  services: string;
}

export default function BranchesPage() {
  const [activeRegion, setActiveRegion] = useState<string>('Nairobi & Central');

  // group branches by region
  const branchesByRegion: Record<string, Branch[]> = {
    "Nairobi & Central": [
      { name: "Nairobi Main Church", address: "Thika Road, Behind Safari Park", phone: "0704 333 111", email: "info@goodnews.or.ke", pastor: "Pastor Yohan Kim", services: "Sun: 9AM, 11AM | Wed: 6PM" },
      { name: "Kitengela Church", address: "Kitengela Town", phone: "0708 753 238", email: "kitengela@goodnews.or.ke", pastor: "Local Pastor", services: "Sun: 10AM | Wed: 5PM" },
      { name: "Thika Church", address: "Thika Town", phone: "0710 764 424", email: "thika@goodnews.or.ke", pastor: "Local Pastor", services: "Sun: 9:30AM | Wed: 6:30PM" },
      { name: "Kawangware Church", address: "Kawangware, Nairobi", phone: "0723 424 169", email: "kawangware@goodnews.or.ke", pastor: "Local Pastor", services: "Sun: 10AM | Wed: 5PM" },
      { name: "Ruaraka Church", address: "Ruaraka, Nairobi", phone: "0726 460 513", email: "ruaraka@goodnews.or.ke", pastor: "Local Pastor", services: "Sun: 9AM | Wed: 6PM" },
      { name: "Ngong Church", address: "Ngong Town", phone: "0725 490 320", email: "ngong@goodnews.or.ke", pastor: "Local Pastor", services: "Sun: 10:30AM | Wed: 5:30PM" },
    ],
    "Western": [
      { name: "Kisumu Church", address: "Kisumu City", phone: "0721 342 176", email: "kisumu@goodnews.or.ke", pastor: "Local Pastor", services: "Sun: 9AM | Wed: 6PM" },
      { name: "Kakamega Church", address: "Kakamega Town", phone: "0716 975 435", email: "kakamega@goodnews.or.ke", pastor: "Local Pastor", services: "Sun: 10AM | Wed: 5PM" },
      { name: "Bungoma Church", address: "Bungoma Town", phone: "0711 278 768", email: "bungoma@goodnews.or.ke", pastor: "Local Pastor", services: "Sun: 9:30AM | Wed: 6:30PM" },
      { name: "Busia Church", address: "Busia Border", phone: "0728 563 078", email: "busia@goodnews.or.ke", pastor: "Local Pastor", services: "Sun: 10AM | Wed: 5PM" },
      { name: "Homabay Church", address: "Homabay Town", phone: "0717 651 645", email: "homabay@goodnews.or.ke", pastor: "Local Pastor", services: "Sun: 9AM | Wed: 6PM" },
    ],
    "Rift Valley": [
      { name: "Nakuru Church", address: "Nakuru City", phone: "0795 364 637", email: "nakuru@goodnews.or.ke", pastor: "Local Pastor", services: "Sun: 9AM | Wed: 6PM" },
      { name: "Eldoret Church", address: "Eldoret Town", phone: "0727 508 361", email: "eldoret@goodnews.or.ke", pastor: "Local Pastor", services: "Sun: 10AM | Wed: 5PM" },
      { name: "Kitale Church", address: "Kitale Town", phone: "0723 044 716", email: "kitale@goodnews.or.ke", pastor: "Local Pastor", services: "Sun: 9:30AM | Wed: 6:30PM" },
      { name: "Kericho Church", address: "Kericho Town", phone: "0721 602 024", email: "kericho@goodnews.or.ke", pastor: "Local Pastor", services: "Sun: 10AM | Wed: 5PM" },
      { name: "Bomet Church", address: "Bomet Town", phone: "0729 340 480", email: "bomet@goodnews.or.ke", pastor: "Local Pastor", services: "Sun: 9AM | Wed: 6PM" },
    ],
    "Coast": [
      { name: "Mombasa Church", address: "Mombasa City", phone: "0726 460 513", email: "mombasa@goodnews.or.ke", pastor: "Local Pastor", services: "Sun: 9AM | Wed: 6PM" },
      { name: "Kilifi Church", address: "Kilifi Town", phone: "0706 662 271", email: "kilifi@goodnews.or.ke", pastor: "Local Pastor", services: "Sun: 10AM | Wed: 5PM" },
      { name: "Malindi Church", address: "Malindi Town", phone: "0726 537 143", email: "malindi@goodnews.or.ke", pastor: "Local Pastor", services: "Sun: 9:30AM | Wed: 6:30PM" },
    ],
    "Nyanza & Migori": [
      { name: "Migori Church", address: "Migori Town", phone: "0728 383 193", email: "migori@goodnews.or.ke", pastor: "Local Pastor", services: "Sun: 9AM | Wed: 6PM" },
      { name: "Kisii Church", address: "Kisii Town", phone: "0722 731 230", email: "kisii@goodnews.or.ke", pastor: "Local Pastor", services: "Sun: 10AM | Wed: 5PM" },
      { name: "Rongo Church", address: "Rongo Town", phone: "0727 092 335", email: "rongo@goodnews.or.ke", pastor: "Local Pastor", services: "Sun: 9:30AM | Wed: 6:30PM" },
      { name: "Siaya Church", address: "Siaya Town", phone: "0792 462 244", email: "siaya@goodnews.or.ke", pastor: "Local Pastor", services: "Sun: 10AM | Wed: 5PM" },
    ],
  };

  const regions = Object.keys(branchesByRegion);
  const activeBranches = branchesByRegion[activeRegion];

  const quickLinks = [
    { title: "Find a Church Near You", description: "Locate the nearest branch", href: "#map", icon: "📍" },
    { title: "Service Times", description: "View all service schedules", href: "#services", icon: "⏰" },
    { title: "Online Services", description: "Join us virtually", href: "/media/sermons", icon: "📱" },
    { title: "Plan Your Visit", description: "First-time visitor guide", href: "/visit", icon: "👋" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-cyan-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Branch Churches</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              With over 32 branches across Kenya, we're bringing the Gospel to every community
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-white text-[#0477BF] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Contact Headquarters
              </Link>
              <Link
                href="/about/history"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View Our History
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0477BF]">32+</div>
            <div className="text-gray-600 text-sm">Branch Churches</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0477BF]">15+</div>
            <div className="text-gray-600 text-sm">Counties Reached</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0477BF]">5,000+</div>
            <div className="text-gray-600 text-sm">Weekly Attendees</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#0477BF]">1997</div>
            <div className="text-gray-600 text-sm">First Branch Established</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column: Branches List */}
          <div className="lg:col-span-2">
            {/* Quick Links */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Links</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="bg-white p-4 rounded-xl shadow-md hover:md:shadow-lg transition-shadow border border-gray-100 text-center group"
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{link.icon}</div>
                    <h3 className="font-semibold text-gray-800 text-sm mb-1">{link.title}</h3>
                    <p className="text-xs text-gray-600">{link.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Region Tabs */}
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Browse Churches by Region</h2>
              <div className="flex space-x-1 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {regions.map((region) => (
                  <button
                    key={region}
                    onClick={() => setActiveRegion(region)}
                    className={`flex-shrink-0 px-4 py-3 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${activeRegion === region
                        ? 'bg-[#0477BF] text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                  >
                    {region}
                    <span className="ml-2 text-xs opacity-80">
                      ({branchesByRegion[region].length})
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Branches for Active Region */}
            <div className="bg-white rounded-2xl md:shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#0477BF]">{activeRegion}</h2>
                  <p className="text-gray-600 text-sm md:text-base mt-1">
                    {activeBranches.length} churches serving this region
                  </p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {activeBranches.length} churches
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeBranches.map((church, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-md transition-all">
                    <h3 className="font-bold text-lg text-gray-800 mb-2">{church.name}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start">
                        <span className="text-gray-500 w-20 flex-shrink-0">Address:</span>
                        <span className="text-gray-700">{church.address}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500 w-20 flex-shrink-0">Phone:</span>
                        <a href={`tel:${church.phone}`} className="text-[#0477BF] hover:underline">
                          {church.phone}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500 w-20 flex-shrink-0">Email:</span>
                        <a href={`mailto:${church.email}`} className="text-[#0477BF] hover:underline truncate">
                          {church.email}
                        </a>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-500 w-20 flex-shrink-0">Services:</span>
                        <span className="text-gray-700">{church.services}</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <Link
                        href={`/contact?branch=${church.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-[#0477BF] text-sm font-medium hover:text-[#0A37BF] flex items-center"
                      >
                        Contact this branch
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Map & Info  */}
          <div className="space-y-8">

            {/* Map */}
            <div className="bg-white rounded-2xl md:shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Find a Church Near You</h2>
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-3">🗺️</div>
                  <p className="text-gray-600">Interactive Map Coming Soon</p>
                  <p className="text-sm text-gray-500 mt-2">Use our branch list to find locations</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p>All our branches are strategically located to serve local communities with the Gospel message.</p>
              </div>
            </div>

            {/* Headquarters Info */}
            <div className="bg-gradient-to-br from-[#0477BF] to-cyan-600 rounded-2xl md:shadow-lg p-6 text-white">
              <h2 className="text-xl font-bold mb-4">Headquarters</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">Good News Mission Kenya</h3>
                  <p className="text-blue-100 text-sm">Thika Road, Behind Safari Park</p>
                  <p className="text-blue-100 text-sm">P.O Box 57329 - 00200, Nairobi</p>
                </div>
                <div>
                  <p className="font-medium">Phone: <a href="tel:0704333111" className="hover:underline">0704 333 111</a></p>
                  <p className="font-medium">Email: <a href="mailto:info@goodnews.or.ke" className="hover:underline">info@goodnews.or.ke</a></p>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <h4 className="font-semibold mb-2">Main Service Times</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Sunday: 9:00 AM & 11:00 AM</li>
                    <li>• Wednesday: 6:00 PM Bible Study</li>
                    <li>• Friday: 6:00 PM Youth Service</li>
                  </ul>
                </div>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-[#0477BF] text-center py-3 rounded-lg font-semibold mt-6 hover:bg-gray-100 transition-colors"
              >
                Contact Headquarters
              </Link>
            </div>

            {/* Starting a New Branch */}
            <div className="bg-white rounded-2xl md:shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Interested in Starting a New Branch?</h2>
              <p className="text-gray-600 mb-4">
                We're always looking to expand our reach. If you're interested in starting a Good News Mission branch in your area:
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Community of at least 20 interested believers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Available meeting space</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Commitment to Good News Mission doctrine</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block text-center border-2 border-[#0477BF] text-[#0477BF] py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Inquire About Starting a Branch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


