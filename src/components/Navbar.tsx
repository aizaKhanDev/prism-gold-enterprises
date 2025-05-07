import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl bg-white/100 backdrop-blur-lg shadow-xl rounded-2xl border border-gray-200">
      <div className="flex items-center justify-between h-24 px-6 md:px-12">
        {/* Logo Section */}
        <a href="#" className="flex items-center gap-3">
          <img
            src="images/logo.png"
            alt="Prism Gold Enterprises Logo"
            className="h-28 w-auto drop-shadow-lg"
          />
        </a>
        {/* Navigation Links */}
        <ul className="hidden md:flex gap-10 items-center">
          {[
            { label: 'Home', href: '#', active: true },
            { label: 'Services', href: '/services' },
            { label: 'About Us', href: '#' },
            { label: 'Projects & Portfolio', href: '#' },
          ].map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className={`relative font-semibold text-lg px-2 transition-colors duration-200 ${link.active ? 'text-green-700' : 'text-gray-700 hover:text-green-700'}`}
              >
                {link.label}
                <span className={`absolute left-0 -bottom-1 w-full h-0.5 rounded bg-green-600 transition-all duration-300 ${link.active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
              </a>
            </li>
          ))}
        </ul>
        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          <button
            className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3 text-lg rounded-full font-bold shadow-lg transition-all duration-300 transform hover:scale-105"
            aria-label="Contact"
          >
            Contact
          </button>
          <button
            className="p-3 rounded-full hover:bg-blue-50 transition"
            aria-label="Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth={2}
              stroke="currentColor" className="w-7 h-7 text-blue-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
