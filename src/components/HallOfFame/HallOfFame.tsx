import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView, useAnimation, useScroll, useTransform } from 'framer-motion';

// Import images
import amar from '../../assets/amar.png';
import gruppe from '../../assets/Gruppe.jpg';
import koch from '../../assets/Koch.png';
import personen from '../../assets/2perosnen.png';

interface ImageData {
  id: number;
  src: string;
  title: string;
  description: string;
  position: string;
}

const images: ImageData[] = [
  {
    id: 1,
    src: amar,
    title: "Style Icon",
    description: "Trendsetter und Stilikone - unsere Kunden strahlen mit Selbstbewusstsein",
    position: "Influencer & Model"
  },
  {
    id: 2,
    src: gruppe,
    title: "Community Vibes",
    description: "Gemeinsam erschaffen wir mehr als nur Looks - wir kreieren Momente",
    position: "Lifestyle Creators"
  },
  {
    id: 3,
    src: koch,
    title: "Professional Touch",
    description: "Präzision trifft auf Persönlichkeit - jeder Schnitt erzählt eine Geschichte",
    position: "Fashion Ambassador"
  },
  {
    id: 4,
    src: personen,
    title: "Perfect Match",
    description: "Wo Stil auf Freundschaft trifft - das ist Osi Barbier",
    position: "Style Enthusiasts"
  }
];

const ParallaxText: React.FC<{ children: React.ReactNode; baseVelocity?: number }> = ({
  children,
  baseVelocity = 5,
}) => {
  const [loopNum, setLoopNum] = useState(0);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const animate = () => {
      const containerWidth = containerRef.current?.offsetWidth || 0;
      
      controls.start({
        x: [-containerWidth, 0],
        transition: {
          duration: 20 / Math.abs(baseVelocity),
          repeat: Infinity,
          ease: "linear",
        },
      });
      
      setLoopNum((prev) => prev + 1);
    };
    
    timeoutId = setTimeout(animate, 0);
    return () => clearTimeout(timeoutId);
  }, [baseVelocity, controls]);

  return (
    <div ref={containerRef} className="overflow-hidden whitespace-nowrap">
      <motion.div animate={controls} className="inline-block">
        {children}
      </motion.div>
    </div>
  );
};

