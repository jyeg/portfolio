'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          jy labs
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link
            href="/services"
            className={cn('hover:text-blue-600 transition-colors', {
              'text-blue-600': pathname === '/services',
            })}
          >
            Services
          </Link>
          {/* <Link
            href="/work"
            className={cn("hover:text-blue-600 transition-colors", {
              "text-blue-600": pathname === "/work",
            })}
          >
            Work
          </Link> */}

          <Link
            href="/contact"
            className={cn('hover:text-blue-600 transition-colors', {
              'text-blue-600': pathname === '/contact',
            })}
          >
            Contact
          </Link>
          <Link
            href="/about"
            className={cn('hover:text-blue-600 transition-colors', {
              'text-blue-600': pathname === '/about',
            })}
          >
            About Me
          </Link>
          <Link
            href="/playground"
            className={cn('hover:text-blue-600 transition-colors', {
              'text-blue-600': pathname === '/playground',
            })}
          >
            Playground
          </Link>
        </div>
        <Button asChild className="hidden md:inline-flex">
          <Link href="/contact">Get Started</Link>
        </Button>
        <div className="md:hidden">
          <input type="checkbox" id="menu-toggle" className="hidden" />
          <label htmlFor="menu-toggle" className="cursor-pointer">
            <Menu className="h-6 w-6" />
          </label>
          <div className="menu-content hidden">
            <div className="bg-white py-2">
              <div className="container mx-auto px-4 flex flex-col space-y-2">
                <Link
                  href="/services"
                  className="hover:text-blue-600 transition-colors py-2"
                >
                  Services
                </Link>
                {/* <Link
                  href="/work"
                  className="hover:text-blue-600 transition-colors py-2"
                >
                  Work
                </Link> */}

                <Link
                  href="/contact"
                  className="hover:text-blue-600 transition-colors py-2"
                >
                  Contact
                </Link>
                <Link
                  href="/about"
                  className="hover:text-blue-600 transition-colors py-2"
                >
                  About Me
                </Link>
                <Link
                  href="/playground"
                  className="hover:text-blue-600 transition-colors py-2"
                >
                  Playground
                </Link>
                <Button asChild className="w-full">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
