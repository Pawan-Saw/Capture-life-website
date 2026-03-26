import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null);

  const slides = useMemo(
    () => [
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80',
    ],
    []
  );

  const [activeSlide, setActiveSlide] = useState(0);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveSlide((v) => (v + 1) % slides.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, [slides.length]);

  useEffect(() => {
    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        const el = heroRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const progress = Math.min(
          1,
          Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight + rect.height))
        );
        setParallaxY((1 - progress) * 12);
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <section
        id="home"
        ref={heroRef}
        className="w-full h-[100vh] bg-warmBg relative overflow-hidden"
      >
      {/* Background slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((src, idx) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: idx === activeSlide ? 1 : 0 }}
          >
            <img
              src={src}
              alt="Hero background"
              className="w-full h-full object-cover"
              style={{
                transform: `translateY(${parallaxY}px) scale(1.06)`,
                willChange: 'transform',
              }}
            />
          </div>
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10" style={{ background: 'rgba(0,0,0,0.60)' }} />

      <div className="relative z-20 w-full h-full flex items-center justify-center">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center"
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-playfair text-white mb-4 tracking-wider"
              style={{ textShadow: '0 2px 18px rgba(0,0,0,0.45)' }}
            >
              Capturing Your Beautiful Moments
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-poppins text-white/80 mb-8 tracking-wider">
              Emotionally rich wedding stories crafted with grace and open light.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              onClick={() => {
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="border-2 border-[#C9A96E] bg-transparent text-white px-10 py-3.5 rounded-full font-poppins font-semibold text-base sm:text-lg shadow-none transition-all duration-300 hover:bg-[#C9A96E] hover:text-white"
            >
              Book Your Shoot
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute left-0 right-0 bottom-20 z-30 flex justify-center">
        <div className="flex gap-2 rounded-full bg-black/10 px-4 py-2 backdrop-blur-sm">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className="h-2.5 w-2.5 rounded-full transition-all duration-300"
              style={{
                background: idx === activeSlide ? '#C9A96E' : 'rgba(255,255,255,0.55)',
                transform: idx === activeSlide ? 'scale(1.2)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Scroll-down arrow */}
      <div className="absolute left-0 right-0 bottom-6 z-30 flex justify-center">
        <button
          type="button"
          onClick={() =>
            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
          aria-label="Scroll down"
          className="w-11 h-11 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm flex items-center justify-center transition hover:bg-white/15"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 16.5L5 9.5"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 16.5L19 9.5"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      </section>
    </>
  );
};

export default Hero;