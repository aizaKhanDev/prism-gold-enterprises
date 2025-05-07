import React from 'react';

export default function ITExpertSection() {
  return (
    <section className="relative w-full flex flex-col items-center py-12 bg-white" style={{ minHeight: '600px' }}>
      {/* Decorative green shapes (top right) */}
      <div className="absolute top-0 right-0 flex gap-2 p-6 z-10">
        <div className="w-12 h-3 bg-lime-500 rounded-full rotate-12" />
        <div className="w-12 h-3 bg-lime-500 rounded-full rotate-12" />
        <div className="w-12 h-3 bg-lime-500 rounded-full rotate-12" />
        <div className="w-12 h-3 bg-lime-500 rounded-full rotate-12" />
        <div className="w-12 h-3 bg-lime-500 rounded-full rotate-12" />
      </div>
      {/* Centered Heading */}
      <div className="w-full flex flex-col items-center mb-8 z-10">
        <div className="text-xs text-gray-600 mb-2">Let's take our IT technology service</div>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-1">WE'RE PROVIDING THE BEST</h2>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">CONSTRUCTION SOLUTION BY OUR EXPERT</h2>
      </div>
      {/* Main Content Row */}
      <div className="flex flex-row w-11/12 max-w-6xl mx-auto items-start gap-8 z-10">
        {/* Left Image with blue border and overlap */}
        <div className="relative flex-shrink-0 flex items-center justify-center" style={{ width: 380, height: 320 }}>
          <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-600 rounded z-0" />
          <video
              src="/images/body.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-80 object-cover rounded-xl shadow-md"
            />
        </div>
        {/* Right Content */}
        <div className="flex-1 flex flex-col justify-start items-start">
          <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting</h3>
          <p className="text-gray-600 mb-6 max-w-xl text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          {/* Bullet Points */}
          <ul className="flex flex-col gap-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="w-7 h-7 flex items-center justify-center bg-lime-500 rounded-full text-white mt-1">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
              </span>
              <span className="text-gray-700 text-sm md:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-7 h-7 flex items-center justify-center bg-lime-500 rounded-full text-white mt-1">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
              </span>
              <span className="text-gray-700 text-sm md:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-7 h-7 flex items-center justify-center bg-lime-500 rounded-full text-white mt-1">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/></svg>
              </span>
              <span className="text-gray-700 text-sm md:text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</span>
            </li>
          </ul>
          {/* Read More Button */}
          <button className="bg-lime-700 hover:bg-lime-800 text-white font-semibold px-8 py-2 rounded-full text-lg shadow transition">Read more</button>
        </div>
      </div>
    </section>
  );
} 