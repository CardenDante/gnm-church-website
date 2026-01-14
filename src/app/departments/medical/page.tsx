import Image from 'next/image';

export default function MedicalVolunteersPage() {
  return (
    <div className="p-6 md:p-8">
      {/* Main Title Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#0477BF] mb-4">
          Good News Medical Volunteers
        </h2>
        {/* First Image */}
        <div className="my-6">
          <div className="relative w-full h-64 md:h-90 rounded-md overflow-hidden shadow-md">
            <Image
              src="/mbc/volunteer.jpg"
              alt="Health Cabinet Secretary Dr. Cleopha Mailu when he visited GNMV medical camp at Baba Dogo"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
          <p className="text-center text-gray-600 italic mt-3 text-sm">
            Health Cabinet Secretary Dr. Cleopha Mailu when he visited GNMV medical camp at Baba Dogo
          </p>
        </div>
      </section>

      {/* What is GNMV? */}
      <section className="mb-8">
        <h3 className="text-xl font-bold text-[#0477BF] mb-4">
          What is GNMV?
        </h3>
        <div className="text-gray-700 leading-relaxed">
          <p>
            The mission of GNMV as a humanitarian volunteer initiative is to provide medical treatment and health education to undeserved individuals across the globe, suffering from untreated diseases and/or the effects of devastating natural disasters.
          </p>
        </div>
      </section>

      {/* GNMV Purpose */}
      <section className="mb-8">
        <h3 className="text-xl font-bold text-[#0477BF] mb-4">
          GNMV Purpose
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>Prevent and treat diseases in those in areas without readily available medical treatment</li>
          <li>Have Spiritual fellowship with the attendees during the medical camps</li>
          <li>Spread true life loving activities.</li>
          <li>Enhance national prestige through international humanitarian relief work</li>
        </ul>
        {/* Second Image after point 4 */}
        <div className="my-6">
          <div className="relative w-full h-64 md:h-90 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/mbc/vaccine.jpg"
              alt="GNMV vaccine program"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
        </div>
      </section>

      {/* Who can volunteer? */}
      <section className="mb-8">
        <h3 className="text-xl font-bold text-[#0477BF] mb-4">
          Who can volunteer?
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>Doctors</li>
          <li>Caregivers (Nurses,Lab Ass,Chemists,Health Of)</li>
          <li>Interpreters (Local Dialects, Foreign..French, Spanish, Chinese etc )</li>
          <li>College students volunteering</li>
          <li>Physical Workers</li>
          <li>Photo Journalist, videos, news</li>
        </ul>
        {/* Third Image after the list */}
        <div className="my-6">
          <div className="relative w-full h-64 md:h-90 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/mbc/clinic.jpg"
              alt="GNMV clinic operations"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section className="mb-6">
        <h3 className="text-xl font-bold text-[#0477BF] mb-4">
          CONTACTS
        </h3>
        <div className="space-y-2 text-gray-700 leading-relaxed">
          <p>+254 720 101 492</p>
          <p>+254 722 140 280</p>
          <p>Email: gnmvkenya@gmail.com</p>
          <p>Facebook: @GNMVKenya</p>
        </div>
      </section>
    </div>
  );
}

