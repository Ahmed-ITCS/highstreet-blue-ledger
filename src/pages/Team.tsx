
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Team = () => {
  const team = [
    {
      name: "A D Rehman",
      role: "AccA member and Masters in investment management ",
      bio: "He has been working with one of the big four firms, EY and UK based taxation firm in the past. More than 6 years of an experience in managing buisness and build strong relationships with the clients. Explore new buisness opportunities in a competitive environment. Strong knowledge to deal with taxation matters.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Sarah Johnson",
      role: "Tax Director",
      bio: "Sarah specializes in corporate taxation and has helped clients save millions through her innovative tax planning strategies.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Michael Chen",
      role: "Audit Partner",
      bio: "Michael leads our audit practice with a focus on ensuring compliance and identifying financial optimization opportunities.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Emma Thompson",
      role: "Corporate Finance Manager",
      bio: "Emma has extensive experience in M&A transactions, due diligence, and raising capital for businesses across various sectors.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
    },
    {
      name: "David Wilson",
      role: "Business Advisory Lead",
      bio: "David helps businesses optimize their operations and implement strategic growth initiatives through data-driven insights.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Olivia Martinez",
      role: "International Tax Specialist",
      bio: "Olivia specializes in cross-border tax planning and compliance for multinational corporations and high-net-worth individuals.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
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
                    <p className="text-accountax-600">{member.bio}</p>
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
