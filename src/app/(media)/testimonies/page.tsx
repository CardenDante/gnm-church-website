// app/media/testimonies/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, MapPin, Heart, Eye, Share2, MessageSquare, PlayCircle, BookOpen } from 'lucide-react';

const testimonies = [
  {
    id: 1,
    name: "Anonymous Believer",
    location: "Nairobi, Kenya",
    date: "March 15, 2023",
    excerpt: "I was very happy because the burden of sin and the condemnation in my heart was lifted away...",
    content: "I was very happy because the burden of sin and the condemnation in my heart was lifted away. For many years I carried this weight, but through the ministry at Good News Mission, I found true freedom in Christ. The message of grace transformed my understanding of God's love and forgiveness.",
    imageUrl: "/testimonies/testimony-1.jpg",
    hasVideo: true,
    videoId: "sample-video-1",
    views: "2,543",
    likes: "189",
    category: "Salvation",
    readTime: "3 min read"
  },
  {
    id: 2,
    name: "John Mwangi",
    location: "Kampla",
    date: "February 28, 2023",
    excerpt: "Through church I was led through the Bible and realized that the word was God Himself....",
    content: "Through church I was led through the Bible and realized that the word was God Himself. I had read the Bible before, but it was just religious text to me. Now I understand that through scripture, God speaks directly to us. This revelation has completely changed my spiritual life.",
    imageUrl: "/testimonies/john-mwangi.jpg",
    hasVideo: false,
    views: "1,876",
    likes: "134",
    category: "Spiritual Growth",
    readTime: "4 min read"
  },
  {
    id: 3,
    name: "Pastor Samuel",
    location: "Good News Mission Nairobi",
    date: "January 30, 2023",
    excerpt: "I had that condition of heart that couldn't help but fail. In my ministry, my marriage and...",
    content: "I had that condition of heart that couldn't help but fail. In my ministry, my marriage and personal life, I struggled constantly. Despite being a pastor, I was battling with sin and failure. When I finally understood the true gospel of grace, everything changed. My ministry now flows from rest in Christ rather than striving.",
    imageUrl: "/testimonies/pastor-samuel.jpg",
    hasVideo: true,
    videoId: "sample-video-2",
    views: "3,210",
    likes: "245",
    category: "Ministry",
    readTime: "5 min read"
  },
  {
    id: 4,
    name: "Grace Wambui",
    location: "Nairobi County",
    date: "December 10, 2022",
    excerpt: "In this case I had to tear my heart and reveal my wicked heart. I have been suffering f...",
    content: "In this case I had to tear my heart and reveal my wicked heart. I have been suffering from depression and anxiety for years, hiding behind a smile while crumbling inside. When I finally confessed my true condition and received God's unconditional love, the healing began. The chains of performance and fear were broken.",
    imageUrl: "/testimonies/grace-wambui.jpg",
    hasVideo: false,
    views: "2,987",
    likes: "198",
    category: "Healing",
    readTime: "4 min read"
  },
  {
    id: 5,
    name: "Margaret Kemunto Omundi",
    location: "Utawala, Nairobi County",
    date: "November 5, 2022",
    excerpt: "I am Margaret Kemunto Omundi from Utawala, Nairobi County, Kenya. I am 43 years old and a ...",
    content: "I am Margaret Kemunto Omundi from Utawala, Nairobi County, Kenya. I am 43 years old and a mother of three. My life was consumed by worry about my children's future and financial struggles. When I heard that Jesus had already borne all my burdens on the cross, I let go. Now I live in peace, trusting God's provision day by day.",
    imageUrl: "/testimonies/margaret-kemunto.jpg",
    hasVideo: true,
    videoId: "sample-video-3",
    views: "4,321",
    likes: "312",
    category: "Family",
    readTime: "6 min read"
  }
];

