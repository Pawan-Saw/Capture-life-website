import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Wedding = () => {
  return (
    <section id="weddings" className="w-full py-12 md:py-20 bg-secondaryBg">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-playfair text-textPrimary mb-4 md:mb-6 tracking-wider">
            Wedding Photography
          </h2>
          <p className="text-textSecondary font-poppins text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Every love story deserves to be told beautifully. Our wedding photography captures the raw emotions,
            intimate moments, and timeless elegance of your special day.
          </p>
        </motion.div>

        {/* Staggered / scattered photo gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-2 md:mt-6"
        >
          <div className="flex flex-row flex-nowrap justify-center items-start gap-[24px] px-[60px] py-[40px]">
            {/* Photo 1 (leftmost) */}
            <div className="w-[240px] h-[320px] mt-[60px]">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
                alt="Wedding photo 1"
                className="w-full h-full rounded-[16px] object-cover shadow-[0_8px_24px_rgba(0,0,0,0.10)] transition-transform duration-300 ease-in-out hover:scale-[1.03]"
              />
            </div>

            {/* Photo 2 */}
            <div className="w-[220px] h-[270px] mt-[10px]">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
                alt="Wedding photo 2"
                className="w-full h-full rounded-[16px] object-cover shadow-[0_8px_24px_rgba(0,0,0,0.10)] transition-transform duration-300 ease-in-out hover:scale-[1.03]"
              />
            </div>

            {/* Photo 3 */}
            <div className="w-[220px] h-[270px] mt-[40px]">
              <img
                src="https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=900&q=80"
                alt="Wedding photo 3"
                className="w-full h-full rounded-[16px] object-cover shadow-[0_8px_24px_rgba(0,0,0,0.10)] transition-transform duration-300 ease-in-out hover:scale-[1.03]"
              />
            </div>

            {/* Photo 4 (rightmost) */}
            <div className="w-[240px] h-[330px] mt-0">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"
                alt="Wedding photo 4"
                className="w-full h-full rounded-[16px] object-cover shadow-[0_8px_24px_rgba(0,0,0,0.10)] transition-transform duration-300 ease-in-out hover:scale-[1.03]"
              />
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              to="/gallery"
              className="bg-[#C9A96E] text-white px-8 md:px-12 py-3 rounded-[30px] font-poppins font-semibold text-base md:text-lg shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition duration-300"
            >
              See More →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Wedding;