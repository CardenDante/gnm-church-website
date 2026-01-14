// app/(media)/blog/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Tag, ArrowRight, ChevronLeft, ChevronRight, BookOpen, Feather } from 'lucide-react';

// Blog posts data - each with its own page
const blogPosts = [
  {
    id: 1,
    title: "Even though I believed in Jesus I had sin in my heart.",
    page: "/blog/believed-jesus-but-had-sin",
    date: "Feb 21, 2019",
    categories: ["Testimony", "Salvation"],
    excerpt: "I thought that I was going to hell. It's not because I didn't believe in Jesus but even though I believed, I still had sin in my heart.",
    imageUrl: "/blog/sin-in-heart.jpg",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Courage of The Earth Worm",
    page: "/blog/courage-earth-worm",
    date: "Apr 20, 2018",
    categories: ["Illustration", "Faith"],
    excerpt: "Picture a worm that is about to cross a busy highway. How long do you think it will take to cross? This illustrates spiritual courage.",
    imageUrl: "/blog/earth-worm.jpg",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Uniting Our Heart With the Word of God",
    page: "/blog/uniting-heart-with-god-word",
    date: "Apr 16, 2018",
    categories: ["Spiritual Growth", "Bible"],
    excerpt: "The person who is able to unite his heart with the word of God receives blessings and abundance in their spiritual life.",
    imageUrl: "/blog/uniting-heart.jpg",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Was Nichodemus Born Again?",
    page: "/blog/nichodemus-born-again",
    date: "Mar 31, 2018",
    categories: ["Doctrine", "Salvation"],
    excerpt: "Giving offering, tithing or doing works for God does not give assurance of salvation. Being born again requires spiritual rebirth.",
    imageUrl: "/blog/nichodemus.jpg",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Abraham the Father of Faith",
    page: "/blog/abraham-father-of-faith",
    date: "Mar 29, 2018",
    categories: ["Biblical Character", "Faith"],
    excerpt: "People who have not reached their end cannot receive guidance until they surrender completely to God.",
    imageUrl: "/blog/abraham-faith.jpg",
    readTime: "5 min read"
  },
  {
    id: 6,
    title: "The Kenya Churches United Easter Bible Conference",
    page: "/blog/kenya-easter-bible-conference",
    date: "Mar 28, 2018",
    categories: ["Conference", "Events"],
    excerpt: "The Kenya churches United Easter Bible Conference was organized to deepen understanding of the resurrection.",
    imageUrl: "/blog/easter-conference.jpg",
    readTime: "4 min read"
  },
  {
    id: 7,
    title: "Speaking Contrary",
    page: "/blog/speaking-contrary",
    date: "Nov 26, 2017",
    categories: ["Communication", "Ministry"],
    excerpt: "When I was starting a Church in the countryside, this story illustrates how speaking contrary to faith affects ministry.",
    imageUrl: "/blog/speaking-contrary.jpg",
    readTime: "6 min read"
  },
  {
    id: 8,
    title: "Our Right Heart",
    page: "/blog/our-right-heart",
    date: "Nov 14, 2017",
    categories: ["Heart Condition", "Spiritual Life"],
    excerpt: "Animals were created before man. Therefore, man should learn from animals about having the right heart attitude.",
    imageUrl: "/blog/right-heart.jpg",
    readTime: "5 min read"
  },
  {
    id: 9,
    title: "God Faithfully Fulfilled All of His Words",
    page: "/blog/god-faithfully-fulfilled-words",
    date: "Nov 13, 2017",
    categories: ["Faithfulness", "Promises"],
    excerpt: "When Noah was building the ark, by all appearances he was alone, but God was faithful to fulfill all His promises.",
    imageUrl: "/blog/god-faithful.jpg",
    readTime: "5 min read"
  }
];

export default function BlogPage() {
  const currentPage = 1;
  const totalPages = 3;
  const postsPerPage = 3;
  
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <>
      

      {/* Blog Posts  */}
      <div className="space-y-8 mb-12">
        {currentPosts.map((post) => (
          <article 
            key={post.id} 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
              {/* Image */}
              <div className="lg:col-span-1 relative h-64 lg:h-full rounded-lg overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
               
              </div>
              
              {/* Content */}
              <div className="lg:col-span-2">
                <div className="h-full flex flex-col">
                  {/* Date and Read Time */}
                  <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    <Link 
                      href={post.page}
                      className="hover:text-[#0477BF] transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  
                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.categories.map((category, index) => (
                      <span 
                        key={index}
                        className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                      >
                        <Tag className="w-3 h-3" />
                        {category}
                      </span>
                    ))}
                  </div>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  {/* Read More Link */}
                  <div className="pt-4 border-t border-gray-100">
                    <Link 
                      href={post.page}
                      className="inline-flex items-center text-[#0477BF] hover:text-[#0A37BF] font-medium group/link"
                    >
                      Continue reading
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>



      {/* Pagination */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-center items-center space-x-4">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
            Previous
          </button>
          
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`px-3 py-1 text-sm rounded-md ${
                  page === 1
                    ? 'bg-[#0477BF] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            Next
          </button>
        </div>
        
        <p className="text-center text-gray-500 text-sm mt-4">
          Page 1 of 5
        </p>
      </div>

    </>
  );
}

