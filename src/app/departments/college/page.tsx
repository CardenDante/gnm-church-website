export default function MahanaimCollegePage() {
  const courses = [
    { category: 'ICT & Technology', programs: ['Diploma in ICT', 'Certificate in IT', 'ICDL Certification'] },
    { category: 'Tourism & Hospitality', programs: ['Diploma in Tourism Management', 'Certificate in Tour Guiding', 'Travel Operations'] },
    { category: 'Media & Journalism', programs: ['Diploma in Journalism', 'Certificate in Journalism', 'Diploma in Journalism & Media Studies'] },
    { category: 'Languages & Culture', programs: ['Chinese Language', 'English Language', 'Korean Tae Kwon Do'] },
  ];

  const examBodies = ['KNEC', 'ICDL', 'ICM', 'HSK', 'Internal Exams', 'Other International Bodies'];

  return (
    <div className="p-8">
      {/* Hero Section */}
      <div className="mb-10">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Mahanaim Education Institute
          </h1>
          <a 
            href="http://www.mahanaim.ac.ke" 
            target="_blank"
            className="text-purple-600 hover:text-purple-800 hover:underline mb-4 inline-block"
          >
            🌐 www.mahanaim.ac.ke
          </a>
          <p className="text-lg text-gray-600">
            Quality training amalgamated with spiritual nourishment through Bible study. Registered by the Ministry of Education.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main Content */}
        <div>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-2 h-6 bg-purple-600 mr-3 rounded"></span>
              About Our College
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Mahanaim Educational Institute offers diploma, certificate, and refresher courses in various professional fields. Our students gain not only professional experience but also essential life skills through our integrated approach to education.
              </p>
              <p>
                We focus on creating market-ready skill sets while nurturing spiritual growth through regular Bible study sessions.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-2 h-6 bg-purple-600 mr-3 rounded"></span>
              Our 3C Philosophy
            </h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-100">
                <h3 className="text-xl font-bold text-purple-700 mb-2">CHALLENGE</h3>
                <p className="text-gray-700">
                  We encourage tomorrow's leaders through various challenges, especially in overcoming their personal limits and thoughts. We believe growth happens outside comfort zones.
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-xl border border-blue-100">
                <h3 className="text-xl font-bold text-blue-700 mb-2">CHANGE</h3>
                <p className="text-gray-700">
                  Anyone who boards the Mahanaim Ship of Change gains a clean and radiant heart. We focus on holistic transformation - mind, body, and spirit.
                </p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-xl border border-green-100">
                <h3 className="text-xl font-bold text-green-700 mb-2">COHESION</h3>
                <p className="text-gray-700">
                  A single solace where exchange between youths from over 80 different countries occurs promotes unison. We build bridges across cultures and backgrounds.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Side Content */}
        <div>
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-2 h-6 bg-purple-600 mr-3 rounded"></span>
              Course Programs
            </h2>
            <div className="space-y-6">
              {courses.map((category, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-purple-300 hover:shadow-md transition-all">
                  <h3 className="font-bold text-gray-800 mb-3">{category.category}</h3>
                  <div className="space-y-2">
                    {category.programs.map((program, pIndex) => (
                      <div key={pIndex} className="flex items-center text-gray-700">
                        <span className="text-purple-500 mr-2">•</span>
                        <span>{program}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-6 bg-purple-600 mr-3 rounded"></span>
              Examination Bodies
            </h2>
            <div className="bg-purple-50 rounded-xl p-5">
              <div className="grid grid-cols-2 gap-3">
                {examBodies.map((body, index) => (
                  <div key={index} className="flex items-center justify-center bg-white rounded-lg py-2 px-3">
                    <span className="font-medium text-gray-800">{body}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                International standards for global recognition
              </p>
            </div>
          </section>

          <section className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white">
            <h3 className="text-lg font-bold mb-3">Why Choose Mahanaim?</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <span className="text-yellow-300 mr-2">✓</span>
                <span>Ministry of Education Certified</span>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-300 mr-2">✓</span>
                <span>Spiritual Nourishment Programs</span>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-300 mr-2">✓</span>
                <span>International Curriculum Standards</span>
              </li>
              <li className="flex items-center">
                <span className="text-yellow-300 mr-2">✓</span>
                <span>Market-Ready Skill Development</span>
              </li>
            </ul>
            <a 
              href="http://www.mahanaim.ac.ke/admissions" 
              target="_blank"
              className="block w-full bg-white text-purple-600 text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Apply for Admission
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}

