import React from 'react';

export default function GetInTouchModern() {
  return (
    <section className="w-full min-h-[600px] flex flex-col md:flex-row">
      {/* Left: Contact Info */}
      <div className="w-full md:w-1/3 bg-white flex flex-col justify-between p-8 md:p-12 shadow-xl">
        <div>
          {/* Logo/Icon */}
          <div className="mb-8 flex items-center">
            <svg width="32" height="32" fill="none" stroke="#222" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M6 12h12M12 6v12" strokeLinecap="round" />
            </svg>
          </div>
          {/* Email */}
          <div className="mb-4">
            <span className="text-2xl font-bold text-gray-900">info@prismgold.com</span>
          </div>
          <div className="mb-8 text-gray-700">
            Need more information or want to start a project? <br />
            Drop us an email at <strong>info@prismgold.com</strong> or simply use the form to get in touch.
            We're here to help with design, development, and strategy.
          </div>
        </div>
        <div>
          {/* Location */}
          <div className="flex items-start gap-3 mt-8">
            <svg width="28" height="28" fill="none" stroke="#1B69AA" strokeWidth="2.2" viewBox="0 0 24 24">
              <path d="M12 21s-6-5.686-6-10A6 6 0 1112 21z" />
              <circle cx="12" cy="11" r="2.5" />
            </svg>
            <div>
              <span className="font-bold text-gray-900">Prism HQ, Karachi, PK</span>
              <div className="text-gray-600 text-sm">
                Prefer a face-to-face meeting? We're happy to meet at our office or connect online.
                Our office is located in the heart of Karachi. Feel free to visit us during business hours or schedule an online consultation.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Form */}
      <div className="w-full md:w-2/3 min-h-[600px] bg-gradient-to-br from-teal-700 via-cyan-700 to-green-400 flex flex-col justify-center p-8 md:p-16" style={{ background: 'linear-gradient(120deg,rgb(119, 204, 122) 0%,rgb(154, 179, 115) 40%, #1B69AA 100%)' }}>
        <div className="max-w-2xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4 text-left">Get in touch</h2>
          <hr className="border-t border-black/40 mb-8" />
          <form className="space-y-8">
            {/* Full Name */}
            <div>
              <label className="block text-black text-lg font-semibold mb-2">Full Name</label>
              <div className="relative">
                <input type="text" placeholder="John Doe" className="w-full pl-12 pr-4 py-3 rounded-md bg-white/90 border border-black/30 text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all duration-200" />
                <div className="absolute left-4 top-3.5 text-gray-500">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5.121 17.804A10.002 10.002 0 0112 2a10 10 0 016.879 15.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-black text-lg font-semibold mb-2">Email</label>
              <div className="relative">
                <input type="email" placeholder="you@example.com" className="w-full pl-12 pr-4 py-3 rounded-md bg-white/90 border border-black/30 text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all duration-200" />
                <div className="absolute left-4 top-3.5 text-gray-500">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16v16H4z" fill="none" />
                    <path d="M4 4l8 8 8-8" />
                  </svg>
                </div>
              </div>
            </div>

            {/* What do you need? */}
            <div>
              <label className="block text-black text-lg font-semibold mb-2">What do you need?</label>
              <div className="flex flex-wrap gap-3">
                {["UX Design", "UX Research", "Web Design", "App Design", "Product Review", "Prototyping", "Strategy", "User Testing", "I'm not sure"].map((opt, i) => (
                  <button type="button" key={i} className="px-4 py-2 rounded-md border border-black/40 text-black bg-white/70 hover:bg-cyan-200 hover:text-black transition font-medium text-sm">{opt}</button>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div>
              <label className="block text-black text-lg font-semibold mb-2">Project Details</label>
              <div className="relative">
                <textarea rows={4} placeholder="Tell us what you're building, goals, timeline..." className="w-full pl-12 pr-4 py-3 rounded-md bg-white/90 border border-black/30 text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all duration-200" />
                <div className="absolute left-4 top-3 text-gray-500">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 5h18M8 5v14m8-14v14M3 19h18" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button type="submit" className="px-8 py-3 rounded-full bg-black text-white font-bold text-lg shadow-lg hover:bg-gray-800 transition-all duration-300">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
