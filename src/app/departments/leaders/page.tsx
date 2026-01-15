import { 
  Church,
  Mic,
  BookOpen,
  Globe,
  Handshake,
  Crown,
  Target,
  Network,
  Shield,
  Award,
  Users,
  MessageSquare,
  MapPin,
  ArrowRight,
  Star,
  GraduationCap,
  Languages,
  Cross,
  Megaphone
} from 'lucide-react';

export default function CLFPage() {
  const fellowshipActivities = [
    { 
      activity: 'Monthly Pastors Gathering', 
      description: 'Fellowship and Bible study sessions', 
      icon: Church 
    },
    { 
      activity: 'Leadership Conferences', 
      description: 'Annual and regional conferences', 
      icon: Mic 
    },
    { 
      activity: 'Bible Seminars', 
      description: 'In-depth Scripture study sessions', 
      icon: BookOpen 
    },
    { 
      activity: 'Prayer Retreats', 
      description: 'Spiritual renewal retreats', 
      icon: Cross 
    },
    { 
      activity: 'Missions Coordination', 
      description: 'Joint mission planning and execution', 
      icon: Globe 
    },
    { 
      activity: 'Resource Sharing', 
      description: 'Ministry materials and support', 
      icon: Handshake 
    },
  ];

  const membershipBenefits = [
    'Global network of Christian leaders',
    'Cross-denominational fellowship',
    'Leadership development resources',
    'Joint mission opportunities',
    'Spiritual support and accountability',
  ];

  return (
    <div className="p-8">
      {/* Hero Section */}
      <div className="mb-10">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Crown className="w-6 h-6 text-indigo-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">
              Christian Leaders Fellowship
            </h1>
          </div>
          <p className="text-lg text-gray-600">
            A global gathering of Christian leaders united by the motto: "Let's go back to the Bible and only by faith."
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main Content */}
        <div>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <div className="w-2 h-6 bg-indigo-600 rounded"></div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-indigo-600" />
                About CLF
              </div>
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Christian Leaders Fellowship (CLF) is a global gathering of Christian leaders who exchange and unite around the world with our foundational motto. Pastors from across languages, races, and denominations come together, united in the powerful propagation of the Gospel of Christ throughout the world.
              </p>
              <p>
                Our fellowship is built on the shared commitment to return to the Scriptures as our sole authority and to live by faith alone, transcending denominational differences.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <div className="w-2 h-6 bg-indigo-600 rounded"></div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-indigo-600" />
                Our Mission
              </div>
            </h2>
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/20 rounded-lg">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="text-xl font-bold">"Let's go back to the Bible and only by faith."</div>
              </div>
              <p className="text-indigo-100">
                This motto guides everything we do - from our fellowship meetings to our joint mission efforts. We believe that unity in Christ comes through shared commitment to Scripture and faith.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <div className="w-2 h-6 bg-indigo-600 rounded"></div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-indigo-600" />
                Fellowship Activities
              </div>
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {fellowshipActivities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition-all group">
                    <div className="p-2 bg-indigo-100 rounded-lg w-fit mb-2 group-hover:bg-indigo-200 transition-colors">
                      <Icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <h3 className="font-bold text-gray-800 text-sm mb-1">{activity.activity}</h3>
                    <p className="text-xs text-gray-600">{activity.description}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* Side Content */}
        <div>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <div className="w-2 h-6 bg-indigo-600 rounded"></div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-600" />
                Membership Benefits
              </div>
            </h2>
            <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
              <ul className="space-y-3">
                {membershipBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-white rounded-lg border border-indigo-100">
                <div className="flex items-center gap-2">
                  <Network className="w-4 h-4 text-indigo-600" />
                  <p className="text-sm text-gray-600">
                    CLF members gain access to a supportive community of like-minded leaders committed to biblical faithfulness and effective ministry.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <div className="w-2 h-6 bg-indigo-600 rounded"></div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-indigo-600" />
                Global Reach
              </div>
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Languages className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Cross-Cultural</p>
                    <p className="text-sm text-gray-600">Multiple languages & ethnicities</p>
                  </div>
                </div>
                <Globe className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Church className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Cross-Denominational</p>
                    <p className="text-sm text-gray-600">Various church traditions united</p>
                  </div>
                </div>
                <Cross className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Target className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Mission Focused</p>
                    <p className="text-sm text-gray-600">Gospel propagation worldwide</p>
                  </div>
                </div>
                <Megaphone className="w-5 h-5 text-indigo-600" />
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/20 rounded-lg">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">Join CLF Kenya</h3>
            </div>
            <p className="text-indigo-100 mb-6">
              Connect with Christian leaders across Kenya who share your commitment to biblical faithfulness and effective ministry.
            </p>
            <div className="space-y-3">
              <a 
                href="https://clfkenya.org" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-white text-indigo-600 text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Visit CLF Kenya Website
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="/contact" 
                className="flex items-center justify-center gap-2 w-full bg-transparent border-2 border-white text-white text-center py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Contact Fellowship Leaders
              </a> 
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
