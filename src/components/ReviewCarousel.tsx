import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedRating } from './AnimatedRating';
import { AiFillStar } from 'react-icons/ai';

interface Review {
  author: string;
  role?: string;
  content: string;
  date: string;
}

const reviews: Review[] = [
  {
    author: "Ammar Sarakebi",
    role: "Local Guide",
    content: "Ich war bei Osi und muss sagen: Absolut begeistert! Er hat sich richtig Zeit genommen, ist auf all meine Wünsche eingegangen und hat ein Ergebnis gezaubert, das einfach perfekt ist.",
    date: "vor einer Woche"
  },
  {
    author: "Dennis Heeren",
    content: "Drei Jahre wohne ich schon in Uhlenhorst und solange bin ich auch schon bei Osis Barbier! Tolle Gastgeber & sehr guter Service ",
    date: "vor 4 Monaten"
  },
  {
    author: "Babak P",
    content: "Ich bin absolut begeistert von meinem Friseur! Er ist nicht nur äußerst professionell, sondern auch sehr nett und freundlich. Man fühlt sich sofort wohl und gut aufgehoben.",
    date: "vor 2 Monaten"
  },
  {
    author: "Kandor the master",
    role: "Local Guide",
    content: "Ich war bisher nur einmal da aber mir hat auf Anhieb gefallen. Osi weiß was er da tut - er wiederspricht auch Mal einfach weil er sich die Haare genau anguckt.",
    date: "vor 4 Monaten"
  },
  {
    author: "Max H.",
    content: "Abgesehen davon, dass er präzise schneidet und das sogar schneller und qualitativ besser als andere Frisöre, ist er auch mega sympathisch und lustig drauf!",
    date: "vor einem Monat"
  },
  {
    author: "Mustafa Kaya",
    content: "Der Mann ist unglaublich. Nicht nur gibt er mir die Ratschläge die ich von Ihm verlange, sondern tut er jedes mal nochmal etwas drauf.",
    date: "vor 5 Monaten"
  },
  {
    author: "Anton Koehler",
    content: "Bei einem anderen Frisör wurden meine Haare komplett verschnitten. Als ich dann zu OSI kam wurde ich mit offenen Armen empfangen.",
    date: "vor 5 Monaten"
  },
  {
    author: "Leon Weber",
    content: "Bester Barbier in Hamburg! Die Qualität ist erstklassig und die Atmosphäre ist super entspannt. Kann ich nur weiterempfehlen.",
    date: "vor 3 Monaten"
  },
  {
    author: "Michael Schmidt",
    role: "Stammkunde",
    content: "Seit Jahren Stammkunde und jedes Mal aufs Neue begeistert. Osi versteht sein Handwerk und nimmt sich Zeit für jeden Kunden.",
    date: "vor 2 Wochen"
  },
  {
    author: "Thomas Müller",
    content: "Perfekter Haarschnitt, entspannte Atmosphäre und faire Preise. Besser geht's nicht!",
    date: "vor 3 Wochen"
  }
];

const doubledReviews = [...reviews, ...reviews];

export const ReviewCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section className="relative py-20 overflow-hidden bg-[#0a0a0a]">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-red-500/5 via-transparent to-transparent"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-500/20 rounded-full animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="relative mb-16">
          {/* Central Rating Display */}
          <div className="flex flex-col items-center justify-center mb-8">
            {/* Main Rating */}
            <div className="relative w-full max-w-sm">
              <AnimatedRating />
            </div>

            {/* Decorative Lines */}
            <div className="w-full max-w-md relative mt-8">
              <div className="absolute left-0 top-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
              <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-px h-8 bg-gradient-to-b from-red-500/30 to-transparent"></div>
            </div>
          </div>

          {/* Section Title with Premium Styling */}
          <div className="text-center relative">
            {/* Decorative Background Text */}
            <div className="absolute inset-0 flex items-center justify-center -mt-2 select-none pointer-events-none">
              <span className="text-6xl font-bold text-white/[0.02] tracking-wider"></span>
            </div>
            
            {/* Main Title */}
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 
                bg-clip-text text-transparent">
                Was unsere Kunden sagen
              </h2>
              <div className="mt-4 max-w-2xl mx-auto">
                <p className="text-white/60 text-sm leading-relaxed">
                  Osi Barbier steht für Qualität und Kundenzufriedenheit. 
                  Unsere Bewertungen spiegeln unser Engagement für erstklassigen Service wider.
                </p>
              </div>
            </div>
          </div>

          {/* Google Badge */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-12 md:-top-12">
            <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 
              border border-white/10 transform hover:scale-105 transition-all duration-300">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google"
                className="w-4 h-4"
              />
              <span className="text-white/80 text-sm">Google Reviews</span>
            </div>
          </div>
        </div>

        {/* Mobile Version (Only shows on small screens) */}
        <div className="md:hidden">
          <motion.div 
            className="w-full max-w-md mx-auto"
            onClick={handleNextReview}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-zinc-900/80 to-black/80 backdrop-blur-xl 
                  border border-white/10 rounded-2xl p-6 shadow-xl cursor-pointer
                  active:scale-95 transition-transform duration-150"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{reviews[currentIndex].author}</h3>
                      {reviews[currentIndex].role && (
                        <p className="text-zinc-400 text-sm">{reviews[currentIndex].role}</p>
                      )}
                    </div>
                    <span className="text-zinc-500 text-sm">{reviews[currentIndex].date}</span>
                  </div>
                  
                  <p className="text-zinc-300 leading-relaxed">
                    {reviews[currentIndex].content}
                  </p>

                  <p className="text-zinc-500 text-sm text-center mt-4">
                    Tippen für nächste Bewertung
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Desktop/Tablet Version (Hidden on mobile) */}
        <div className="hidden md:block relative w-full overflow-hidden">
          {/* Reviews Track */}
          <div className="flex animate-scroll-reviews">
            {doubledReviews.map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] mx-3"
              >
                <div className="h-full bg-black/40 backdrop-blur-md rounded-xl border border-white/10 p-6 
                  hover:border-red-500/20 transition-all duration-300 hover:scale-[1.02] group">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1 group-hover:text-red-500 
                        transition-colors duration-300">
                        {review.author}
                      </h3>
                      {review.role && (
                        <div className="text-xs text-white/60">
                          {review.role}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <AiFillStar key={i} className="text-red-500 w-3 h-3" />
                      ))}
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-sm text-white/80 leading-relaxed line-clamp-4">
                      {review.content}
                    </p>
                  </div>

                  <div className="text-xs text-white/60">
                    {review.date}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent pointer-events-none"></div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float-particle {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px) scale(1.5);
            opacity: 0.4;
          }
        }

        .animate-float-particle {
          animation: float-particle 5s ease-in-out infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-reviews {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll-reviews:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
