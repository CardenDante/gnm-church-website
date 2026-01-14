import { Facebook, Twitter, Calendar, MapPin, User, BookOpen } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The True Meaning of Christmas - Good News Mission',
  description: 'Christmas Day message focusing on the incarnation of Christ and what it means for humanity.',
};

export default function TrueMeaningChristmasPage() {
  const sermon = {
    title: "The True Meaning of Christmas",
    speaker: "Pastor Mary Johnson",
    location: "Good News Mission Nairobi",
    date: "December 25, 2022",
    description: "In a world filled with commercialism and holiday busyness, we often lose sight of what Christmas truly means. This message brings us back to the heart of Christmas—the miraculous birth of Jesus Christ, our Savior."
  };

  const sermonContent = `
    <h2>The Incarnation of God</h2>
    <p>Christmas is more than just a holiday; it's the celebration of God becoming flesh. The Apostle John tells us, <em>"The Word became flesh and made his dwelling among us"</em> (John 1:14). This is the miracle we celebrate—the infinite God taking on finite human form.</p>
    
    <h2>Beyond the Commercial Celebration</h2>
    <p>Today's Christmas has become dominated by shopping, gifts, and decorations. While these can be enjoyable, they often distract us from the profound spiritual reality: <strong>Emmanuel—God with us</strong> (Matthew 1:23).</p>
    
    <h2>The Humility of the Manger</h2>
    <p>Jesus wasn't born in a palace but in a humble manger. This teaches us that God's ways are not our ways. He came not to be served, but to serve, and to give His life as a ransom for many (Mark 10:45).</p>
    
    <h2>Peace on Earth</h2>
    <p>The angels proclaimed, <em>"Glory to God in the highest heaven, and on earth peace to those on whom his favor rests"</em> (Luke 2:14). This peace isn't merely the absence of conflict but the presence of reconciliation between God and humanity.</p>
    
    <h2>The Gift of Salvation</h2>
    <p>Jesus' birth was the beginning of God's plan for our redemption. As Paul writes, <em>"For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord"</em> (Romans 6:23). Christmas reminds us that salvation is God's free gift to us.</p>
    
    <h2>Living the Christmas Reality</h2>
    <p>The true meaning of Christmas should transform how we live every day. As recipients of God's incredible gift, we're called to share His love, extend grace to others, and live as people of hope in a world that desperately needs it.</p>
    
    <h3>Reflection Questions:</h3>
    <ul>
      <li>How can I keep Christ at the center of my Christmas celebrations?</li>
      <li>What does "God with us" mean in my daily life?</li>
      <li>How can I share the true meaning of Christmas with others?</li>
    </ul>
  `;

 
  return (
    <div className="min-h-screen ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar size={16} />
            {sermon.date}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {sermon.title}
          </h1>
          
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-gray-500" />
              <span className="text-lg font-semibold text-gray-800">{sermon.speaker}</span>
            </div>
            <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-gray-500" />
              <span className="text-lg font-semibold text-gray-800">{sermon.location}</span>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed italic">
              "{sermon.description}"
            </p>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-200">
            <div className="bg-blue-100 p-3 rounded-full">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Sermon Notes</h2>
              <p className="text-gray-600">Biblical teaching and insights</p>
            </div>
          </div>
          
          {/* Sermon Content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-gray-800 space-y-6" dangerouslySetInnerHTML={{ __html: sermonContent }} />
            
            {/* Bible Verses Section */}
            <div className="mt-12 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Bible Verses</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-blue-700">John 1:14</p>
                  <p className="text-gray-700 italic">"The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth."</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-700">Luke 2:10-11</p>
                  <p className="text-gray-700 italic">"But the angel said to them, 'Do not be afraid. I bring you good news that will cause great joy for all the people. Today in the town of David a Savior has been born to you; he is the Messiah, the Lord.'"</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-700">Matthew 1:23</p>
                  <p className="text-gray-700 italic">"The virgin will conceive and give birth to a son, and they will call him Immanuel (which means 'God with us')."</p>
                </div>
              </div>
            </div>
            
            {/* Prayer Section */}
            <div className="mt-12 p-6 bg-green-50 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Closing Prayer</h3>
              <p className="text-gray-700 leading-relaxed">
                Heavenly Father, thank you for the incredible gift of your Son, Jesus. As we reflect on the true meaning of Christmas, help us to keep our hearts focused on you. May we experience the peace, joy, and hope that comes from knowing Emmanuel—God with us. Teach us to share this wonderful news with others, not just during the Christmas season, but throughout the entire year. In Jesus' name, Amen.
              </p>
            </div>
          </article>
        </div>
      
      </div>
    </div>
  );
}

