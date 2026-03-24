import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-12 md:py-20 bg-warmSection">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-12">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] bg-cardBg">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80"
                alt="Our story couple"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/20 to-black/30"></div>
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white font-playfair text-xl md:text-2xl">
                Our Story
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-textPrimary"
          >
            <h2 className="text-2xl md:text-4xl font-playfair mb-4 md:mb-6 tracking-wider text-textPrimary">
              Crafting Timeless Memories
            </h2>
            <p className="text-textSecondary font-poppins text-base md:text-lg mb-4 md:mb-6 leading-relaxed">
              For over a decade, we've been capturing the most precious moments in life with unparalleled artistry and sophistication. Our luxury wedding photography brings out honest emotion and serene elegance.
            </p>
            <p className="text-textSecondary font-poppins text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              Each experience is tailored and intimate, with soft cinematic tones and warm storytelling for couples who want a soulful legacy.
            </p>
            <button className="bg-accent text-white px-6 md:px-8 py-3 rounded-[30px] font-poppins font-semibold text-sm md:text-base hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition duration-300">
              Learn More About Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;