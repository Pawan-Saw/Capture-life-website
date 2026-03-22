import { motion } from 'framer-motion';

const Wedding = () => {
  const weddingServices = [
    {
      title: 'Engagement Sessions',
      description: 'Intimate pre-wedding shoots that capture your love story and chemistry.',
      features: ['Cinematic lighting', 'Multiple locations', 'Edited gallery']
    },
    {
      title: 'Wedding Day Coverage',
      description: 'Full day documentation from getting ready to the last dance.',
      features: ['8+ hours coverage', 'Second photographer', 'Real-time previews']
    },
    {
      title: 'Bridal Portraits',
      description: 'Stunning portraits that highlight your beauty and elegance.',
      features: ['Professional styling', 'Multiple outfits', 'Fine art editing']
    }
  ];

  return (
    <section id="weddings" className="w-full py-12 md:py-20 bg-secondaryBg">
      <div className="w-full px-4 sm:px-6 lg:px-12">
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

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {weddingServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-cardBg rounded-xl p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-transparent hover:border-accent/40 transition duration-300"
            >
              <h3 className="text-xl md:text-2xl font-playfair text-textPrimary mb-3 md:mb-4">
                {service.title}
              </h3>
              <p className="text-textSecondary font-poppins text-sm md:text-base mb-4 md:mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="text-textSecondary font-poppins text-sm space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-accent mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <button className="bg-accent text-white px-8 md:px-10 py-3 md:py-4 rounded-[30px] font-poppins font-semibold text-base md:text-lg shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition duration-300">
            Start Planning Your Wedding Photography
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Wedding;