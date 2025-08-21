import React from 'react';

interface CtaProps {
  headline: string;
  buttonText: string;
  onClick?: () => void;
}

const Cta: React.FC<CtaProps> = ({ headline, buttonText, onClick }) => (
  <section className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 py-16 bg-gradient-to-r from-emerald-400 to-blue-500 dark:from-emerald-700 dark:to-blue-800 shadow text-center mb-8">
    <h2 className="text-3xl font-bold mb-6 text-white">{headline}</h2>
    <button
      className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl text-xl shadow hover:bg-blue-100 transition-colors"
      onClick={onClick}
    >
      {buttonText}
    </button>
  </section>
);

export default Cta;
