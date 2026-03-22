import { motion } from 'framer-motion';

const PortfolioPreview = () => {
  const photos = [
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1533106418986-963d5f8f2b7f?auto=format&fit=crop&w=1000&q=80',
  ];

  // Duplicate photos for seamless loop
  const carouselPhotos = [...photos, ...photos];

  return (
    <section id="portfolio" className="w-full py-12 md:py-16" style={{ backgroundColor: '#EFE7DC' }}>
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-playfair text-center text-[#2C2C2C] mb-8 tracking-wider"
        >
          Portfolio Preview
        </motion.h2>

        <div className="relative overflow-hidden rounded-3xl border border-[#D8C8B5] shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-[#F5F1EB]">
          <motion.div
            className="flex h-72 md:h-80"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
            style={{ width: `${carouselPhotos.length * 50}%` }}
          >
            {carouselPhotos.map((src, idx) => (
              <motion.div
                key={idx}
                className="relative flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 h-full p-2"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.35 }}
              >
                <img
                  src={src}
                  alt={`Portfolio ${idx + 1}`}
                  className="w-full h-full object-cover rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.1)]"
                />
                <div className="absolute inset-0 rounded-2xl bg-black/0 hover:bg-black/20 transition duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-textSecondary font-poppins text-base sm:text-lg md:text-xl">
            Swipe through our favorite romantic frames in a continuous premium showcase.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;