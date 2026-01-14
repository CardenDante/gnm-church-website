import Image from 'next/image';
import { Calendar, User } from 'lucide-react';

const testimonies = [
  {
    id: 1,
    name: "Anonymous Believer",
    location: "Nairobi, Kenya",
    date: "March 15, 2023",
    excerpt: "I was very happy because the burden of sin and the condemnation in my heart was lifted away...",
    content: "I was very happy because the burden of sin and the condemnation in my heart was lifted away. For many years I carried this weight, but through the ministry at Good News Mission, I found true freedom in Christ. The message of grace transformed my understanding of God's love and forgiveness.",
    imageUrl: "/testimonies/testimony-1.jpg" // Assuming all have images now
  },
  {
    id: 2,
    name: "John Mwangi",
    location: "Kampla",
    date: "February 28, 2023",
    excerpt: "Through church I was led through the Bible and realized that the word was God Himself....",
    content: "Through church I was led through the Bible and realized that the word was God Himself. I had read the Bible before, but it was just religious text to me. Now I understand that through scripture, God speaks directly to us. This revelation has completely changed my spiritual life.",
    imageUrl: "/testimonies/john-mwangi.jpg"
  },
  {
    id: 3,
    name: "Pastor Samuel",
    location: "Good News Mission Nairobi",
    date: "January 30, 2023",
    excerpt: "I had that condition of heart that couldn't help but fail. In my ministry, my marriage and...",
    content: "I had that condition of heart that couldn't help but fail. In my ministry, my marriage and personal life, I struggled constantly. Despite being a pastor, I was battling with sin and failure. When I finally understood the true gospel of grace, everything changed. My ministry now flows from rest in Christ rather than striving.",
    imageUrl: "/testimonies/pastor-samuel.jpg"
  },
  {
    id: 4,
    name: "Grace Wambui",
    location: "Nairobi County",
    date: "December 10, 2022",
    excerpt: "In this case I had to tear my heart and reveal my wicked heart. I have been suffering f...",
    content: "In this case I had to tear my heart and reveal my wicked heart. I have been suffering from depression and anxiety for years, hiding behind a smile while crumbling inside. When I finally confessed my true condition and received God's unconditional love, the healing began. The chains of performance and fear were broken.",
    imageUrl: "/testimonies/grace-wambui.jpg"
  },
  {
    id: 5,
    name: "Margaret Kemunto Omundi",
    location: "Utawala, Nairobi County",
    date: "November 5, 2022",
    excerpt: "I am Margaret Kemunto Omundi from Utawala, Nairobi County, Kenya. I am 43 years old and a ...",
    content: "I am Margaret Kemunto Omundi from Utawala, Nairobi County, Kenya. I am 43 years old and a mother of three. My life was consumed by worry about my children's future and financial struggles. When I heard that Jesus had already borne all my burdens on the cross, I let go. Now I live in peace, trusting God's provision day by day.",
    imageUrl: "/testimonies/margaret-kemunto.jpg"
  }
];

export default function TestimoniesPage() {
  return (
    <div className="min-h-screen ">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    

        {/* Testimonies Grid */}
        <div className="space-y-10">
          {testimonies.map((testimony) => (
            <div 
              key={testimony.id} 
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-200"
            >
              {/* Mobile: Image above content */}
              <div className="block lg:hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={testimony.imageUrl}
                    alt={testimony.name}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                <div className="p-6">
                  <TestimonyContent testimony={testimony} />
                </div>
              </div>
              
              {/* Desktop*/}
              <div className="hidden lg:grid lg:grid-cols-3 gap-6 p-6">
                {/* Image Column */}
                <div className="relative h-64 lg:h-auto rounded-lg overflow-hidden">
                  <Image
                    src={testimony.imageUrl}
                    alt={testimony.name}
                    fill
                    className="object-cover transition-transform duration-300"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
                
                {/* Content Column  */}
                <div className="lg:col-span-2">
                  <TestimonyContent testimony={testimony} />
                </div>
              </div>
            </div>
          ))}
        </div>

   
      </div>
    </div>
  );
}

function TestimonyContent({ testimony }: { testimony: typeof testimonies[0] }) {
  return (
    <div className="h-full flex flex-col">
      {/* Testimony Header */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-4 mb-3">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-[#0477BF]" />
            <h2 className="text-xl font-bold text-gray-700">
              {testimony.name}
            </h2>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{testimony.date}</span>
          </div>
        </div>
        
        {/* Location */}
        <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-500 px-4 py-2 rounded-full text-xs font-medium mb-3">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {testimony.location}
        </div>
      </div>
      
      {/* Excerpt/Preview */}
      <div className="mb-4 flex-grow">
        <div className="relative pl-4">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#0477BF] rounded-full" />
          <p className="text-gray-700 text-lg leading-relaxed">
            {testimony.excerpt}
          </p>
        </div>
      </div>
      
      {/* Read Full Testimony Button */}
      <div className="pt-4 border-t border-gray-100">
        <button className="inline-flex items-center text-[#0477BF] hover:text-[#0A37BF] font-semibold group">
          <span className="mr-2">Read full testimony</span>
          <svg 
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

