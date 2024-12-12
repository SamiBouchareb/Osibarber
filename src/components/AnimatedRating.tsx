import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const AnimatedRating = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once triggered, disconnect the observer
          observer.disconnect();
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '50px' // Start slightly before the element comes into view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative" ref={sectionRef}>
      {/* Glowing Background Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 0.75 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-red-500/10 blur-2xl rounded-full"
      />
      
      {/* Main Rating Container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: isVisible ? 1 : 0.9, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-xl 
          border border-white/10 rounded-2xl p-6 group"
      >
        <div className="text-center">
          {/* Rating Number Animation */}
          <div className="flex items-center justify-center space-x-4 mb-2">
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-bold text-white relative"
            >
              5,0
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isVisible ? [1, 1.2, 1] : 0 }}
                transition={{ duration: 0.3, delay: 0.7 }}
                className="absolute -inset-2 bg-red-500/20 blur-xl rounded-full -z-10"
              />
            </motion.span>

            {/* Stars Container */}
            <div className="flex space-x-1">
              {[...Array(5)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ 
                    scale: isVisible ? 1 : 0, 
                    rotate: isVisible ? 0 : -180 
                  }}
                  transition={{
                    duration: 0.5,
                    delay: isVisible ? 0.8 + index * 0.15 : 0,
                    type: "spring",
                    stiffness: 200
                  }}
                  onAnimationComplete={() => {
                    if (index === 4 && isVisible) setAnimationComplete(true);
                  }}
                  className="relative"
                >
                  {/* Star Base */}
                  <svg
                    className="w-6 h-6 transform transition-transform duration-300 group-hover:scale-110"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: isVisible ? 1 : 0 }}
                      transition={{
                        duration: 0.5,
                        delay: isVisible ? 0.8 + index * 0.15 : 0,
                        ease: "easeOut"
                      }}
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      className="text-red-500 fill-current"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {/* Glowing Effect */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={animationComplete ? {
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5]
                    } : { scale: 0, opacity: 0 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.2
                    }}
                    className="absolute inset-0 bg-red-500/30 blur-md rounded-full -z-10"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Review Count */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="text-white/60 text-sm"
          >
            basierend auf{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.3, delay: 2 }}
              className="text-white font-medium"
            >
              229
            </motion.span>{" "}
            Bewertungen
          </motion.div>
        </div>

        {/* Hover Effects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
            transition-opacity duration-500"
          style={{
            background: 'radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,59,59,0.1) 0%, transparent 60%)'
          }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            e.currentTarget.style.setProperty('--x', `${x}%`);
            e.currentTarget.style.setProperty('--y', `${y}%`);
          }}
        />
      </motion.div>
    </div>
  );
};
