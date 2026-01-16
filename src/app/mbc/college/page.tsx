import Image from 'next/image';

export default function MBCPage() {
  const courseTable = [
    { class: 'Certificate', courseName: 'Introduction to the Gospels', lecturer: 'Pastor Daniel Beck' },
    { class: 'Certificate', courseName: 'Book of John', lecturer: 'Pastor Yohan Kim' },
    { class: 'Certificate', courseName: 'Forgiveness of Sins', lecturer: 'Pastor Eric Ochindo' },
    { class: 'Diploma 1', courseName: 'Book of Exodus 1', lecturer: 'Pastor Uwimana Donatien' },
    { class: 'Diploma 1', courseName: 'Book of Genesis 1', lecturer: 'Pastor Francis Mwangi' },
    { class: 'Diploma 1', courseName: 'Book of Matthew', lecturer: 'Pastor Yohan Kim' },
    { class: 'Diploma 2', courseName: 'Book of Exodus 2', lecturer: 'Pastor Uwimana Donatien' },
    { class: 'Diploma 2', courseName: 'Book of Genesis 2', lecturer: 'Pastor Francis Mwangi' },
    { class: 'Diploma 2', courseName: 'Book of Romans', lecturer: 'Pastor Wycliff Madanyi' },
    { class: 'Advanced Diploma', courseName: 'Repentance and Faith', lecturer: 'Pastor Barnabus Okhako' },
    { class: 'Advanced Diploma', courseName: 'Epistles of Paul', lecturer: 'Pastor Nelson Ochuogha' },
    { class: 'Advanced Diploma', courseName: 'Major Prophets', lecturer: 'Pastor Nelson Ochuogha' },
  ];

  return (
    <div className="p-6 md:p-8">

      <div className="mb-8">
        <div className="relative w-full h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden flex flex-col items-center justify-center">
          <div className="text-center">
            <svg className="w-20 h-20 mx-auto text-gray-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 9.333l5.333 2.662-5.333 2.672v-5.334zm14-4.333v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5z" />
            </svg>
            <p className="text-gray-600 font-medium text-lg">MBC Introduction Video</p>

          </div>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#0477BF] mb-4">
          Mahanaim Bible College
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            <span className="font-semibold">Mahanaim means "God's host".</span> This is a spiritual Bible college that teaches the heart of God as it is exactly reflected in the Bible. The founder Rev Dr. Park established Mahanaim Bible College in Kenya in total dependence upon the power of God and the Holy Spirit. Its main theme is to lead all Christians to return back to the Bible.
          </p>
          <p>
            Since 2007 we have been operating offline but in the year 2020, we changed the system to offer online courses. Thus all the courses are designed to answer that end. It is the will of God that all Students who are enrolled in this online program shall receive the heart of God, quench your spiritual thirst, and become a full-fledged minister of righteousness and manifold divine wisdom. God bless you all!
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#0477BF] mb-4">
          ABOUT THE FOUNDER:
        </h2>
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Rev. Dr. Ock Soo Park
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            The founder of MBC Rev Dr. Park is also the founder of Good News Mission and the Christian Leaders Fellowship. He is the author of the bestseller 'HOW I BECAME FREE FROM SIN', which sold more than one million copies, and has authored 64 other books on Spiritual Life. For decades he has been training and nurturing thousands of servants of God using the Bible only. Now those servants of God are spread out in 105 countries around the globe as missionaries.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#0477BF] mb-4">
          Organizational Chart
        </h2>
        <div className="relative w-full h-64 md:h-80 bg-gray-100 rounded-lg overflow-hidden border border-gray-300">
          <Image
            src="/mbc/mbc-leadership-opt.jpg"
            alt="Mahanaim Bible College Organizational Chart"
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#0477BF] mb-4">
          Course Description
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            MBC offers online courses in Theology in the following levels:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-semibold">Certificate</span> - takes 3 semesters, each semester lasting for 3 months
            </li>
            <li>
              <span className="font-semibold">Diploma</span> - takes a total of 6 semesters divided into diploma 1 and diploma 2
            </li>
            <li>
              <span className="font-semibold">Advanced diploma</span> - takes 3 semesters
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-[#0477BF] mb-6">
          Course Distribution
        </h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Class
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lecturer
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {courseTable.map((course, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                    {course.class}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                    {course.courseName}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                    {course.lecturer}
                  </td>
                </tr>
              ))}
            </tbody> 
          </table>
        </div> 
      </section>
    </div> 
  );
}

