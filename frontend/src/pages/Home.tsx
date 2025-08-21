import { useEffect, useState } from 'react';
import Hero from '../components/Area/Hero';
import Features from '../components/Area/Features';
import Stats from '../components/Area/Stats';
import Cta from '../components/Area/Cta';
import Ecosystem from '../components/Area/Ecosystem';
import Custom from '../components/Area/Custom';

type Area =
  | { type: 'HERO'; content: { headline: string; text: string }; order: number }
  | {
      type: 'FEATURES';
      content: { features: { title: string; description: string }[] };
      order: number;
    }
  | {
      type: 'STATS';
      content: { stats: { label: string; value: string }[] };
      order: number;
    }
  | {
      type: 'CTA';
      content: { headline: string; buttonText: string };
      order: number;
    }
  | {
      type: 'ECOSYSTEM';
      content: { items: { name: string; description: string }[] };
      order: number;
    }
  | { type: 'CUSTOM'; content: Record<string, unknown>; order: number };

const Home = () => {
  const [areas, setAreas] = useState<Area[]>([]);

  useEffect(() => {
    fetch('/api/v1/area')
      .then((res) => res.json())
      .then((data) => {
        console.log('Area-API:', data);
        setAreas(data.data);
      });
  }, []);

  return (
    <div>
      {/* Dynamische Area-Sections */}

      {areas
        .sort((a, b) => a.order - b.order)
        .map((area, idx) => {
          switch (area.type) {
            case 'HERO':
              return <Hero key={idx} {...area.content} />;
            case 'FEATURES':
              return <Features key={idx} features={area.content.features} />;
            case 'STATS':
              return <Stats key={idx} stats={area.content.stats} />;
            case 'CTA':
              return <Cta key={idx} {...area.content} />;
            case 'ECOSYSTEM':
              return <Ecosystem key={idx} items={area.content.items} />;
            case 'CUSTOM':
              return <Custom key={idx} content={area.content} />;
            default:
              return null;
          }
        })}
    </div>
  );
};

export default Home;
