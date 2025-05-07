"use client";
import React from "react";

export default function ServicesHeader() {
  return (
    <div className="relative w-full h-[260px] md:h-[320px] flex items-center justify-center mb-10">
      {/* Background Image */}
      <img
        src="/images/services-header.jpg" // Use your actual image path
        alt="Services Header"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      {/* Blue Border at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-3 bg-blue-700" />
      {/* Centered Text */}
      <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold text-white text-center drop-shadow-lg">
        Services We Provide
      </h1>
    </div>
  );
} 