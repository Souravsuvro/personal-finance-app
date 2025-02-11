import './globals.css';
import { Inter } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Prevent FontAwesome from adding its CSS since we did it manually above
config.autoAddCss = false;

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'AI-Powered Personal Finance | Smart Money Management',
  description: 'Take control of your finances with AI-powered insights and smart money management tools.',
  keywords: [
    'personal finance',
    'money management',
    'AI finance',
    'budget tracking',
    'financial planning',
    'expense tracking',
    'smart savings'
  ],
  authors: [{ name: 'Your Company Name' }],
  creator: 'Your Company Name',
  publisher: 'Your Company Name',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'AI-Powered Personal Finance | Smart Money Management',
    description: 'Take control of your finances with AI-powered insights and smart money management tools.',
    url: '/',
    siteName: 'AI Personal Finance',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered Personal Finance | Smart Money Management',
    description: 'Take control of your finances with AI-powered insights and smart money management tools.',
    creator: '@yourtwitter',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="antialiased bg-gray-50 font-sans">{children}</body>
    </html>
  );
}
