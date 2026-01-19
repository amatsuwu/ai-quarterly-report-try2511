import React from 'react';
import { SectionData } from '../types';
import StarRating from './StarRating';
import { Lightbulb } from 'lucide-react';

interface SectionCardProps {
  data: SectionData;
}

const SectionCard: React.FC<SectionCardProps> = ({ data }) => {
  // Helper to render specific image placeholders based on ID since we don't have the assets
  const getImage = (id: string) => {
     switch(id) {
         case 'autocad': return "https://picsum.photos/seed/autocad/1200/600";
         case 'doxel': return "https://picsum.photos/seed/doxel/1200/600";
         case 'bimgo': return "https://picsum.photos/seed/bimgo/1200/600";
         case 'm5': return "https://picsum.photos/seed/m5/1200/600";
         default: return "https://picsum.photos/1200/600";
     }
  }

  return (
    <div className="mb-24 last:mb-12">
      {/* Header Tag */}
      <div className="inline-block px-6 py-2 rounded-full bg-brand-secondary/50 text-red-900 font-medium text-sm mb-6 shadow-sm">
        {data.tag}
      </div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-8 border-l-4 border-brand-primary pl-4">
        {data.title}
      </h2>

      {/* Main Image */}
      <div className="w-full aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg mb-8 border-4 border-white">
        <img 
            src={getImage(data.id)} 
            alt={data.imageAlt} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* "Why You Need This" Box */}
      <div className="bg-brand-accent rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 mb-12 shadow-inner border border-red-100">
        <div className="flex-shrink-0">
           <div className="bg-yellow-200 p-3 rounded-full shadow-md w-16 h-16 flex items-center justify-center mx-auto md:mx-0">
             <Lightbulb className="text-yellow-700 w-8 h-8" fill="currentColor" />
           </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-gray-800 mb-3">{data.whyTitle}</h3>
          <ul className="space-y-2">
            {data.whyPoints.map((point, idx) => (
              <li key={idx} className="text-gray-700 text-base leading-relaxed pl-4 relative">
                 <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-brand-primary rounded-full"></span>
                 {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 3-Column Ratings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Usability */}
        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-brand-secondary h-full flex flex-col">
          <h4 className="text-xl font-bold text-brand-primary mb-2">易用性</h4>
          <StarRating count={data.ratings.usability.stars} />
          <p className="text-gray-600 text-sm leading-relaxed flex-grow">
            {data.ratings.usability.description}
          </p>
        </div>

        {/* Versatility */}
        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-brand-secondary h-full flex flex-col">
          <h4 className="text-xl font-bold text-brand-primary mb-2">泛用性</h4>
          <StarRating count={data.ratings.versatility.stars} />
          <p className="text-gray-600 text-sm leading-relaxed flex-grow">
            {data.ratings.versatility.description}
          </p>
        </div>

        {/* Practicality */}
        <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-brand-secondary h-full flex flex-col">
          <h4 className="text-xl font-bold text-brand-primary mb-2">實用性</h4>
          <StarRating count={data.ratings.practicality.stars} />
          <p className="text-gray-600 text-sm leading-relaxed flex-grow">
            {data.ratings.practicality.description}
          </p>
        </div>

      </div>
    </div>
  );
};

export default SectionCard;