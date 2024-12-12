import React, { useState } from 'react';
import { AnimatedServiceIcon } from './AnimatedServiceIcon';

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  category: string;
  iconType: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  price,
  description,
  category,
  iconType,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleBooking = () => {
    window.open('https://www.treatwell.de/ort/osi-barbier-1/?utm_source=google&utm_medium=rwg&hl=de-DE&gei=mrBUZ8PqCvKExc8PgZ-D8Qc', '_blank');
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group h-full"
    >
      {/* Premium glass card */}
      <div className="relative h-full overflow-hidden rounded-2xl transition-transform duration-300 transform hover:scale-[1.02]">
        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg" />
        
        {/* Content container */}
        <div className="relative h-full p-6 backdrop-blur-sm flex flex-col justify-between">
          {/* Icon and title section */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <AnimatedServiceIcon type={iconType} isHovered={isHovered} />
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
                <span className="text-red-500 font-semibold">{price} €</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
              {description}
            </p>
          </div>

          {/* Category tag and button */}
          <div className="flex justify-between items-center mt-auto">
            <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-red-500/20 to-red-600/20 text-red-400 backdrop-blur-sm">
              {category}
            </span>
            
            <button
              onClick={handleBooking}
              className={`px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 
                text-white text-sm font-medium transition-all duration-300
                opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100
                hover:shadow-lg active:scale-95`}
            >
              Jetzt Buchen
            </button>
          </div>
        </div>
      </div>

      {/* Make entire card clickable for booking */}
      <button
        onClick={handleBooking}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        aria-label={`Buchen ${title}`}
      />
    </div>
  );
};
