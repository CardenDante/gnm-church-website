import Image from 'next/image';
import Link from 'next/link';

export default function HistoryPage() {
  const timelineEvents = [
    {
      year: "1993",
      title: "First Encounter",
      description: "Kenyan delegation meets Good News Mission at South Korea trade exhibition",
      icon: "👥",
      color: "bg-blue-100 border-blue-200"
    },
    {
      year: "1994",
      title: "First Gospel Campaign",
      description: "Rev. Ock Soo Park preaches at Nyayo National Stadium",
      icon: "📣",
      color: "bg-green-100 border-green-200"
    },
    {
      year: "1996",
      title: "Official Registration",
      description: "Good News Mission registered by Kenyan Government",
      icon: "📜",
      color: "bg-purple-100 border-purple-200"
    },
    {
      year: "1997",
      title: "First Branch Church",
      description: "Migori Branch Church established",
      icon: "⛪",
      color: "bg-amber-100 border-amber-200"
    },
    {
      year: "1999",
      title: "Ministers Dispatched",
      description: "First Kenyan ministers sent to 5 regions",
      icon: "🚀",
      color: "bg-cyan-100 border-cyan-200"
    },
    {
      year: "2001",
      title: "Land Acquisition",
      description: "Purchased land for Mission Center in Nairobi",
      icon: "🏛️",
      color: "bg-indigo-100 border-indigo-200"
    },
    {
      year: "2007",
      title: "Bible College",
      description: "Mahanaim Bible College started",
      icon: "📚",
      color: "bg-red-100 border-red-200"
    },
    {
      year: "2009",
      title: "Broadcasting Launch",
      description: "GBS TV begins airing across East Africa",
      icon: "📺",
      color: "bg-orange-100 border-orange-200"
    }
  ];

  const branchChurches = [
    { name: "Nairobi Main", number: "Headquarters", phone: "0704 333 111", region: "Central" },
    { name: "Migori Church", number: "0728 383 193", phone: "0728 383 193", region: "Nyanza" },
    { name: "Kisumu Church", number: "0721 342 176", phone: "0721 342 176", region: "Western" },
    { name: "Mombasa Church", number: "0726 460 513", phone: "0726 460 513", region: "Coast" },
    { name: "Nakuru Church", number: "0795 364 637", phone: "0795 364 637", region: "Rift Valley" },
    { name: "Eldoret Church", number: "0727 508 361", phone: "0727 508 361", region: "Rift Valley" },
    { name: "Kitengela Church", number: "0708 753 238", phone: "0708 753 238", region: "Central" },
    { name: "Thika Church", number: "0710 764 424", phone: "0710 764 424", region: "Central" }
  ];

  return (
    <main>
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-blue-900 to-cyan-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Journey of Faith in Kenya
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            From the first encounter in 1993 to establishing branch churches across the nation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/branches"
              className="bg-white text-[#0477BF] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform "
            >
              View Our Branches
            </Link>
            <Link
              href="/about/greetings"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Greetings from Leadership
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-8 relative z-10">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-blue-100">Years in Kenya</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">32+</div>
              <div className="text-blue-100">Branch Churches</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-blue-100">Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">6</div>
              <div className="text-blue-100">Educational Institutions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column: History Text  */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl md:shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#0477BF] mb-8">History of Good News Mission Kenya</h2>

              {/*  Text Content */}
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  In 1993, a Kenyan delegation attending a trade exhibition in South Korea encountered the Good News Mission team. This divine connection opened doors for the Gospel in Kenya. The Kenyan visitors were invited to dinner by Rev. Ock Soo Park, where they shared fellowship and gospel songs.
                </p>

                <p>
                  In August 1994, Rev. Park was invited to preach at Nairobi's Nyayo National Stadium. He witnessed Kenyans' zeal for God but recognized a need for true understanding of the Gospel. Moved by compassion for the people, he resolved to send missionaries to Kenya.
                </p>

                <p>
                  In November 1994, missionaries Kim Jong Duk and Yoon Jong Soo arrived in Kenya. Despite challenges, they faithfully preached from their home. God opened doors, and on March 16, 1996, Good News Mission was officially registered in Kenya.
                </p>

                <p>
                  The mission expanded rapidly. On April 17, 1997, the first branch church was established in Migori. In August 1999, the first Kenyan ministers were dispatched to Kisumu, Busia, Kajiado, Mombasa, and Eldoret regions.
                </p>

                {/* First Image: Compound */}
                <div className="my-8">
                  <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/about/compound.jpg"
                      alt="Good News Mission Church Nairobi Compound"
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      priority={false}
                    />
                  </div>
                  <p className="text-center text-gray-600 italic mt-3 text-sm">
                    Good News Mission Church Nairobi Compound
                  </p>
                </div>

                <p>
                  In 2001, land was acquired in Nairobi through God's provision, fulfilling the promise of Psalms 37. This became the headquarters for the growing mission work.
                </p>

                <p>
                  Educational ministries flourished. Mahanaim Bible College began in 2007, training church leaders. In 2009, Good News Broadcasting System (GBS TV) launched, spreading the Gospel across East Africa. Mahanaim High School and College followed in 2011.
                </p>

                {/* Second Image: Service Hall */}
                <div className="my-8">
                  <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/about/service_hall.jpg"
                      alt="Sunday Service in the main service hall at Good News Mission Church Nairobi"
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      priority={false}
                    />
                  </div>
                  <p className="text-center text-gray-600 italic mt-3 text-sm">
                    Sunday Service at Good News Mission Nairobi
                  </p>
                </div>

                <p>
                  In 2014, the National Peace Bible Crusade (NPBC) was registered, uniting denominations across Kenya to spread the true Gospel with one accord. Today, Good News Mission continues to grow, reaching communities throughout Kenya.
                </p>

                <p className="font-medium text-[#0477BF]">
                  Our commitment remains: "We shall preach the Gospel to the End, With the Lord to the Last."
                </p>
              </div>

              {/* Quote Section */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex justify-center">
                  <div className="text-gray-500 italic text-center max-w-2xl">
                    "We shall preach the Gospel to the End, With the Lord to the Last."
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline & Quick Links  */}
          <div className="space-y-8">

            {/* Timeline Card */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-2 h-6 bg-[#0477BF] mr-3 rounded"></span>
                Historical Timeline
              </h3>
              <div className="space-y-4">
                {timelineEvents.map((event, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border ${event.color} hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-start">
                      <div className="text-2xl mr-3">{event.icon}</div>
                      <div>
                        <div className="flex items-center">
                          <span className="font-bold text-gray-800 mr-2">{event.year}</span>
                          <span className="text-sm font-semibold text-gray-700">{event.title}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Branch Churches Card */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Branch Churches</h3>
              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                {branchChurches.map((church, index) => (
                  <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg border-b border-gray-100 last:border-0">
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-800 truncate">{church.name}</div>
                      <div className="text-xs text-gray-500 truncate">{church.region}</div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                      <div className="text-sm font-medium text-[#0477BF] truncate">{church.number}</div>
                      {church.phone !== church.number && (
                        <div className="text-xs text-gray-500 truncate">{church.phone}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/branches"
                className="block text-center mt-6 text-[#0477BF] font-semibold hover:text-[#0A37BF] transition-colors py-2 border border-[#0477BF] rounded-lg hover:bg-blue-50"
              >
                View All Branches →
              </Link>
            </div>

            {/* Quick Links Card */}
            <div className="bg-gradient-to-br from-[#0477BF] to-cyan-600 md:rounded-2xl md:shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Explore More</h3>
              <div className="space-y-3">
                <Link href="/about/greetings" className="flex items-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <span className="mr-3">📜</span>
                  <span>Greetings Message</span>
                </Link>
                <Link href="/about/beliefs" className="flex items-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <span className="mr-3">✝️</span>
                  <span>What We Believe</span>
                </Link>
                <Link href="/branches" className="flex items-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <span className="mr-3">🏛️</span>
                  <span>Our Branches</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

