import { 
  ShieldCheck,
  GraduationCap,
  Languages,
  Users,
  BarChart3,
  Globe,
  CheckCircle,
  School,
  BookOpen,
  Users2,
  Award,
  MapPin,
  Calendar,
  ArrowRight,
  Building,
  Target,
  Eye,
  Star
} from 'lucide-react';

export default function MahanaimSchoolPage() {
  const schoolFeatures = [
    { 
      feature: 'Ministry of Education Certified', 
      icon: ShieldCheck 
    },
    { 
      feature: 'Cambridge International Examination Centre', 
      icon: GraduationCap 
    },
    { 
      feature: 'Native Language Teachers', 
      icon: Languages 
    },
    { 
      feature: 'Small-size Classes', 
      icon: Users 
    },
    { 
      feature: 'Placement Level Classes', 
      icon: BarChart3 
    },
    { 
      feature: 'ESL for Non-English Speakers', 
      icon: Globe 
    },
  ];

  const cambridgeAdvantages = [
    'Internationally recognized education system',
    '150+ years of prestigious education history',
    'Millions of students in 160+ countries',
    'Guaranteed quality under Cambridge University',
    'Mutual academic standards worldwide',
  ];

  const programs = [
    { level: 'IGCSE', description: 'Cambridge International General Certificate of Secondary Education', grades: '9-10' },
    { level: 'AS Level', description: 'Advanced Subsidiary Level', grades: '11' },
    { level: 'A Level', description: 'Advanced Level', grades: '12' },
  ];

  return (
    <div className="p-8">
    
      <div className="grid grid-cols-1 gap-4">
        {/* Main Content */}
        <div>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <div className="w-2 h-6 bg-blue-600 rounded"></div>
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5 text-blue-600" />
                About Our School
              </div>
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Mahanaim International High School follows the British Cambridge International Examinations (CIE) system, offering Cambridge IGCSE and Cambridge GCE AS/A Level programs using official Cambridge textbooks and curriculum.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <div className="w-2 h-6 bg-blue-600 rounded"></div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-600" />
                School Features
              </div>
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {schoolFeatures.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-md transition-all group">
                    <div className="flex items-center">
                      <div className="p-2 bg-blue-100 rounded-lg mr-3 group-hover:bg-blue-200 transition-colors">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="font-medium text-gray-800">{item.feature}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <div className="w-2 h-6 bg-blue-600 rounded"></div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                Cambridge Programs
              </div>
            </h2>
            <div className="space-y-4 grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
              {programs.map((program, index) => (
                <div key={index} className=" p-4 rounded-xl border border-blue-200 hover:border-blue-300 transition-colors">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{program.level}</h3>
                    <span className="bg-blue-100 text-blue-800 font-medium px-3 py-1 rounded-full flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Grades {program.grades}
                    </span>
                  </div>
                  <p className="text-gray-700">{program.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Side Content */}
        <div>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <div className="w-2 h-6 bg-blue-600 rounded"></div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-blue-600" />
                Cambridge Advantages
              </div>
            </h2>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <ul className="space-y-4">
                {cambridgeAdvantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-white rounded-lg border border-blue-100">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <p className="text-sm text-gray-600">
                    As the system of each Cambridge education provider is maintained under Cambridge University, all academic courses, lesson plans, exam composition, and quality standards are mutually guaranteed worldwide.
                  </p>
                </div>
              </div>
            </div>
          </section>

            <a 
              href="https://mahanaim.ac.ke/school" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-blue-50 text-gray-600 text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              School Homepage
              <ArrowRight className="w-4 h-4" />
            </a>
        </div>
      </div>
    </div>
  );
}

