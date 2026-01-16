import React from 'react';
import { 
  Tent,
  Brain,
  Languages,
  Globe,
  Handshake,
  Activity,
  Target,
  RefreshCw,
  GitMerge,
  Calendar,
  MapPin, 
  Users,
  Network,
  ArrowRight,
  Award,
  BookOpen,
  Heart,
  Star
} from 'lucide-react';

export default function IYFPage() {
  const iyfPrograms = [
    { 
      program: 'Youth Camps', 
      description: 'Leadership and character development camps', 
      icon: Tent 
    },
    { 
      program: 'Mind Education', 
      description: 'Mental and emotional development programs', 
      icon: Brain 
    },
    { 
      program: 'Language Classes', 
      description: 'International language learning opportunities', 
      icon: Languages 
    },
    { 
      program: 'Cultural Exchange', 
      description: 'Global cultural understanding programs', 
      icon: Globe 
    },
    { 
      program: 'Volunteer Projects', 
      description: 'Community service initiatives', 
      icon: Handshake 
    },
    { 
      program: 'Sports & Activities', 
      description: 'Physical and recreational programs', 
      icon: Activity 
    },
  ];

  const upcomingEvents = [
    { event: 'Youth Leadership Summit', date: 'Monthly', location: 'Nairobi HQ' },
    { event: 'Regional Youth Camps', date: 'Quarterly', location: 'Various Counties' },
    { event: 'International Exchange', date: 'Annual', location: 'Global' },
    { event: 'Community Service Day', date: 'Monthly', location: 'Local Communities' },
  ];

  return (
    <div className="p-8">
      {/* Hero Section */}
      <div className="mb-10">
        <div className=" py-8 border-b border-blue-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="w-6 h-6 text-blue-700" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">
              International Youth Fellowship
            </h1>
          </div>
          <p className="text-lg text-gray-600">
            Raising leaders with global insight through youth education, activities, and practical solutions to global challenges.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {/* Main Content */}
        <div>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <div className="w-2 h-6 bg-blue-700 rounded"></div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-700" />
                About IYF
              </div>
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Established in 2001 as a worldwide youth organization and international NGO based on Christian values, IYF focuses on developing young leaders through comprehensive education, meaningful activities, and providing realistic solutions to problems in our global village.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <div className="w-2 h-6 bg-blue-700 rounded"></div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-blue-700" />
                Our Core Values
              </div>
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Target className="w-5 h-5 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-700">CHALLENGE</h3>
                </div>
                <p className="text-gray-700">
                  A true challenge to overcome one's limitations and experience endless possibilities. We push boundaries and encourage youth to reach beyond their perceived limits.
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <RefreshCw className="w-5 h-5 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-700">CHANGE</h3>
                </div>
                <p className="text-gray-700">
                  A true change of life that begins from one's heart and then brings change to the world. We believe personal transformation leads to societal transformation.
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <GitMerge className="w-5 h-5 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-700">COHESION</h3>
                </div>
                <p className="text-gray-700">
                  A true cohesive mind that transcends ethnicity, nationality, language, and religion. We build bridges of understanding across all divides.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Side Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 my-8">
          <section className="">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <div className="w-2 h-6 bg-blue-700 rounded"></div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-700" />
                Programs & Activities
              </div>
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {iyfPrograms.map((program, index) => {
                const Icon = program.icon;
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-md transition-all group">
                    <div className="p-2 bg-blue-100 rounded-lg w-fit mb-2 group-hover:bg-blue-200 transition-colors">
                      <Icon className="w-5 h-5 text-blue-700" />
                    </div>
                    <h3 className="font-bold text-gray-800 text-sm mb-1">{program.program}</h3>
                    <p className="text-xs text-gray-600">{program.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

       
          <section className="">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <div className="w-2 h-6 bg-blue-700 rounded"></div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-700" />
                Join IYF Kenya
              </div>
            </h2>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-bold text-gray-800 mb-3">Membership Benefits</h3>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-700" />
                  <span>Leadership training and development</span>
                </li>
                <li className="flex items-center gap-2">
                  <Network className="w-4 h-4 text-blue-700" />
                  <span>International networking opportunities</span>
                </li>
                <li className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-blue-700" />
                  <span>Skill-building workshops</span>
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-blue-700" />
                  <span>Community service projects</span>
                </li>
              </ul>
              <a 
                href="https://iyfkenya.org" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-blue-700 text-white text-center py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
              >
                Become a Member
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

