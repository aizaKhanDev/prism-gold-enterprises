'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const slides = [
  {
    id: 1,
    image: '/images/hero3.png',
    title: 'Discover New Opportunities',
    description: 'Expand your business horizons with our innovative solutions and expert guidance.',
    stats: [
      { label: 'Projects Completed', value: '200+' },
      { label: 'Countries Served', value: '25+' },
      { label: 'Awards Won', value: '10+' },
    ],
  },
  {
    id: 2,
    image: '/images/hero1.jpg',
    title: 'Your Success, Our Mission',
    description: 'Partner with us for a brighter, more secure business future.',
    stats: [
      { label: 'Clients Worldwide', value: '1500+' },
      { label: 'Growth Rate', value: '120%' },
      { label: 'Support 24/7', value: 'Yes' },
    ],
  }
];

export default function HeroSlider2() {
  return (
    <Swiper
      loop={true}
      autoplay={{ delay: 4000 }}
      modules={[Autoplay]}
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <section className="relative w-full h-[100vh] flex flex-col justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40 z-10 pointer-events-none" />
            <div className="absolute inset-0 min-h-screen">
              <Image
                src={slide.image}
                alt="Hero Background"
                fill
                priority
                className={`object-cover object-center w-full h-full rounded-b-3xl${slide.image === '/images/hero3.png' ? ' -scale-x-100' : ''}${slide.image === '/images/hero1.jpg' ? ' -scale-x-100' : ''}`}
                quality={100}
              />
            </div>
            <div className="relative z-20 w-full px-6 md:px-16 xl:px-24 py-14 mt-60 flex flex-col gap-8 animate-fade-in">
              <div className="flex-1 max-w-7xl">
                <div className="uppercase text-green-300 font-bold tracking-widest text-base mb-4">Empowering Growth</div>
                <div className="relative mb-2">
                  <h1 className="text-white text-5xl md:text-7xl xl:text-8xl font-extrabold leading-tight whitespace-pre-line font-sans">
                    {slide.title}
                  </h1>
                  <div className="absolute -inset-x-4 -top-4 h-16 rounded-full blur-2xl opacity-60 bg-gradient-to-r from-green-400 via-blue-400 to-teal-400 animate-glow" />
                </div>
                <span className="block w-16 h-1 mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 rounded-full"></span>
                <p className="text-white/90 text-xl md:text-2xl mb-4 max-w-4xl font-light font-sans tracking-wide">
                  {slide.description}
                </p>
                <div className="text-blue-200 text-lg md:text-xl mb-12 font-medium max-w-3xl">We help you achieve more, faster, and smarter.</div>
                <div className="mt-10">
                  <button className="relative px-16 py-6 text-2xl font-extrabold rounded-full shadow-2xl bg-white/10 border-4 border-transparent bg-clip-padding backdrop-blur-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(0,255,255,0.25)] hover:border-blue-400/60 group animate-float">
                    <span className="bg-gradient-to-r from-green-400 via-blue-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
                      LEARN MORE
                    </span>
                    <span className="inline-block ml-4 align-middle animate-bounce-x">
                      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-blue-300 group-hover:text-green-400 transition">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <span className="absolute left-4 top-2 w-2/3 h-2 rounded-full bg-white/40 blur-md opacity-60 pointer-events-none"></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="relative z-10 w-full py-8 flex flex-col md:flex-row justify-center items-center gap-12 mt-auto">
              <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>
              <div className="relative z-10 w-full flex flex-col md:flex-row justify-center items-center gap-12 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
                  {slide.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="text-center"
                    >
                      <div
                        className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 text-white"
                        style={{ letterSpacing: '2px', fontFamily: 'Poppins, Arial, sans-serif' }}
                      >
                        {stat.value}
                      </div>
                      <div
                        className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide"
                        style={{ fontFamily: 'Poppins, Arial, sans-serif' }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
} 