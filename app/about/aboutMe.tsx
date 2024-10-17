"use client";

import Link from "next/link";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-6">
          {["Home", "Experience", "Skills", "Projects", "Contact"].map(
            (item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium hover:text-blue-400 transition-colors ${
                    activeSection ===
                    (item.toLowerCase() === "home"
                      ? "hero"
                      : item.toLowerCase())
                      ? "text-blue-400"
                      : ""
                  }`}
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}
