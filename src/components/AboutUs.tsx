import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-12 md:py-20 bg-warmSection">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-12">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[45%_55%] gap-y-8 lg:gap-y-0 lg:gap-x-[40px] items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div
              className="relative inline-block bg-white shadow-[0_8px_30px_rgba(0,0,0,0.15)] rotate-[-4deg] w-full max-w-[420px]"
              style={{ padding: '12px 12px 40px 12px' }}
            >
              <div className="h-[480px] w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80"
                alt="Our story couple"
                  className="w-full h-full object-cover"
              />
            </div>
              <div
                className="absolute left-0 right-0 bottom-4 text-center italic"
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  color: '#8B7355',
                  fontSize: '1.3rem',
                }}
              >
                Capturing Life, One Frame at a Time
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-textPrimary"
          >
            <h3
              className="mb-2 leading-none"
              style={{
                fontFamily: "'Dancing Script', cursive",
                color: '#C9A96E',
                fontSize: '2rem',
              }}
            >
              Hey there, We are Capture Life!
            </h3>
            <div
              className="uppercase font-poppins text-[#8B7355] tracking-[3px] mb-5"
              style={{ fontSize: '0.85rem' }}
            >
              PHOTOGRAPHER | STORYTELLER | ARTIST
            </div>
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