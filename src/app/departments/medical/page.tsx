import Image from 'next/image';
import { 
  Stethoscope, 
  UserCog, 
  Languages, 
  GraduationCap, 
  HardHat, 
  Camera,
  Mail,
  Phone,
  Globe,
  Target,
  Users,
  Heart,
  Calendar,
  MapPin,
  Activity,
  Shield,
  Award,
  MessageSquare,
  AlertCircle
} from 'lucide-react';

export default function MedicalVolunteersPage() {
  const volunteerRoles = [
    { 
      role: 'Doctors', 
      description: 'Medical professionals providing diagnosis and treatment', 
      icon: Stethoscope 
    },
    { 
      role: 'Caregivers', 
      description: 'Nurses, Lab Assistants, Chemists, Health Officers', 
      icon: UserCog 
    },
    { 
      role: 'Interpreters', 
      description: 'Local dialects, French, Spanish, Chinese, etc.', 
      icon: Languages 
    },
    { 
      role: 'College Students', 
      description: 'Student volunteers for various support roles', 
      icon: GraduationCap 
    },
    { 
      role: 'Physical Workers', 
      description: 'Logistics and camp setup support', 
      icon: HardHat 
    },
    { 
      role: 'Media Team', 
      description: 'Photo journalists, videographers, news coverage', 
      icon: Camera 
    },
  ];

  const upcomingCamps = [
    { location: 'Baba Dogo, Nairobi', date: 'Monthly', focus: 'General Health Checkup' },
    { location: 'Kibera Community', date: 'Quarterly', focus: 'Vaccination Program' },
    { location: 'Rural Western Kenya', date: 'Bi-Annual', focus: 'Mobile Clinic' },
    { location: 'Coastal Region', date: 'Annual', focus: 'Malaria Prevention' },
  ];

  return (
    <div className="p-8">
      {/* Hero Section */}
      <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Good News Medical Volunteers
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Providing medical treatment and health education to underserved communities across Kenya through humanitarian volunteer initiatives.
          </p>
        
      </div>

      <div className="grid grid-cols-1 gap-4">
        {/* Main Content */}
        <div>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-2 h-6 bg-blue-600 mr-3 rounded"></span>
              About GNMV
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Good News Medical Volunteers (GNMV) is a humanitarian volunteer initiative dedicated to providing medical treatment and health education to underserved individuals across Kenya, particularly those suffering from untreated diseases or affected by natural disasters.
              </p>
            </div>
          </section>

          {/* Main Image */}
          <div className="mb-8">
            <div className="relative w-full h-120 rounded-xl overflow-hidden shadow-md">
              <Image
                src="/mbc/volunteer.jpg"
                alt="Health Cabinet Secretary Dr. Cleopha Mailu visiting GNMV medical camp at Baba Dogo"
                fill
                className="object-cover hover:scale-103 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="text-center text-gray-600 italic mt-3 text-sm">
              Health Cabinet Secretary Dr. Cleopha Mailu visiting GNMV medical camp at Baba Dogo
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-2 h-6 bg-blue-600 mr-3 rounded"></span>
              Our Mission & Purpose
            </h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-gray-800">Primary Goals</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Prevent and treat diseases in areas without readily available medical treatment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Provide spiritual fellowship during medical camps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Spread life-loving activities and community support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Enhance national prestige through international humanitarian relief work</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Side Content */}
        <div>
         
          {/* Additional Images */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="relative h-60 rounded-lg overflow-hidden">
              <Image
                src="/mbc/vaccine.jpg"
                alt="GNMV vaccine program"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative h-60 rounded-lg overflow-hidden">
              <Image
                src="/mbc/clinic.jpg"
                alt="GNMV clinic operations"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>

          <section className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-gray-800">Contact GNMV Kenya</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Phone className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <a href="tel:+254720101492" className="text-gray-700 hover:text-blue-700 block">+254 720 101 492</a>
                  <a href="tel:+254722140280" className="text-gray-700 hover:text-blue-700 block">+254 722 140 280</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Mail className="w-4 h-4 text-blue-600" />
                </div>
                <a href="mailto:gnmvkenya@gmail.com" className="text-gray-700 hover:text-blue-700">gnmvkenya@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Globe className="w-4 h-4 text-blue-600" />
                </div>
                <a href="https://facebook.com/GNMVKenya" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-700">
                  @GNMVKenya
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

