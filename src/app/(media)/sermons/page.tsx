// app/media/sermons/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, User, MapPin, PlayCircle, Download, Share2, Heart, MessageSquare, Headphones, Eye } from 'lucide-react';

const sermons = [
  {
    id: 1,
    date: "January 15, 2023",
    title: "The Power of Faith in Difficult Times",
    excerpt: "In this sermon, we explore how faith can sustain us through life's most challenging moments. Through biblical examples and personal testimony, we learn how to trust God's plan even when we don't understand our circumstances.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    slug: "power-of-faith",
    speaker: "Pastor Yohan Kim",
    speakerImage: "/speakers/yohan.jpg",
    location: "Good News Mission Nairobi",
    videoId: "dQw4w9WgXcQ",
    duration: "45:20",
    views: "1,245",
    downloads: "356",
    likes: "89",
    tags: ["Faith", "Encouragement", "Spiritual Growth"],
    series: "Living by Faith"
  },
  {
    id: 2,
    date: "January 8, 2023",
    title: "Living a Life of Gratitude",
    excerpt: "This message focuses on cultivating a heart of thankfulness in all circumstances. We examine biblical principles of gratitude and how they transform our perspective on life.",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    slug: "living-gratitude",
    speaker: "Pastor Nelson Ochuoga",
    speakerImage: "/speakers/nelson.jpg",
    location: "Nairobi Main Church",
    videoId: "tc6fjy5ech",
    duration: "38:15",
    views: "987",
    downloads: "234",
    likes: "67",
    tags: ["Gratitude", "Thankfulness", "Joy"],
    series: "Heart Attitudes"
  },
  {
    id: 3,
    date: "January 1, 2023",
    title: "New Beginnings in Christ",
    excerpt: "As we start the new year, we explore what it means to have a fresh start in Christ. This sermon addresses letting go of the past and embracing God's new mercies each day.",
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    slug: "new-beginnings",
    speaker: "Pastor Yohan Kim",
    speakerImage: "/speakers/yohan.jpg",
    location: "Kampala Church",
    videoId: "abc123def45",
    duration: "42:30",
    views: "1,532",
    downloads: "421",
    likes: "112",
    tags: ["New Beginnings", "Hope", "Renewal"],
    series: "New Year Series"
  },
  {
    id: 4,
    date: "December 25, 2022",
    title: "The True Meaning of Christmas",
    excerpt: "Christmas Day message focusing on the incarnation of Christ and what it means for humanity. We move beyond the commercial aspects to the profound spiritual reality of God with us.",
    content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    slug: "true-meaning-christmas",
    speaker: "Pastor Mary Johnson",
    speakerImage: "/speakers/mary.jpg",
    location: "Good News Mission Nairobi",
    views: "2,134",
    downloads: "589",
    likes: "156",
    tags: ["Christmas", "Incarnation", "Salvation"],
    series: "Christmas Special"
  },
  {
    id: 5,
    date: "December 18, 2022",
    title: "Preparing Our Hearts for Christmas",
    excerpt: "Advent series part 4: How to prepare our hearts to receive Christ during the Christmas season. Practical and spiritual guidance for a meaningful celebration.",
    content: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    slug: "preparing-hearts-christmas",
    speaker: "Pastor Yohan Kim",
    speakerImage: "/speakers/yohan.jpg",
    location: "Nairobi Main Church",
    videoId: "xyz789pqr01",
    duration: "47:25",
    views: "876",
    downloads: "312",
    likes: "78",
    tags: ["Advent", "Preparation", "Christmas"],
    series: "Advent Series"
  },
  {
    id: 6,
    date: "December 11, 2022",
    title: "The Hope of Advent",
    excerpt: "Advent series part 3: Exploring the theme of hope in the Christmas story. How the promise of Christ brings hope to a broken world.",
    content: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    slug: "hope-of-advent",
    speaker: "Pastor David Brown",
    speakerImage: "/speakers/david.jpg",
    location: "Kampala Church",
    views: "654",
    downloads: "198",
    likes: "45",
    tags: ["Hope", "Advent", "Promise"],
    series: "Advent Series"
  },
];

const featuredSeries = [
  {
    id: 1,
    title: "Book of Romans Series",
    description: "Deep dive into Paul's letter to the Romans",
    sermonCount: 12,
    latestSermon: "Romans 8: The Spirit of Life",
    color: "from-blue-500 to-blue-600",
    icon: BookIcon
  },
  {
    id: 2,
    title: "Foundations of Faith",
    description: "Essential teachings for new believers",
    sermonCount: 8,
    latestSermon: "What is Salvation?",
    color: "from-purple-500 to-purple-600",
    icon: Headphones
  },
  {
    id: 3,
    title: "Sermon on the Mount",
    description: "Jesus' core teachings unpacked",
    sermonCount: 10,
    latestSermon: "The Beatitudes",
    color: "from-green-500 to-green-600",
    icon: MessageSquare
  }
];

function BookIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
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

export default function SermonsPage() {
  const [sortBy, setSortBy] = useState('newest');
  
  return (
    <div className="p-6">
   

      {/* Sermons Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Recent Sermons</h2>
          <p className="text-gray-600">Biblical teachings and messages from our pastors</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="newest">Newest First</option>
            <option value="popular">Most Popular</option>
            <option value="oldest">Oldest First</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
          <button className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filter
          </button>
        </div>
      </div>

      {/* Sermons Grid */}
      <div className="grid grid-cols-1 gap-9 md:gap-8">
        {sermons.map((sermon) => {
          const hasVideo = !!sermon.videoId;
          
          return ( 
            <div key={sermon.id} className=" border-b border-gray-400 overflow-hidden  transition-all duration-300">
              <div className="pb-8 pt-4">
                <div className={`${hasVideo ? 'flex flex-col lg:flex-row gap-6' : ''}`}>
                  {/* Video/Thumbnail Section  */}
                  {hasVideo && (
                    <div className="lg:w-2/5">
                      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
                        <iframe
                          src={`https://www.youtube.com/embed/${sermon.videoId}`}
                          className="absolute top-0 left-0 w-full h-full"
                          title={`${sermon.title} - Sermon Video`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                 
                    </div>
                  )}
                  
                  {/* Content Section */}
                  <div className={`${hasVideo ? 'lg:w-3/5' : ''}`}>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {sermon.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {sermon.series && (
                        <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full">
                          {sermon.series}
                        </span>
                      )}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                      <Link href={`/sermon/${sermon.slug}`}>
                        {sermon.title}
                      </Link>
                    </h3>
                    
                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {sermon.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {sermon.speaker}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {sermon.location}
                      </div>
                    </div>
                    
                    {/* Excerpt */}
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {sermon.excerpt}
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                      {hasVideo ? (
                        <>
                          <Link 
                            href={`/sermon/${sermon.slug}`}
                            className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer"
                          >
                            <PlayCircle className="w-4 h-4" />
                            Watch Sermon
                          </Link>
                        
                        </>
                      ) : (
                        <>
                          <Link 
                            href={`/sermon/${sermon.slug}`}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-sm text-white rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer"
                          >
                            <PlayCircle className="w-4 h-4" />
                            Read Sermon
                          </Link>
                       
                        </>
                      )}
                      <Link 
                        href={`/sermon/${sermon.slug}`}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        Read Transcript
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-gray-600">
            Showing 1-6 of {sermons.length}+ sermons
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
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              ))}
              <span className="px-2 py-1">...</span>
              <button className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
                25
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

