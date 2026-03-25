import { motion } from 'framer-motion';

const Hero = () => {
  const cards = [
    { category: 'Weddings', size: 'col-span-1 md:col-span-2 row-span-1 md:row-span-2', textPos: 'bottom-4 md:bottom-6 left-4 md:left-6', vertical: false, image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80' },
    { category: 'Maternity', size: 'col-span-1 row-span-1', textPos: 'top-4 md:top-6 right-4 md:right-6', vertical: true, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80' },
    { category: 'Family', size: 'col-span-1 row-span-1', textPos: 'bottom-4 md:bottom-6 right-4 md:right-6', vertical: false, image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80' },
    { category: 'Portraits', size: 'col-span-1 md:col-span-2 row-span-1', textPos: 'top-4 md:top-6 left-4 md:left-6', vertical: false, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80' },
  ];

  return (
    <section id="home" className="w-full min-h-screen pt-16 bg-warmBg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-warmBg via-warmSection to-warmBg opacity-80"></div>
      <div className="relative z-10 w-full py-12">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-playfair text-textPrimary mb-4 tracking-wider">
              Capturing Your Beautiful Moments
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-poppins text-textSecondary mb-8 tracking-wider">
              Emotionally rich wedding stories crafted with grace and open light.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="bg-accent text-white px-6 sm:px-8 py-3 rounded-[30px] font-poppins font-semibold text-base sm:text-lg shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition duration-300"
            >
              Book Your Shoot
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto w-full max-w-screen-2xl grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-3 gap-2 md:gap-4 h-[60vh] md:h-[70vh] px-4 sm:px-6 lg:px-12"
          >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`relative ${card.size} bg-cardBg rounded-xl overflow-hidden cursor-pointer group shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-transparent hover:border-accent/40 transition duration-300`}
            >
              <img
                src={card.image}
                alt={`${card.category} photo`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition duration-300"></div>
              <div
                className={`absolute ${card.textPos} text-white font-bold uppercase tracking-wider font-playfair text-xl`}
                style={card.vertical ? { writingMode: 'vertical-rl', transform: 'rotate(180deg)' } : {}}
              >
                <span className="bg-black/45 px-2 py-1 rounded">{card.category}</span>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondaryAccent/40 rounded-xl transition duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </motion.div>
))}        
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-[#2C2C2C]">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;