const testimonyStats = [
  {
    title: "Most Viewed Testimony",
    name: "Margaret Kemunto Omundi",
    views: "4,321 views",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Latest Video Testimony",
    name: "Pastor Samuel",
    views: "3,210 views",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Featured Story",
    name: "Anonymous Believer",
    views: "2,543 views",
    color: "from-purple-500 to-purple-600"
  }
];

export default function TestimoniesPage() {
  const [filter, setFilter] = useState('all');
  
  return (
    <div className="p-6">
      {/* Bento Grid - Testimony Stats */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Featured Testimonies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonyStats.map((stat, index) => (
            <div 
              key={index} 
              className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  <StarIcon className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                  Featured
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{stat.title}</h3>
              <p className="text-white/80 text-sm mb-2">{stat.name}</p>
              <div className="flex items-center gap-2 text-sm">
                <Eye className="w-4 h-4" />
                <span>{stat.views}</span>
              </div>
              <Link 
                href={`/testimony/${stat.name.toLowerCase().replace(/ /g, '-')}`}
                className="inline-flex items-center mt-4 text-sm font-medium hover:underline gap-1"
              >
                Read Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonies Header with Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">All Testimonies</h2>
          <p className="text-gray-600">Stories of transformation through Christ</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="all">All Testimonies</option>
            <option value="video">Video Testimonies</option>
            <option value="written">Written Testimonies</option>
            <option value="salvation">Salvation Stories</option>
            <option value="healing">Healing Testimonies</option>
          </select>
          <button className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Sort
          </button>
        </div>
      </div>

      {/* Testimonies Grid */}
      <div className="grid grid-cols-1 gap-6">
        {testimonies.map((testimony) => (
          <div 
            key={testimony.id} 
            className=" overflow-hidden  transition-all duration-300 border-b border-gray-400"
          >
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Image/Video Thumbnail */}
                <div className="lg:w-2/5">
                  <div className="relative rounded-lg overflow-hidden">
                    <div className="relative h-64 lg:h-48">
                      <Image
                        src={testimony.imageUrl}
                        alt={testimony.name}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      {testimony.hasVideo && (
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                            <PlayCircle className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Stats Bar */}
                    <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{testimony.views} views</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{testimony.likes}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button className="hover:text-green-600 transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="lg:w-3/5">
                  {/* Category and Read Time */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                        {testimony.category}
                      </span>
                      {testimony.hasVideo && (
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full flex items-center gap-1">
                          <PlayCircle className="w-3 h-3" />
                          Video Available
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {testimony.readTime}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 hover:text-green-600 transition-colors">
                    <Link href={`/testimony/${testimony.id}`}>
                      {testimony.name}'s Testimony
                    </Link>
                  </h3>
                  
                  {/* Metadata */}
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span className="font-medium">{testimony.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{testimony.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{testimony.date}</span>
                    </div>
                  </div>
                  
                  {/* Excerpt */}
                  <div className="mb-4">
                    <div className="relative pl-4">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 rounded-full" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {testimony.excerpt}
                      </p>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                    <Link 
                      href={`/testimony/${testimony.id}`}
                      className="inline-flex items-center gap-2 px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium cursor-pointer"
                    >
                      {testimony.hasVideo ? (
                        <>
                          <PlayCircle className="w-5 h-5" />
                          Watch Testimony
                        </>
                      ) : (
                        <>
                          <MessageSquare className="w-5 h-5" />
                          Read Testimony
                        </>
                      )}
                    </Link>
                    <button className="inline-flex items-center gap-2 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <Heart className="w-4 h-4" />
                      Like
                    </button>
                    <button className="inline-flex items-center gap-2 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-gray-600">
            Showing 1-{testimonies.length} of 200+ testimonies
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
              Previous
            </button>
            
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-1.5 text-sm rounded-lg ${
                    page === 1
                      ? 'bg-green-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
              <span className="px-2 py-1">...</span>
              <button className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
                20
              </button>
            </div>
            
            <button className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

