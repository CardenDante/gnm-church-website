'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, BookOpen, Coffee, Eye, MessageSquare, Bookmark, Heart, User, Tag, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Even though I believed in Jesus I had sin in my heart.",
    page: "/blog/believed-jesus-but-had-sin",
    date: "Feb 21, 2019",
    categories: ["Testimony", "Salvation", "Spiritual Journey"],
    excerpt: "I thought that I was going to hell. It's not because I didn't believe in Jesus but even though I believed, I still had sin in my heart. This personal testimony explores the journey from religious belief to true spiritual freedom.",
    imageUrl: "/blog/sin-in-heart.jpg",
    readTime: "5 min read",
    author: "Anonymous Believer",
    views: "3,245",
    comments: "42",
    likes: "189",
    featured: true,
    mood: "reflective"
  },
  {
    id: 2,
    title: "The Courage of The Earth Worm",
    page: "/blog/courage-earth-worm",
    date: "Apr 20, 2018",
    categories: ["Illustration", "Faith", "Courage"],
    excerpt: "Picture a worm that is about to cross a busy highway. How long do you think it will take to cross? This simple illustration beautifully captures the essence of spiritual courage and faith in the face of overwhelming obstacles.",
    imageUrl: "/blog/earth-worm.jpg",
    readTime: "4 min read",
    author: "David Mwangi",
    views: "2,876",
    comments: "35",
    likes: "156",
    mood: "inspirational"
  },
  {
    id: 3,
    title: "Uniting Our Heart With the Word of God",
    page: "/blog/uniting-heart-with-god-word",
    date: "Apr 16, 2018",
    categories: ["Spiritual Growth", "Bible Study", "Heart Condition"],
    excerpt: "The person who is able to unite his heart with the word of God receives blessings and abundance in their spiritual life. This article explores practical ways to align our hearts with biblical truth for deeper spiritual transformation.",
    imageUrl: "/blog/uniting-heart.jpg",
    readTime: "6 min read",
    author: "Pastor Yohan Kim",
    views: "4,210",
    comments: "58",
    likes: "245",
    featured: true,
    mood: "teaching"
  },
  {
    id: 4,
    title: "Was Nichodemus Born Again?",
    page: "/blog/nichodemus-born-again",
    date: "Mar 31, 2018",
    categories: ["Doctrine", "Salvation", "Biblical Study"],
    excerpt: "Giving offering, tithing or doing works for God does not give assurance of salvation. Being born again requires spiritual rebirth. This study examines the story of Nichodemus to understand what true regeneration really means.",
    imageUrl: "/blog/nichodemus.jpg",
    readTime: "7 min read",
    author: "Grace Wambui",
    views: "3,987",
    comments: "47",
    likes: "198",
    mood: "academic"
  },
  {
    id: 5,
    title: "Abraham the Father of Faith",
    page: "/blog/abraham-father-of-faith",
    date: "Mar 29, 2018",
    categories: ["Biblical Character", "Faith", "Obedience"],
    excerpt: "People who have not reached their end cannot receive guidance until they surrender completely to God. Through Abraham's story, we learn about the journey of faith that requires complete trust and obedience to divine direction.",
    imageUrl: "/blog/abraham-faith.jpg",
    readTime: "5 min read",
    author: "John Kamau",
    views: "2,543",
    comments: "29",
    likes: "134",
    mood: "historical"
  },
  {
    id: 6,
    title: "The Kenya Churches United Easter Bible Conference",
    page: "/blog/kenya-easter-bible-conference",
    date: "Mar 28, 2018",
    categories: ["Conference", "Events", "Community"],
    excerpt: "The Kenya churches United Easter Bible Conference was organized to deepen understanding of the resurrection power. This report shares insights and testimonies from this significant gathering of believers across the nation.",
    imageUrl: "/blog/easter-conference.jpg",
    readTime: "4 min read",
    author: "Events Team",
    views: "1,876",
    comments: "23",
    likes: "98",
    mood: "community"
  }
];

export default function BlogPage() {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  return (
    <div className="p-6">
      {/* Blog Stats & Filter Bar */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Latest Articles</h2>
            <p className="text-gray-600">Spiritual insights and biblical teachings</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="all">All Topics</option>
              <option value="testimony">Testimonies</option>
              <option value="teaching">Teachings</option>
              <option value="study">Bible Studies</option>
              <option value="reflection">Reflections</option>
            </select>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="latest">Latest First</option>
              <option value="popular">Most Popular</option>
              <option value="featured">Featured</option>
              <option value="reading">Reading Time</option>
            </select>
          </div>
        </div>
       
      </div>

      {/* Blog Grid  */}
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article 
            key={post.id} 
            className={`
               border-b border-purple-700 overflow-hidden  transition-all duration-300
              ${post.featured ? 'border-purple-300' : 'border-gray-200'}
            `}
          >
            <div className="pb-6 pt-6">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Image  */}
                <div className="lg:w-2/5">
                  <div className="relative h-64 rounded-xl overflow-hidden group">
                    <Image
                      src={post.imageUrl} 
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-102"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                   
               
                  </div>
                  
                  {/* Quick Stats */}
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-center gap-1 text-gray-600">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm font-medium">{post.views}</span>
                      </div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-center gap-1 text-gray-600">
                        <MessageSquare className="w-4 h-4" />
                        <span className="text-sm font-medium">{post.comments}</span>
                      </div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-center gap-1 text-gray-600">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm font-medium">{post.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="lg:w-3/5">
                  {/* Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <User className="w-4 h-4" />
                        <span className="text-sm">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{post.readTime}</span>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-purple-600 transition-colors">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">
                    <Link href={post.page} className="hover:text-purple-600 transition-colors group/title">
                      {post.title}
                      <span className="inline-block ml-2 opacity-0 group-hover/title:opacity-100 transition-opacity">
                        <ArrowRight className="w-5 h-5 inline" />
                      </span>
                    </Link>
                  </h3>
                  
                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.categories.map((category, index) => (
                      <span 
                        key={index}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-xs font-medium border border-purple-200"
                      >
                        <Tag className="w-3 h-3" />
                        {category}
                      </span>
                    ))}
                  </div>
                  
                  {/* Excerpt */}
                  <div className="mb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <Link 
                        href={post.page}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-medium"
                      >
                        <BookOpen className="w-5 h-5" />
                        Read Article
                      </Link>
                      <button className="px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        Save for Later
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                        <MessageSquare className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-green-500 transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-gray-600">
            Showing 1-{blogPosts.length} of 300+ articles
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              ← Previous
            </button>
            <div className="flex items-center space-x-1">
              <button className="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm rounded-lg">
                1
              </button>
              {[2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  {page}
                </button>
              ))}
              <span className="px-2 py-1">...</span>
              <button className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
                15
              </button>
            </div>
            <button className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

