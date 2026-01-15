import { 
  Tent,
  Brain,
  Languages,
  Globe,
  Handshake,
  Volleyball,
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
      icon: Volleyball 
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
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-cyan-100 rounded-lg">
              <Users className="w-6 h-6 text-cyan-600" />
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main Content */}
        <div>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <div className="w-2 h-6 bg-cyan-600 rounded"></div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-cyan-600" />
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
              <div className="w-2 h-6 bg-cyan-600 rounded"></div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-cyan-600" />
                Our Core Values
              </div>
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-cyan-100 rounded-lg">
                    <Target className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-700">CHALLENGE</h3>
                </div>
                <p className="text-gray-700">
                  A true challenge to overcome one's limitations and experience endless possibilities. We push boundaries and encourage youth to reach beyond their perceived limits.
                </p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <RefreshCw className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-700">CHANGE</h3>
                </div>
                <p className="text-gray-700">
                  A true change of life that begins from one's heart and then brings change to the world. We believe personal transformation leads to societal transformation.
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <GitMerge className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-purple-700">COHESION</h3>
                </div>
                <p className="text-gray-700">
                  A true cohesive mind that transcends ethnicity, nationality, language, and religion. We build bridges of understanding across all divides.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Side Content */}
        <div>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <div className="w-2 h-6 bg-cyan-600 rounded"></div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-600" />
                Programs & Activities
              </div>
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {iyfPrograms.map((program, index) => {
                const Icon = program.icon;
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-cyan-300 hover:shadow-md transition-all group">
                    <div className="p-2 bg-cyan-100 rounded-lg w-fit mb-2 group-hover:bg-cyan-200 transition-colors">
                      <Icon className="w-5 h-5 text-cyan-600" />
                    </div>
                    <h3 className="font-bold text-gray-800 text-sm mb-1">{program.program}</h3>
                    <p className="text-xs text-gray-600">{program.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <div className="w-2 h-6 bg-cyan-600 rounded"></div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cyan-600" />
                Upcoming Events
              </div>
            </h2>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-cyan-50 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyan-100 rounded-lg">
                      <MapPin className="w-4 h-4 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{event.event}</p>
                      <p className="text-sm text-gray-600">{event.location}</p>
                    </div>
                  </div>
                  <span className="bg-cyan-100 text-cyan-800 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {event.date}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <div className="w-2 h-6 bg-cyan-600 rounded"></div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-600" />
                Join IYF Kenya
              </div>
            </h2>
            <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200">
              <h3 className="font-bold text-gray-800 mb-3">Membership Benefits</h3>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-cyan-600" />
                  <span>Leadership training and development</span>
                </li>
                <li className="flex items-center gap-2">
                  <Network className="w-4 h-4 text-cyan-600" />
                  <span>International networking opportunities</span>
                </li>
                <li className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-cyan-600" />
                  <span>Skill-building workshops</span>
                </li>
                <li className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-cyan-600" />
                  <span>Community service projects</span>
                </li>
              </ul>
              <a 
                href="https://iyfkenya.org/join" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-cyan-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
              >
                Become a Member
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </section>

          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/20 rounded-lg">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">Global Network</h3>
            </div>
            <p className="text-cyan-100 mb-4 text-sm">
              Connect with youth from over 80 countries through our international programs and exchanges.
            </p>
            <a 
              href="https://iyfkenya.org" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-cyan-200 hover:text-white hover:underline"
            >
              Visit IYF Kenya Website
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

