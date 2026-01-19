import React from 'react';
import SectionCard from './SectionCard';
import { SECTIONS } from '../constants';

const EngineeringPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4 tracking-tight">
          AI在工程上的應用介紹
        </h1>
        <p className="text-xl text-brand-secondary font-medium tracking-wide">
          你工地的最佳幫手
        </p>
      </div>

      {/* Render all sections from constants */}
      <div className="flex flex-col gap-8">
        {SECTIONS.map((section) => (
          <SectionCard key={section.id} data={section} />
        ))}
      </div>
    </div>
  );
};

export default EngineeringPage;