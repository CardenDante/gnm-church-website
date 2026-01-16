import type { Metadata } from 'next';
import { Facebook, Twitter } from 'lucide-react';

// dynamic based on the sermon data
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // fetch the sermon data based on the slug
 
  return {
    title: 'Good News Mission - Sermon Details',
    description: 'Biblical teaching from Good News Mission',
  };
}

export default function SermonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://goodnewsmission.org';

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
        
        {/* Share Buttons - Server Component Version */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-gray-700 font-medium">Share this sermon:</span>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://goodnewsmission.org/sermons"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded-lg hover:bg-[#166FE5] transition-colors duration-200"
              >
                <Facebook size={18} />
                <span>Facebook</span>
              </a>
               
              <a
                href="https://x.com/intent/tweet?text=Check%20out%20this%20sermon%20from%20Good%20News%20Mission&url=https://goodnewsmission.org/sermons"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                <Twitter size={18} />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
