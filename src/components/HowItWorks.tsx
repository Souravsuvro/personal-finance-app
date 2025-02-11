'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWallet, 
  faRobot, 
  faChartLine,
  faLightbulb,
  faCheck,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

const steps = [
  {
    icon: faWallet,
    title: 'Connect Your Accounts',
    description: 'Securely link your bank accounts and credit cards with bank-level encryption',
    details: [
      'Quick 2-minute setup process',
      'Support for 10,000+ financial institutions',
      'Real-time account synchronization'
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-white'
  },
  {
    icon: faRobot,
    title: 'AI-Powered Analysis',
    description: 'Our advanced AI analyzes your financial patterns and behaviors',
    details: [
      'Smart categorization of transactions',
      'Spending pattern detection',
      'Anomaly and fraud detection'
    ],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-white'
  },
  {
    icon: faChartLine,
    title: 'Personalized Insights',
    description: 'Get tailored recommendations based on your unique financial situation',
    details: [
      'Custom savings opportunities',
      'Investment suggestions',
      'Bill optimization tips'
    ],
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'from-indigo-50 to-white'
  },
  {
    icon: faLightbulb,
    title: 'Smart Recommendations',
    description: 'Receive actionable advice to improve your financial health',
    details: [
      'Debt reduction strategies',
      'Savings goal planning',
      'Budget optimization'
    ],
    color: 'from-pink-500 to-pink-600',
    bgColor: 'from-pink-50 to-white'
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('how-it-works');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="text-sm sm:text-base text-indigo-600 font-semibold tracking-wide uppercase">
            How It Works
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 px-4">
            Your Journey to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              Financial Freedom
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Follow these simple steps to transform your financial life with AI-powered insights
          </p>
        </div>

        <div className="relative">
          {/* Desktop Progress Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-1000"
              style={{ 
                width: `${(activeStep + 1) * 33.33}%`,
                opacity: isVisible ? 1 : 0,
                transform: `scaleX(${isVisible ? 1 : 0})`,
                transformOrigin: 'left'
              }}
            />
          </div>

          {/* Mobile/Tablet Progress Line */}
          <div className="lg:hidden absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gray-200">
            <div 
              className="w-full bg-gradient-to-b from-indigo-500 to-purple-600 transition-all duration-1000"
              style={{ 
                height: `${(activeStep + 1) * 33.33}%`,
                opacity: isVisible ? 1 : 0,
                transform: `scaleY(${isVisible ? 1 : 0})`,
                transformOrigin: 'top'
              }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`
                  relative transform transition-all duration-500
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                `}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveStep(index)}
                onClick={() => setActiveStep(index)}
              >
                {/* Step Number - Mobile/Tablet */}
                <div className="lg:hidden absolute -left-4 sm:-left-6 top-6 sm:top-8 z-10 flex items-center">
                  <div className={`
                    w-8 sm:w-12 h-8 sm:h-12 rounded-full flex items-center justify-center
                    ${index <= activeStep ? `bg-gradient-to-r ${step.color} shadow-lg` : 'bg-gray-200'}
                    transition-all duration-300
                  `}>
                    {index <= activeStep ? (
                      <FontAwesomeIcon icon={faCheck} className="h-4 sm:h-5 w-4 sm:w-5 text-white" />
                    ) : (
                      <span className="text-sm sm:text-base text-gray-600 font-semibold">{index + 1}</span>
                    )}
                  </div>
                </div>

                {/* Step Number - Desktop */}
                <div className="hidden lg:flex absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center
                    ${index <= activeStep ? `bg-gradient-to-r ${step.color} shadow-lg` : 'bg-gray-200'}
                    transition-all duration-300
                  `}>
                    {index <= activeStep ? (
                      <FontAwesomeIcon icon={faCheck} className="h-4 w-4 text-white" />
                    ) : (
                      <span className="text-gray-600 font-semibold">{index + 1}</span>
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className={`
                  relative group rounded-2xl p-4 sm:p-6 lg:p-8
                  bg-gradient-to-b ${step.bgColor}
                  hover:shadow-xl transition-all duration-300
                  ${index === activeStep ? 'ring-2 ring-indigo-500 shadow-lg' : 'ring-1 ring-gray-200'}
                  ml-6 sm:ml-8 lg:ml-0
                `}>
                  <div className={`
                    w-12 sm:w-16 h-12 sm:h-16 rounded-xl mb-4 sm:mb-6
                    bg-gradient-to-r ${step.color}
                    group-hover:scale-110 transition-transform duration-300
                    flex items-center justify-center shadow-lg
                  `}>
                    <FontAwesomeIcon icon={step.icon} className="h-6 sm:h-8 w-6 sm:w-8 text-white" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                    {step.description}
                  </p>

                  <ul className="space-y-2 sm:space-y-3">
                    {step.details.map((detail, i) => (
                      <li 
                        key={i} 
                        className={`
                          flex items-center text-xs sm:text-sm text-gray-600
                          transform transition-all duration-300 delay-${i * 100}
                          ${index === activeStep ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
                        `}
                      >
                        <span className={`
                          w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full mr-2 flex-shrink-0
                          bg-gradient-to-r ${step.color}
                        `} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`
          text-center mt-8 sm:mt-12 lg:mt-16 transform transition-all duration-700 delay-500
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          <button className="
            w-full sm:w-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium text-white
            bg-gradient-to-r from-indigo-500 to-purple-600
            hover:from-indigo-600 hover:to-purple-700
            rounded-xl transition-all duration-300
            shadow-lg hover:shadow-xl
            transform hover:-translate-y-1
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          ">
            Start Your Journey Now
          </button>
        </div>
      </div>
    </section>
  );
}
