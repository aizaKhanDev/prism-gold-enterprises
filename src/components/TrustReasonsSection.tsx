"use client";
import { motion } from 'framer-motion';

const reasons = [
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-blue-600">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#e0f2fe" />
        <path d="M12 17l4-4-1.41-1.41L12 14.17l-2.59-2.58L8 13l4 4z" fill="#2563eb" />
        <path d="M12 7v5" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Safety & Protection',
    desc: "Your data and assets are always secure with our advanced protection protocols.",
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-green-600">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#dcfce7" />
        <path d="M9 10a3 3 0 106 0 3 3 0 00-6 0z" stroke="#16a34a" strokeWidth="2" />
        <path d="M12 13v2m0 0h-2m2 0h2" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Customer Happiness is Our Priority',
    desc: "We put your satisfaction first, ensuring a delightful experience every time.",
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-yellow-600">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#fef9c3" />
        <path d="M12 7v5l3 3" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" stroke="#eab308" strokeWidth="2" />
      </svg>
    ),
    title: 'Always Here For Solving Problem',
    desc: "Our team is always ready to help you solve any challenge, any time.",
  },
];

export default function TrustReasonsSection() {
  return (
    <section className="w-full flex flex-col items-center py-16 px-2 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="bg-white/90 rounded-2xl shadow-2xl p-8 md:p-14 w-full max-w-6xl flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center bg-gradient-to-r from-blue-700 via-green-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">3 Reasons To Trust Our Services</h2>
        <div className="flex gap-2 mb-10">
          <span className="bg-green-200 text-green-800 px-3 py-1 rounded font-semibold text-xs">Trust</span>
          <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded font-semibold text-xs">Worth</span>
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded font-semibold text-xs">Achieve</span>
        </div>
        <div className="flex flex-col gap-8 w-full">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.12)' }}
              className="flex items-center bg-white rounded-xl overflow-hidden shadow-md group transition-transform duration-200 cursor-pointer relative border-l-8 border-gradient-to-b from-blue-500 via-green-400 to-yellow-400"
              style={{ borderImage: 'linear-gradient(to bottom, #3b82f6, #22d3ee, #facc15) 1' }}
            >
              <div className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 ml-6 mr-8 rounded-full bg-gradient-to-br from-blue-100 via-green-100 to-yellow-100 shadow">
                {reason.icon}
              </div>
              <div className="flex-1 py-7 pr-7 flex flex-col justify-center">
                <h3 className="font-bold text-xl text-blue-900 mb-2">{reason.title}</h3>
                <p className="text-gray-700 text-base">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 