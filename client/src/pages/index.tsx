import { Inter } from 'next/font/google';
import Home from './landingPage';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Home />
  );
}
