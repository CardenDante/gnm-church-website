import Image from 'next/image';
import Link from 'next/link';
import { 
  Mail, Phone, MapPin, Clock, Send, Globe, 
  Facebook, Youtube, Instagram, Twitter,
  User, MessageSquare, Building, ExternalLink,
  Heart, GraduationCap, Radio, School, Users,
  BookOpen, Cross, Shield
} from 'lucide-react';
import ContactForm from '@/components//forms/ContactForm';

export default function ContactPage() {
  const contacts = [
    { 
      name: "Guidance and Counseling Office", 
      person: "Wycliffe Ayoki", 
      image: "wycliffe.jpg", 
      phone: "0727620930", 
      email: "info@goodnews.or.ke", 
      website: ""
    },
    { 
      name: "Church Director", 
      person: "Pastor Nelson Ochuoga", 
      image: "nelson.jpg",
      phone: "0725972889", 
      email: "info@goodnews.or.ke", 
      website: ""
    },
    { 
      name: "Youth Ministry", 
      person: "Evans Mutiga", 
      image: "evans.jpg", 
      phone: "0711 610 686", 
      email: "info@iyfkenya.org", 
      website: "www.iyfkenya.org"
    },
    { 
      name: "Mindset Education", 
      person: "Henry Maina", 
      image: "henry.jpg", 
      phone: "0720101492", 
      email: "mineducation@iyfkenya.org", 
      website: "www.iyfkenya.org/mineducation"
    },
    { 
      name: "Good News Broadcasting System", 
      person: "Benjamin Muthoka", 
      image: "benjamin.jpg", 
      phone: "0723370821", 
      email: "info@gbskenya.com", 
      website: "www.gbskenya.com"
    },
    { 
      name: "Mahanaim International High School", 
      person: "Lynnete Baraka", 
      image: "lynnete.jpg", 
      phone: "0725249692", 
      email: "info@mihs.ac.ke", 
      website: "mihs.ac.ke"
    },
    { 
      name: "Mahanaim Educational Institute", 
      person: "Mrs. Mercy Saidi", 
      image: "mercy.jpg", 
      phone: "0726532729", 
      email: "info@mei.ac.ke", 
      website: "www.mahanaim.ac.ke"
    },
    { 
      name: "Christian Leaders Fellowship", 
      person: "Pastor Francis Mwangi", 
      image: "francis.jpg", 
      phone: "0712135123", 
      email: "info@clfkenya.org", 
      website: "www.clfkenya.org"
    },
    { 
      name: "Church Administrator", 
      person: "Elder Aeneas Wanyonyi", 
      image: "aeneas.jpg",
      phone: "0722344358", 
      email: "info@goodnews.or.ke", 
      website: ""
    },
    { 
      name: "Office of the Senior Pastor", 
      person: "Pastor Yohan Kim", 
      image: "yohan.jpg", 
      phone: "0704333111", 
      email: "chairman@goodnews.or.ke", 
      website: "www.goodnews.or.ke"
    },
  ];

  const socialLinks = [
    { platform: "Facebook", icon: Facebook, url: "https://facebook.com/goodnewsor" },
    { platform: "YouTube", icon: Youtube, url: "https://youtube.com/goodnewsor" },
    { platform: "Instagram", icon: Instagram, url: "https://instagram.com/goodnewsor" },
    { platform: "Twitter", icon: Twitter, url: "https://twitter.com/goodnewsor" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <main className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get in touch with our ministry leaders and departments. We're here to help you connect with God and community.
          </p>
          <div className="w-32 h-1.5 bg-gradient-to-r from-[#0477BF] to-[#0496C7] mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="bg-white rounded-2xl shadow-md p-6 ">
            <h2 className="text-2xl font-bold text-[#0477BF] mb-6">
              Ministry Contacts
            </h2>
            
            <div className="space-y-4 overflow-y-auto pr-2">
              {contacts.map((contact, index) => (
                <div 
                  key={index} 
                  className="p-4 border border-gray-200 rounded-xl hover:border-[#0477BF] hover:shadow transition-all duration-300 bg-gradient-to-r from-white to-gray-50"
                >
                  <div className="flex items-start gap-4">
                    {/* Image */}
                    <div className="flex-shrink-0">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#0477BF]">
                        <Image
                          src={`/contact/${contact.image}`}
                          alt={contact.person}
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="64px"
                          className="rounded-full"
                        />
                      </div>
                    </div>
                    
                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 text-lg">{contact.person}</h3>
                      <p className="text-[#0477BF] font-medium text-sm mb-2">{contact.name}</p>
                      
                      <div className="space-y-1">
                        <p className="text-gray-700 text-sm">{contact.phone}</p>
                        <a 
                          href={`mailto:${contact.email}`} 
                          className="text-gray-700 hover:text-[#0477BF] transition-colors text-sm block truncate"
                        >
                          {contact.email}
                        </a>
                        {contact.website && (
                          <a 
                            href={`https://${contact.website}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-[#0477BF] transition-colors text-sm block truncate"
                          >
                            {contact.website}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Nairobi Main Church */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#0477BF] mb-2">Nairobi Main Church</h2>
                  <p className="text-gray-600">Kenya Headquarters</p>
                </div>
                <div className="bg-[#0477BF] text-white p-3 rounded-full">
                  <Building className="w-6 h-6" />
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0477BF] mt-1" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p>Thika Road, Behind Safari Park Kenya</p>
                    <p className="text-sm text-gray-500">P.O Box 57329 - 00200, Nairobi</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#0477BF] mt-1" />
                  <div>
                    <p className="font-semibold">Phone Number</p>
                    <p className="text-lg font-medium">0704 333 111</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#0477BF] mt-1" />
                  <div>
                    <p className="font-semibold">Service Times</p>
                    <p>Sunday: 9:00 AM - 12:00 PM</p>
                    <p>Wednesday: 6:00 PM - 8:00 PM</p>
                  </div>
                </div>
              </div>
              
              <Link 
                href="/branches"
                className="mt-6 inline-flex items-center justify-center w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold py-3 px-6 rounded-lg hover:from-gray-900 hover:to-gray-800 transition-all duration-300 group"
              >
                View All Branch Locations
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-[#0477BF] mb-6 flex items-center gap-2">
                <Mail className="w-6 h-6" />
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-[#0477BF] mb-6 flex items-center gap-2">
                <Globe className="w-6 h-6" />
                Connect With Us
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-4 border-2 border-gray-100 rounded-xl hover:border-[#0477BF] hover:bg-blue-50 transition-all duration-300 group"
                    >
                      <Icon className="w-6 h-6 text-gray-700 mb-2 group-hover:text-[#0477BF]" />
                      <span className="font-medium text-gray-700 group-hover:text-[#0477BF]">{social.platform}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

