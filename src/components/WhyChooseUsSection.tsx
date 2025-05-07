"use client";
import React from "react";

const cards = [
  {
    icon: (
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" className="transition-colors duration-300 group-hover:stroke-blue-400">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 2" strokeLinecap="round" />
      </svg>
    ),
    title: "Futuristic Solutions",
    text: "Cutting-edge solutions with a focus on innovation and reliability for every project."
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" className="transition-colors duration-300 group-hover:stroke-purple-400">
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <path d="M8 12h8M12 8v8" strokeLinecap="round" />
      </svg>
    ),
    title: "Expert Collaboration",
    text: "Expertise across construction, tech, and trade with a collaborative approach."
  },
  {
    icon: (
      <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" className="transition-colors duration-300 group-hover:stroke-green-400">
        <rect x="6" y="8" width="12" height="10" rx="2" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" />
      </svg>
    ),
    title: "Trusted by Leaders",
    text: "Trusted by industry leaders, delivering results with transparency and integrity."
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="w-full font-sans" style={{ fontFamily: 'Inter, Satoshi, Arial, sans-serif' }}>
      {/* Aurora Animated Background */}
      <div className="relative w-full min-h-[520px] flex flex-col items-center justify-center overflow-hidden px-2 py-16" style={{ background: "rgba(0,0,0,0.50)" }}>
        {/* Aurora blobs */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute w-[600px] h-[400px] bg-gradient-to-br from-blue-400 via-green-300 to-blue-200 opacity-30 rounded-full blur-3xl animate-aurora1 left-[-200px] top-[-100px]" />
          <div className="absolute w-[500px] h-[350px] bg-gradient-to-tr from-green-300 via-blue-400 to-blue-200 opacity-25 rounded-full blur-2xl animate-aurora2 right-[-150px] bottom-[-80px]" />
        </div>
        <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold text-center mb-12 text-white tracking-tight animate-fade-in" style={{ letterSpacing: '-0.02em' }}>
          Why We Choose <span className="text-blue-400">Us</span>
        </h2>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-14 animate-fade-in-up">
          {cards.map((card, i) => (
            <div key={i} className="group flex flex-col items-center text-white p-8 rounded-3xl border border-white/20 shadow-2xl backdrop-blur-xl bg-white/10 hover:scale-[1.045] hover:shadow-[0_8px_32px_rgba(124,58,237,0.18)] hover:border-blue-400/40 transition-all duration-300 ease-out relative overflow-hidden min-h-[220px]">
              <div className="flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-extrabold mb-2 text-white tracking-tight">{card.title}</h3>
              <p className="text-center text-base font-medium text-white/90">{card.text}</p>
              <div className="absolute inset-0 pointer-events-none rounded-3xl border border-white/10 group-hover:border-blue-400/40 transition-all duration-300" />
            </div>
          ))}
        </div>
        <button className="relative z-10 mt-2 px-12 py-3 text-lg font-extrabold rounded-full shadow-lg bg-white text-black border-2 border-white outline-none flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_32px_0_rgba(255,255,255,0.20)] hover:ring-4 hover:ring-white/10 focus:ring-4 focus:ring-white/20 animate-float active:scale-95">
          Connect Us
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-6 h-6 ml-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
      {/* Get In Touch Section */}
    
    </section>
  );
} 