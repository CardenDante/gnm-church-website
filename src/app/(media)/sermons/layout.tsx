import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Good News Mission - Sermons',
  description: 'Biblical teachings and messages from Good News Mission',
};

export default function SermonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="head_title_area text-center py-16 bg-gray-50 border-b border-gray-200">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
          Sermons
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-4">
          Biblical Teachings and Messages
        </p>
        <div className="w-24 h-1 bg-[#0477BF] mx-auto"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </div>
  );
}
