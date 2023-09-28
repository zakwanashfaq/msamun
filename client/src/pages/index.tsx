import './globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';  // Import the Head component from Next.js
import Home from './landingPage';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Home />
  );
}
