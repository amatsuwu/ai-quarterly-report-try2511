import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  count: number;
}

const StarRating: React.FC<StarRatingProps> = ({ count }) => {
  if (count === 0) {
    return (
        <div className="flex space-x-1 text-brand-primary font-bold text-xl mb-3">
             ?????
        </div>
    )
  }

  return (
    <div className="flex space-x-1 mb-3">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFull = star <= Math.floor(count);
        const isHalf = star === Math.ceil(count) && !Number.isInteger(count);
        
        return (
          <div key={star} className="relative">
             <Star 
                size={20} 
                className={`${isFull ? 'fill-red-600 text-red-600' : 'text-red-600'}`} 
                fill={isFull ? "currentColor" : "none"}
             />
             {isHalf && (
                 <div className="absolute top-0 left-0 overflow-hidden w-[50%]">
                     <Star size={20} className="fill-red-600 text-red-600" />
                 </div>
             )}
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;