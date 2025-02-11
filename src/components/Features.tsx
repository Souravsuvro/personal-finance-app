'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartLine, 
  faRobot, 
  faShieldHalved, 
  faBullseye,
  faWallet,
  faBell
} from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    icon: faChartLine,
    title: 'Smart Analytics',
    description: 'Get detailed insights into your spending patterns with interactive charts and reports.',
    benefits: [
      'Expense tracking by category',
      'Monthly trend analysis',
      'Custom report generation'
    ]
  },
  {
    icon: faRobot,
    title: 'AI-Powered Insights',
    description: 'Let our AI analyze your finances and provide personalized recommendations.',
    benefits: [
      'Personalized savings tips',
      'Anomaly detection',
      'Smart budget suggestions'
    ]
  },
  {
    icon: faShieldHalved,
    title: 'Bank-Grade Security',
    description: 'Your financial data is protected with the highest level of encryption and security.',
    benefits: [
      'End-to-end encryption',
      'Two-factor authentication',
      'Regular security audits'
    ]
  },
  {
    icon: faBullseye,
    title: 'Goal Tracking',
    description: 'Set and track your financial goals with our intuitive goal-setting features.',
    benefits: [
      'Custom goal setting',
      'Progress tracking',
      'Milestone celebrations'
    ]
  },
  {
    icon: faWallet,
    title: 'Multi-Account Support',
    description: 'Connect and manage all your financial accounts in one secure place.',
    benefits: [
      'Bank account integration',
      'Credit card tracking',
      'Investment monitoring'
    ]
  },
  {
    icon: faBell,
    title: 'Smart Notifications',
    description: 'Stay on top of your finances with intelligent alerts and reminders.',
    benefits: [
      'Bill payment reminders',
      'Unusual activity alerts',
      'Budget limit notifications'
    ]
  }
];

export default function Features() {
  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Powerful Features for {' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              Financial Success
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Everything you need to take control of your finances and build a better financial future.
          </p>
        </div>

        {/* Main Feature with Image */}
        <div className="mt-12 sm:mt-16 lg:mt-24">
          <div className="relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
            </div>

            {/* Content Container */}
            <div className="relative lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              {/* Text Content */}
              <div className="lg:pr-8 xl:pr-12">
                <div className="text-base text-indigo-600 font-semibold tracking-wide uppercase mb-4">
                  Featured Dashboard
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Intelligent Financial Dashboard
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Get a comprehensive view of your finances with our intuitive dashboard. 
                  Track spending, monitor investments, and receive AI-powered insights all in one place.
                </p>
                
                {/* Feature List */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                      <FontAwesomeIcon icon={faChartLine} className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Real-time Tracking</h4>
                      <p className="text-gray-600">Monitor your transactions and account balances as they happen</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                      <FontAwesomeIcon icon={faRobot} className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">AI-powered Analysis</h4>
                      <p className="text-gray-600">Get smart insights and recommendations for your spending habits</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                      <FontAwesomeIcon icon={faBullseye} className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Smart Goals</h4>
                      <p className="text-gray-600">Set and track your financial goals with intelligent milestones</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Container */}
              <div className="mt-12 lg:mt-0 relative">
                <div className="relative mx-auto max-w-[600px]">
                  {/* Main Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <div className="aspect-[4/3]">
                      <Image
                        src="/dashboard-features.png"
                        alt="Smart Dashboard Interface"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-purple-500/10"></div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl transform rotate-12 opacity-50 blur-2xl animate-pulse"></div>
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full opacity-50 blur-2xl animate-pulse animation-delay-2000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50"></div>
                  <div className="absolute right-0 bottom-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-600/10 rounded-full transform translate-x-16 translate-y-16"></div>
                  <div className="absolute left-0 top-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-indigo-600/10 rounded-full transform -translate-x-12 -translate-y-12"></div>
                </div>

                {/* Icon */}
                <div className="relative">
                  <div className="inline-flex mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 transform group-hover:scale-110 transition-transform duration-500">
                        <FontAwesomeIcon icon={feature.icon} className="h-7 w-7 text-white" />
                      </div>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 blur-lg opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li 
                          key={benefitIndex} 
                          className="flex items-center gap-3 text-gray-700 group/item"
                        >
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75 group-hover/item:bg-purple-400 transition-colors duration-300"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500 group-hover/item:bg-purple-500 transition-colors duration-300"></span>
                          </span>
                          <span className="text-sm font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/10 rounded-2xl transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
