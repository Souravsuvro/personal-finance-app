'use client';

import Image from 'next/image';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <section id="hero" className="pt-20 pb-16 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto pt-16 pb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <Typewriter
              options={{
                strings: [
                  'Take Control of Your Finances with AI',
                  'Smart Money Management with AI',
                  'Your Financial Future with AI'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
                wrapperClassName: "inline-block",
                cursorClassName: "text-indigo-500"
              }}
            />
          </h1>
          <p className="mt-6 text-xl text-gray-500">
            Harness the power of artificial intelligence to manage your money smarter. Get personalized insights, automate your savings, and achieve your financial goals faster.
          </p>
          <div className="mt-8">
            <button className="px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 rounded-button transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started Free
            </button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/dashboard.jpg"
            alt="AI Finance Dashboard"
            width={800}
            height={600}
            className="rounded-lg shadow-xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
