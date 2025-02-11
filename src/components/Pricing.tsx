'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheck,
  faRocket, 
  faStar, 
  faBuilding,
  faArrowRight,
  faMoneyBill,
  faChartLine,
  faEnvelope,
  faMobileScreen,
  faWallet,
  faGears,
  faInfinity,
  faRobot,
  faHeadset,
  faChartPie,
  faBullseye,
  faPiggyBank,
  faUserGroup,
  faChartBar,
  faCode,
  faPhone,
  faFileLines,
  faPeopleGroup,
  faReceipt,
  faHandshake
} from '@fortawesome/free-solid-svg-icons';

const getFeatureIcon = (feature: string) => {
  const iconMap: { [key: string]: any } = {
    'Connect up to 2 bank accounts': faMoneyBill,
    'Basic transaction tracking': faChartLine,
    'Monthly insights report': faChartBar,
    'Email support': faEnvelope,
    'Mobile app access': faMobileScreen,
    'Basic budgeting tools': faWallet,
    'Connect unlimited accounts': faInfinity,
    'Advanced AI insights': faRobot,
    'Custom budgeting tools': faGears,
    'Priority support': faHeadset,
    'Investment tracking': faChartPie,
    'Goal planning assistance': faBullseye,
    'Automated savings': faPiggyBank,
    'Premium mobile features': faMobileScreen,
    'Multiple user accounts': faUserGroup,
    'Business analytics': faChartBar,
    'API access': faCode,
    '24/7 phone support': faPhone,
    'Custom reports': faFileLines,
    'Team collaboration': faPeopleGroup,
    'Expense tracking': faReceipt,
    'Vendor management': faHandshake,
    'Integration support': faGears
  };
  
  return iconMap[feature] || faCheck;
};

const plans = [
  {
    name: 'Basic',
    icon: faRocket,
    price: 'Free',
    description: 'Perfect for getting started with personal finance management',
    features: [
      'Connect up to 2 bank accounts',
      'Basic transaction tracking',
      'Monthly insights report',
      'Email support',
      'Mobile app access',
      'Basic budgeting tools'
    ],
    color: 'from-blue-500 to-blue-600',
    lightColor: 'from-blue-50 to-white'
  },
  {
    name: 'Pro',
    icon: faStar,
    price: '$9.99',
    period: '/month',
    description: 'Advanced features for comprehensive personal finance management',
    features: [
      'Connect unlimited accounts',
      'Advanced AI insights',
      'Custom budgeting tools',
      'Priority support',
      'Investment tracking',
      'Goal planning assistance',
      'Automated savings',
      'Premium mobile features'
    ],
    popular: true,
    color: 'from-indigo-500 to-purple-600',
    lightColor: 'from-indigo-50 to-white',
    savings: '20% off yearly',
    yearlyPrice: '$95.88'
  },
  {
    name: 'Business',
    icon: faBuilding,
    price: '$24.99',
    period: '/month',
    description: 'Complete solution for small businesses and teams',
    features: [
      'Multiple user accounts',
      'Business analytics',
      'API access',
      '24/7 phone support',
      'Custom reports',
      'Team collaboration',
      'Expense tracking',
      'Vendor management',
      'Integration support'
    ],
    color: 'from-green-500 to-green-600',
    lightColor: 'from-green-50 to-white',
    savings: '25% off yearly',
    yearlyPrice: '$224.88'
  }
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('pricing');
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
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`
          text-center transform transition-all duration-700 max-w-3xl mx-auto
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          <span className="text-sm sm:text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Pricing Plans
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Choose the Perfect Plan for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              Your Finance Goals
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Simple, transparent pricing that grows with you
          </p>

          {/* Billing Toggle */}
          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-x-3 sm:gap-x-4">
            <span className={`text-xs sm:text-sm ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <button
              type="button"
              className={`
                relative inline-flex h-5 sm:h-6 w-10 sm:w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
                transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2
                ${isYearly ? 'bg-indigo-600' : 'bg-gray-200'}
              `}
              onClick={() => setIsYearly(!isYearly)}
            >
              <span className="sr-only">Toggle billing period</span>
              <span
                className={`
                  pointer-events-none inline-block h-4 sm:h-5 w-4 sm:w-5 transform rounded-full bg-white shadow ring-0 
                  transition duration-200 ease-in-out
                  ${isYearly ? 'translate-x-5' : 'translate-x-0'}
                `}
              />
            </button>
            <span className={`text-xs sm:text-sm ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
              <span className="inline-flex items-center justify-center ml-1 sm:ml-2 px-1.5 sm:px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Save up to 25%
              </span>
            </span>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 xl:gap-8 max-w-[1200px] mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`
                relative rounded-2xl bg-white shadow-lg transform transition-all duration-300 hover:scale-105
                ${plan.popular ? 'md:-translate-y-4' : ''}
              `}
            >
              {plan.popular && (
                <div className="absolute -top-5 inset-x-0 flex justify-center">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-6 xl:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center`}>
                    <FontAwesomeIcon icon={plan.icon} className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                      {isYearly ? plan.yearlyPrice || plan.price : plan.price}
                    </span>
                    {plan.period && (
                      <span className="ml-2 text-sm text-gray-500">
                        {isYearly ? '/year' : plan.period}
                      </span>
                    )}
                  </div>
                  {isYearly && plan.savings && (
                    <p className="mt-1 text-sm text-green-600 font-medium">{plan.savings}</p>
                  )}
                </div>

                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} bg-opacity-10 flex items-center justify-center mt-0.5`}>
                        <FontAwesomeIcon 
                          icon={getFeatureIcon(feature)} 
                          className={`h-3 w-3 ${plan.color.includes('indigo') ? 'text-indigo-600' : plan.color.includes('blue') ? 'text-blue-600' : 'text-green-600'}`} 
                        />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <button
                    className={`
                      w-full px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-300
                      ${plan.popular
                        ? 'text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-md hover:shadow-xl'
                        : 'text-gray-700 bg-gray-50 hover:bg-gray-100'
                      }
                    `}
                  >
                    Get Started
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
