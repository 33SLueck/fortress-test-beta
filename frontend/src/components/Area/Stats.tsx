import React from 'react';

interface Stat {
  label: string;
  value: string | number;
}

interface StatsProps {
  stats: Stat[];
}

const Stats: React.FC<StatsProps> = ({ stats }) => (
  <section className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 py-12 bg-neutral-100 dark:bg-neutral-800 rounded-2xl shadow mb-8">
    <div className="flex flex-wrap justify-center gap-8 text-center">
      {stats.map((s, i) => (
        <div key={i} className="p-4 min-w-[160px] flex-1">
          <div className="text-4xl font-bold text-blue-700 dark:text-blue-300 mb-2">
            {s.value}
          </div>
          <div className="text-lg text-neutral-700 dark:text-neutral-300">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
