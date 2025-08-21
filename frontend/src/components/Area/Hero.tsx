import React from 'react';

interface HeroProps {
  headline: string;
  text: string;
}

const NAV_HEIGHT = 64; // px, ggf. anpassen

const Hero: React.FC<HeroProps> = ({ headline, text }) => (
  <section
    className="w-full flex flex-col justify-center items-center text-center shadow relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-emerald-900"
    style={{ minHeight: `calc(100vh - ${NAV_HEIGHT}px)` }}
  >
    {/* Grid Overlay */}
    <div
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(0,0,0,0.5) 1px, transparent 1px), ' +
          'linear-gradient(to bottom, rgba(0,0,0,0.5) 1px, transparent 1px)',
        backgroundSize: '6rem 4rem',
      }}
    />
    <div className="w-full pt-8 pb-4 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-wrap justify-center gap-3">
        <img
          src="https://img.shields.io/github/license/33SLueck/pern-fortress"
          alt="License"
          className="h-7"
        />
        <img
          src="https://img.shields.io/github/package-json/v/33SLueck/pern-fortress"
          alt="Version"
          className="h-7"
        />
        <img
          src="https://img.shields.io/github/issues/33SLueck/pern-fortress"
          alt="Issues"
          className="h-7"
        />
        <img
          src="https://img.shields.io/github/stars/33SLueck/pern-fortress?style=social"
          alt="Stars"
          className="h-7"
        />
      </div>
    </div>
    <div className="flex-1 flex flex-col justify-center items-center w-full relative z-10">
      <h1 className="text-5xl font-extrabold mb-4 text-blue-900 dark:text-white">
        {headline}
      </h1>
      <p className="text-xl text-blue-800 dark:text-blue-200 max-w-2xl mx-auto">
        {text}
      </p>
    </div>
  </section>
);

export default Hero;
