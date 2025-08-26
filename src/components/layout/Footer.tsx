import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative bg-[#0A37BF] text-white">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/footer_image_map.png"
          alt="Map background"
          fill
          className="object-cover"
          priority={false}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Logo and Links */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <Image
                src="/logo.png"
                alt="Good News Mission Kenya"
                width={180}
                height={45}
                className="h-8 w-auto sm:h-10"
              />
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
                {/* <Link href="/terms" className="text-gray-200 hover:text-[#04D9C4] transition-colors duration-200 font-medium">
                  Terms of Use
                </Link>
                <Link href="/privacy" className="text-gray-200 hover:text-[#04D9C4] transition-colors duration-200 font-medium">
                  Privacy Policy
                </Link> */}
              </div>
            </div>
            
            {/* Copyright and Legal Notice */}
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <p className="font-semibold mb-2 text-[#04D9C4]">Copyright Legal Notice</p>
                <p className="leading-relaxed">All content on the Good News Mission website is the intellectual property of Good News Mission and belongs to the mission. Unauthorized reproduction and redistribution are prohibited.</p>
              </div>
              <p className="text-gray-400">&copy; {new Date().getFullYear()} Good News Mission. All Rights Reserved.</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#04D9C4]">Nairobi Church (Kenya HQs)</h3>
            <div className="text-sm text-gray-200 space-y-2 leading-relaxed">
              <p>Thika Road, Behind Safari Park Kenya</p>
              <p>P.O Box 57329 - 00200</p>
              <p className="flex items-center space-x-2">
                <svg className="h-4 w-4 text-[#04D9C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0704 333 111</span>
              </p>
              <p className="flex items-center space-x-2">
                <svg className="h-4 w-4 text-[#04D9C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@goodnews.or.ke</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;