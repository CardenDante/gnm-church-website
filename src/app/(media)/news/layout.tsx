import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Latest News & Updates - Good News Mission',
  description: 'Stay updated with the latest events, activities, and ministry updates from Good News Mission Kenya.',
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="head_title_area text-center py-16 bg-gray-50 border-b border-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
         News & Updates
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
          Stay informed about church events, mission activities, and spiritual developments from Good News Mission Kenya
        </p>
        <div className="w-24 h-1 bg-[#0477BF] mx-auto"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        {children}
      </div>
    </div>
  );
}