
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const serviceData = {
  'tax-advisory': {
    title: "Tax Advisory",
    description: "Strategic tax planning and compliance to minimize your obligations while ensuring full regulatory adherence.",
    content: [
      "Our tax advisory service provides comprehensive solutions to optimize your tax position while ensuring compliance with all regulatory requirements. We help businesses and individuals navigate complex tax legislation to identify planning opportunities and minimize tax liabilities.",
      "Our team of experienced tax specialists stays up-to-date with the latest tax laws and regulations to provide you with proactive advice and strategies tailored to your specific situation.",
    ],
    benefits: [
      "Minimize tax liabilities through strategic planning",
      "Ensure full compliance with all tax regulations",
      "Receive timely advice on tax law changes",
      "Get support during tax inquiries and investigations",
      "Optimize business structures for tax efficiency"
    ]
  },
  'audit-assurance': {
    title: "Audit & Assurance",
    description: "Independent auditing services providing reliable financial information and enhancing stakeholder confidence.",
    content: [
      "Our audit and assurance services provide independent verification of financial statements and internal controls, giving stakeholders confidence in the reliability of financial information.",
      "Whether you require a statutory audit, an internal audit, or other assurance services, our experienced team delivers thorough and efficient audit processes that add value beyond compliance."
    ],
    benefits: [
      "Enhance credibility with stakeholders and investors",
      "Identify weaknesses in internal controls",
      "Improve financial reporting processes",
      "Meet regulatory requirements efficiently",
      "Gain insights to enhance business performance"
    ]
  },
  'business-advisory': {
    title: "Business Advisory",
    description: "Expert guidance to optimize operations, improve profitability and facilitate sustainable growth strategies.",
    content: [
      "Our business advisory services provide strategic guidance to help businesses optimize operations, improve profitability, and achieve sustainable growth.",
      "We work closely with business owners and management teams to understand their unique challenges and opportunities, developing tailored solutions that deliver measurable results."
    ],
    benefits: [
      "Develop effective growth strategies",
      "Optimize business processes for efficiency",
      "Improve financial performance and profitability",
      "Enhance decision-making with data-driven insights",
      "Navigate complex business challenges successfully"
    ]
  },
  'corporate-finance': {
    title: "Corporate Finance",
    description: "Comprehensive support for acquisitions, disposals, management buyouts and raising development capital.",
    content: [
      "Our corporate finance services provide comprehensive support for businesses undergoing significant transactions, including mergers and acquisitions, disposals, management buyouts, and capital raising.",
      "With our deep industry knowledge and transaction expertise, we guide clients through every stage of the process to maximize value and achieve strategic objectives."
    ],
    benefits: [
      "Access expert guidance throughout transaction processes",
      "Maximize value in business sales or acquisitions",
      "Secure optimal funding for growth and development",
      "Benefit from thorough due diligence processes",
      "Develop effective post-transaction integration strategies"
    ]
  },
  'outsourcing': {
    title: "Outsourcing",
    description: "Efficient management of accounting, payroll and compliance functions to reduce overhead and increase focus.",
    content: [
      "Our outsourcing services allow businesses to delegate accounting, payroll, and compliance functions to our expert team, reducing overhead costs and allowing you to focus on core business activities.",
      "We provide scalable solutions tailored to your specific needs, from basic bookkeeping to full-service financial management, ensuring accuracy, timeliness, and compliance."
    ],
    benefits: [
      "Reduce costs associated with in-house accounting functions",
      "Access specialized expertise without hiring additional staff",
      "Improve accuracy and timeliness of financial reporting",
      "Scale services up or down based on business needs",
      "Free up internal resources to focus on core activities"
    ]
  },
  'international': {
    title: "International Services",
    description: "Specialized support for businesses with international operations, including cross-border tax planning.",
    content: [
      "Our international services provide specialized support for businesses operating across borders, helping navigate the complexities of international tax, compliance, and financial reporting.",
      "With our global network of professionals, we deliver integrated solutions that address the unique challenges of multinational operations while identifying opportunities for optimization."
    ],
    benefits: [
      "Navigate complex international tax regulations",
      "Optimize global corporate structures",
      "Manage transfer pricing compliance and documentation",
      "Coordinate multi-jurisdiction financial reporting",
      "Support international expansion strategies"
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId] || {
    title: "Service Not Found",
    description: "The requested service information is not available.",
    content: ["Please check the URL or return to our services page."],
    benefits: []
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 md:pt-28">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-accountax-900 to-accountax-800 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="animate-fade-in-up">
              <Link to="/#services" className="inline-flex items-center text-accountax-300 hover:text-accountax-100 mb-6 transition-colors">
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back to Services
              </Link>
              
              <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight text-white">
                {service.title}
              </h1>
              <div className="h-1 w-24 bg-accountax-500 mb-6 rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-white animate-shine"></div>
              </div>
              <p className="text-lg md:text-xl text-accountax-100 max-w-2xl">
                {service.description}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-accountax-800 mb-6">
                  How We Can Help
                </h2>
                <div className="space-y-6">
                  {service.content.map((paragraph, index) => (
                    <p key={index} className="text-accountax-700">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                <div className="mt-12">
                  <h3 className="text-xl font-serif font-semibold text-accountax-800 mb-6">
                    Key Benefits
                  </h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start animate-slide-in-bottom" style={{ animationDelay: `${0.1 * index}s` }}>
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-4 h-4 rounded-full bg-accountax-500 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                          </div>
                        </div>
                        <span className="ml-3 text-accountax-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <Link to="/contact">
                    <Button className="button-fancy bg-accountax-700 hover:bg-accountax-800 text-white">
                      Discuss Your Requirements
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="bg-accountax-50 p-8 rounded-xl border-l-4 border-accountax-500 shadow-lg">
                  <h3 className="text-xl font-serif font-semibold text-accountax-800 mb-6">
                    Our Services
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(serviceData).map(([id, serviceInfo]) => (
                      <Link 
                        key={id} 
                        to={`/services/${id}`}
                        className={`block py-2 px-4 rounded-lg transition-colors ${
                          serviceId === id 
                            ? 'bg-accountax-500 text-white font-medium' 
                            : 'hover:bg-accountax-100/50 text-accountax-700 hover:text-accountax-900'
                        }`}
                      >
                        {serviceInfo.title}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-accountax-200/50">
                    <h4 className="font-medium text-accountax-800 mb-3">Need Assistance?</h4>
                    <p className="text-sm text-accountax-700 mb-5">
                      Contact our team to discuss how we can help with your specific requirements.
                    </p>
                    <Link to="/contact">
                      <Button className="w-full bg-white border border-accountax-300 text-accountax-700 hover:bg-accountax-50">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
