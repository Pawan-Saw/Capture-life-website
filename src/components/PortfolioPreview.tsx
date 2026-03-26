import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PortfolioPreview = () => {
  const photos = [
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1533106418986-963d5f8f2b7f?auto=format&fit=crop&w=1000&q=80',
  ];

  const heights = ['380px', '280px', '320px', '300px', '360px', '260px'];

  return (
    <section id="portfolio" className="w-full py-12 md:py-16" style={{ backgroundColor: '#EFE7DC' }}>
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-playfair text-center text-[#2C2C2C] mb-8 tracking-wider"
        >
          Portfolio Preview
        </motion.h2>

        <div className="relative overflow-hidden rounded-3xl border border-[#D8C8B5] shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-[#F5F1EB] px-6 py-8 columns-3 [column-gap:16px]">
          {photos.slice(0, 6).map((src, idx) => (
            <motion.div
              key={src}
              className="relative mb-4"
              style={{ breakInside: 'avoid' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <img
                src={src}
                alt={`Portfolio ${idx + 1}`}
                className="w-full rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.10)]"
                style={{ height: heights[idx], objectFit: 'cover' }}
              />
              <div className="absolute inset-0 rounded-[12px] bg-black/0 transition-colors duration-300 ease-in-out hover:bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                <span
                  className="text-[#C9A96E] text-base tracking-[2px] uppercase font-poppins"
                >
                  View Gallery
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-textSecondary font-poppins text-base sm:text-lg md:text-xl">
            Swipe through our favorite romantic frames in a continuous premium showcase.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/gallery"
            className="bg-accent text-white px-8 md:px-10 py-3 md:py-4 rounded-[30px] font-poppins font-semibold text-base md:text-lg shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition duration-300"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;