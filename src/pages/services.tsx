"use client";

import React from "react";
import ServicesHeader from "@/components/ServicesHeader";

const services = [
  {
    icon: (
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <path d="M8 12h8M12 8v8" strokeLinecap="round" />
      </svg>
    ),
    title: "IT Solutions",
    desc: "Cutting-edge IT services for businesses of all sizes, from cloud to cybersecurity."
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 2" strokeLinecap="round" />
      </svg>
    ),
    title: "Construction",
    desc: "Modern construction solutions with a focus on sustainability and efficiency."
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <rect x="6" y="8" width="12" height="10" rx="2" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
      </svg>
    ),
    title: "Import/Export",
    desc: "Seamless global trade and logistics services for your growing business."
  }
];

export default function ServicesPage() {
  return (
    <main>
      <ServicesHeader />
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 px-4">
        <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center">
          {/* Glassmorphism Card */}
          <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-3xl shadow-2xl p-10 w-full flex flex-col items-center mb-12">
            <h1 className="text-5xl font-extrabold text-blue-900 mb-4 tracking-tight">Our Services</h1>
            <p className="text-lg text-gray-700 mb-6 text-center max-w-2xl">
              Discover our range of services designed to help your business thrive in the modern world.
            </p>
          </div>
          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white/80 border border-blue-100 rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-2xl backdrop-blur-lg"
              >
                <div className="mb-4 text-blue-700 group-hover:text-green-600 transition-colors">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-2 text-blue-900 group-hover:text-green-700 transition-colors">{service.title}</h2>
                <p className="text-gray-700 text-center">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 