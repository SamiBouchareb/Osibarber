import React from 'react';
import { motion } from 'framer-motion';
import * as Fa from 'react-icons/fa6';
import * as Ri from 'react-icons/ri';
import * as Gi from 'react-icons/gi';
import * as Md from 'react-icons/md';
import * as Tb from 'react-icons/tb';
import * as Hi from 'react-icons/hi2';
import * as Bs from 'react-icons/bs';

interface IconProps {
  type: string;
  isHovered: boolean;
}

const iconMap: { [key: string]: React.ComponentType } = {
  haircut: Fa.FaScissors,
  child: Md.MdChildCare,
  fade: Ri.RiScissorsFill,
  edgar: Fa.FaUser,
  beard: Gi.GiBeard,
  beardTrim: Gi.GiRazor,
  eyebrows: Hi.HiMiniEye,
  waxing: Bs.BsStars,
};

export const AnimatedServiceIcon: React.FC<IconProps> = ({ type, isHovered }) => {
  const Icon = iconMap[type] || Fa.FaScissors;

  return (
    <div className="relative w-12 h-12">
      {/* Glowing background */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: isHovered ? 1.2 : 1, 
          opacity: isHovered ? 0.5 : 0.2 
        }}
        className="absolute inset-0 bg-red-500/20 rounded-full blur-xl"
      />

      {/* Icon container */}
      <motion.div
        initial={{ scale: 0.8, rotate: -30 }}
        animate={{ 
          scale: isHovered ? 1.1 : 1,
          rotate: isHovered ? 0 : -30
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <Icon className="w-6 h-6 text-red-500" />
      </motion.div>

      {/* Particle effects */}
      {isHovered && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                x: [0, (Math.random() - 0.5) * 50],
                y: [0, (Math.random() - 0.5) * 50],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              className="absolute w-1 h-1 bg-red-500 rounded-full"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};
