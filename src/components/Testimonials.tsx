'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faQuoteLeft, 
  faChevronLeft, 
  faChevronRight,
  faStar
} from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    name: 'Robert Johnson',
    role: 'Small Business Owner',
    image: '/testimonials/ceo1.jpg',
    quote: 'The AI insights have completely transformed how I manage my business finances. I\'ve saved thousands in unnecessary expenses.',
    rating: 5,
    metrics: {
      saved: '$15,000',
      timeframe: '6 months',
      improvement: '35%'
    }
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    image: '/testimonials/ceo2.jpg',
    quote: 'The automated categorization and predictions have made budgeting effortless. I\'m finally saving consistently.',
    rating: 5,
    metrics: {
      saved: '$8,500',
      timeframe: '4 months',
      improvement: '28%'
    }
  },
  {
    name: 'Michael Rodriguez',
    role: 'Marketing Director',
    image: '/testimonials/ceo3.jpg',
    quote: 'I love how the AI adapts to my spending habits and provides personalized recommendations. It\'s like having a financial advisor in my pocket.',
    rating: 5,
    metrics: {
      saved: '$12,000',
      timeframe: '5 months',
      improvement: '42%'
    }
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance for gesture detection
  const minSwipeDistance = 50;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('testimonials');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handlePrevious = () => {
    setDirection('left');
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection('right');
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Touch event handlers for swipe gestures
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`
          text-center transform transition-all duration-700 max-w-2xl mx-auto mb-12 lg:mb-16
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
        `}>
          <span className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Testimonials
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Success Stories from Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              Happy Users
            </span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            See how our AI-powered platform is helping people achieve their financial goals
          </p>
        </div>

        <div className="mt-8 relative">
          {/* Navigation Buttons - Hidden on mobile, shown on tablet and up */}
          <div className="hidden sm:block">
            <div className="absolute top-1/2 left-0 lg:-left-4 -translate-y-1/2 z-10">
              <button
                onClick={handlePrevious}
                className="p-3 rounded-full bg-white/90 backdrop-blur shadow-lg hover:shadow-xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-label="Previous testimonial"
              >
                <FontAwesomeIcon 
                  icon={faChevronLeft} 
                  className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 transition-colors duration-300" 
                />
              </button>
            </div>
            <div className="absolute top-1/2 right-0 lg:-right-4 -translate-y-1/2 z-10">
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white/90 backdrop-blur shadow-lg hover:shadow-xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-label="Next testimonial"
              >
                <FontAwesomeIcon 
                  icon={faChevronRight} 
                  className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 transition-colors duration-300" 
                />
              </button>
            </div>
          </div>

          {/* Testimonial Cards with Touch Support */}
          <div 
            className="relative touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="flex transition-transform duration-500 ease-in-out">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`
                    w-full flex-shrink-0 transition-all duration-700
                    transform px-4
                    ${index === activeIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-40'}
                    ${direction === 'left' ? 'translate-x-full' : direction === 'right' ? '-translate-x-full' : ''}
                  `}
                  style={{
                    transform: `translateX(-${activeIndex * 100}%)`,
                  }}
                >
                  <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8 lg:p-10">
                      {/* Quote Icon */}
                      <div className="absolute -top-3 -left-3">
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full p-2.5 shadow-lg">
                          <FontAwesomeIcon icon={faQuoteLeft} className="h-4 w-4 text-white" />
                        </div>
                      </div>

                      <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start">
                        {/* Profile Section */}
                        <div className="lg:col-span-4 text-center lg:text-left">
                          <div className="relative inline-block">
                            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-4 ring-indigo-50 mx-auto lg:mx-0">
                              <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                width={128}
                                height={128}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full p-1.5 shadow-lg">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>
                          
                          <div className="mt-4 mb-6 lg:mb-0">
                            <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">{testimonial.role}</p>
                            <div className="flex justify-center lg:justify-start mt-2">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <FontAwesomeIcon 
                                  key={i} 
                                  icon={faStar} 
                                  className="h-4 w-4 text-yellow-400" 
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="lg:col-span-8">
                          <blockquote className="text-lg sm:text-xl text-gray-700 mb-6 lg:mb-8 italic">
                            "{testimonial.quote}"
                          </blockquote>

                          {/* Metrics */}
                          <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl">
                            <div className="text-center">
                              <div className="text-xl sm:text-2xl font-bold text-indigo-600">{testimonial.metrics.saved}</div>
                              <div className="text-sm text-gray-600 mt-1">Total Saved</div>
                            </div>
                            <div className="text-center border-x border-gray-200">
                              <div className="text-xl sm:text-2xl font-bold text-indigo-600">{testimonial.metrics.timeframe}</div>
                              <div className="text-sm text-gray-600 mt-1">Time Period</div>
                            </div>
                            <div className="text-center">
                              <div className="text-xl sm:text-2xl font-bold text-green-600">{testimonial.metrics.improvement}</div>
                              <div className="text-sm text-gray-600 mt-1">Improvement</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`
                  w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                  ${index === activeIndex 
                    ? 'w-8 bg-gradient-to-r from-indigo-500 to-purple-600' 
                    : 'bg-gray-300 hover:bg-gray-400'}
                `}
                aria-label={`Go to testimonial ${index + 1} of ${testimonials.length}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
