import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100vh] flex flex-col justify-center">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 flex flex-col items-start mt-40 mr-20 ml-20">
        <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
          Lorem Ipsum is simply<br />Lorem Ipsum is simply
        </h1>
        <p className="text-white text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-10 py-4 text-lg rounded-full shadow-lg transition">GET START</button>
      </div>
      <div className="relative z-10 w-full bg-blue-900 bg-opacity-80 py-20 flex flex-col md:flex-row justify-center items-center gap-12 mt-auto">
        <div className="text-center px-8">
          <div className="text-6xl md:text-7xl font-bold text-white">500+</div>
          <div className="text-white text-2xl mt-3">Clients</div>
        </div>
        <div className="border-l border-white h-16 hidden md:block"></div>
        <div className="text-center px-8">
          <div className="text-6xl md:text-7xl font-bold text-white">10,000</div>
          <div className="text-white text-2xl mt-3">Projects Done</div>
        </div>
        <div className="border-l border-white h-16 hidden md:block"></div>
        <div className="text-center px-8">
          <div className="text-6xl md:text-7xl font-bold text-white">100%</div>
          <div className="text-white text-2xl mt-3">Focused on result</div>
        </div>
      </div>
    </section>
  );
} 