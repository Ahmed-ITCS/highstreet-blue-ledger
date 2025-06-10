
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Team = () => {
  const team = [
    {
      name: "A D Rehman",
      role: "Partner",
      bio: [
        "A D Rehman is the member of Association of Chartered Certified Accountants (ACCA). He holds the Master’s degree in Investment Management from one of the best Universities in the UK. He possesses more than 7 years of an experience in Accounting and Advisory business roles in different businesses. Before setting up the HSA he has been served the big 4 EY (Ernst & Young) and various UK accounting practices"

      ],
      image: "/loveable-uploads/image (34).png"
    },
    {
      name: "Abdul Muqeet",
      role: "Partner",
      bio: [
        "Muqeet is the member of Association of Chartered Certified Accountants (ACCA).He holds the title of youngest ACCA qualified at the age of 17.He has an experience of more than 8 years in Auditing and business advisory roles with EY and PWC. During his work with “big  4” he was involved in managing the several roles in diversified industries including advisory, accounting and auditing assignments. Currently he is serving in one of the FTSE50 British American Tobacco p.l.c as well as establishing the HSA"
      ],
      image: "/lovable-uploads/muqeet.jpeg"
    },
    {
      name: "Naeem Azam",
      role: "Director Business Development",
      bio: [
        "Naeem Azam is a member of the business community in the UK. He has over 18 years of experience in marketing and business development. Throughout his career he has been performed different roles in multinational companies in UK. During his career Naeem has built strong relationship with many businesses by his outstanding services. Currently he is working as a Business Development Director at HSA"
      ],
      image: "https://ui-avatars.com/api/?name=NA&background=0D8ABC&color=fff"
    },
      
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 md:pt-28">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-accountax-900 to-accountax-800 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight text-white">
              Meet Our <span className="gradient-text bg-gradient-to-r from-accountax-300 to-accountax-100">Team</span>
            </h1>
            <div className="mx-auto h-1 w-24 bg-accountax-500 mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-accountax-100 max-w-2xl mx-auto">
              Our team of experienced professionals is dedicated to providing exceptional financial services tailored to your needs.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group animate-fade-in-up"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 relative">
                    <div className="absolute top-0 left-6 w-12 h-1 bg-accountax-500 -translate-y-1/2"></div>
                    <h3 className="text-xl font-serif font-semibold text-accountax-800 mb-1">{member.name}</h3>
                    <p className="text-accountax-500 font-medium text-sm mb-4">{member.role}</p>
                    <ul className="text-accountax-600 list-disc list-inside space-y-1">
  {member.bio.map((point, i) => (
    <li key={i}>{point}</li>
  ))}
</ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-accountax-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-accountax-900 mb-4">
                Our <span className="gradient-text bg-gradient-to-r from-accountax-700 to-accountax-500">Values</span>
              </h2>
              <div className="mx-auto h-1 w-16 bg-accountax-500 mb-6 rounded-full"></div>
              <p className="text-accountax-700 max-w-2xl mx-auto">
                At Highstreet Accountax, our team is guided by a set of core values that drive everything we do.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Excellence",
                  description: "We are committed to delivering the highest quality service in everything we do.",
                },
                {
                  title: "Integrity",
                  description: "We operate with honesty, transparency, and ethical behavior in all our client relationships.",
                },
                {
                  title: "Innovation",
                  description: "We continuously seek new ways to solve complex financial challenges for our clients.",
                }
              ].map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-lg text-center animate-slide-in-bottom"
                  style={{ animationDelay: `${0.3 * index}s` }}
                >
                  <h3 className="text-xl font-serif font-semibold text-accountax-800 mb-4">{value.title}</h3>
                  <p className="text-accountax-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
