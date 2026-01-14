export default function CurriculumPage() {

  const gpaTable = [
    { letterGrade: 'A+', percentage: '97-100', gpaScale: '4.0' },
    { letterGrade: 'A', percentage: '93-96', gpaScale: '4.0' },
    { letterGrade: 'A-', percentage: '90-92', gpaScale: '3.7' },
    { letterGrade: 'B+', percentage: '87-89', gpaScale: '3.3' },
    { letterGrade: 'B', percentage: '83-86', gpaScale: '3.0' },
    { letterGrade: 'B-', percentage: '80-82', gpaScale: '2.7' },
    { letterGrade: 'C+', percentage: '77-79', gpaScale: '2.3' },
    { letterGrade: 'C', percentage: '73-76', gpaScale: '2.0' },
    { letterGrade: 'C-', percentage: '70-72', gpaScale: '1.7' },
    { letterGrade: 'D+', percentage: '67-69', gpaScale: '1.3' },
    { letterGrade: 'D', percentage: '65-66', gpaScale: '1.0' },
    { letterGrade: 'F-', percentage: 'Below 65', gpaScale: '0' },
  ];

  return (
    <div className="p-6 md:p-8">
      {/* Curriculum Delivery */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#0477BF] mb-4">
          Curriculum and Delivery
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            The curriculum of each unit shall contain the course outline, course content, expected learning outcomes, and references.
          </p>
          <p>
            All the units in the course shall be distributed across the semesters as shown in the course distribution table.
          </p>
          <p>
            Any changes in the curriculum shall be decided at the Faculty Board.
          </p>
        </div>
      </section>

      {/* Students' Academic Evaluation */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#0477BF] mb-4">
          Students' Academic Evaluation
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>Both formal and summative evaluations will be conducted.</li>
          <li>Unit lecturers shall conduct evaluation processes.</li>
          <li>The course lecturer shall award credits after each evaluation.</li>
          <li>Students must complete the required credits per semester.</li>
          <li>Grades shall be evaluated by the faculty board according to reports, examinations, participation, and research paper.</li>
          <li>In case the faculty board is not satisfied with the grade of the student or the student has any objection towards the grade, it can be re-evaluated.</li>
          <li>The final exam will be held once in a semester and will be taken during the attendance lecture.</li>
          <li>Students who shall apply for Pastoral ministry shall submit reports and counsel with the dean after completing the final exam.</li>
        </ul>
      </section>

      {/* Standard of Evaluation */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#0477BF] mb-4">
          Standard of Evaluation
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>Every semester consists of 12 lectures per subject.</li>
          <li>There will be continuous assignments and at the end of every semester, there will be final exams.</li>
          <li>Their average marks for the assignments is 60%, while the final exam is 40%</li>
          <li>The average grades shall be awarded at the end of every semester.</li>
          <li>Grades shall be canceled in case of any examination irregularities</li>
        </ul>
      </section>

      {/* GPA Marks Grading Table */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#0477BF] mb-6">
          GPA Marks Grading
        </h2>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                  Letter Grade
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                  Percentage of Grade
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  4.0 GPA Scale
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {gpaTable.map((grade, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-200">
                    {grade.letterGrade}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">
                    {grade.percentage}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                    {grade.gpaScale}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Academic Probation */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#0477BF] mb-4">
          Academic Probation
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            There shall be an academic warning to those who fail to achieve above/at least 1.70 of average academic results in every semester during his/her period in the institution.
          </p>
          <p>
            Those with two or more academic warnings shall be expelled from the institution. However, the faculty may advise the concerned students to retake the units failed.
          </p>
        </div>
      </section>

      {/* Correction and Cancelation of Results */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#0477BF] mb-4">
          Correction and Cancelation of Results
        </h2>
        <p className="text-gray-700 leading-relaxed">
          There shall be a correction or cancelation of results when there is ascertained fraudulent act or an error.
        </p>
      </section>

      {/* Graduation and Completion */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#0477BF] mb-4">
          Graduation and Completion
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            The required number of units for graduation shall be above 60.
          </p>
          <p>
            In the case of a regular student who has completed the entire process in the institution and has acquired the average result of 2.0, he/she will be awarded a certificate and or diploma in Theology. He or she is eligible to become a Good News Mission Affiliated Pastor (GAP), Good News Ordained Pastors, and qualification as an Education Missionary when he/she has passed the graduation assessment. Also, in the case of an auditor, he/she will be awarded the certificate of completion when passed the graduation assessment.
          </p>
        </div>
      </section>

      {/* Repetition of a session */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#0477BF] mb-4">
          Repetition of a session
        </h2>
        <p className="text-gray-700 leading-relaxed">
          For those who have failed to achieve the required amount of credit and those who were eliminated from the inspection of promotion and graduation, he/she may repeat the particular semester during the time in institution one at a time. The way of operation shall be determined by the dean separately.
        </p>
      </section>

      {/* Transmission of Course Content */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#0477BF] mb-4">
          Transmission of Course Content
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>Lectures shall be transmitted via Google classroom online learning</li>
          <li>One lecture per week per subject will be transmitted</li>
          <li>Students who shall apply for online studies shall receive a link on their email. NB: Lectures uploaded on the internet shall only last one week.</li>
          <li>Conventional sessions (face to face) shall be held once a month by the institution at a specified venue. Students must attend physically during these sessions</li>
          <li>The Faculty Board shall set dates for the conventional (face to face sessions). The dates shall be communicated via the students' email addresses.</li>
        </ul>
      </section>

      {/* Rules & Regulations */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-[#0477BF] mb-4">
          Rules & Regulations
        </h2>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Rules</h3>
          <p className="text-gray-700 leading-relaxed">
            Students must abide by and boost the sound academic traditions and learn and master the education and skills to increase knowledge and foster talents.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Disciplinary Action</h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            The Dean may take a student into a disciplinary action for failing under any one of the following issues.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
            <li>Those with faulty conduct, spiritual life and has tarnished or damaged the honor of the institution.</li>
            <li>Examinations irregularities</li>
            <li>Disciplinary action shall be distinguished into warning, probation, suspension, and expulsion.</li>
            <li>Detailed terms related to disciplinary action will be further determined by the Faculty Board.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Scholarship</h3>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>
              The Dean may award students with outstanding and decent conduct, and the needy students with scholarship and the related rules shall be determined by the Dean separately.
            </p>
            <p>
              When a scholarship student is on break, under expulsion, or being put on probation, the scholarship shall be halted and in case of a drop-out, the scholarship already awarded shall be taken back.
            </p>
            <p>
              There shall be a Scholarship Committee deliberating the terms related to rewarding scholarships and the management affairs shall be determined by the Dean separately.
            </p>
          </div>
        </div>
      </section>

      {/* Cost of Courses */}
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-[#0477BF] mb-4">
          Cost of Courses
        </h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <p className="text-gray-700 leading-relaxed">
            All courses have a total cost of <span className="font-bold">Kshs. 30,000 per semester</span>. However, with the sponsorship from MBC headquarters, U S A, the tuition fee has been subsidized to <span className="font-bold text-[#0477BF]">Ksh 5,000 per semester</span>.
          </p>
        </div>
      </section>
    </div>
  );
}

