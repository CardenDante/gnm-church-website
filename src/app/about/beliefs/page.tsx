'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function WhatWeBelievePage() {
  const [expandedSections, setExpandedSections] = useState<number[]>([0, 1]);

  const toggleSection = (index: number) => {
    setExpandedSections(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const doctrines = [
    {
      id: 1,
      title: "The Scriptures",
      summary: "The Holy Bible is God's perfect revelation, totally true and trustworthy.",
      content: "The Holy Bible was written by men divinely inspired and is God's revelation of Himself to man. It is a perfect treasure of divine instruction. It has God for its author, salvation for its end, and truth, without any mixture of error, for its matter. Therefore, all Scripture is totally true and trustworthy.",
      references: "Exodus 24:4; Psalms 19:7-10; 119:105; Matthew 5:17-18; John 17:17; 2 Timothy 3:15-17; Hebrews 4:12; 2 Peter 1:19-21.",
      icon: "📖"
    },
    {
      id: 2,
      title: "God",
      summary: "One living and true God, eternally existing in three persons: Father, Son, and Holy Spirit.",
      content: "There is one and only one living and true God. He is an intelligent, spiritual, and personal Being, the Creator, Redeemer, Preserver, and Ruler of the universe. The eternal triune God reveals Himself to us as Father, Son, and Holy Spirit, with distinct personal attributes, but without division of nature, essence, or being.",
      references: "Genesis 1:1; Deuteronomy 6:4; Isaiah 43:3; Matthew 28:19; John 4:24; 14:6-13; 1 Corinthians 8:6; 1 Timothy 1:17; 1 John 5:7",
      icon: "✝️",
      subsections: [
        {
          title: "God the Father",
          content: "God as Father reigns with providential care over His universe. He is all powerful, all knowing, all loving, and all wise. God is Father in truth to those who become children of God through faith in Jesus Christ.",
          references: "Genesis 1:1; Exodus 3:14; Matthew 6:9ff.; John 5:26; 17:1-8; Romans 8:14-15; Ephesians 4:6"
        },
        {
          title: "God the Son",
          content: "Christ is the eternal Son of God. In His incarnation as Jesus Christ He was conceived of the Holy Spirit and born of the virgin Mary. He honored the divine law by His personal obedience, and in His substitutionary death on the cross He made provision for the redemption of men from sin.",
          references: "Isaiah 7:14; 53; Matthew 1:18-23; John 1:1-18; Acts 2:22-24; Romans 5:6-21; 1 Corinthians 15:1-8; Philippians 2:5-11; Colossians 1:13-22; Hebrews 1:1-3"
        },
        {
          title: "God the Holy Spirit",
          content: "The Holy Spirit is the Spirit of God, fully divine. He inspired holy men to write the Scriptures. He convicts men of sin, calls men to the Saviour, and effects regeneration. He seals the believer unto the day of final redemption.",
          references: "Genesis 1:2; Joel 2:28-32; John 14:16-17,26; 16:7-14; Acts 2:1-4; Romans 8:9-11; 1 Corinthians 2:10-14; Ephesians 1:13-14; 4:30"
        }
      ]
    },
    {
      id: 3,
      title: "Man and Sin",
      summary: "Man is God's special creation, fallen through sin, redeemable only by God's grace.",
      content: "Man is the special creation of God, made in His own image. By his free choice man sinned against God and brought sin into the human race. Therefore, all people inherit a nature inclined toward sin and are under condemnation. Only the grace of God can bring man into His holy fellowship.",
      references: "Genesis 1:26-30; 3; Psalms 51:5; Isaiah 6:5; Romans 1:19-32; 3:10-18,23; 5:12,19; Ephesians 2:1-22",
      icon: "👤"
    },
    {
      id: 4,
      title: "Salvation",
      summary: "Redemption through Christ alone, received by faith, resulting in regeneration, justification, sanctification, and glorification.",
      content: "Salvation involves the redemption of the whole man, and is offered freely to all who accept Jesus Christ as Lord and Saviour. In its broadest sense salvation includes regeneration, justification, sanctification, and glorification. There is no salvation apart from personal faith in Jesus Christ as Lord.",
      references: "Matthew 1:21; John 1:12-14; 3:3-21; Acts 4:12; Romans 1:16-18; 3:23-25; 5:8-10; 8:1-18; Ephesians 2:8-9; Titus 3:5",
      icon: "🕊️"
    },
    {
      id: 5,
      title: "The Church",
      summary: "The body of Christ, local and universal, called to worship, fellowship, and evangelism.",
      content: "A New Testament church is a local congregation of baptized believers, associated by covenant in the faith and fellowship of the gospel. The New Testament also speaks of the church as the Body of Christ which includes all of the redeemed of all the ages.",
      references: "Matthew 16:15-19; 18:15-20; Acts 2:41-42,47; 1 Corinthians 12; Ephesians 1:22-23; 2:19-22; 5:22-32; Colossians 1:18",
      icon: "⛪"
    },
    {
      id: 6,
      title: "Baptism and the Lord's Supper",
      summary: "Two ordinances commanded by Christ for observance by the church.",
      content: "Christian baptism is the immersion of a believer in water in the name of the Father, the Son, and the Holy Spirit. The Lord's Supper is a symbolic act of obedience whereby members memorialize the death of Christ and anticipate His second coming.",
      references: "Matthew 3:13-17; 26:26-30; 28:19-20; Acts 2:41-42; 8:35-39; Romans 6:3-5; 1 Corinthians 10:16; 11:23-29",
      icon: "💧"
    },
    {
      id: 7,
      title: "The Lord's Day",
      summary: "Sunday as the Christian Sabbath for worship and spiritual devotion.",
      content: "The first day of the week is the Lord's Day. It commemorates the resurrection of Christ from the dead and should include exercises of worship and spiritual devotion, both public and private.",
      references: "Exodus 20:8-11; Matthew 12:1-12; 28:1ff.; Mark 16:1-7; Luke 24:1-3; John 20:1,19-28; Acts 20:7; Revelation 1:10",
      icon: "📅"
    },
    {
      id: 8,
      title: "Evangelism and Missions",
      summary: "The duty of every Christian to share the Gospel with all nations.",
      content: "It is the duty and privilege of every follower of Christ to endeavor to make disciples of all nations. The Lord Jesus Christ has commanded the preaching of the gospel to all nations.",
      references: "Matthew 9:37-38; 28:18-20; Mark 16:15; Luke 24:46-48; John 20:21; Acts 1:8; Romans 10:13-15",
      icon: "🌍"
    },
    {
      id: 9,
      title: "The Family",
      summary: "God's foundational institution for society, centered on marriage between one man and one woman.",
      content: "God has ordained the family as the foundational institution of human society. Marriage is the uniting of one man and one woman in covenant commitment for a lifetime.",
      references: "Genesis 1:26-28; 2:18-25; Exodus 20:12; Deuteronomy 6:4-9; Psalms 127; 128; Proverbs 22:6; Ephesians 5:21-33; 6:1-4",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      id: 10,
      title: "Last Things",
      summary: "Christ's return, resurrection, judgment, and eternal states.",
      content: "Jesus Christ will return personally and visibly in glory to the earth; the dead will be raised; and Christ will judge all men. The righteous will dwell forever with the Lord, while the unrighteous will face everlasting punishment.",
      references: "Matthew 16:27; 24:27,30; 25:31-46; John 14:1-3; Acts 1:11; 1 Corinthians 15:24-28,35-58; 1 Thessalonians 4:14-18; Revelation 20:1-22:13",
      icon: "✝️"
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What We Believe</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Our Doctrinal Foundation - The Core Beliefs of Good News Mission
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about/history"
              className="bg-white text-[#0477BF] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform "
            >
              Our History
            </Link>
            <Link
              href="/mbc"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Bible College
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Left Column: Doctrines List  */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl md:shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-[#0477BF] mb-6">Our Doctrinal Statement</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Good News Mission holds to the historic Christian faith as revealed in the Scriptures.
                These doctrines form the foundation of our teaching, ministry, and mission.
              </p>

              <div className="space-y-6">
                {doctrines.map((doctrine, index) => (
                  <div
                    key={doctrine.id}
                    className={`border rounded-xl overflow-hidden transition-all duration-300 ${expandedSections.includes(index)
                      ? 'border-blue-300 md:shadow-lg'
                      : 'border-gray-200 hover:border-gray-300'
                      }`}
                  >
                    <button
                      onClick={() => toggleSection(index)}
                      className="w-full text-left p-6 bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-2xl mr-4">{doctrine.icon}</span>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800">
                              {doctrine.id}. {doctrine.title}
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">{doctrine.summary}</p>
                          </div>
                        </div>
                        <svg
                          className={`w-6 h-6 text-gray-500 transition-transform ${expandedSections.includes(index) ? 'rotate-180' : ''
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    {expandedSections.includes(index) && (
                      <div className="p-6 border-t border-gray-100">
                        <div className="prose max-w-none">
                          <p className="text-gray-700 mb-6 leading-relaxed">{doctrine.content}</p>

                          {doctrine.subsections && (
                            <div className="space-y-6 ml-4 pl-4 border-l-2 border-blue-200">
                              {doctrine.subsections.map((subsection, subIndex) => (
                                <div key={subIndex} className="pt-4 first:pt-0">
                                  <h4 className="text-lg font-semibold text-[#0477BF] mb-3">
                                    {subsection.title}
                                  </h4>
                                  <p className="text-gray-700 mb-4 leading-relaxed">{subsection.content}</p>
                                  <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="text-sm text-gray-600 italic">
                                      <span className="font-medium">Scripture References:</span> {subsection.references}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600 italic">
                              <span className="font-medium">Scripture References:</span> {doctrine.references}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Expand/Collapse All Buttons */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setExpandedSections(doctrines.map((_, i) => i))}
                  className="text-[#0477BF] font-medium hover:text-[#0A37BF] cursor-pointer transition-colors"
                >
                  Expand All Doctrines
                </button>
                <button
                  onClick={() => setExpandedSections([])}
                  className="text-gray-600 font-medium hover:text-gray-800  cursor-pointer transition-colors"
                >
                  Collapse All
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Info */}
          <div className="space-y-8">

            {/* Key Beliefs Card */}
            <div className="bg-gradient-to-br from-[#0477BF] to-cyan-600 md:rounded-2xl md:shadow-lg p-6 text-white">
              <h2 className="text-xl font-bold mb-4">Core Beliefs</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>Authority of Scripture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>Trinity: Father, Son, Holy Spirit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>Salvation by Grace through Faith</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>Great Commission Mandate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">✓</span>
                  <span>Christ's Return & Eternal Life</span>
                </li>
              </ul>
            </div>

            {/* Related Links */}
            <div className="bg-white rounded-2xl md:shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Explore More</h2>
              <div className="space-y-3">
                <Link
                  href="/about/history"
                  className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <span className="text-2xl mr-3">📜</span>
                  <div>
                    <div className="font-medium text-gray-800">Our History</div>
                    <div className="text-sm text-gray-600">Journey of faith in Kenya</div>
                  </div>
                </Link>
                <Link
                  href="/mbc/college"
                  className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <span className="text-2xl mr-3">🎓</span>
                  <div>
                    <div className="font-medium text-gray-800">Bible College</div>
                    <div className="text-sm text-gray-600">Theological education</div>
                  </div>
                </Link>
                <Link
                  href="/departments"
                  className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <span className="text-2xl mr-3">🏛️</span>
                  <div>
                    <div className="font-medium text-gray-800">Ministries</div>
                    <div className="text-sm text-gray-600">Our departments & services</div>
                  </div>
                </Link>
                <Link
                  href="/media/sermons"
                  className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <span className="text-2xl mr-3">📖</span>
                  <div>
                    <div className="font-medium text-gray-800">Sermons</div>
                    <div className="text-sm text-gray-600">Biblical teaching</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Download PDF */}
            <div className="bg-white rounded-2xl md:shadow-lg p-6 border-2 border-blue-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Full Doctrinal Statement</h2>
              <p className="text-gray-600 mb-4 text-sm">
                Download our complete doctrinal statement for detailed study and reference.
              </p>
              <button className="w-full bg-[#0477BF] text-white py-3 rounded-lg font-semibold hover:bg-[#0A37BF] transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