export const HallOfFame: React.FC = () => {
  const [activeImage, setActiveImage] = useState<number>(1);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20%" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const imageVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="hallOfFame"
      className="relative py-24 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Refined Background Effects */}
      <div className="absolute inset-0">
        {/* Elegant gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black opacity-80" />
        
        {/* Subtle animated accent */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 20%, rgba(239,68,68,0.08), transparent 35%)',
              'radial-gradient(circle at 80% 80%, rgba(239,68,68,0.08), transparent 35%)',
              'radial-gradient(circle at 20% 20%, rgba(239,68,68,0.08), transparent 35%)'
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Fine grid overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '35px 35px'
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-4 relative z-10"
      >
        {/* Refined Header Section */}
        <div className="text-center mb-20 relative">
          {/* Elegant vertical accent */}
          <motion.div
            className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-red-500/30 to-transparent"
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              scaleY: [0.9, 1.1, 0.9]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Title Container */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative py-8"
          >
            {/* Refined 3D text effect */}
            <div className="relative">
              {/* Subtle shadow layers */}
              <h2 className="absolute inset-0 text-5xl md:text-6xl font-bold text-red-500/5 blur-lg transform translate-y-1">
                Hall of Fame
              </h2>
              
              {/* Main title */}
              <h2 className="relative text-5xl md:text-6xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white
                               hover:from-red-400 hover:via-white hover:to-red-400 transition-all duration-500">
                  Hall of Fame
                </span>
              </h2>
            </div>

            {/* Elegant underline */}
            <div className="relative h-px w-32 mx-auto mb-8">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
              />
              {/* Subtle glow */}
              <motion.div
                className="absolute inset-0 blur-sm bg-red-500/20"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          {/* Refined Description Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative max-w-3xl mx-auto"
          >
            {/* Elegant glass card */}
            <div className="relative rounded-xl p-8 backdrop-blur-sm 
                          bg-gradient-to-b from-white/5 to-transparent
                          border border-white/5">
              {/* Subtle accent border */}
              <div className="absolute inset-px rounded-xl bg-gradient-to-r from-red-500/10 via-white/5 to-red-500/10 opacity-0 
                            group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Refined typography */}
              <p className="relative text-base md:text-lg text-gray-300 leading-relaxed font-light tracking-wide">
                In unserer „<span className="text-white font-medium hover:text-red-400 transition-colors duration-300">Hall of Fame</span>" 
                nehmen wir dich mit auf eine Reise durch die einzigartige Welt derer, die 
                <span className="text-red-400 hover:text-white transition-colors duration-300"> Osi Barbier </span> 
                zu etwas ganz Besonderem gemacht haben – unsere 
                <span className="text-white font-medium hover:text-red-400 transition-colors duration-300"> Influencer-Familie</span>. 
                <br/><br/>
                Hier feiern wir nicht nur Styles, sondern vor allem Persönlichkeiten, die unseren Barbiershop 
                mit ihrer Kreativität und ihrem Charisma bereichert haben.
              </p>

              {/* Elegant corner accents */}
              <motion.div
                className="absolute top-0 left-0 w-12 h-12 border-l border-t border-red-500/20 rounded-tl-xl"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-12 h-12 border-r border-b border-red-500/20 rounded-br-xl"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Refined section transition */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

        {/* Premium Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative mt-12">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              variants={imageVariants}
              className={`relative group ${activeImage === image.id ? 'z-10' : 'z-0'}`}
              onHoverStart={() => {
                setActiveImage(image.id);
                setIsHovered(true);
              }}
              onHoverEnd={() => setIsHovered(false)}
            >
              {/* Premium Card Container */}
              <motion.div
                className="relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Premium glass effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 group-hover:opacity-100 opacity-70 transition-all duration-500" />
                
                {/* Image with Premium Effects */}
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{ willChange: 'transform' }}
                  />
                </motion.div>

                {/* Premium Content Overlay */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <span className="text-red-400 text-sm font-medium mb-2 block">
                      {image.position}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {image.title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {image.description}
                    </p>
                  </motion.div>
                </motion.div>

                {/* Premium Hover Effects */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(to bottom right, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05))',
                  }}
                />

                {/* Decorative Corner Accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-red-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-red-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </motion.div>

              {/* Premium Glow Effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10"
                animate={{
                  scale: activeImage === image.id ? [1, 1.2, 1] : 1,
                  opacity: activeImage === image.id ? [0, 0.3, 0] : 0
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Premium Package Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto px-4 py-16 relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Premium glass card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-lg p-8 border border-red-500/10">
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-purple-500/20 to-red-500/20 opacity-30" />
              
              {/* Content */}
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400 mb-6">
                    Osi-Paket Deluxe
                  </h3>
                  
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="flex-1">
                      <p className="text-gray-300 leading-relaxed mb-6">
                        Für unsere besonderen Gäste bieten wir eine vollkommen individuelle Erfahrung für nur{' '}
                        <span className="text-red-400 font-semibold">50 €</span>. In einem separaten Raum, 
                        ausgestattet mit einer PS5 für dein Entertainment, erlebst du nicht nur einen Haarschnitt 
                        und eine Bartformung in höchster Präzision, sondern auch ein sorgfältig gestaltetes Ambiente.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        Genieße den Komfort ohne Wartezeit.
                      </p>
                    </div>
                    
                    {/* Features list */}
                    <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-xl p-6 backdrop-blur-sm">
                      <h4 className="text-red-400 font-semibold mb-4">Highlights:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                          Separater VIP-Raum
                        </li>
                        <li className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                          PS5 Entertainment
                        </li>
                        <li className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                          Premium Haarschnitt
                        </li>
                        <li className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                          Präzise Bartformung
                        </li>
                        <li className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                          Keine Wartezeit
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Price tag */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-br from-red-500 to-red-600 px-6 py-2 rounded-full transform rotate-12 shadow-lg">
                    <span className="text-white font-bold">50 €</span>
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-transparent opacity-60 transform -rotate-45" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-red-500/10 to-transparent opacity-60 transform rotate-45" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Premium Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />
    </section>
  );
};
