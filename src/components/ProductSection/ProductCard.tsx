import React from 'react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  name: string;
  description: string;
  features: string[];
  image: string;
  price: string;
  holdStrength: number;
  shine: number;
  isReversed?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  features,
  image,
  price,
  holdStrength,
  shine,
  isReversed = false,
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className={`flex flex-col md:flex-row ${isReversed ? 'md:flex-row-reverse' : ''} gap-8 md:gap-12 items-center`}
    >
      {/* Product Image */}
      <div className="w-full md:w-1/2">
        <div className="group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
          
          {/* Price Tag */}
          <div className="absolute top-4 right-4">
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <span className="text-white font-medium">{price}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="w-full md:w-1/2 space-y-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{name}</h3>
          <p className="text-white/70 text-lg leading-relaxed">{description}</p>
        </div>

        {/* Strength and Shine Indicators */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-white/80 text-sm">Halt</span>
              <span className="text-white/60 text-sm">{holdStrength}/5</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-500"
                style={{ width: `${(holdStrength / 5) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-white/80 text-sm">Glanz</span>
              <span className="text-white/60 text-sm">{shine}/5</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-500"
                style={{ width: `${(shine / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <h4 className="text-lg font-semibold text-white mb-4">Eigenschaften</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-white/70">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
