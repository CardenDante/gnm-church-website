import { Facebook, Twitter, Calendar, MapPin, User } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Power of Faith in Difficult Times - Good News Mission',
  description: 'A powerful sermon by Pastor Yohan Kim on how faith can sustain us through life\'s most challenging moments.',
};

export default function PowerOfFaithPage() {
  const sermon = {
    title: "The Power of Faith in Difficult Times",
    speaker: "Pastor Yohan Kim",
    location: "Good News Mission Nairobi",
    date: "January 15, 2023",
    videoId: "dQw4w9WgXcQ", 
    description: "In this sermon, we explore how faith can sustain us through life's most challenging moments. Through biblical examples and personal testimony, we learn how to trust God's plan even when we don't understand our circumstances."
  };

 
  return (
    <div className="min-h-screen ">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8  py-8">
        
        {/* Video Player Section */}
        <div className="  overflow-hidden mb-8">
          {/* Video Container */}
          <div className="relative pb-[56.25%] rounded-xl h-0 bg-gray-900">
            <iframe
              src={`https://www.youtube.com/embed/${sermon.videoId}?rel=0&modestbranding=1`}
              className="absolute top-0 left-0 w-full h-full"
              title={`${sermon.title} - Sermon Video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          
          {/* Video Info Overlay */}
          <div className="py-8 px-4">
            {/* Sermon Title */}
            <h1 className="text-3xl  font-bold text-gray-700 mb-6 leading-tight">
              {sermon.title}
            </h1>
            
            {/* Speaker, Location, and Date */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Speaker</p>
                  <p className="text-base font-semibold text-gray-900">{sermon.speaker}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-green-50 p-2 rounded-lg">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-base font-semibold text-gray-900">{sermon.location}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-purple-50 p-2 rounded-lg">
                  <Calendar className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="text-base font-semibold text-gray-900">{sermon.date}</p>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {sermon.description}
              </p>
            </div>
          </div>
        </div>
      
        
       
      </div>
    </div>
  );
}