import Image from 'next/image';
import Link from 'next/link';

const GreetingsPage = () => {
  return (
    <main>
      {/* Breadcrumbs */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex text-sm text-gray-600">
          <Link href="/" className="hover:text-[#0A37BF] transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/about" className="hover:text-[#0A37BF] transition-colors">
            About
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#0A37BF] font-medium">Greetings Message</span>
        </nav>
      </div> */}

      {/* Head Title Area */}
      <div className="head_title_area text-center py-16 bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Greetings Message
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-4">
          From the Founder
        </p>
        <p className="text-base text-gray-600">
          A message of faith, peace, and spiritual guidance <br className="hidden sm:block" />
          from Pastor Park Oksoo
        </p>
      </div>

      {/* Main Content */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Opening Message */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/profiles/ocksoo.jpg"
                alt="Pastor Park Oksoo"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Greeting from the Founder
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The Bible shows that David was playing the harp when King Saul was about to throw a spear at him. King Saul was a king who believed in God, but he always felt uneasy, keeping a spear with him. But David could play the harp and sing in front of King Saul even when he knew that Saul planned to kill him.
              </p>
              <p className="text-gray-700 leading-relaxed">
                David believed that God would stay with him and protect him from all hardships including Saul's spear. David sang in peace while King Saul was in fear.
              </p>
            </div>
          </div>
        </div>

        {/* Faith and Peace Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Living in Faith, Not Fear
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The ones who are with God can rest even in front of any possible problems including sins because God takes care of them. But the ones who do not have true lives of faith try to handle all the hardships by themselves, are in pain feeling fearful and sad.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I see the members of the Good News Mission enjoy peace, a happy family, and blessed lives by receiving the forgiveness of sins and living spiritual lives. Some couples were divorced before they came to the mission, but they became united after joining the mission.
              </p>
            </div>
            <div className="bg-[#0A37BF] text-white p-8 rounded-xl">
              <blockquote className="text-lg italic leading-relaxed">
                "There are almost no incidents of divorce inside the mission because God holds and keeps our hearts to give us happy families."
              </blockquote>
              <cite className="block text-right text-sm opacity-90 mt-4">
                - Pastor Park Oksoo
              </cite>
            </div>
          </div>
        </div>

        {/* Spiritual Life Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              True Spiritual Life
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
              When we are saved from sin, born again, and accompany Jesus, He leads us to rest, peace, and joy. That is to say, we will live true spiritual lives where God works among us. I hope that you will receive the forgiveness of sins and enjoy a peaceful and blessed life by coming to the Good News Mission.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-block bg-[#04D9C4] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0477BF] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <Link href="/what-we-believe" className="flex items-center">
                Learn More About Our Mission
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-16"></div>

        {/* Profile Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Pastor Park Oksoo Profile
            </h3>
            <p className="text-gray-600">
              Founder and spiritual leader of the Good News Mission
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-[#04D9C4] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</span>
                <p className="text-gray-700">Founder of the Good News Mission Church</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-[#04D9C4] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</span>
                <p className="text-gray-700">Author of 38 books, including the best-selling titles, "Navigating the Heart: Who Are You Who Is Dragging Me?" and "Secret of Forgiveness of Sins and Being Born Again"</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-[#04D9C4] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</span>
                <p className="text-gray-700">Author of a featured sermon series in the New York Times and Los Angeles Times</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-[#04D9C4] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">4</span>
                <p className="text-gray-700">Founder of Mahanaim, a Christian post-secondary school in NY</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-[#04D9C4] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">5</span>
                <p className="text-gray-700">Religious advisor to national presidents</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-[#04D9C4] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">6</span>
                <p className="text-gray-700">Founder of International Youth Fellowship (IYF)</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-[#04D9C4] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">7</span>
                <p className="text-gray-700">Host of the annual Ministers of Youth World Forum</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-[#04D9C4] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">8</span>
                <p className="text-gray-700">Founder of Good News Corps</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-[#04D9C4] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">9</span>
                <p className="text-gray-700">Founder of the Lincoln House School</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-[#04D9C4] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">10</span>
                <p className="text-gray-700">Founder of Good News Broadcasting System (GBS)</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-[#04D9C4] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">11</span>
                <p className="text-gray-700">Honorary Doctor of Philosophy, National University of Mongolia</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-[#04D9C4] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">12</span>
                <p className="text-gray-700">"New Leader of Churches" award, The Daily Sports</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-[#04D9C4] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">13</span>
                <p className="text-gray-700">2005 New Korean Award, Hankook Ilbo</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-[#04D9C4] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">14</span>
                <p className="text-gray-700">"2005 Great Korean Grand Prize" award from The Korea Times</p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-[#04D9C4] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">15</span>
                <p className="text-gray-700">Official TI&E Speaker for the Korean National Army</p>
              </div>

              {/* Website Link */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Learn More</h4>
                <Link
                  href="https://www.ocksoopark.com"
                  target="_blank"
                  className="text-[#0A37BF] hover:text-[#04D9C4] transition-colors duration-200 flex items-center"
                >
                  www.ocksoopark.com
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center bg-gradient-to-r from-[#0A37BF] to-[#04D9C4] text-white p-12 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Experience True Spiritual Life
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join us in discovering the peace and joy that comes from receiving forgiveness of sins and living in faith.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/what-we-believe"
              className="inline-block bg-white text-[#0A37BF] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              About Our Mission
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#0A37BF] transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GreetingsPage;