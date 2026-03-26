import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Absolutely stunning photos! Our wedding day captured perfectly.",
      name: "Sarah & John",
      designation: "Wedding Couple",
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      quote: "The maternity shoot was magical. Highly recommend!",
      name: "Emma",
      designation: "Maternity Client",
      photo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
      quote: "Beautiful family portraits that we'll cherish forever.",
      name: "The Smith Family",
      designation: "Family Portrait Client",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
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
            className="relative flex flex-col items-center text-center rounded-[12px] shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
            style={{ background: 'rgba(255,255,255,0.6)', padding: '32px 28px' }}
          >
            {/* Large quote mark */}
            <div
              style={{
                position: 'absolute',
                top: 20,
                left: 22,
                fontSize: '5rem',
                lineHeight: 1,
                color: '#C9A96E',
                fontFamily: 'Georgia, serif',
                pointerEvents: 'none',
                marginBottom: '-20px',
                userSelect: 'none',
              }}
            >
              "
            </div>

            {/* Profile photo */}
            <img
              src={testimonial.photo}
              alt={`${testimonial.name} profile`}
              className="w-[70px] h-[70px] rounded-full object-cover border-[3px] border-[#C9A96E] mb-3"
            />

            {/* Quote text */}
            <p
              className="font-poppins"
              style={{
                fontSize: '0.95rem',
                color: '#555',
                lineHeight: 1.7,
                textAlign: 'center',
                marginBottom: '24px',
                paddingTop: '64px',
              }}
            >
              {testimonial.quote}
            </p>

            {/* Client name */}
            <p className="font-playfair font-semibold text-[#C9A96E] text-[1rem] mb-1">
              {testimonial.name}
            </p>

            {/* Designation */}
            <p
              className="font-poppins text-[#888] text-[0.8rem] tracking-[1px] uppercase"
              style={{ margin: 0 }}
            >
              {testimonial.designation}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;