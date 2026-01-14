import Link from 'next/link';


const sermons = [
  {
    id: 1,
    date: "January 15, 2023",
    title: "The Power of Faith in Difficult Times",
    excerpt: "In this sermon, we explore how faith can sustain us through life's most challenging moments. Through biblical examples and personal testimony, we learn how to trust God's plan even when we don't understand our circumstances.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    slug: "power-of-faith",
    speaker: "Pastor Yohan Kim",
    location: "Good News Mission Nairobi",
    videoId: "dQw4w9WgXcQ" 
  },
  {
    id: 2,
    date: "January 8, 2023",
    title: "Living a Life of Gratitude",
    excerpt: "This message focuses on cultivating a heart of thankfulness in all circumstances. We examine biblical principles of gratitude and how they transform our perspective on life.",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    slug: "living-gratitude",
    speaker: "Pastor John Smith",
    location: "Nairobi",
    videoId: "tc6fjy5ech" 
  },
  {
    id: 3,
    date: "January 1, 2023",
    title: "New Beginnings in Christ",
    excerpt: "As we start the new year, we explore what it means to have a fresh start in Christ. This sermon addresses letting go of the past and embracing God's new mercies each day.",
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    slug: "new-beginnings",
    speaker: "Pastor Yohan Kim",
    location: "Kampla",
    videoId: "abc123def45" 
  },
  {
    id: 4,
    date: "December 25, 2022",
    title: "The True Meaning of Christmas",
    excerpt: "Christmas Day message focusing on the incarnation of Christ and what it means for humanity. We move beyond the commercial aspects to the profound spiritual reality of God with us.",
    content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    slug: "true-meaning-christmas",
    speaker: "Pastor Mary Johnson",
    location: "Good News Mission Nairobi"
    // videoId omitted intentionally - some sermons don't have videos
  },
  {
    id: 5,
    date: "December 18, 2022",
    title: "Preparing Our Hearts for Christmas",
    excerpt: "Advent series part 4: How to prepare our hearts to receive Christ during the Christmas season. Practical and spiritual guidance for a meaningful celebration.",
    content: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    slug: "preparing-hearts-christmas",
    speaker: "Pastor Yohan Kim",
    location: "Nairobi",
    videoId: "xyz789pqr01"
  },
  {
    id: 6,
    date: "December 11, 2022",
    title: "The Hope of Advent",
    excerpt: "Advent series part 3: Exploring the theme of hope in the Christmas story. How the promise of Christ brings hope to a broken world.",
    content: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    slug: "hope-of-advent",
    speaker: "Pastor David Brown",
    location: "Kampla"
    // No video
  },
  {
    id: 7,
    date: "December 4, 2022",
    title: "Peace in a Troubled World",
    excerpt: "Advent series part 2: Finding true peace through Christ amidst life's storms. Biblical principles for experiencing God's peace that surpasses understanding.",
    content: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    slug: "peace-troubled-world",
    speaker: "Pastor Yohan Kim",
    location: "Good News Mission Nairobi",
    videoId: "lmn234opq56"
  },
  {
    id: 8,
    date: "November 27, 2022",
    title: "The Promise of Joy",
    excerpt: "Advent series part 1: Understanding the difference between happiness and the deep, abiding joy that comes from knowing Christ.",
    content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    slug: "promise-of-joy",
    speaker: "Pastor Sarah Williams",
    location: "Nairobi"
    // No video
  },
];

//  function to get YouTube embed URL
const getYouTubeEmbedUrl = (videoId: string | null | undefined) => {
  if (!videoId) return null;
  return `https://www.youtube.com/embed/${videoId}`;
};

export default function SermonsPage() {
  return (
    <div className=''>
      {/* Sermons Grid */}
      <div className="space-y-8 max-w-4xl mx-auto">
        {sermons.map((sermon) => {
          const hasVideo = !!sermon.videoId;
          
          return (
            <div key={sermon.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className={`p-6 ${hasVideo ? 'grid grid-cols-1 md:grid-cols-3 gap-6' : ''}`}>
                
                {/* Video Section*/}
                {hasVideo && sermon.videoId && (
                  <div className="md:col-span-1">
                    <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
                      <iframe
                        src={getYouTubeEmbedUrl(sermon.videoId) || ''}
                        className="absolute top-0 left-0 w-full h-full"
                        title={`${sermon.title} - Sermon Video`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}
                
                {/* Content Section */}
                <div className={`${hasVideo ? 'md:col-span-2' : ''}`}>
                  {/* Date */}
                  <div className="text-sm text-[#0477BF] font-medium mb-2">
                    {sermon.date}
                  </div>
                  
                  {/* Title  */}
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    <Link 
                      href={`/sermon/${sermon.slug}`}
                      className="hover:text-[#0477BF] transition-colors duration-200"
                    >
                      {sermon.title}
                    </Link>
                  </h2>
                  
                  {/* Speaker and Location */}
                  <div className="mb-4">
                    <div className="text-lg font-semibold text-gray-700">
                      {sermon.speaker}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {sermon.location}
                    </div>
                  </div>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {sermon.excerpt}
                  </p>
                  
                  {/* Read More Link */}
                  <div className="pt-4 border-t border-gray-100">
                    <Link 
                      href={`/sermon/${sermon.slug}`}
                      className="inline-flex items-center text-[#0477BF] hover:text-[#0A37BF] font-medium"
                    >
                      Read full sermon
                      <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
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
    </div>
  );
}

