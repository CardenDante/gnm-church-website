import Image from 'next/image';

export default function HistoryPage() {
  return (
    <main>
      {/* Head Title Area  */}
      <div className="head_title_area text-center py-16 bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          History
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-4">
          Our Journey of Faith in Kenya
        </p>
        <p className="text-base text-gray-600">
          From the first encounter in 1993 to establishing 40 branch churches across the country
        </p>
      </div>

      {/* Main Content  */}
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-md p-6 md:p-10">
          {/* Main Title */}
          <h2 className="text-3xl font-bold text-[#0477BF] mb-8 text-center">
            History of Good News Mission Kenya
          </h2>

          {/* Content Paragraphs */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              In 1993, a delegation of Kenyans went to South Korea for an international trade exhibition. While there, God worked and the Good News Mission team was able to meet Kenyans for the very first time. This happened when South Korean brothers in Theology School (The Korea Gospel Missionary College) went to witness at the exhibition venue. There were visitors from many nationalities at the exhibition. The Kenyan delegation opened their hearts to the Korean Good News Mission witnessing team and in this way, a new door opened for the gospel to be preached in Kenya. While the exhibition continued, Rev. Ock Soo Park invited the Kenyan delegation to a dinner party at his home. The invited guests had a good time and said, &apos;Rev. Park in Kenya when you are invited to a party you take a gift with you for the host. But we didn&apos;t bring any gift. Our gift that we present to you is a gospel song as a way of expressing our gratitude.&apos; The then Minister of Trade and Commerce, Mr. Kirugi Joseph Laiboni M&apos;Mukidia was part of the Kenyan delegation and he too was present at the Dinner party hosted by Pastor Park.
            </p>

            <p>
              The Kenyan team kept in touch with Rev. Park and in August 1994, they invited him to preach at the &quot;Move on Convention&quot; that was held at The Nyayo National Stadium in Nairobi. As Rev. Park stood before the multitude to preach, he discovered that though Kenyans were very zealous for God, they were still under sin. He witnessed how many pastors shouted &quot;pokea&quot; (meaning &apos;receive&apos; in english) and in unison the people would chant back &quot;Amen&quot;. He knew right away there was something amiss. That is not the way to receive the Holy Spirit.
            </p>

            <p>
              In his own testimony Rev. Park said; there were thousands of people wearing torn clothes and shoes crying under the steamy sun in a large playground field. They didn&apos;t even eat. But people who call themselves Pastors didn&apos;t preach the Gospel. They took all the poor people&apos;s money, ate good food in good restaurants and lived well. &quot;I felt very painful in my heart. I wanted to live and preach the gospel in Kenya for the rest of my life but due to circumstances, I promised that I would send a missionary.&quot; His prayer was, &quot;God you allowed me to serve in South Korea. Allow me to serve in Kenya.&quot; In November 1994, Good News Mission (South Korea) sent two missionaries to Kenya: Missionary Kim Jong Duk and Missionary Yoon Jong Soo. They began preaching the gospel from their residential house and though they met numerous challenges, they didn&apos;t give up. Amidst opposition and challenges from within and without, God opened the way and Good News Mission was officially registered by the Kenyan Government on the 16th of March 1996.
            </p>

            <p>
              On 17 April 1997, one of the missionaries went to Migori to open a branch Church. Rev. Ock Soo Park had earlier visited and preached the Gospel in Migori and by God&apos;s grace, there were some born again brothers and sisters already on the ground to receive the new missionary. Though the spiritual situation in Migori was dark and unpromising, through the word of Hebrews 10:38 &hellip;&quot;the just shall live by faith,&quot; the light of God&apos;s Word was able to overcome the darkness and the Migori Branch Church was established.
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
                Good News Mission Church Nairobi Compound.
              </p>
            </div>

            <p>
              In August 1999, after attending theology school at Good News Missionary School in Nairobi, the first team of Kenyan ministers was dispatched and they were sent to five areas, namely Kisumu, Busia, Kajiado, Mombasa and Eldoret. As they went to start churches, they departed with only a single bag and some money for transportation and rent for one month. Some of them had places to live, but others did not even know anyone residing in the assigned towns. They were solely depending on God and through this way, God helped Good News Mission moment by moment. Currently, Good News Mission Kenya has established 40 branch churches across the country and we give glory to God.
            </p>

            <p>
              At the end of the year 1999, Rev. Ock Soo Park called the current Korean Missionary in Kenya, and said, &quot;let us buy land in Kenya and build a sanctuary as well as start a broadcasting station.&quot; He had been praying for the Kenya mission and God was revealing through him what He was about to do. Land acquisition for the Kenya Mission was not easy but in the year 2001, through the word of promise in Psalms 37:9, 29 &quot;but those that wait upon the Lord, they shall inherit the earth&quot; the land on which the Good News Mission Center stands was purchased. Continuously, God has been faithful and worked in many different ways.
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
                Sunday Service in the main service hall at Good News Mission Church Nairobi.
              </p>
            </div>

            <p>
              In the year 2007, Good News Mission Kenya started Mahanaim Bible College and through the College many men of God continue to be trained. In 2009, the Good News Broadcasting System (GBS TV) started to air the Good News not only in Kenya but in other East African countries as well. In 2011, God paved way for the Mahanaim High School and Mahanaim College to be established. Through these institutions the Gospel is being preached to many different ways.
            </p>

            <p>
              In the year 2014 God allowed Good News Mission Kenya to register The National Peace Bible Crusade (NPBC), an umbrella organization for different denominations and pastors whose sole purpose is to preach and spread the true Gospel all over Kenya with one accord. We shall preach the Gospel to the End, With the Lord to the Last.
            </p>
          </div>

       
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-center">
              <div className="text-gray-500 italic text-center max-w-2xl">
                &quot;We shall preach the Gospel to the End, With the Lord to the Last.&quot;
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

