import Image from 'next/image';

export default function ContactPage() {
  const branches = [
    { name: "Nakuru Church", location: "Nakuru County, Kenya", phone: " 0795 364 637" },
    { name: "Mombasa Church", location: "Mombasa County, Kenya", phone: " 0726 460 513" },
    { name: "Kisumu Church", location: "Kisumu County, Kenya", phone: " 0721 342 176" },
    { name: "Migori Church", location: "Migori County, Kenya", phone: " 0728 383 193" },
    { name: "Kitengela Church", location: "Kitengela, kenya", phone: " 0708 753 238" },
    { name: "Eldoret Church", location: "Eldoret, Kenya", phone: " 0727 508 361" },
    { name: "Thika Church", location: "Thika, Kenya", phone: " 0710 764 424" },
    { name: "Kawangware Church", location: "Kawangware, Nairobi", phone: " 0723 424 169" },
    { name: "Rongai church", location: "Rongai, Kenya", phone: " 0712 135 123" },
    { name: "Tala church", location: "Tala, Kenya", phone: " 0718 940 532" },
    { name: "Luanda Church", location: "Luanda, Kenya", phone: " 0716 825 686" },
    { name: "Kilifi Church", location: "Kilifi, Kenya", phone: " 0706 662 271" },
    { name: "Busia Church", location: "Busia, Kenya", phone: " 0728 563 078" },
    { name: "Ruiru church", location: "Ruiru, Kenya", phone: " 0723 704 829" },
    { name: "Bungoma Church", location: "Bungoma, Kenya", phone: " 0711278768" },
    { name: "Ngong Church", location: "Ngong, Kenya", phone: " 0725 490 320" },
    { name: "Kitale Church", location: "Kitale, Kenya", phone: " 0723 044 716" },
    { name: "Rongo church", location: "Rongo, Kenya", phone: " 0727 092 335" },
    { name: "Homabay Church", location: "Homabay, Kenya", phone: " 0717 651 645" },
    { name: "Kisii church", location: "Kisii, Kenya", phone: " 0722 731 230" },
    { name: "Kilgoris Church", location: "Kilgoris, Kenya", phone: " 0725 600 620" },
    { name: "Siaya church", location: "Siaya, Kenya", phone: " 0792 462 244" },
    { name: "Lwandeti Church", location: "Lwandeti, Kenya", phone: " 0721 984 045" },
    { name: "Narok church", location: "Narok, Kenya", phone: " 0728 161 859" },
    { name: "Kibera church", location: "Kibera, Kenya", phone: " 0703 371 644" },
    { name: "Kajiado Church", location: "Kajiado, Kenya", phone: " 0728 898 601" },
    { name: "Machakos Church", location: "Machakos,Kenya", phone: " 0726 537 143" },
    { name: "Nyeri church", location: "Nyeri ,Kenya", phone: " 0708 865 044" },
    { name: "Ol Kalau", location: "Ol kalau, Kenya", phone: " 0708 855 298" },
    { name: "Bomet Church", location: "Bomet, Kenya", phone: " 0729 340 480" },
    { name: "Ruaka church", location: "Ruaka kenya", phone: " 0726 460 513" },
    { name: "Kakamega Church", location: "Kakamega ,Kenya", phone: " 0716 975 435" },
    { name: "Kericho Church", location: "Kericho,Kenya", phone: " 0721 602 024" },
  ];

  const contacts = [
    { 
      name: "Guidance and Counseling Office", 
      person: "Wycliffe Ayoki", 
      image: "wycliffe.jpg", 
      phone: "0727620930", 
      email: "info@goodnews.or.ke", 
      website: "" 
    },
    { 
      name: "Church Director", 
      person: "Pastor Nelson Ochuoga", 
      image: "nelson.jpg",
      phone: "0725972889", 
      email: "info@goodnews.or.ke", 
      website: "" 
    },
    { 
      name: "Youth Ministry", 
      person: "Evans Mutiga", 
      image: "evans.jpg", 
      phone: "0711 610 686", 
      email: "info@iyfkenya.org", 
      website: "www.iyfkenya.org" 
    },
    { 
      name: "Mindset Education", 
      person: "Henry Maina", 
      image: "henry.jpg", 
      phone: "0720101492", 
      email: "mineducation@iyfkenya.org", 
      website: "www.iyfkenya.org/mineducation" 
    },
    { 
      name: "Good News Broadcasting System", 
      person: "Benjamin Muthoka", 
      image: "benjamin.jpg", 
      phone: "0723370821", 
      email: "info@gbskenya.com", 
      website: "www.gbskenya.com" 
    },
    { 
      name: "Mahanaim International High School", 
      person: "Lynnete Baraka", 
      image: "lynnete.jpg", 
      phone: "0725249692", 
      email: "info@mihs.ac.ke", 
      website: "mihs.ac.ke" 
    },
    { 
      name: "Mahanaim Educational Institute, Dean", 
      person: "Mrs.Mercy Saidi", 
      image: "mercy.jpg", 
      phone: "0726532729", 
      email: "info@mei.ac.ke", 
      website: "www.mahanaim.ac.ke" 
    },
    { 
      name: "Christian Leaders Fellowship (CLF)", 
      person: "Pastor Francis Mwangi", 
      image: "francis.jpg", 
      phone: "0712135123", 
      email: "info@clfkenya.org", 
      website: "www.clfkenya.org" 
    },
    { 
      name: "Church Administrator", 
      person: "Elder Aeneas Wanyonyi", 
      image: "aeneas.jpg",
      phone: "0722344358", 
      email: "info@goodnews.or.ke", 
      website: "" 
    },
    { 
      name: "OFFICE OF THE SENIOR PASTOR", 
      person: "Pastor Yohan Kim", 
      image: "yohan.jpg", 
      phone: "0704333111", 
      email: "chairman@goodnews.or.ke", 
      website: "wwww.goodnews.or.ke" 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Contact us</h1>
          <div className="w-24 h-1 bg-[#0477BF] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contacts Section  */}
          <div className="bg-white rounded-lg shadow-lg p-6 order-2 lg:order-1">
            <h2 className="text-2xl font-bold text-[#0477BF] mb-6">Contacts</h2>
            
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6">
              {contacts.map((contact, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow transition-shadow duration-200">
                  {/* Flex container for image and text */}
                  <div className="flex items-start gap-4">
                    {/* Image Column */}
                    <div className="flex-shrink-0">
                      <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#0477BF]">
                        <Image
                          src={`/contact/${contact.image}`}
                          alt={contact.person}
                          fill
                          style={{ objectFit: 'cover' }}
                          sizes="80px"
                          className="rounded-full"
                        />
                      </div>
                    </div>
                    
                    {/* Details Column */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-800 text-lg break-words">{contact.person}</h3>
                      <p className="text-gray-600 text-sm mb-1 truncate">{contact.name}</p>
                      <p className="text-gray-700 mb-2">{contact.phone}</p>
                      
                      {/* Email and Website Links */}
                      <div className="space-y-1">
                        <a 
                          href={`mailto:${contact.email}`} 
                          className="text-[#0477BF] hover:underline text-sm block truncate"
                        >
                          {contact.email}
                        </a>
                        {contact.website && (
                          <a 
                            href={`https://${contact.website}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#0477BF] hover:underline text-sm block truncate"
                          >
                            {contact.website}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nairobi Main Church & Branches */}
          <div className="bg-white rounded-lg shadow-lg p-6 order-1 lg:order-2">
            {/* Nairobi Main Church */}
            <h2 className="text-2xl font-bold text-[#0477BF] mb-6">Nairobi Main Church</h2>
            <div className="space-y-3 text-gray-700 mb-3">
              <p className="font-semibold">Nairobi Church (Kenya HQs)</p>
              <p>Thika Road, Behind Safari Park Kenya</p>
              <p>P.O Box 57329 - 00200</p>
              <p>Phone Number: 0704 333 111</p>
            </div>

            <h2 className="text-2xl font-bold text-[#0477BF] mb-6">Branches Churches within Kenya</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto pr-2">
              {branches.map((branch, index) => (
                <div key={index} className="border-b border-gray-200 pb-3">
                  <p className="font-semibold text-gray-800">{branch.name}</p>
                  <p className="text-gray-600 text-sm">{branch.location}</p>
                  <p className="text-gray-700">{branch.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

