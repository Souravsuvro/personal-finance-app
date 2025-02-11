'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const faqs = [
  {
    question: 'Is my financial data secure?',
    answer: 'Yes, we use bank-level 256-bit encryption and never store your banking credentials. Your security is our top priority.'
  },
  {
    question: 'How does the AI work?',
    answer: 'Our AI analyzes your transaction patterns, spending habits, and financial goals to provide personalized recommendations and insights.'
  },
  {
    question: 'Can I connect multiple bank accounts?',
    answer: 'Yes, you can connect multiple bank accounts, credit cards, and investment accounts to get a complete view of your finances.'
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, we offer a 30-day free trial with full access to all features. No credit card required.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Have questions? We're here to help.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow transition-shadow duration-200"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-sm sm:text-base font-medium text-gray-900">{faq.question}</span>
                  <FontAwesomeIcon
                    icon={openIndex === index ? faChevronUp : faChevronDown}
                    className={`ml-4 h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-200 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-sm sm:text-base text-gray-500">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
