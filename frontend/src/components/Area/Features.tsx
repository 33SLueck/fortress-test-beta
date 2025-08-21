import React from 'react';

import * as SimpleIcons from 'react-icons/si';
import * as FontAwesome from 'react-icons/fa';

interface Feature {
  title: string;
  description: string;
  icon?: string; // z.B. "SiGithub"
}

interface FeaturesProps {
  features: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => (
  <section className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 py-16 bg-white dark:bg-neutral-900 rounded-2xl shadow mb-8">
    <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((f, i) => {
        let Icon: React.ComponentType<{ className?: string }> | undefined;
        if (f.icon?.startsWith('Si')) {
          Icon = (
            SimpleIcons as unknown as Record<
              string,
              React.ComponentType<{ className?: string }>
            >
          )[f.icon];
        } else if (f.icon?.startsWith('Fa')) {
          Icon = (
            FontAwesome as unknown as Record<
              string,
              React.ComponentType<{ className?: string }>
            >
          )[f.icon];
        }
        return (
          <div
            key={i}
            className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-xl shadow flex flex-col items-center"
          >
            {Icon && <Icon className="h-8 w-8 mb-2" />}
            <h3 className="text-xl font-semibold mb-2 text-center">
              {f.title}
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 text-center">
              {f.description}
            </p>
          </div>
        );
      })}
    </div>
  </section>
);

export default Features;
