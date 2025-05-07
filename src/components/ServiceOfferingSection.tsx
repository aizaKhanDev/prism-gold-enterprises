"use client";

import React, { useEffect, useState } from 'react';

function useCountUp(end: number, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    let raf: number;
    function animate() {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        raf = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }
    animate();
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);
  return count;
}

export default function ServiceOfferingSection() {
  const itCount = useCountUp(25);
  const importExportCount = useCountUp(75);
  const constructionCount = useCountUp(90);
  return (
    <section className="relative bg-white py-16 px-0 flex flex-col items-center mx-auto min-h-[800px]" style={{ width: '80vw' }}>
      <div className="flex flex-row w-full min-h-[500px] justify-center items-stretch gap-8">
        {/* Left Blue Panel */}
        <div className="bg-[#1766a6] text-white p-12 flex flex-col justify-between w-[32%] min-w-[350px] max-w-[520px] rounded-2xl shadow-xl">
          <div>
            <div className="text-lg mb-4 flex items-center gap-3 font-semibold">
              <span>What we provide?</span>
              <span className="ml-1 text-2xl">→</span>
            </div>
            <h2 className="text-4xl font-extrabold mb-6 leading-tight">Service we are<br />offering</h2>
            <p className="mb-8 text-lg opacity-95 font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
          <div className="flex flex-row gap-4 mt-4">
            <video
              src="/images/importExport.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-80 object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
        {/* Center Bullet Points */}
        <div className="flex-1 flex flex-col justify-center px-12 gap-12">
          <div className="flex flex-col gap-16">
            <div className="flex items-start gap-5">
              <span className="w-6 h-6 bg-[#1766a6] rounded-full mt-2"></span>
              <p className="text-gray-700 text-xl font-medium leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            </div>
            <div className="flex items-start gap-5">
              <span className="w-6 h-6 bg-[#1766a6] rounded-full mt-2"></span>
              <p className="text-gray-700 text-xl font-medium leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            </div>
            <div className="flex items-start gap-5">
              <span className="w-6 h-6 bg-[#1766a6] rounded-full mt-2"></span>
              <p className="text-gray-700 text-xl font-medium leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            </div>
          </div>
        </div>
        {/* Right Vertical Sidebar (Gray) */}
        <div className="flex flex-col items-center justify-center bg-gray-100 w-[22%] min-w-[220px] max-w-[320px] p-8 gap-16 rounded-2xl shadow-xl relative">
          <div className="flex flex-col items-center gap-4">
            <svg width="56" height="56" fill="none" stroke="#1766a6" strokeWidth="2.5" viewBox="0 0 24 24"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M9 8V6a3 3 0 1 1 6 0v2"/></svg>
            <span className="text-gray-700 font-bold text-xl">Construction</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <svg width="56" height="56" fill="none" stroke="#1766a6" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>
            <span className="text-gray-700 font-bold text-xl">Import/Export</span>
          </div>
          <div className="flex flex-col items-center gap-4">
            <svg width="56" height="56" fill="none" stroke="#1766a6" strokeWidth="2.5" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8v8H8z"/></svg>
            <span className="text-gray-700 font-bold text-xl">IT Technology</span>
          </div>
          {/* Vertical Blue Sidebar (Far Right) */}
          <div className="absolute top-0 right-[-70px] h-full flex flex-col items-center justify-center bg-[#1766a6] w-16 py-8 gap-10 rounded-tr-2xl rounded-br-2xl shadow-xl">
            <span className="text-white text-lg font-semibold rotate-90 whitespace-nowrap">IT Technology</span>
            <span className="text-white text-2xl">✦</span>
            <span className="text-white text-lg font-semibold rotate-90 whitespace-nowrap">Import/Export</span>
            <span className="text-white text-2xl">✦</span>
            <span className="text-white text-lg font-semibold rotate-90 whitespace-nowrap">Construction</span>
          </div>
        </div>
      </div>
      {/* Customer Stats Row - Full Width */}
      <div className="flex flex-row justify-center gap-40 mt-20 w-full">
        <div className="flex flex-col items-center">
          <div className="w-56 h-56 rounded-full border-[18px] border-[#1766a6] border-b-[#7bb32e] flex items-center justify-center text-center shadow-lg">
            <div>
              <div className="text-4xl font-extrabold text-[#1766a6]">{itCount.toLocaleString()}K+</div>
              <div className="text-2xl font-bold text-gray-700">IT Customers</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-56 h-56 rounded-full border-[18px] border-[#7bb32e] border-b-[#1766a6] flex items-center justify-center text-center shadow-lg">
            <div>
              <div className="text-4xl font-extrabold text-[#7bb32e]">{importExportCount.toLocaleString()}K+</div>
              <div className="text-2xl font-bold text-gray-700">Import/Export Customers</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-56 h-56 rounded-full border-[18px] border-[#7bb32e] border-b-[#1766a6] flex items-center justify-center text-center shadow-lg">
            <div>
              <div className="text-4xl font-extrabold text-[#7bb32e]">{constructionCount.toLocaleString()}K+</div>
              <div className="text-2xl font-bold text-gray-700">Construction Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 