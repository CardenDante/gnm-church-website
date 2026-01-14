export default function MahanaimSchoolPage() {
  return (
    <div className="p-6 md:p-8">
      {/* Title Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#0477BF] mb-4">
          Mahanaim International High School
        </h2>
        <h3 className="text-xl font-bold text-gray-800 mb-6">
          Introduction
        </h3>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Mahanaim International High School provides a school system from under the British Cambridge International Examinations (CIE), and among their academic programs are Cambridge IGCSE and Cambridge GCE AS/A Level, using their textbooks.
          </p>
          <p>
            The school is
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
            <li>Certified by the Kenya Ministry of Education</li>
            <li>Cambridge International Examination Centre (CIE) Registered</li>
            <li>All language courses taught by native language teachers</li>
            <li>Small-size classes</li>
            <li>Classes provided according to placement levels, including supplementary, advanced & individual classes</li>
            <li>ESL classes are provided for non-English-speaking students.</li>
          </ul>
        </div>
      </section>

      {/* System of Education */}
      <section className="mb-6">
        <h3 className="text-xl font-bold text-[#0477BF] mb-4">
          System of Education
        </h3>
        <h4 className="text-lg font-bold text-gray-800 mb-4">
          Cambridge International Examination
        </h4>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>Internationally recognized education and evaluation system</li>
          <li>Prestigious level of education from a broad history of more than 150 years</li>
          <li>Offers its education to millions of students each year from more than 160 countries</li>
          <li>As the system of each Cambridge education provider is maintained under Cambridge University, all its academic courses, lesson plans, exam composition and such are guaranteed a mutual quality of education</li>
        </ul>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Check out our homepage Mahanaim International High School for more information.
        </p>
      </section>
    </div>
  );
}

