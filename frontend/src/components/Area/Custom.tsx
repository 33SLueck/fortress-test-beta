import React from 'react';

interface CustomProps {
  content: Record<string, unknown>;
}

const Custom: React.FC<CustomProps> = ({ content }) => (
  <section className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 py-12 bg-neutral-200 dark:bg-neutral-800 rounded-2xl shadow mb-8">
    {/* Render custom content here */}
    <pre className="text-sm text-neutral-800 dark:text-neutral-200 overflow-x-auto">
      {JSON.stringify(content, null, 2)}
    </pre>
  </section>
);

export default Custom;
