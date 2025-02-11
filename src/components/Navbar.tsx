'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToHero = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={scrollToHero}
            >
              <Image
                className="h-8 w-auto"
                src="/logo_placeholder.png"
                alt="Logo"
                width={250}
                height={150}
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="#features" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                Features
              </Link>
              <Link href="#how-it-works" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                How it Works
              </Link>
              <Link href="#pricing" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Pricing
              </Link>
              <Link href="#faq" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                FAQ
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <Link 
              href="/login"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-button transition-colors duration-300"
            >
              Log in
            </Link>
            <Link 
              href="/signup"
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 rounded-button transition-all duration-300"
            >
              Sign up
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full bg-gray-50 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon 
                icon={isOpen ? faXmark : faBars} 
                className={`h-5 w-5 transform transition-all duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`} 
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`
          sm:hidden fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Backdrop */}
        <div 
          className={`
            absolute inset-0 bg-gray-900/20 backdrop-blur-sm transition-opacity duration-300
            ${isOpen ? 'opacity-100' : 'opacity-0'}
          `}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu panel */}
        <div className="absolute right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl">
          <div className="relative h-full flex flex-col">
            {/* Close button */}
            <div className="absolute right-4 top-4">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full bg-gray-50 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300 focus:outline-none"
                aria-label="Close menu"
              >
                <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
              </button>
            </div>

            {/* Logo */}
            <div className="p-6 pb-0">
              <Image
                className="h-8 w-auto"
                src="/logo_placeholder.png"
                alt="Logo"
                width={250}
                height={150}
              />
            </div>

            {/* Navigation Links */}
            <div className="pt-16 px-4">
              <div className="space-y-1">
                <Link
                  href="#features"
                  className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="#how-it-works"
                  className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  How it Works
                </Link>
                <Link
                  href="#pricing"
                  className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="#faq"
                  className="block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  FAQ
                </Link>
              </div>

              {/* Mobile Auth Buttons */}
              <div className="mt-6 space-y-4">
                <Link
                  href="/login"
                  className="w-full block px-4 py-2 text-center text-base font-medium text-gray-700 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-button transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="w-full block px-4 py-2 text-center text-base font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 rounded-button transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
