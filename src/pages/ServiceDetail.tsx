
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const serviceData = {
  'book-keeping': {
    title: "Book Keeping",
    description: "Our bookkeeping services ensure accurate and systematic recording of all your financial transactions. This detailed financial record-keeping forms the foundation of your business accounting, enabling you to have real-time insights into your financial health. By maintaining organized books, you can track expenses, revenues, and profits clearly, making tax preparation straightforward and audits hassle-free. We tailor our bookkeeping solutions to meet the unique needs of your business, helping you stay compliant with statutory regulations while improving your financial management capabilities.",
    content: [
      "We provide meticulous bookkeeping services to ensure that your financial records are always up to date and audit-ready.",
      "From daily transaction logging to monthly reconciliations, our team ensures your accounts reflect your actual financial standing at all times."
    ],
    benefits: [
      "Maintain clean and accurate financial records",
      "Improve cash flow management",
      "Simplify tax filing and audits",
      "Access timely financial insights",
      "Ensure compliance with financial reporting standards"
    ]
  },
  'self-assessment-tax': {
    title: "Self Assessment Tax",
    description: "Our self-assessment tax service provides comprehensive support for individuals and business owners to fulfill their tax obligations accurately and punctually. Navigating the complexities of self-assessment tax returns can be daunting, but with our expert guidance, you can be assured of claiming all eligible allowances and reliefs, minimizing your tax liability while remaining fully compliant with HMRC regulations. We keep you updated with any changes in tax laws that may affect you and provide proactive advice to help you avoid penalties and optimize your tax position.",
    content: [
      "We help individuals and business owners manage their self-assessment tax obligations, minimizing stress and avoiding penalties.",
      "Our specialists ensure that all allowable expenses and reliefs are claimed to reduce your tax burden while remaining compliant."
    ],
    benefits: [
      "Avoid late filing penalties",
      "Maximize tax efficiency with expert advice",
      "Ensure accurate calculation of income and tax",
      "Receive reminders and deadline support",
      "Get professional representation in case of inquiries"
    ]
  },
  'capital-gains-tax': {
    title: "Capital Gains Tax",
    description: "Managing capital gains tax effectively is critical when disposing of assets such as property, shares, or business interests. Our capital gains tax advisory service provides expert assistance to help you understand your tax liabilities and identify strategies to reduce your tax burden. We analyze your transactions, consider reliefs and exemptions, and guide you on the optimal timing for asset disposals. With our support, you can plan ahead to minimize tax impact while ensuring full compliance with HMRC requirements, helping you retain more of your hard-earned gains.",
    content: [
      "We assist individuals and businesses in understanding and planning for capital gains tax arising from asset sales, shares, or property.",
      "Our team offers proactive strategies to defer, reduce, or eliminate capital gains tax legally and efficiently."
    ],
    benefits: [
      "Reduce capital gains tax through effective planning",
      "Understand exemptions and reliefs available",
      "Ensure compliance with HMRC reporting requirements",
      "Receive guidance on asset disposal timing",
      "Get expert support for property and share sales"
    ]
  },
  'payroll': {
    title: "Payroll",
    description: "Our payroll services deliver reliable, timely, and fully compliant management of employee salaries, tax deductions, and benefits administration. We handle all aspects of payroll processing including payslip generation, PAYE calculations, National Insurance contributions, and pension scheme administration. By outsourcing your payroll to us, you reduce administrative overhead and risk of errors, freeing your time to focus on core business activities. We ensure your payroll processes comply with ever-evolving employment and tax regulations, helping you avoid costly penalties and maintain employee satisfaction.",
    content: [
      "Our payroll services guarantee timely and compliant salary processing, tax deductions, and employee benefits administration.",
      "We handle everything from payslips to HMRC submissions, letting you focus on running your business."
    ],
    benefits: [
      "Ensure accurate and on-time employee payments",
      "Stay compliant with tax and employment laws",
      "Simplify pension and benefits processing",
      "Automate payroll calculations and deductions",
      "Avoid penalties and reduce administrative burden"
    ]
  },
  'accounts-management': {
    title: "Accounts Management",
    description: "Our accounts management service provides thorough oversight and administration of your business’s financial records, ensuring accuracy, transparency, and timeliness. By maintaining proper ledgers, trial balances, and financial statements, we help you understand your company’s financial position clearly, supporting effective strategic planning and decision-making. We customize our approach to your business’s size and sector, ensuring compliance with all statutory requirements while providing detailed insights that aid profitability and sustainability.",
    content: [
      "Our accounts management service provides structured financial oversight to maintain healthy financial records and support long-term growth.",
      "We manage your ledgers, trial balances, and financial statements to deliver actionable insights and financial clarity."
    ],
    benefits: [
      "Improve decision-making with accurate reports",
      "Ensure consistency in financial record-keeping",
      "Identify areas of overspending or inefficiencies",
      "Meet compliance and audit requirements",
      "Gain insights into profitability and cash flow"
    ]
  },
  'cloud-accounting': {
    title: "Cloud Accounting",
    description: "Leverage the power of cloud accounting to transform how your business manages finances. Our cloud accounting services provide you with real-time access to your financial data securely from any location, at any time, using any device. Automation features simplify invoicing, expense tracking, bank reconciliations, and reporting, reducing manual effort and human error. This modern approach facilitates better collaboration between your finance team and advisors, ensuring decisions are always based on current and accurate information.",
    content: [
      "We offer cloud accounting solutions that allow you to access your financial data securely from anywhere, on any device.",
      "Our systems automate invoicing, expense tracking, bank reconciliation, and reporting to save time and reduce errors."
    ],
    benefits: [
      "Access financial data anytime, anywhere",
      "Automate recurring tasks like invoicing and reconciliation",
      "Enhance collaboration with your finance team",
      "Ensure secure data storage and backups",
      "Streamline financial reporting and compliance"
    ]
  },
  'cashflow-planning': {
    title: "Cashflow Planning",
    description: "Effective cashflow planning is vital to maintaining your business’s financial health and avoiding liquidity crises. We provide detailed cashflow forecasting and management services that help you anticipate cash shortages, optimize working capital, and plan for upcoming expenses or investments. By monitoring your cash inflows and outflows closely, we enable you to make informed decisions that keep your operations running smoothly and support sustainable growth.",
    content: [
      "Our cashflow planning services help you forecast incoming and outgoing funds, enabling you to make informed financial decisions.",
      "We work closely with you to identify potential shortfalls and create actionable plans to optimize your cash position."
    ],
    benefits: [
      "Maintain healthy cash reserves",
      "Avoid unexpected cash shortages",
      "Plan for investments and growth",
      "Improve budgeting accuracy",
      "Enhance financial confidence and control"
    ]
  },
  'corporation-tax': {
    title: "Corporation Tax",
    description: "Our corporation tax service assists businesses in navigating the complexities of corporation tax regulations to ensure full compliance while optimizing tax liabilities. We prepare accurate corporation tax returns, identify all available reliefs and allowances, and develop strategies to reduce your tax burden legally. Our experts keep abreast of the latest changes in tax legislation and provide tailored advice that supports your business’s financial goals and growth plans.",
    content: [
      "We assist businesses in calculating and filing corporation tax returns accurately and on time.",
      "Our experts provide strategies to minimize liabilities and leverage tax reliefs to your advantage."
    ],
    benefits: [
      "Ensure full compliance with corporation tax laws",
      "Optimize tax position through effective planning",
      "Reduce risk of penalties and audits",
      "Claim all eligible reliefs and allowances",
      "Get expert advice tailored to your business needs"
    ]
  },
  'hmrc-tax-investigations': {
    title: "HMRC Tax Investigations",
    description: "Facing an HMRC tax investigation can be stressful and complex. Our dedicated team provides expert representation and guidance throughout the investigation process, working directly with HMRC to resolve any queries efficiently. We protect your interests by ensuring accurate, timely, and comprehensive responses, minimizing disruption to your business operations. With our experience and support, you can navigate investigations confidently and reduce the risk of penalties or fines.",
    content: [
      "If you are subject to an HMRC tax investigation, our experienced team will guide you through the process and liaise directly with HMRC on your behalf.",
      "We work to resolve issues efficiently while minimizing disruption to your business."
    ],
    benefits: [
      "Professional support during stressful investigations",
      "Reduce the risk of penalties and fines",
      "Ensure accurate and timely responses to HMRC",
      "Protect your business reputation",
      "Navigate complex tax queries with expert help"
    ]
  },
  'vat-returns': {
    title: "VAT Returns",
    description: "We provide expert preparation and submission of VAT returns to ensure your business complies with VAT legislation accurately and on time. Our service includes detailed record-keeping, calculation of VAT due, and identification of reclaimable VAT to optimize your cash flow. Staying up to date with VAT regulations and filing correctly prevents costly penalties and ensures smooth operations for your business.",
    content: [
      "We manage the entire VAT return process, including calculations, record-keeping, and submission to HMRC.",
      "Our team ensures you claim the correct VAT and remain compliant with VAT legislation."
    ],
    benefits: [
      "Avoid late filing and payment penalties",
      "Maximize VAT recovery where possible",
      "Simplify the VAT return process",
      "Stay updated with changes in VAT rules",
      "Reduce the administrative burden on your business"
    ]
  },
  'year-end-accounts': {
    title: "Year End Accounts",
    description: "Our year-end accounts preparation service ensures your annual financial statements are compiled accurately and in accordance with statutory requirements. We prepare balance sheets, profit and loss accounts, and supporting notes that provide a comprehensive overview of your business’s financial position and performance. These accounts support transparency, satisfy audit and regulatory demands, and form the basis for tax filings and strategic planning.",
    content: [
      "We compile accurate year-end accounts that comply with accounting standards and statutory requirements.",
      "Our service provides clear insights into your business’s financial health for shareholders, auditors, and regulators."
    ],
    benefits: [
      "Meet statutory reporting deadlines",
      "Ensure accuracy and completeness of accounts",
      "Provide clarity on financial performance",
      "Support audit and tax compliance",
      "Inform business planning and strategy"
    ]
  },
  'contractor-accounting': {
  title: "Contractor Accounting",
  description: "Our contractor accounting services are specifically tailored for freelancers, consultants, and self-employed professionals. We help you navigate the complexities of tax laws, ensure IR35 compliance, and optimize your income structure for maximum take-home pay. With expert support in bookkeeping, payroll, and tax filings, we handle the financial details so you can focus on delivering value to your clients. Whether you're working through a limited company or as a sole trader, our solutions are designed to keep you compliant, efficient, and financially informed.",
  content: [
    "We provide end-to-end accounting services for contractors, including company formation, expense tracking, payroll management, and quarterly tax reviews.",
    "Our expert advisors stay on top of HMRC regulations and ensure you're making the most of available allowances and deductions."
  ],
  benefits: [
    "IR35 guidance and compliance support",
    "Maximize take-home pay with optimized tax structure",
    "Dedicated support for self-employed professionals",
    "Automated payroll and expense processing",
    "Stress-free tax filing and financial planning"
  ]
},
'limited-liability-partnerships': {
  title: "Limited Liability Partnerships",
  description: "Our LLP accounting services provide specialized financial and compliance support tailored for Limited Liability Partnerships. We assist partners in understanding their individual responsibilities, managing shared profits, and maintaining accurate financial records. From partnership agreements to annual filings and tax obligations, our team ensures your LLP operates smoothly, remains compliant with HMRC regulations, and is structured for financial efficiency and transparency.",
  content: [
    "We handle all accounting and compliance needs for LLPs, including the preparation of annual accounts, tax returns for each member, and support with partnership agreements.",
    "Our experts offer tailored advice to help you distribute profits fairly, track individual contributions, and reduce overall tax exposure."
  ],
  benefits: [
    "Ensure full compliance with LLP regulations",
    "Accurate profit-sharing calculations and documentation",
    "Transparent financial reporting for all partners",
    "Support with HMRC filings and partnership tax returns",
    "Tailored advice for managing liabilities and capital contributions"
  ]
},

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
