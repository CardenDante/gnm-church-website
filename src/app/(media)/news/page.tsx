import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Tag, ArrowRight, Users, Church } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: "Fungua Moyo Kenya Church Deacons and Deaconesses meet for 2nd Workshop",
    page: "/news/fungua-moyo-workshop",
    date: "Mar 03, 2019",
    categories: ["Local News", "Workshop"],
    excerpt: "When we do not consent 100% to the word of God, Satan comes in and interferes with us. True faith requires complete surrender to God's word.",
    imageUrl: "/news/fungua-moyo-workshop.jpg"
  },
  {
    id: 2,
    title: "More Than 90 Sisters Get Together For Unique Fellowship",
    page: "/news/sisters-fellowship",
    date: "Feb 22, 2019",
    categories: ["Local News", "Fellowship"],
    excerpt: "Proper mindset is to forsake yourself so that when difficulties come your way, you cannot help but rely on God completely.",
    imageUrl: "/news/sisters-fellowship.jpg"
  },
  {
    id: 3,
    title: "1st Kenya Church Leaders Workshop",
    page: "/news/church-leaders-workshop",
    date: "May 01, 2018",
    categories: ["Workshop", "Leadership"],
    excerpt: "This year marks the 24th year since the establishment of GNM Kenya and the 1st Kenya Church Leaders Workshop.",
    imageUrl: "/news/church-leaders-workshop.jpg"
  },
  {
    id: 4,
    title: "Kenya Easter Bible Retreat",
    page: "/news/easter-bible-retreat",
    date: "Apr 24, 2018",
    categories: ["Retreat", "Local News"],
    excerpt: "With the Theme 'Let's Return To The Bible', focusing on the parable of the prodigal son and God's unconditional love.",
    imageUrl: "/news/easter-retreat.jpg"
  },
  {
    id: 5,
    title: "True reformation comes by changing the thinking of inmates",
    page: "/news/prison-ministry-reformation",
    date: "Jan 29, 2018",
    categories: ["Prison Ministry", "Local News"],
    excerpt: "G.K Prison Kitengela becomes the third correctional facility where Good News Mission brings spiritual transformation.",
    imageUrl: "/news/prison-ministry.jpg"
  }
];

export default function NewsPage() {
  return (
    <>
      {/* News Grid */}
      <div className="space-y-8">
        {newsArticles.map((article) => (
          <article 
            key={article.id} 
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-200"
          >
            {/* Mobile Layout */}
            <div className="block lg:hidden">
              <div className="relative h-64 w-full">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              
              <div className="p-6">
                <NewsContent article={article} />
              </div>
            </div>
            
            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-6 p-6">
              {/* Image Column  */}
              <div className="relative h-64 lg:h-full rounded-lg overflow-hidden">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#0477BF] text-white px-3 py-1 rounded-full text-sm font-medium">
                    News
                  </span>
                </div>
              </div>
              
              {/* Content Column  */}
              <div className="lg:col-span-2">
                <NewsContent article={article} />
              </div>
            </div>
          </article>
        ))}
      </div>

    </>
  );
}

function NewsContent({ article }: { article: typeof newsArticles[0] }) {
  return (
    <div className="h-full flex flex-col">
      {/* Date */}
      <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
        <Calendar className="w-4 h-4" />
        {article.date}
      </div>
      
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-3">
        <Link 
          href={article.page}
          className="hover:text-[#0477BF] transition-colors"
        >
          {article.title}
        </Link>
      </h2>
      
      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-4">
        {article.categories.map((category, index) => (
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
      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
        {article.excerpt}
      </p>
      
      {/* Read More Link */}
      <div className="pt-4 border-t border-gray-100">
        <Link 
          href={article.page}
          className="inline-flex items-center text-[#0477BF] hover:text-[#0A37BF] font-medium group/link"
        >
          Read full article
          <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

