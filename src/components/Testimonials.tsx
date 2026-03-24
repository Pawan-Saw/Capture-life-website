import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    { name: 'Sarah & John', text: 'Absolutely stunning photos! Our wedding day captured perfectly.' },
    { name: 'Emma', text: 'The maternity shoot was magical. Highly recommend!' },
    { name: 'The Smith Family', text: 'Beautiful family portraits that we\'ll cherish forever.' },
  ];

  return (
    <section id="testimonials" className="w-full py-12 md:py-16 bg-warmSection">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-playfair text-center text-textPrimary mb-8 md:mb-12 tracking-wider"
        >
          Client Testimonials
        </motion.h2>
      </div>
      <div className="mx-auto w-full max-w-screen-2xl grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-4 sm:px-6 lg:px-12">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-cardBg p-4 md:p-6 rounded-xl border border-secondaryAccent/20 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
          >
            <p className="text-textPrimary font-poppins mb-3 md:mb-4 text-sm md:text-base">"{testimonial.text}"</p>
            <p className="text-accent font-playfair text-sm md:text-base">- {testimonial.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;